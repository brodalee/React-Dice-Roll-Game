import React from "react";
import './dice.css';

class Dice extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {number} = this.props;
        const className = `dice dice-${number}`;
        return (
            <span className={className}></span>
        )
    }
}

export default Dice;