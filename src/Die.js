import  React, {Component} from 'react';

class Die extends Component {

    render() {
        let baseClass = "fas fa-dice-";

        let die1Display = `${baseClass}${this.props.display1}`;
        let die2Display = `${baseClass}${this.props.display2}`;

        return(
            <div className = "Die">
                <i className = {die1Display}></i>
                <i className = {die2Display}></i>
            </div>
        )
    }
}

export default Die;