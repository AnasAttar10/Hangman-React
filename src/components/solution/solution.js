import React, { Component } from "react";
import Letter from "../letter/letter";

class Solution extends Component {
  generateLetterTage = (word, currentSolution) => {
    let letterTag = [];
    for (const letter of word) {
      letterTag.push(
        currentSolution.includes(letter) ? (
          <Letter
            letter={letter}
            key={Math.random()}
            disabled={true}
            class="answer-true"
          />
        ) : (
          <Letter letter={"-"} key={Math.random()} disabled={true} />
        )
      );
    }
    return letterTag;
  };
  render() {
    const { word } = this.props.solution;
    const { currentSolution } = this.props;

    return (
      <div>
        <p className="hint">{this.props.solution.hint} ?</p>
        <h2>Solution Letters</h2>
        {this.generateLetterTage(word, currentSolution)}
      </div>
    );
  }
}

export default Solution;
