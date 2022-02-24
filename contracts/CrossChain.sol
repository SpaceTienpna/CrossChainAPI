pragma solidity ^0.8.4;

import "./IERC20.sol";

contract CrossChain {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    event Transfer(address from, address to, uint256 amount);

    function withdrawETH(uint256 amount) external payable {
        require(
            owner == msg.sender,
            "This function should be used by contract's owner"
        );
        require(
            address(this).balance >= amount,
            "No more balance on this contract"
        );
        payable(msg.sender).transfer(amount);
        emit Transfer(address(this), msg.sender, amount);
    }

    function depositETH() external payable {
        emit Transfer(msg.sender, address(this), msg.value);
    }

    function getBalanceETH() external view returns (uint256) {
        return address(this).balance;
    }

    function _withdrawERC20(address token, uint256 amount) private {
        require(
            IERC20(token).balanceOf(address(this)) >= amount,
            "Cross-chain failed :: Contract not enough token"
        );
        IERC20(token).transfer(msg.sender, amount);
    }

    function _depositERC20(address token, uint256 amount) private {
        require(
            IERC20(token).balanceOf(msg.sender) >= amount,
            "Cross-chain failed:: U don't have enough money."
        );
        IERC20(token).transferFrom(msg.sender, address(this), amount);
    }

    function withdrawERC20(address token, uint256 amount) external {
        _withdrawERC20(token, amount);
        emit Transfer(address(this), msg.sender, amount);
    }

    function depositERC20(address token, uint256 amount) external {
        _depositERC20(token, amount);
        emit Transfer(msg.sender, address(this), amount);
    }
}
