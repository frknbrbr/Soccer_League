"use strict";
exports.__esModule = true;
var Team = /** @class */ (function () {
    function Team(teamName, weight) {
        this.teamName = teamName;
        this.numberOfMatchPlayed = 0;
        this.victoriesCount = 0;
        this.drawsCount = 0;
        this.losesCount = 0;
        this.totalPoints = 0;
        this.averageCount = 0;
        this.weight = weight;
    }
    Team.prototype.getTeamName = function () {
        return this.teamName;
    };
    Team.prototype.getNumberOfMatchPlayed = function () {
        return this.numberOfMatchPlayed;
    };
    Team.prototype.getVictoriesCount = function () {
        return this.victoriesCount;
    };
    Team.prototype.getDrawsCount = function () {
        return this.drawsCount;
    };
    Team.prototype.getLosesCount = function () {
        return this.losesCount;
    };
    Team.prototype.getAverageCount = function () {
        return this.averageCount;
    };
    Team.prototype.getTotalPoints = function () {
        return this.totalPoints;
    };
    Team.prototype.getWeight = function () {
        return this.weight;
    };
    Team.prototype.increaseNumberOfMatchPlayed = function () {
        this.numberOfMatchPlayed++;
    };
    Team.prototype.increaseVictoriesCount = function () {
        this.victoriesCount++;
    };
    Team.prototype.increaseDrawsCount = function () {
        this.drawsCount++;
    };
    Team.prototype.increaseLosesCount = function () {
        this.losesCount++;
    };
    Team.prototype.increaseAverageCount = function (amount) {
        this.averageCount += amount;
    };
    Team.prototype.increaseTotalPoints = function (amount) {
        this.totalPoints += amount;
    };
    return Team;
}());
exports.Team = Team;
