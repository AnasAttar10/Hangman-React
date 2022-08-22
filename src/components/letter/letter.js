import React, { Component } from "react";

class Letter extends Component {
  selectLetter = () => {
    this.props.selectLetter(this.props.letter);
  };
  render() {
    return this.props.disabled ? (
      <button className={`{btn-letter ${this.props.class}`} disabled>
        {this.props.letter}{" "}
      </button>
    ) : (
      <button className="btn-letter" onClick={this.selectLetter}>
        {this.props.letter}
      </button>
    );
  }
}

export default Letter;
