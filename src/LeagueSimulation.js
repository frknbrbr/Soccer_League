"use strict";
exports.__esModule = true;
var MatchSimulation_1 = require("./MatchSimulation");
exports.simulateLeague = function (teams) {
    var countOut;
    var countIn;
    for (countOut = 0; countOut < teams.length; countOut++) {
        for (countIn = 0; countIn < countOut; countIn++) {
            if (countIn !== countOut) {
                MatchSimulation_1.simulateMatch(teams[countOut], teams[countIn]);
                MatchSimulation_1.simulateMatch(teams[countIn], teams[countOut]);
            }
        }
    }
    teams.sort(function (a, b) {
        if (a.getTotalPoints() < b.getTotalPoints()) {
            return 1;
        }
        if (a.getTotalPoints() > b.getTotalPoints()) {
            return -1;
        }
        if (a.getTotalPoints() > b.getTotalPoints()) {
            if (a.getAverageCount() < b.getAverageCount()) {
                return 1;
            }
            if (a.getAverageCount() > b.getAverageCount()) {
                return -1;
            }
            return 0;
        }
        return 0;
    });
};
