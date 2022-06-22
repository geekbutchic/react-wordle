import React, { useState, useEffect } from "react";
import {answerList, wordList} from "./wordleWords"
import './App.css';

const defaultGuessList = [
  ["R", "E", "A", "C", "T"],
  ["R", "E", "A", "C", "T"],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
]

const keyList = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Ent", "Z", "X", "C", "V", "B", "N", "M", "B/S"]
]

function useKeyPress(targetKey, handler) {
  const upHandler = ({ key }) => {
    console.log(key)
    if (key === targetKey) {
      handler(key)
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}

function App() {
  const [wordleGuessList, setWordleGuessList] = useState([...defaultGuessList])
  const [wordleKeyboard, setWordleKeyBoard] = useState([...keyList])
  const [wordleGuessIndex, setWordleGuessIndex] = useState(0)
  const [wordleLetterIndex, setWordleLetterIndex] = useState(0)
  // const [wordleAnswer, setWordleAnswer] = useState(pickWordleAnswer())
  const [gameState, setGameState] = useState("playing")

  const handleKeyPress = (newKey) => {
    console.log("handleKeyPress ", newKey)
  }

  const enterKeyPressed = () => {
    console.log("Enter key pressed")
  }
  useKeyPress("Enter", enterKeyPressed)


  return (
    <div className="App">
      <header className="App-header">
        <WordleHeader />
        </header>
        <div 
        className="App-grid">
        <WordleGrid 
          wordleGuessList={wordleGuessList}
        />
        </div>
        <div
        className="keyboard-grid"
        >
        <KeyboardGrid
          wordleKeyboard={wordleKeyboard}
          handleKeyPress={handleKeyPress}
        />
        </div>
    </div>
  );
}

const WordleHeader = () => {
  return (
    <div>
     Wordle
    </div>
  )
}

const WordleGrid = (props) => {
  // const { wordleGuessList } = props;
  return (
    <div 
    className="wordle-grid"
    >
      {props.wordleGuessList.map((wordleGuess, index)=>{
        return (
          <WordleGridRow 
          key={`${wordleGuess} ${index}`}
          wordleGuess={wordleGuess}
          /> 
        )
      })} 
    </div>
  )
}

const WordleGridRow = (props) => { 
  return (
    <div
    className="wordle-grid-row"
    >
      {props.wordleGuess.map((wordleLetter, index)=>{
        return (
          <WordleGridLetter 
          key={`${wordleLetter}-${index}`}
          wordleLetter={wordleLetter} 
          isCorrect={wordleLetter === "A" || wordleLetter === "E"}/> 
        )
      })}
    </div>
  )
}

const WordleGridLetter = (props) => {
  return (
    <div 
    id={`wordle-grid-letter-${props.wordleLetter}`} 
    className={`wordle-grid-letter wordle-grid-letter-${props.isCorrect}`}
    >
      {props.wordleLetter}
    </div>
  )
}

const KeyboardGrid = (props) => {
  return (
    <div className="keyboard-grid">
      {props.wordleKeyboard.map((keyboardRow, index) => {
        return (  
          <KeyboardRow 
            key={`${keyboardRow}-${index}`}
            keyboardRow={keyboardRow}
            handleKeyPress={props.handleKeyPress}
          />
        )
      })}
    </div>
  )
}

const KeyboardRow = (props) => {
  return (
    <div
      className="keyboard-row"
    >
      {props.keyboardRow.map((letter, index)=>{
        return (
          <KeyboardLetter
            key={`${letter}-${index}`}
            letter={letter}
            handleKeyPress={props.handleKeyPress}
          />
        )
      })}
    </div>
  )
}

const KeyboardLetter = (props) => {
  return (
    <div 
    className="wordle-grid-letter" 
    onClick={()=>{
      props.handleKeyPress(props.letter)
    }}
    >
      {props.letter}
    </div>
  )
}

export default App;
