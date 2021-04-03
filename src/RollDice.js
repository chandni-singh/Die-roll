import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    // Constructor function and state initializtaion
    constructor(props) {
        super(props);
        this.state = { die1 : 'one', die2 : 'one', rolling : false};
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

        this.setState({ die1 : this.props.dieSides[randIdx1], 
                        die2 : this.props.dieSides[randIdx2], 
                        rolling : true});
        
        setTimeout(() => {
            this.setState({rolling : false});
        },1000);
    }

    // passing updated die side
    render() {
        return(
            <div className = "RollDice">
                <div className = "RollDice-container">
                    <Die display = {this.state.die1} rolling = {this.state.rolling} />
                    <Die display = {this.state.die2} rolling = {this.state.rolling} />
                </div>

                {/* Handling button click */}
                <button onClick = {this.roll} disabled = {this.state.rolling} className = "RollDice-button">
                    {this.state.rolling ?
                    'Rolling...' :
                    'Roll Dice!'
                    }
                    </button>
            </div>
        )
    }
}

export default RollDice;