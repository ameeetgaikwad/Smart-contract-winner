// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
interface Icontract {
    function attempt() external;
}

contract Lock {
    function change(address _contract) public {
        Icontract(_contract).attempt();
    }
}
