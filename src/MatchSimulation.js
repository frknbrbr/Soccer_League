"use strict";
exports.__esModule = true;
var randomArrayElement = function (items) {
    return items[Math.floor(Math.random() * items.length)];
};
var doSoccerGame = function (teamA, teamB) {
    var helperArray = [];
    var teamArray = [];
    var count;
    var teamAGoals = 0;
    var teamBGoals = 0;
    var goalsArray = [];
    for (count = 0; count < teamA.getWeight(); count++) {
        teamArray.push(teamA.getTeamName());
    }
    for (count = 0; count < teamB.getWeight(); count++) {
        teamArray.push(teamB.getTeamName());
    }
    var count2 = 0;
    var totalGoals = Math.floor(Math.random() * 11);
    while (count2 < totalGoals) {
        helperArray.push(randomArrayElement(teamArray));
        count2++;
    }
    helperArray.forEach(function (element) {
        if (element === teamA.getTeamName()) {
            teamAGoals++;
        }
        else if (element === teamB.getTeamName()) {
            teamBGoals++;
        }
    });
    goalsArray.push(teamAGoals);
    goalsArray.push(teamBGoals);
    return goalsArray;
};
var completeMatch = function (teamA, teamB, goalsArray) {
    teamA.increaseNumberOfMatchPlayed();
    teamB.increaseNumberOfMatchPlayed();
    if (goalsArray[0] < goalsArray[1]) {
        teamA.increaseLosesCount();
        teamA.increaseAverageCount(goalsArray[0] - goalsArray[1]);
        teamB.increaseVictoriesCount();
        teamB.increaseTotalPoints(3);
        teamB.increaseAverageCount(goalsArray[1] - goalsArray[0]);
    }
    else if (goalsArray[0] > goalsArray[1]) {
        teamB.increaseLosesCount();
        teamB.increaseAverageCount(goalsArray[1] - goalsArray[0]);
        teamA.increaseVictoriesCount();
        teamA.increaseTotalPoints(3);
        teamA.increaseAverageCount(goalsArray[0] - goalsArray[1]);
    }
    else if (goalsArray[0] === goalsArray[1]) {
        teamA.increaseTotalPoints(1);
        teamB.increaseTotalPoints(1);
        teamA.increaseDrawsCount();
        teamB.increaseDrawsCount();
    }
};
exports.simulateMatch = function (teamA, teamB) {
    completeMatch(teamA, teamB, doSoccerGame(teamA, teamB));
};
