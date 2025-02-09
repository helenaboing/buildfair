// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

/**
 * @title BuildFair
 * @dev A smart contract for managing construction projects between buyers and sellers
 */
contract BuildFair {
    // Custom Errors
    error OnlyBuyer();
    error OnlySeller();
    error ProjectNotFound();
    error InvalidBuyerAddress();
    error EmptyDetails();
    error MustBeSendingFunds();
    error InvalidProjectState(ProjectStatus current, ProjectStatus required);
    error TransferFailed();

    // Enums
    enum ProjectStatus {
        Created, // Project created but unfunded
        Funded, // Buyer has deposited funds
        Ended // Project finalized and funds distributed

    }

    // Structs
    struct Project {
        uint256 projectId;
        address buyer;
        address seller;
        uint256 amount;
        ProjectStatus status;
        string details;
    }

    // State variables
    uint256 private nextProjectId;
    mapping(uint256 => Project) public projects;

    // Events
    event ProjectCreated(
        uint256 indexed projectId, address indexed buyer, address indexed seller, string details
    );
    event ProjectFunded(uint256 indexed projectId, uint256 amount);
    event ProjectEnded(uint256 indexed projectId, ProjectStatus status);

    // Modifiers
    modifier onlyBuyer(uint256 _projectId) {
        if (msg.sender != projects[_projectId].buyer) revert OnlyBuyer();
        _;
    }

    modifier onlySeller(uint256 _projectId) {
        if (msg.sender != projects[_projectId].seller) revert OnlySeller();
        _;
    }

    modifier projectExists(uint256 _projectId) {
        if (_projectId >= nextProjectId) revert ProjectNotFound();
        _;
    }

    /**
     * @dev Creates a new construction project
     * @param _buyer Address of the buyer/client
     * @param _amount Amount required for the project
     * @param _details Project details (IPFS hash or direct string)
     */
    function createProject(address _buyer, uint256 _amount, string memory _details)
        external
        returns (uint256)
    {
        if (_buyer == address(0)) revert InvalidBuyerAddress();
        if (bytes(_details).length == 0) revert EmptyDetails();

        uint256 projectId = nextProjectId++;

        projects[projectId] = Project({
            projectId: projectId,
            buyer: _buyer,
            seller: msg.sender,
            amount: _amount,
            status: ProjectStatus.Created,
            details: _details
        });

        emit ProjectCreated(projectId, _buyer, msg.sender, _details);
        return projectId;
    }

    /**
     * @dev Funds a project
     * @param _projectId ID of the project to fund
     */
    function fundProject(uint256 _projectId)
        external
        payable
        projectExists(_projectId)
        onlyBuyer(_projectId)
    {
        Project storage project = projects[_projectId];
        if (project.status != ProjectStatus.Created) {
            revert InvalidProjectState(project.status, ProjectStatus.Created);
        }
        if (msg.value == 0) revert MustBeSendingFunds();

        project.amount = msg.value;
        project.status = ProjectStatus.Funded;

        emit ProjectFunded(_projectId, msg.value);
    }

    /**
     * @dev Ends a project and distributes funds
     * @param _projectId ID of the project to end
     */
    function endProject(uint256 _projectId)
        external
        projectExists(_projectId)
        onlyBuyer(_projectId)
    {
        Project storage project = projects[_projectId];
        if (project.status != ProjectStatus.Funded) {
            revert InvalidProjectState(project.status, ProjectStatus.Funded);
        }

        project.status = ProjectStatus.Ended;

        // Transfer funds to seller
        (bool success,) = project.seller.call{ value: project.amount }("");
        if (!success) revert TransferFailed();

        emit ProjectEnded(_projectId, ProjectStatus.Ended);
    }

    /**
     * @dev Gets project details
     * @param _projectId ID of the project
     */
    function getProject(uint256 _projectId)
        external
        view
        projectExists(_projectId)
        returns (
            uint256 projectId,
            address buyer,
            address seller,
            uint256 amount,
            ProjectStatus status,
            string memory details
        )
    {
        Project storage project = projects[_projectId];
        return (
            project.projectId,
            project.buyer,
            project.seller,
            project.amount,
            project.status,
            project.details
        );
    }
}
