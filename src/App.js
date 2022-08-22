import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./components/score/score";
import Letters from "./components/letters/letters";
import Solution from "./components/solution/solution";
import EndGame from "./components/EndGame/EndGame";
class App extends Component {
  constructor() {
    super();
    this.state = {
      solution: {
        word: "SPAIN",
        hint: "2010 World Cup Champion",
      },
      score: 0,
      selectedLetter: false,
      currentSolution: "",
      letterStatus: this.generateLetterStatuses(),
    };
  }

  generateQuestionsAndSolutions = () => {
    let questions = [];
    let solutions = [];
  };
  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  checkResult = (letter) => {
    let word = this.state.solution.word;
    let score = this.state.score;
    if (word.includes(letter)) {
      let currentSolution = this.state.currentSolution;
      score += 20;
      currentSolution += letter;
      this.setState({
        currentSolution,
        score,
      });
    } else {
      score -= 5;
      this.setState({
        score,
      });
    }
  };

  selectLetter = (letter) => {
    let letterStatus = { ...this.state.letterStatus };
    letterStatus[letter] = true;
    this.setState({
      letterStatus,
    });
    this.checkResult(letter);
  };

  EndGame = () => {
    this.setState({
      score: 0,
      currentSolution: "",
      letterStatus: this.generateLetterStatuses(),
    });
  };
  Congratulations = () => {
    let solutionLength = this.state.solution.word.length;
    let currentSolutionLength = this.state.currentSolution.length;
    if (solutionLength === currentSolutionLength) alert("Congratulations");
  };
  render() {
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution
          solution={this.state.solution}
          currentSolution={this.state.currentSolution}
        />
        <Letters
          letterStatus={this.state.letterStatus}
          selectLetter={this.selectLetter}
        />
        <EndGame EndGame={this.EndGame} />
        {this.Congratulations()}
      </div>
    );
  }
}

export default App;
