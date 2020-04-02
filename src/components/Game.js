import React from "react";
import Form from './Form/Form';
import { load, sendWinner } from "../Api/HallOfFrame";
import GameResponse from '../Entities/GameResponse';
import HofList from './HofList/HofList.js';
import Player from '../Entities/Player';
import GameDiceRoll from "../Entities/GameDiceRoll";
import DiceGame from "./DiceGame/DiceGame";
import GamePost from "../Entities/GamePost";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            game: null,
            hof: false
        };
        this.hofGames = [];
        this.initGame = this.initGame.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    resetGame = () => {
        const winner = this.state.game.winner;
        sendWinner(GamePost.toGamePost(winner.name, winner.bank.accountContent, winner.turnPlayed, this.state.game.points));
        this.setState({game: null});
        alert(`Congrat ${this.state.game.winner.name} for the win !`);
    }

    initGame = (first, second, points) => {
        let firstPlayer = new Player(first);
        let secondPlayer = new Player(second);
        let game = new GameDiceRoll(firstPlayer, secondPlayer, points);
        this.setState({game: game})
    }

    render() {
        return (
            <div>
                {!(this.state.game instanceof GameDiceRoll) && (<Form onFormValidate={this.initGame} />)}
                {(this.state.game instanceof GameDiceRoll) && (<DiceGame reset={this.resetGame} game={this.state.game} />)}
                <br />
                {!(this.state.game instanceof GameDiceRoll) && this.HofButton()}
                {(this.state.hof && !(this.state.game instanceof GameDiceRoll)) && (<HofList listOfGameResponse={this.hofGames} />)}
            </div>
        )
    }

    HofButton() {
        const currentState = this.state.hof;
        if (currentState) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="offset-md-3 col-md-5">
                            <button className="btn btn-warning form-control" onClick={this.closeHallOfFrame}>Close Hall of Frame</button>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="offset-md-3 col-md-5">
                        <button className="btn btn-warning form-control" onClick={this.seeHallOfFrame}>See Hall of Frame</button>
                    </div>
                </div>
            </div>
        )
    }

    loadHallOfFrame() {
        return new Promise(resolve => {
            this.hofGames = [];
            load().then(res => {
                if (res && res.status === 200) {
                    res.data.forEach(i => {
                        this.hofGames.push(GameResponse.toResponseObject(i))
                    });
                }
                resolve(true);
            })
        })
    }

    seeHallOfFrame = () => {
        this.loadHallOfFrame().then(r => {
            this.setState({hof: true})
        })
    }

    closeHallOfFrame = () => {
        this.setState({hof: false})
    }
}

export default Game