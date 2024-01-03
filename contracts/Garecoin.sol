// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Garecoin is ERC20 {
    /// @notice Mint the totalSupply
    constructor(string memory name, string memory symbol, uint256 totalSupply_)
        ERC20(name, symbol)
    {
        _mint(msg.sender, totalSupply_);
    }
}
