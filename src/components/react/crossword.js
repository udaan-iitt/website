import React from "react";
import { Component } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import "./styles.css";

const data = {
  across: {
    1: {
        clue: "Birds of a feather flock together, But the question is whether you fear being tickled by a feather",
        answer: "PTERONOPHOBIA",
        row: 0,
        col: 0
    },
    5: {
        clue: "A town supposedly located on the banks of Sarayu river near the Mempi forest",
        answer: "MALGUDI",
        row: 2,
        col: 0
    },
    9: {
        clue: "Scoo___ Doo, Where Are You!.. Wait who ?",
        answer: "BERT",
        row: 5,
        col: 5 
    },
    11: {
      clue: "Hot water appears to freeze faster than cold water",
      answer: "MPEMBA",
      row: 8,
      col: 1
    },
    12: {
        clue: "X-Y position indicator for a display system",
        answer: "MOUSE",
        row: 8,
        col: 10
    },
    13: {
        clue: "Book by Rabindranath Tagore, “The ____” (~destruction)",
        answer: "WRECK",
        row: 10,
        col: 0
    },
    14: {
        clue: "His birth anniversary is celebrated as India’s National Sports Day",
        answer: "DHYANCHAND",
        row: 14,
        col: 3
    }
  },
  down: {
    2: {
        clue: "Name of a popular film series. Works on Faraday's law of electromagnetic induction",
        answer: "TRANSFORMERS",
        row: 0,
        col: 1
    },
    3: {
        clue: "We build too many walls and not enough ____- Isaac Newton",
        answer: "BRIDGES",
        row: 0,
        col: 10
    },
    4: {
        clue: "One of the only words to have all vowels in order",
        answer: "ABSTEMIOUS",
        row: 0,
        col: 12
    },
    6: {
        clue: "A contracting cloud of gas and dust with enough mass to form a star",
        answer: "PROTOSTAR",
        row: 2,
        col: 8
    },
    7: {
        clue: "The Age of Commercial Spaceflight Begins",
        answer: "RESILIENCE",
        row: 2,
        col: 14
    },
    8: {
        clue: "The only Indian with two triple-centuries in Test cricket",
        answer: "SEHWAG",
        row: 4,
        col: 6
    },
    10: {
        clue: "Indian writer who first wrote under the pen name Nawab Rai",
        answer: "PREMCHAND",
        row: 6,
        col: 3
    },
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Crossword data={data} />
        </header>{" "}
      </div>
    );
  }
}

export default App;
