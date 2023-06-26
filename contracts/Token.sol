// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "base64-sol/base64.sol";

contract AlexPOAP is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    event CreatedAlexPOAP(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("AlexPOAP", "alexPOAP")
    {
        tokenCounter = 0;
    }

    function create(
        string memory title,
        string memory description,
        string memory imageUrl
    ) public {
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(tokenCounter, formatTokenURI(title, description, imageUrl));
        tokenCounter = tokenCounter + 1;
        emit CreatedAlexPOAP(tokenCounter, title);
    }

    function formatTokenURI(string memory title, string memory description, string memory imageUrl) public pure returns (string memory) {
        return string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',title,'", "description":"',description,'", "attributes":"", "image":"',imageUrl,'"}'
                            )
                        )
                    )
                )
            );
    }
}