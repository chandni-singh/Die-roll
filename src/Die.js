import  React, {Component} from 'react';
import './Die.css'

class Die extends Component {

    render() {
        // generating class name for font awesome icons
        let dieDisplay = `fas fa-dice-${this.props.display}`;

        // Displaying a die with updated side
        return(
            <div className =  {`Die ${this.props.rolling ? 'wobbling' : ''}`}>
                <i className = {dieDisplay}></i>
            </div>
        )
    }
}

export default Die;