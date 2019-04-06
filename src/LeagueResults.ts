import { simulateLeague } from "./LeagueSimulation";

export const showResults = (teams): void => {
    simulateLeague(teams);
// tslint:disable-next-line: no-console
    console.table(teams);
};
