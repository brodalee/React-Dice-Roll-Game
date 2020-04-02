import React from "react";
import Dice from "../Dice/Dice";
import './diceGame.css';
import PlayerPanel from "../PlayerPanel/PlayerPanel";

class DiceGame extends React.Component {

    constructor(props) {
        super(props);
        this.game = this.props.game;
        this.state = {
            firstNumber: 1,
            secondNumber: 1,
            currentPlayer: this.game.firstPlayer,
            basket: 0
        };
    }

    changeTurn() {
        if (this.state.currentPlayer === this.game.firstPlayer) {
            this.setState({currentPlayer: this.game.secondPlayer});
        } else {
            this.setState({currentPlayer: this.game.firstPlayer});
        }
    }

    getCurrentPlayer() {
        if (this.state.currentPlayer === this.game.firstPlayer) {
            return this.game.firstPlayer;
        }
        return this.game.secondPlayer;
    }

    getConcurent() {
        if (this.currentPlayer === this.game.firstPlayer) {
            return this.game.secondPlayer;
        }
        return this.game.firstPlayer;
    }

    render() {
        return (
            <div className="container dice">
                <h2 className="text-center">
                    {this.state.currentPlayer.name} its your turn !
                </h2>
                <div className="row">
                    <div className="offset-md-2 col-md-4">
                        <PlayerPanel player={this.game.firstPlayer}/>
                    </div>
                    <div className="col-md-2 text-center" id="ptr">
                        Points to reach: {this.game.points}
                        <br/>
                        Current basket: {this.state.basket}
                    </div>
                    <div className="col-md-4">
                        <PlayerPanel player={this.game.secondPlayer}/>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-5 col-md-2">
                        <Dice number={this.state.firstNumber}/>
                    </div>
                    <div className="col-md-2">
                        <Dice number={this.state.secondNumber}/>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-5 col-md-4">
                        <button onClick={this.rollTheDice} className="form-control btn btn-success">Roll the dice
                        </button>
                        <br/>
                        <button onClick={this.getBasket} className="form-control btn btn-info">Get basket</button>
                    </div>
                </div>
            </div>
        )
    }

    getBasket = () => {
        this.getCurrentPlayer().addAccount(this.state.basket);
        this.setState({basket: 0});
        if (this.getCurrentPlayer().getAccount() >= this.game.points) {
            this.props.game.winner = this.getCurrentPlayer();
            this.props.reset();
        } else {
            this.changeTurn();
        }
    }

    rollTheDice = () => {
        this.getCurrentPlayer().turnPlayed += 1;
        const firstNumber = this.getRandomNumber();
        const secondNumber = this.getRandomNumber();
        let updatedNumberBasket = this.state.basket + firstNumber + secondNumber;
        if (firstNumber === secondNumber) {
            if (firstNumber === 1 || firstNumber === 6) {
                this.changeTurn()
            } else {
                this.getConcurent().bank.bankruptcy();
            }
            updatedNumberBasket = 0;
        }
        this.setState({
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            basket: updatedNumberBasket
        });
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 6) + 1
    }
}

export default DiceGame;