import React, { Component } from "react";
import Letter from "../letter/letter";
class Letters extends Component {
  render() {
    return (
      <div>
        <h3>Available Letters </h3>
        {Object.keys(this.props.letterStatus).map((letter) =>
          this.props.letterStatus[letter] ? (
            <Letter key={Math.random()} letter={letter} disabled={true} />
          ) : (
            <Letter
              key={Math.random()}
              letter={letter}
              selectLetter={this.props.selectLetter}
            />
          )
        )}
      </div>
    );
  }
}
export default Letters;
