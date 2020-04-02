class GameResponse {
    constructor(id, winner, score, forscore, turnnumber) {
        this.id = id;
        this.winner = winner;
        this.score = score;
        this.forscore = forscore;
        this.turnnumber = turnnumber;
    }

    static toResponseObject({id, winner, score, forscore, turnnumber}) {
        return new this(id, winner, score, forscore, turnnumber);
    }
}
export default GameResponse