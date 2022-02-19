pragma solidity ^0.8.4;

contract CrossChain {

    address public owner;
    constructor(){
        owner = msg.sender;
    }

    event Transfer(address from, address to, uint amount);
    function withdrawETH(uint amount) external payable{
        require(owner == msg.sender, "This function should be used by contract's owner");
        require(address(this).balance >= amount, "No more balance on this contract");
        payable(msg.sender).transfer(amount);
        emit Transfer(address(this), msg.sender, amount);
    }

    function depositETH() external payable{
        emit Transfer(msg.sender, address(this), msg.value);    
    }

    function getBalanceETH() external view returns(uint){
        return address(this).balance;
    }
}