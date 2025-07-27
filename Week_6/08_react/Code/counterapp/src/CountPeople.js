import React, { Component } from 'react';
import './App.css';

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry() {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  updateExit() {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="counter-box">
          <button onClick={() => this.updateEntry()}>Login</button>
          {this.state.entrycount} People Entered!!!
        </div>

        <div className="counter-box">
          <button onClick={() => this.updateExit()}>Exit</button>
          {this.state.exitcount} People Left!!!
        </div>
      </div>
    );
  }
}

export default CountPeople;