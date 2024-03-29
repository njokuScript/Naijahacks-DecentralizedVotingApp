# NAIJAHACKS HACKATHON 2019

## TEAM ACE

### TEAM MEMBERS

- NJOKU EMMANUEL KALU, kalunjoku123@gmail.com
- Aboaba Akorede, akoredeaboaba12@gmail.com
- Soronnadi Anthony, soronnadianthony@gmail.com
- Naheem Noah, noahnaheem@gmail.com

### MEMBERS ROLES

- Njoku Emmanuel Kalu : Responsible for creating the frontend and smart contracts and connecting them together using web3.js
- Aboaba Akorede: Responsible for implementing User Interface and MockUps
- Soronnadi Anthony: Responsible for implementing User Interface and MockUps, Marketer/Idea Presenter
- Naheem Noah: Project Documentation

## Problem

Problem Voting refers to a formal expression of opinion or will in response to a proposed candidate for office. Currently, the voting process in Nigeria is at debacle. During the last election, only 34.75% of the 84,004,084 registered voters completed the voting process. The percentage of registered voters that completed the voting process has continually decreased since 2003 but that of 2019 remains the lowest in history. In fact, future projections suggest that the number will continuously decrease in coming years. The recorded death of 626 persons across Nigeria during the last voting period further validate the projection. This decline has been strongly attributed to the high death and injury rates, lack of security during elections, lack of trust in the electoral process, corrupt practices and the disinformation of voters. Also, the paper voting system is not environmentally friendly as it eventually plays a role in carbon emission.

### PROPOSED SOLUTION

Solution Ace vote allow users with a unique Ethereum blockchain address vote only once wherever they are and regardless of the device they possess. The user uses their voter’s registration I.D to generate a unique private key which allows them cast their votes once and once only. The private key can be generated online with internet access or offline with USSD code, and at the same time the users can vote online or offline. This allows transparency in the voting process, ensures voters security and anonymity and reduces the processing time of vote results. Also, it does not involve the use of paper and so lowers carbon footprint.

### MAEKET

Market The global electoral sector is worth more than $100B globally, with Nigerian elections costing over $547M.

## Proposed Stack

Web3Js, Javascript, Solidity, Truffle

## Benefits

- Each Blockchain Address/Voters Id is allowed to vote only once
- Citizens will be able to vote from their living room, not scared of being harrased by electoral and security bodies at theri polling unit.
- Results cannot be manipulated and votes are secured
- Platform has no central authority, therefore making the application safe

# ISSUES:

### DESIGN/UI TASK:

- Clone Project into Computer
- checkout to day2-ui \$ git checkout day2-ui
- create a new folder --uiDesign (This is where you put the design files in png)
- make a commit, push changes to github
- Finally create a pull request

#### Day 3

- checkout to day3-api
- setup database "ganache"

### Day 4

- checkout to day4-implement
- Configure Truffle framework for smart contracts development
- Download Metamask extension
- write unit tests for smart contracts

### Day 5

- continued implementaion
- updated User interface

## Folder Structure

- contracts directory: this is where all smart contacts live. We already have a Migration contract that handles our migrations to the blockchain.

- migrations directory: this is where all of the migration files live. These migrations are similar to other web development frameworks that require migrations to change the state of a database. Whenever we deploy smart contracts to the blockchain, we are updating the blockchain's state, and therefore need a migration.

- node_modules directory: this is the home of all of our Node dependencies.

- src directory: this is where we'll develop our client-side application.
  test directory: this is where we'll write our tests for our smart contracts.

- test directory: this is where all tests for smart contracts are written

- truffle.js file: this is the main configuration file for our Truffle project

## RUNNING THE APPLICATION LOCALLY

## Dependencies

### Install these prerequisites to run this application locally

- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache: http://truffleframework.com/ganache/
- Metamask: https://metamask.io/

### Step 1. Clone the project

- https://github.com/Khay-EMMA/Naijahacks-DecentralizedVotingApp.git

### Step 2. Install dependencies

\$ npm install

### Step 3. Start Ganache

Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.

### Step 4. Compile & Deploy Election Smart Contract

\$ truffle migrate --reset You must migrate the election smart contract each time your restart ganache.

### Step 5. Configure Metamask

- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

### Step 6. Run the Front End Application

\$ npm run dev Visit this URL in your browser: http://localhost:3000
