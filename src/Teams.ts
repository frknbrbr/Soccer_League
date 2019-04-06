interface ITeam {
    getTeamName(): string;
    getNumberOfMatchPlayed(): number;
    getVictoriesCount(): number;
    getDrawsCount(): number;
    getLosesCount(): number;
    getAverageCount(): number;
    getTotalPoints(): number;
    getWeight(): number;
    increaseNumberOfMatchPlayed(): void;
    increaseVictoriesCount(): void;
    increaseDrawsCount(): void;
    increaseLosesCount(): void;
    increaseAverageCount(amount: number): void;
    increaseTotalPoints(amount: number): void;
}

export class Team implements ITeam {
    private weight: number;
    private teamName: string;
    private numberOfMatchPlayed: number = 0;
    private victoriesCount: number = 0;
    private drawsCount: number = 0;
    private losesCount: number = 0;
    private averageCount: number = 0;
    private totalPoints: number = 0;

    constructor(teamName: string, weight: number) {
        this.teamName = teamName;
        this.weight = weight;
    }

    public getTeamName(): string {
        return this.teamName;
    }
    public getNumberOfMatchPlayed(): number {
        return this.numberOfMatchPlayed;
    }
    public getVictoriesCount(): number {
        return this.victoriesCount;
    }
    public getDrawsCount(): number {
        return this.drawsCount;
    }
    public getLosesCount(): number {
        return this.losesCount;
    }
    public getAverageCount(): number {
        return this.averageCount;
    }
    public getTotalPoints(): number {
        return this.totalPoints;
    }
    public getWeight(): number {
        return this.weight;
    }

    public increaseNumberOfMatchPlayed(): void {
        this.numberOfMatchPlayed++;
    }

    public increaseVictoriesCount(): void {
        this.victoriesCount++;
    }

    public increaseDrawsCount(): void {
        this.drawsCount++;
    }

    public increaseLosesCount(): void {
        this.losesCount++;
    }

    public increaseAverageCount(amount: number): void {
        this.averageCount += amount;
    }

    public increaseTotalPoints(amount: number): void {
        this.totalPoints += amount;
    }
}
