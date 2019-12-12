const Election = artifacts.require("./Election.sol");
const assert = require("assert");
contract("Election", function(accounts) {
  var electionInstance;
  it("initializes with 5 candidates", function() {
    return Election.deployed()
      .then(function(instance) {
        return instance.candidatesCount();
      })
      .then(function(count) {
        assert.equal(count, 5);
      });
  });
  it("it initializes the candidates with correct values", function() {
    return Election.deployed()
      .then(function(instance) {
        electionInstance = instance;
        return electionInstance.candidates(1);
      })
      .then(function(candidate) {
        assert.equal(candidate[0], 1, "contains the correct id");
        assert.equal(
          candidate[1],
          "Muhamadu Buhari",
          "contains the correct name"
        );
        assert.equal(candidate[2], "APC", "contains the correct party");
        assert.equal(candidate[3], "NW", "contains the correct region");
        assert.equal(candidate[4], 0, "contains the correct vote counts");

        return electionInstance.candidates(2);
      })
      .then(function(candidate) {
        assert.equal(candidate[0], 2, "contains the correct id");
        assert.equal(
          candidate[1],
          "Atiku Abubakar",
          "contains the correct name"
        );
        assert.equal(candidate[2], "PDP", "contains the correct party");
        assert.equal(candidate[3], "NE", "contains the correct region");
        assert.equal(candidate[4], 0, "contains the correct vote counts");
        return electionInstance.candidates(3);
      })
      .then(function(candidate) {
        assert.equal(candidate[0], 3, "contains the correct id");
        assert.equal(
          candidate[1],
          "Njoku Emmanuel",
          "contains the correct name"
        );
        assert.equal(candidate[2], "APGA", "contains the correct party");
        assert.equal(candidate[3], "SE", "contains the correct region");
        assert.equal(candidate[4], 0, "contains the correct vote counts");
        return electionInstance.candidates(4);
      })
      .then(function(candidate) {
        assert.equal(candidate[0], 3, "contains the correct id");
        assert.equal(candidate[1], "Peter Obi", "contains the correct name");
        assert.equal(candidate[2], "AA", "contains the correct party");
        assert.equal(candidate[3], "SE", "contains the correct region");
        assert.equal(candidate[4], 0, "contains the correct vote counts");
        return electionInstance.candidates(5);
      })
      .then(function(candidate) {
        assert.equal(candidate[0], 5, "contains the correct id");
        assert.equal(candidate[1], "Nyesom Wike", "contains the correct name");
        assert.equal(candidate[2], "YP", "contains the correct party");
        assert.equal(candidate[3], "SS", "contains the correct region");
        assert.equal(candidate[4], 0, "contains the correct vote counts");
        return electionInstance.candidates(6);
      });
  });
});
