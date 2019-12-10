pragma solidity ^0.5.11;

contract Election {
    //model candidate

    struct Candidate{
    uint id;
    string name;
    string party;
    string region;
    uint voteCount;
}
//fetch candidates
mapping(uint => Candidate) public candidates;

//store candidates count
uint public candidatesCount;
//Constructor
constructor () public{
  addCandidates("Muhamadu Buhari", "APC", "NW");
        addCandidates("Atiku Abubakar", "PDP", "NE");
        addCandidates("Njoku Emmanuel", "APGA", "SE");
}
 function addCandidates (string memory _name,  string memory _party, string memory _region)  private {
            candidatesCount++;
            candidates[candidatesCount] = Candidate(candidatesCount, _name, _party, _region, 0);
        }





}