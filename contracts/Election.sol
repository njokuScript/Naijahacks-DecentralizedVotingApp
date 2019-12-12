pragma solidity ^0.5.11;

contract Election{
    //model candidate
    struct Candidate{
        uint id;
        string name;
        string party;
        string region;
        uint voteCount;

    }
    //store accounts that has voted
    mapping(address => bool) public voters;
    //store condidatest
    //fetch candidate
    mapping(uint => Candidate) public candidates;
    //Store candiidates count
    uint public candidatesCount;

    //Voted Events
    event votedEvent(
        uint indexed _candidateId
    );

    //Constructor
    constructor () public{
        addCandidates("Muhamadu Buhari",  "APC", "NW");
        addCandidates("Atiku Abubakar", "PDP", "NE");
        addCandidates("Njoku Emmanuel", "APGA", "SE");
        addCandidates("Peter Obi", "AA", "SE");
        addCandidates("Nyesom Wike", "YP", "SS");
    }
        function addCandidates (string memory _name,  string memory _party, string memory _region)  private {
            candidatesCount++;
            candidates[candidatesCount] = Candidate(candidatesCount, _name, _party,_region, 0);
        }
        function vote (uint _candidateId) public {
            //require that they havent voted before
            require(!voters[msg.sender], "voting is only once");
            //require a valid candidate
            require(_candidateId > 0 && _candidateId <= candidatesCount, "require a valid candidate");

            //record that voter has voted
            voters[msg.sender] = true;
            //update candidate vote count
            candidates[_candidateId].voteCount ++;

            //trigger voted events
            emit votedEvent(_candidateId);
        }
}