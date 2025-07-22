// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CreatorPass is ERC721, Ownable {
    uint256 public _tokenId;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) Ownable(msg.sender) {
        _tokenId = 1;
    }

    function safeMint(address to) public onlyOwner {
        _safeMint(to, _tokenId);
        _tokenId += 1;
    }
}
