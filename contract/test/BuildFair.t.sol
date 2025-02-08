// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { Test, console } from "forge-std/Test.sol";
import { BuildFair } from "../src/BuildFair.sol";

contract BuildFairTest is Test {
    BuildFair public buildFair;

    function setUp() public {
        buildFair = new BuildFair();
        buildFair.setNumber(0);
    }

    function test_Increment() public {
        buildFair.increment();
        assertEq(buildFair.number(), 1);
    }

    function testFuzz_SetNumber(uint256 x) public {
        buildFair.setNumber(x);
        assertEq(buildFair.number(), x);
    }
}
