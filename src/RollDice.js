import React, {Component} from 'react';
import Die from './Die';

class RollDice extends Component {
    // Constructor function and state initializtaion
    constructor(props) {
        super(props);
        this.state = { die1 : 'one', die2 : 'one'};
        this.roll = this.roll.bind(this);
    }

    // default props
    static defaultProps = {
        dieSides:
        ['one', 'two', 'three', 'four', 'five' , 'six']
    }

    // generating random die sides using default props and updating state
    roll() {
        let randIdx1 = Math.floor(Math.random() * this.props.dieSides.length);
        let randIdx2 = Math.floor(Math.random() * this.props.dieSides.length);

        this.setState({ die1 : this.props.dieSides[randIdx1], die2 : this.props.dieSides[randIdx2]});
    }

    // passing updated die side
    render() {
        return(
            <div className = "RollDice">
                    <Die display = {this.state.die1} />
                    <Die display = {this.state.die2} />

                    {/* Handling button click */}
                    <button onClick = {this.roll} className = "RollDice-button">Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;