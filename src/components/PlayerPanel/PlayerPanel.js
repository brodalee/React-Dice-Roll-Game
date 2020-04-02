import React from "react";
import './playerPanel.css';

class PlayerPanel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            player: props.player
        };
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    {this.state.player.name}
                </div>
                <br/>
                <div id="bank" className="text-center">
                    Bank account : {this.state.player.bank.accountContent}
                </div>
                <div id="turn" className="text-center">
                    Turn number : {this.state.player.turnPlayed}
                </div>
            </div>
        );
    }
}

export default PlayerPanel;