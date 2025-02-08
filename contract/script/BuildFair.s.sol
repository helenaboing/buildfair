// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { Script, console } from "forge-std/Script.sol";
import { BuildFair } from "../src/BuildFair.sol";

contract BuildFairScript is Script {
    BuildFair public buildFair;

    function setUp() public { }

    function run() public {
        vm.startBroadcast();

        buildFair = new BuildFair();

        vm.stopBroadcast();
    }
}
