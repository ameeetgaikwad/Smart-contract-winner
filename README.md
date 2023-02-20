# Smart Contract Winner

This project is a part of challenge for my week 4 alchemy university.

Here there is a contract deployed on the blockchain:https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

The contract code is as follows:
```solidity
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
```

The winner of the contract is such that, msg.sender should not be equal to tx.origin, which means the origin of the transaction should be a different address and the address who calls the contract on the blockchain should be a different address.

Solution:

I deployed my own contract with my EOA address and the contract has a function which calls the contract on the blockchain.
