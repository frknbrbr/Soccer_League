import { Team } from "./Teams";

const randomArrayElement = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};

const doSoccerGame = (teamA: Team, teamB: Team): number[] => {
    const helperArray: string[] = [];
    const teamArray: string[] = [];
    let count: number;
    let teamAGoals: number = 0;
    let teamBGoals: number = 0;
    const goalsArray: number[] = [];
    for (count = 0; count < teamA.getWeight(); count++) {
        teamArray.push(teamA.getTeamName());
    }
    for (count = 0; count < teamB.getWeight(); count++) {
        teamArray.push(teamB.getTeamName());
    }

    let count2: number = 0;
    const totalGoals = Math.floor(Math.random() * 11);
    while (count2 < totalGoals) {
        helperArray.push(randomArrayElement(teamArray));
        count2++;
    }

    helperArray.forEach((element) => {
        if (element === teamA.getTeamName()) {
            teamAGoals++;
        } else if (element === teamB.getTeamName()) {
            teamBGoals++;
        }
    });

    goalsArray.push(teamAGoals);
    goalsArray.push(teamBGoals);

    return goalsArray;
};

const completeMatch = (teamA: Team, teamB: Team, goalsArray: number[]): void => {
    teamA.increaseNumberOfMatchPlayed();
    teamB.increaseNumberOfMatchPlayed();
    if (goalsArray[0] < goalsArray[1]) {
        teamA.increaseLosesCount();
        teamA.increaseAverageCount(goalsArray[0] - goalsArray[1]);
        teamB.increaseVictoriesCount();
        teamB.increaseTotalPoints(3);
        teamB.increaseAverageCount(goalsArray[1] - goalsArray[0]);
    } else if (goalsArray[0] > goalsArray[1]) {
        teamB.increaseLosesCount();
        teamB.increaseAverageCount(goalsArray[1] - goalsArray[0]);
        teamA.increaseVictoriesCount();
        teamA.increaseTotalPoints(3);
        teamA.increaseAverageCount(goalsArray[0] - goalsArray[1]);
    } else if (goalsArray[0] === goalsArray[1]) {
        teamA.increaseTotalPoints(1);
        teamB.increaseTotalPoints(1);
        teamA.increaseDrawsCount();
        teamB.increaseDrawsCount();
    }
};

export const simulateMatch = (teamA: Team, teamB: Team): void => {
    completeMatch(teamA, teamB, doSoccerGame(teamA, teamB));
};
