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

const data2 = {
  across: {
    3: {
        clue: "This cartoon series about a group of kids who called themselves ‘Gulab Nagar Junglees’, quickly gained popularity leading the producers to launch a game for Android mobile phones.",
        answer: "Howzzattt",
        row: 2,
        col: 0
    },
    4: {
        clue: "Who composed the Shiva Tandav Stotra, which is perhaps the first Sanskrit rap song",
        answer: "Ravana",
        row: 3,
        col: 10
    },
    6: {
        clue: "This island in India is considered as one of the last places untouched by the outside world",
        answer: "Sentinel",
        row: 5,
        col: 8 
    },
    9: {
        clue: "This board game was first created to teach morals and lessons about karma in a way that young children would understand and remember.",
        answer: "SnakesAndLadders",
        row: 10,
        col: 4
    },
    11: {
        clue: "The author of the book that contains the longest sentence having 823 words shares his first name with the protagonist in Mary Shelly’s famous novel.  What’s the author’s surname?",
        answer: "Hugo",
        row: 13,
        col: 14
    },
    12: {
        clue: "The highest rail bridge in the world spans over this river.",
        answer: "Chenab",
        row: 14,
        col: 8
    },
    14: {
      clue: "This everyday item which was used across the country (before lockdown) is made from trillions of microscopic plankton fossils.",
      answer: "Chalk",
      row: 16,
      col: 6

    },
    15: {
      clue: "The only planet in our Solar System that spins clockwise",
      answer: "venus",
      row: 18,
      col: 6

    }

  },
  down: {
    1: {
        clue: "Old technique from Orissa that uses palm leaves for the portrayal of epics and folklore.",
        answer: "Pattachitra",
        row: 0,
        col: 6
    },
    2: {
        clue: "The first book that was written using a typewriter is the story of this orphan who lives in the fictional town of St Petersburg.",
        answer: "TomSawyer",
        row: 1,
        col: 1
    },
    4: {
        clue: "This stepwell that adorns the new 100-rupee note became a UNESCO world heritage Site in 2014.",
        answer: "RaniKiVav",
        row: 3,
        col: 10
    },
    5: {
        clue: "Mark Twain has described this city as ‘older than history, older than tradition, older even than legend and looks twice as old as all of them put together.’",
        answer: "Varanasi",
        row: 4,
        col: 4
    },
    7: {
        clue: "All the professors in pokemon are named after _____",
        answer: "Trees",
        row: 7,
        col: 8
    },
    8: {
      clue: "What was Doremon's original paint colour?",
      answer: "Yellow",
      row: 9,
      col: 17
    },
    10: {
      clue: "Over which water body is the only floating post office of the world situated?",
      answer: "DalLake",
      row: 10,
      col: 12
    },
    13: {
      clue: "At very low temperatures, this gas can flow up against gravity.",
      answer: "Helium",

      row: 14,
      col: 9
    },
  }
};

class App extends Component {
  constructor(props) {
    super(props);
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.version == 1 &&
            <Crossword data={data} />
          }
          {this.props.version == 2 &&
            <Crossword data={data2} />
          }
        </header>{" "}
      </div>
    );
  }
}

export default App;
