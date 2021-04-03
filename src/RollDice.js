import React, {Component} from 'react';
import Die from './Die';

const dieVal = ['one', 'two', 'three', 'four', 'five' , 'six'];

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = { die1 : 'one', die2 : 'one'};
        this.roll = this.roll.bind(this);
    }

    static defaultProps = {
        dieVal:
        ['one', 'two', 'three', 'four', 'five' , 'six']
    }

    roll() {
        let randIdx1 = Math.floor(Math.random() * dieVal.length);
        let randIdx2 = Math.floor(Math.random() * dieVal.length);

        this.setState({ die1 : dieVal[randIdx1], die2 : dieVal[randIdx2]});
    }

    render() {
        return(
            <div>
                <div className = "RollDice-dice">
                    <Die display1 = {this.state.die1} display2 = {this.state.die2} />
                </div>
                
                <button onClick = {this.roll} className = "RollDice-button">RollDice!</button>
            </div>
        )
    }
}

export default RollDice;