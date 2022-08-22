import React, { Component } from "react";

class EndGame extends Component {
  EndGame = () => {
    this.props.EndGame();
  };
  render() {
    return (
      <div>
        <button className="end-btn" onClick={this.EndGame}>
          End Game{" "}
        </button>
      </div>
    );
  }
}

export default EndGame;
