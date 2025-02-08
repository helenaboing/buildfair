// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { Test, console2 } from "forge-std/Test.sol";
import { BuildFair } from "../src/BuildFair.sol";

contract BuildFairTest is Test {
    BuildFair public buildFair;
    address public buyer;
    address public seller;
    uint256 public projectAmount;
    string public projectDetails;

    event ProjectCreated(
        uint256 indexed projectId, address indexed buyer, address indexed seller, string details
    );
    event ProjectFunded(uint256 indexed projectId, uint256 amount);
    event ProjectEnded(uint256 indexed projectId, BuildFair.ProjectStatus status);

    function setUp() public {
        buildFair = new BuildFair();
        buyer = makeAddr("buyer");
        seller = makeAddr("seller");
        projectAmount = 1 ether;
        projectDetails = "Sample construction project";

        // Fund the buyer with some ETH
        vm.deal(buyer, 10 ether);
    }

    function test_CreateProject() public {
        vm.startPrank(buyer);

        vm.expectEmit(true, true, true, true);
        emit ProjectCreated(0, buyer, seller, projectDetails);

        uint256 projectId = buildFair.createProject(seller, projectDetails);
        assertEq(projectId, 0, "First project should have ID 0");

        (
            uint256 returnedId,
            address returnedBuyer,
            address returnedSeller,
            uint256 returnedAmount,
            BuildFair.ProjectStatus returnedStatus,
            string memory returnedDetails
        ) = buildFair.getProject(projectId);

        assertEq(returnedId, projectId, "Project ID mismatch");
        assertEq(returnedBuyer, buyer, "Buyer address mismatch");
        assertEq(returnedSeller, seller, "Seller address mismatch");
        assertEq(returnedAmount, 0, "Initial amount should be 0");
        assertEq(
            uint256(returnedStatus),
            uint256(BuildFair.ProjectStatus.Created),
            "Initial status should be Created"
        );
        assertEq(returnedDetails, projectDetails, "Project details mismatch");

        vm.stopPrank();
    }

    function test_CreateProject_InvalidSeller() public {
        vm.startPrank(buyer);
        vm.expectRevert(abi.encodeWithSignature("InvalidSellerAddress()"));
        buildFair.createProject(address(0), projectDetails);
        vm.stopPrank();
    }

    function test_CreateProject_EmptyDetails() public {
        vm.startPrank(buyer);
        vm.expectRevert(abi.encodeWithSignature("EmptyDetails()"));
        buildFair.createProject(seller, "");
        vm.stopPrank();
    }

    function test_FundProject() public {
        vm.startPrank(buyer);
        uint256 projectId = buildFair.createProject(seller, projectDetails);

        vm.expectEmit(true, true, false, true);
        emit ProjectFunded(projectId, projectAmount);

        buildFair.fundProject{ value: projectAmount }(projectId);

        (,,, uint256 returnedAmount, BuildFair.ProjectStatus returnedStatus,) =
            buildFair.getProject(projectId);
        assertEq(returnedAmount, projectAmount, "Project amount mismatch");
        assertEq(
            uint256(returnedStatus),
            uint256(BuildFair.ProjectStatus.Funded),
            "Status should be Funded"
        );

        vm.stopPrank();
    }

    function test_FundProject_OnlyBuyer() public {
        // Create project as buyer
        vm.startPrank(buyer);
        uint256 projectId = buildFair.createProject(seller, projectDetails);
        vm.stopPrank();

        // Try to fund as seller (should fail)
        vm.deal(seller, projectAmount);
        vm.prank(seller);
        vm.expectRevert(abi.encodeWithSignature("OnlyBuyer()"));
        buildFair.fundProject{ value: projectAmount }(projectId);
    }

    function test_FundProject_InvalidState() public {
        vm.startPrank(buyer);
        uint256 projectId = buildFair.createProject(seller, projectDetails);
        buildFair.fundProject{ value: projectAmount }(projectId);

        vm.expectRevert(
            abi.encodeWithSignature(
                "InvalidProjectState(uint8,uint8)",
                uint8(BuildFair.ProjectStatus.Funded),
                uint8(BuildFair.ProjectStatus.Created)
            )
        );
        buildFair.fundProject{ value: projectAmount }(projectId);
        vm.stopPrank();
    }

    function test_EndProject() public {
        // Setup project and fund it
        vm.startPrank(buyer);
        uint256 projectId = buildFair.createProject(seller, projectDetails);
        buildFair.fundProject{ value: projectAmount }(projectId);

        uint256 initialSellerBalance = seller.balance;

        vm.expectEmit(true, false, false, true);
        emit ProjectEnded(projectId, BuildFair.ProjectStatus.Ended);

        buildFair.endProject(projectId);

        (,,, uint256 returnedAmount, BuildFair.ProjectStatus returnedStatus,) =
            buildFair.getProject(projectId);
        assertEq(
            uint256(returnedStatus),
            uint256(BuildFair.ProjectStatus.Ended),
            "Status should be Ended"
        );
        assertEq(
            seller.balance,
            initialSellerBalance + projectAmount,
            "Seller should receive project funds"
        );

        vm.stopPrank();
    }

    function test_EndProject_OnlyBuyer() public {
        vm.startPrank(buyer);
        uint256 projectId = buildFair.createProject(seller, projectDetails);
        buildFair.fundProject{ value: projectAmount }(projectId);
        vm.stopPrank();

        vm.startPrank(seller);
        vm.expectRevert(abi.encodeWithSignature("OnlyBuyer()"));
        buildFair.endProject(projectId);
        vm.stopPrank();
    }

    function test_EndProject_InvalidState() public {
        vm.startPrank(buyer);
        uint256 projectId = buildFair.createProject(seller, projectDetails);

        vm.expectRevert(
            abi.encodeWithSignature(
                "InvalidProjectState(uint8,uint8)",
                uint8(BuildFair.ProjectStatus.Created),
                uint8(BuildFair.ProjectStatus.Funded)
            )
        );
        buildFair.endProject(projectId);
        vm.stopPrank();
    }

    function test_GetProject_NonexistentProject() public {
        vm.expectRevert(abi.encodeWithSignature("ProjectNotFound()"));
        buildFair.getProject(999);
    }

    receive() external payable { }
}
