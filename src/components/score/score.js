import React, { Component } from "react";

class Score extends Component {
  render() {
    const { score } = this.props;
    let currentClass = "";
    if (score >= 80) currentClass = "hight";
    else if (score < 80 && score >= 50) currentClass = "medium";
    else currentClass = "low";
    return (
      <div>
        <h2>Score : </h2>
        <p className={`score ${currentClass}`}>{score}</p>
      </div>
    );
  }
}

export default Score;
