import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RollDice from './RollDice';

class App extends Component {
  render() {
    return(
      <RollDice />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
