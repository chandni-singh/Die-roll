import  React, {Component} from 'react';
import './Die.css'

class Die extends Component {

    render() {

        let dieDisplay = `fas fa-dice-${this.props.display}`;

        return(
            <div className = "Die">
                <i className = {dieDisplay}></i>
            </div>
        )
    }
}

export default Die;