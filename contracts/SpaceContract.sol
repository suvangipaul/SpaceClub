// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';

contract SpaceContract is ERC20 {
  
  uint public initialSupply;

  constructor() ERC20("Gold", "GLD") {
    _mint(msg.sender, initialSupply);
  }
}
