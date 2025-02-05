// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ConstructionContract {

    address public buyer;
    address public seller;
    address public jury;
    
    uint256 public contractAmount;
    uint256 public milestoneAmount;
    
    enum State { Created, Funded, InProgress, Completed, Disputed, Closed }
    State public contractState;

    event ContractFunded(address indexed buyer, uint256 amount);
    event MilestoneAchieved(address indexed seller, uint256 milestoneAmount);
    event DisputeRaised(address indexed buyer, address indexed seller);
    event ContractClosed(address indexed buyer, address indexed seller);

    modifier onlyBuyer() {
        require(msg.sender == buyer, "Only the buyer can perform this action.");
        _;
    }

    modifier onlySeller() {
        require(msg.sender == seller, "Only the seller can perform this action.");
        _;
    }

    modifier onlyJury() {
        require(msg.sender == jury, "Only the jury can perform this action.");
        _;
    }

    modifier inState(State _state) {
        require(contractState == _state, "Invalid contract state for this action.");
        _;
    }

    constructor(address _seller, address _jury, uint256 _contractAmount, uint256 _milestoneAmount) {
        buyer = msg.sender; // The address deploying the contract is the buyer
        seller = _seller;
        jury = _jury;
        contractAmount = _contractAmount;
        milestoneAmount = _milestoneAmount;
        contractState = State.Created;
    }

    // Buyer funds the contract
    function fundContract() external payable onlyBuyer inState(State.Created) {
        require(msg.value == contractAmount, "Buyer must fund the contract with the full amount.");
        contractState = State.Funded;
        emit ContractFunded(msg.sender, msg.value);
    }

    // Seller indicates that the milestone is achieved
    function markMilestoneCompleted() external onlySeller inState(State.Funded) {
        contractState = State.InProgress;
        emit MilestoneAchieved(msg.sender, milestoneAmount);
    }

    // Buyer approves the completed milestone
    function approveMilestone() external onlyBuyer inState(State.InProgress) {
        contractState = State.Completed;
        payable(seller).transfer(milestoneAmount);
        emit ContractClosed(buyer, seller);
    }

    // Buyer or seller can raise a dispute if they disagree on completion
    function raiseDispute() external inState(State.InProgress) {
        require(msg.sender == buyer || msg.sender == seller, "Only buyer or seller can raise a dispute.");
        contractState = State.Disputed;
        emit DisputeRaised(buyer, seller);
    }

    // Jury resolves the dispute
    function resolveDispute(bool _buyerWins) external onlyJury inState(State.Disputed) {
        contractState = State.Closed;
        if (_buyerWins) {
            payable(buyer).transfer(contractAmount);
        } else {
            payable(seller).transfer(contractAmount);
        }
        emit ContractClosed(buyer, seller);
    }

    // End the contract if everything was successfully completed
    function endContract() external onlyBuyer inState(State.Completed) {
        contractState = State.Closed;
        emit ContractClosed(buyer, seller);
    }
}
