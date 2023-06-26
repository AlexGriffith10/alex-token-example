//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract AlexTestNFT {

    string public name = "Alex Test NFT";
    string public symbol = "ATN";

    uint256 public totalSupply = 100000;
    uint256 public supply;

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    mapping(address => bool) hasMinted;

    event Mint(address indexed _to, uint256 _tokenId);

    function mint(address to) external {
        require(supply < totalSupply, "All NFTs have been minted");

        address sender = msg.sender;

        require(!hasMinted[sender], "You have already minted an NFT");

        hasMinted[sender] = true;
        supply++;

        emit Mint(to, supply);
    }
}