# 🛠️ BuildFair: Construction Project with Jury 🏗️

[![Netlify Status](https://api.netlify.com/api/v1/badges/212f8524-c1dd-45ab-a855-db003d25aca4/deploy-status)](https://app.netlify.com/sites/buildfair/deploys)

Welcome to BuildFair—your smart contract solution for secure, transparent, and fair construction agreements between buyers, sellers, and jurors.

## Table of Contents

- [🛠️ BuildFair: Construction Project with Jury 🏗️](#️-buildfair-construction-project-with-jury-️)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Roles](#roles)
  - [Project States](#project-states)
  - [Functions](#functions)
  - [Project Attributes](#project-attributes)
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

BuildFair ensures that payments are made only after validated work is achieved, protecting all parties and providing a foolproof framework for resolving disputes. Enjoy straightforward, transparent agreements with zero grey areas. _(Milestone and dispute resolution features coming in future releases)_

## Features

- **Buyer**: Funds the project and approves work completion.
- **Seller**: Executes construction tasks and submits evidence of completion.
- **Jury**: Acts as a neutral mediator to resolve disputes fairly. _(To be implemented in future releases)_
- **Milestones**: Break down projects into verifiable stages. _(Coming in future releases)_

## Roles

| Role                | Description                                                                   |
|---------------------|-------------------------------------------------------------------------------|
| 👩‍💼 **Buyer**      | Funds the project and verifies completed work.                              |
| 👷 **Seller**       | Executes construction tasks and submits completion evidence.                 |
| ⚖️ **Jury**         | A neutral party that resolves disputes between buyers and sellers. _(Coming soon)_ |

## Project States

- **Created (📝)**: Project created but unfunded.
- **Funded (💰)**: Buyer has deposited funds.
- **InProgress (🔨)**: Work is under review after the seller's submission.  _(Future feature)_
- **Disputed (🚨)**: A dispute has been raised; awaits jury resolution. _(Future feature)_
- **Ended (✅)**: Project finalized and funds distributed accordingly.

## Functions

- `createProject()`: Creates a new project. 🌱
- `fundProject()`: Buyer funds the project 💵.
- `submitWork()`: Seller submits completed work 🏗️. _(Coming in future release)_
- `approveWork()`: Buyer approves work and releases payment 💸. _(Coming in future release)_
- `raiseDispute()`: Either party may raise a dispute if issues arise 🚨. _(Coming in future release)_
- `resolveDispute()`: Jury resolves the dispute and directs fund allocation ⚖️. _(Coming in future release)_
- `endProject()`: Finalizes the project upon successful completion 🎉.

## Project Attributes

- `projectId`: Unique identifier for the project.
- `buyer`: Address of the buyer.
- `seller`: Address of the seller.
- `amount`: Amount of funds in the project.
- `status`: Current status of the project.
- `details`: Project details.

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

2. **Create the Project**

   Place your smart contract code in the `contracts/` directory (e.g., `contracts/BuildFairProject.sol`).

3. **Deploy the Project**

   **Using Truffle:**
   ```javascript
   const BuildFairProject = artifacts.require("BuildFairProject");

   module.exports = function (deployer) {
     deployer.deploy(BuildFairProject, sellerAddress, juryAddress, projectAmount);
   };
   ```

   **Using Hardhat:**
   ```javascript
   async function main() {
     const [deployer] = await ethers.getSigners();
     const BuildFairProject = await ethers.getContractFactory("BuildFairProject");
     const project = await BuildFairProject.deploy(sellerAddress, juryAddress, projectAmount);
     console.log("Project deployed to:", project.address);
   }
   
   main();
   ```

4. **Interact with the Project**

   Utilize Web3.js or Ethers.js to interact with the deployed project.

## Example Use Case

1. **Funding**: Buyer deposits ETH into the project 💰.
2. **Work Completion**: Seller submits evidence for completed work 🏗️.
3. **Approval & Payment**: Buyer validates the work and releases payment to the seller 💸.
4. **Completion**: Process continues until all work is completed and the project is closed 🔒.

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
