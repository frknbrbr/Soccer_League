"use strict";
exports.__esModule = true;
var LeagueSimulation_1 = require("./LeagueSimulation");
exports.showResults = function (teams) {
    LeagueSimulation_1.simulateLeague(teams);
    // tslint:disable-next-line: no-console
    console.table(teams);
};
