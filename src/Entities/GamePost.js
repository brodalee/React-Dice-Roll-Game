class GamePost {
    constructor(winner, score, turn, forscore) {
        this.winner = winner;
        this.score = score;
        this.turn = turn;
        this.forscore = forscore;
    }

    static toGamePost(winner, score, turn, forscore) {
        return new this(winner, score, turn, forscore);
    }
}

export default GamePost;