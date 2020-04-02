import React from "react";
import './form.css';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBtnDisabled: true,
            points: [0, 20, 30, 40, 50, 100, 200, 500, 1000]
        };
        this.firstPlayerName = "";
        this.secondPlayerName = "";
        this.points = 0;
    }

    render() {
        return (
            <div className="container" id="form-container">
                <div className="row">
                    <div className="offset-md-3 col-md-5">
                        <input type="text" onChange={this.onFirstPlayerFieldChange} className="form-control"
                               placeholder="first player name"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="offset-md-3 col-md-5">
                        <input type="text" onChange={this.onSecondPlayerFieldChange} className="form-control"
                               placeholder="Second player name"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="offset-md-3 col-md-5">
                        <select onChange={this.onPointFieldChange} className="form-control">
                            {this.state.points.map((point) =>
                                <option key={point} value={point}>{point}</option>
                            )}
                        </select>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="offset-md-3 col-md-5">
                        <button onClick={this.sendValues} disabled={this.state.isBtnDisabled}
                                className="form-control btn btn-primary">Play
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    sendValues = () => {
        this.props.onFormValidate(
            this.firstPlayerName,
            this.secondPlayerName,
            this.points
        );
    }

    updateBtnState() {
        this.setState({
            isBtnDisabled: this.areNamesValid()
        })
    }

    areNamesValid() {
        return !(
            this.firstPlayerName.length >= 3 &&
            this.secondPlayerName.length >= 3 &&
            this.firstPlayerName !== this.secondPlayerName &&
            this.points !== 0
        );
    }

    onPointFieldChange = (event) => {
        event.persist();
        const content = event.target.value;
        this.points = parseInt(content);
        this.updateBtnState();
    }

    onFirstPlayerFieldChange = (event) => {
        event.persist();
        const content = event.target.value;
        this.firstPlayerName = content;
        this.updateBtnState();
    }

    onSecondPlayerFieldChange = (event) => {
        event.persist();
        const content = event.target.value;
        this.secondPlayerName = content;
        this.updateBtnState();
    }
}

export default Form;