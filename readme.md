# 🛠️ BuildFair: Construction Contract with Jury 🏗️

[![Netlify Status](https://api.netlify.com/api/v1/badges/212f8524-c1dd-45ab-a855-db003d25aca4/deploy-status)](https://app.netlify.com/sites/buildfair/deploys)

Welcome to BuildFair—your smart contract solution for secure, transparent, and fair construction agreements between buyers, sellers, and jurors.

## Table of Contents

- [🛠️ BuildFair: Construction Contract with Jury 🏗️](#️-buildfair-construction-contract-with-jury-️)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Roles](#roles)
  - [Contract States](#contract-states)
  - [Functions](#functions)
  - [Deployment Guide](#deployment-guide)
    - [Prerequisites](#prerequisites)
    - [Deployment Steps](#deployment-steps)
  - [Example Use Case](#example-use-case)
  - [Security Considerations](#security-considerations)
  - [Development Setup](#development-setup)
    - [Using Nix (Recommended)](#using-nix-recommended)
    - [Manual Setup (Alternative)](#manual-setup-alternative)
  - [License](#license)
  - [Contact](#contact)

## Overview

BuildFair ensures that payments are made only after validated milestones are achieved, protecting all parties and providing a foolproof framework for resolving disputes. Enjoy straightforward, transparent agreements with zero grey areas.

## Features

- **Buyer**: Funds the contract and approves completed milestones.
- **Seller**: Marks and submits evidence for completed milestones, triggering payment.
- **Jury**: Acts as a neutral mediator to resolve disputes fairly.

## Roles

| Role                | Description                                                                   |
|---------------------|-------------------------------------------------------------------------------|
| 👩‍💼 **Buyer**      | Funds the project and verifies completed work.                              |
| 👷 **Seller**       | Executes construction tasks and marks milestones as complete.               |
| ⚖️ **Jury**         | A neutral party that resolves disputes between buyers and sellers.            |

## Contract States

- **Created (📝)**: Contract created but unfunded.
- **Funded (💰)**: Buyer has deposited funds.
- **InProgress (🔨)**: A milestone is under review after the seller's submission.
- **Completed (✅)**: Milestone approved and payment disbursed.
- **Disputed (🚨)**: A dispute has been raised; awaits jury resolution.
- **Closed (🔒)**: Contract finalized and funds distributed accordingly.

## Functions

- `fundContract()`: Buyer funds the contract 💵.
- `markMilestoneCompleted()`: Seller marks a milestone as complete 🏗️.
- `approveMilestone()`: Buyer approves a milestone and releases payment 💸.
- `raiseDispute()`: Either party may raise a dispute if issues arise 🚨.
- `resolveDispute()`: Jury resolves the dispute and directs fund allocation ⚖️.
- `endContract()`: Finalizes the contract upon successful completion or dispute resolution 🎉.

## Deployment Guide

### Prerequisites

- Solidity version 0.8.0 or higher.
- Ethereum Wallet (e.g., MetaMask) for managing transactions.
- Access to an Ethereum Node (testnet like Rinkeby/Goerli or mainnet).

### Deployment Steps

1. **Install Dependencies**

   Install either Truffle or Hardhat:
   ```bash
   npm install -g truffle
   # or
   npm install --save-dev hardhat
   ```

2. **Create the Contract**

   Place your smart contract code in the `contracts/` directory (e.g., `contracts/ConstructionContract.sol`).

3. **Deploy the Contract**

   **Using Truffle:**
   ```javascript
   const ConstructionContract = artifacts.require("ConstructionContract");

   module.exports = function (deployer) {
     deployer.deploy(ConstructionContract, sellerAddress, juryAddress, contractAmount, milestoneAmount);
   };
   ```

   **Using Hardhat:**
   ```javascript
   async function main() {
     const [deployer] = await ethers.getSigners();
     const ConstructionContract = await ethers.getContractFactory("ConstructionContract");
     const contract = await ConstructionContract.deploy(sellerAddress, juryAddress, contractAmount, milestoneAmount);
     console.log("Contract deployed to:", contract.address);
   }
   
   main();
   ```

4. **Interact with the Contract**

   Utilize Web3.js or Ethers.js to interact with the deployed contract.

## Example Use Case

1. **Funding**: Buyer deposits 10 ETH into the contract 💰.
2. **Milestone Completion**: Seller submits evidence for a completed milestone 🏗️.
3. **Approval & Payment**: Buyer validates the work and releases 2 ETH to the seller 💸.
4. **Dispute Resolution**: If issues emerge, a dispute is raised 🚨 and the jury intervenes ⚖️.
5. **Completion**: The process repeats until all milestones are met and the contract is closed 🔒.

## Security Considerations

- **Trusted Jury**: Select a credible and unbiased jury for dispute resolution.
- **Verification Process**: Rigorously verify work completion to avoid fraudulent claims.
- **Gas Fees**: Monitor Ethereum gas fees during deployments and transactions.

## Development Setup

### Using Nix (Recommended)

BuildFair leverages [Nix](https://nixos.org/) for a unified, reproducible development environment.

1. **Install Nix**

   **Linux/macOS**:
   ```bash
   sh <(curl -L https://nixos.org/nix/install) --daemon
   ```

   **Windows**:
   - Install WSL2 (Windows Subsystem for Linux)
   - Install Ubuntu from the Microsoft Store
   - Open Ubuntu and run the Linux installation command above

2. **Enable Flakes**

   Add to your `~/.config/nix/nix.conf` or `/etc/nix/nix.conf`:
   ```bash
   experimental-features = nix-command flakes
   ```

3. **Start Development Environment**
   ```bash
   # Clone the repository
   git clone https://github.com/helenaboing/buildfair
   cd buildfair

   # Enter the development environment
   nix develop
   ```

   This environment provisions:
   - **Node.js 20.x** with pnpm
   - **Foundry** for streamlined smart contract development
   - **Solidity Compiler**
   - Additional development tools and dependencies

### Manual Setup (Alternative)

Install these dependencies manually:

1. **Node.js**: Install Node.js 20.x from [nodejs.org](https://nodejs.org/).
2. **pnpm**: Install globally:
   ```bash
   npm install -g pnpm
   ```
3. **Foundry**: Follow the installation instructions at [getfoundry.sh](https://getfoundry.sh).
4. **Solidity**: Install solc version 0.8.23.

Then, install project dependencies:
```bash
pnpm install
cd contract && forge install
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please reach out at [your-email@example.com] 📧.

---

Let BuildFair make your construction agreements secure, transparent, and stress-free! 🛠️✨
