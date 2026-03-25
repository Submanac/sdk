// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SubmanacMarket {

    struct Market {
        string question;
        uint yes;
        uint no;
        bool resolved;
    }

    Market[] public markets;

    function createMarket(string memory _question) public {
        markets.push(Market(_question, 0, 0, false));
    }

    function voteYes(uint marketId) public payable {
        markets[marketId].yes += msg.value;
    }

    function voteNo(uint marketId) public payable {
        markets[marketId].no += msg.value;
    }

    function getMarkets() public view returns (Market[] memory) {
        return markets;
    }
}
