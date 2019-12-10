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

lack of Security during elections, thereby putting the lifes of citizens at great risk, also due to bad governance, Votes are not secured, i.e. the citizens votes are not counted and being manipulated.

## Proposed Solution

A decentralized Voting Application which is autonomous and runs on the ethereum blockchain. These application will allow users with a unique blockchain address/voter id vote only once, once user casts vote, the vote is being recorded and cannot be changed again, Thereby making the system corruption free.

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

## Folder Structure

- contracts directory: this is where all smart contacts live. We already have a Migration contract that handles our migrations to the blockchain.

- migrations directory: this is where all of the migration files live. These migrations are similar to other web development frameworks that require migrations to change the state of a database. Whenever we deploy smart contracts to the blockchain, we are updating the blockchain's state, and therefore need a migration.

- node_modules directory: this is the home of all of our Node dependencies.

- src directory: this is where we'll develop our client-side application.
test directory: this is where we'll write our tests for our smart contracts.

- truffle.js file: this is the main configuration file for our Truffle project