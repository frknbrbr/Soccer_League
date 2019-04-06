import { simulateMatch } from "./MatchSimulation";
import { Team } from "./Teams";

export const simulateLeague = (teams: Team[]): void  =>  {

    let countOut: number;
    let countIn: number;

    for (countOut = 0; countOut < teams.length; countOut++) {
        for (countIn = 0; countIn < countOut; countIn++) {
            if (countIn !== countOut) {
                simulateMatch(teams[countOut], teams[countIn]);
                simulateMatch(teams[countIn], teams[countOut]);
            }
        }
    }

    teams.sort((a: Team, b: Team): number => {
        if (a.getTotalPoints() < b.getTotalPoints()) { return 1; }
        if (a.getTotalPoints() > b.getTotalPoints()) { return -1; }
        if (a.getTotalPoints() === b.getTotalPoints()) {
            if (a.getAverageCount() < b.getAverageCount()) { return 1; }
            if (a.getAverageCount() > b.getAverageCount()) { return -1; }
            return 0;
        }
        return 0;
      });
};
