import { useState } from "react";
import GameInstructions from "./components/gameInstructions/GameInstructions";
import Player from "./components/player/Player";
import Dice from "./components/dice/Dice";
import "./App.css";

export default function App() {
  const sound = new Audio("./sound/diceRoll.mp3");
  const [endGame, setEndGame] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [targetScore, setTargetScore] = useState(0);
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0, currentScore: 0, isWinner: false },
    { name: "Player 2", score: 0, currentScore: 0, isWinner: false },
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  function handleStartGame(score) {
    setTargetScore(score);
    setGameStarted(true);
    setEndGame(false);
  }

  function handleNewGame() {
    setGameStarted(false);
    setEndGame(false);
    setPlayers([
      { name: "Player 1", score: 0, currentScore: 0, isWinner: false },
      { name: "Player 2", score: 0, currentScore: 0, isWinner: false },
    ]);
    setCurrentPlayerIndex(0);
    setDice1(1);
    setDice2(1);
  }

  function handleRollDice() {
    if (endGame) return;

    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);
    sound.pause();
    sound.currentTime = 0;
    sound.play();

    const currentPlayer = players[currentPlayerIndex];

    if (newDice1 === 6 && newDice2 === 6) {
      currentPlayer.currentScore = 0;
      switchPlayer();
    } else {
      currentPlayer.currentScore += newDice1 + newDice2;
    }

    updatePlayer(currentPlayer);
  }

  function handleHold() {
    if (endGame) return;

    const currentPlayer = players[currentPlayerIndex];
    currentPlayer.score += currentPlayer.currentScore;
    currentPlayer.currentScore = 0;

    if (currentPlayer.score === targetScore) {
      currentPlayer.isWinner = true;
      setEndGame(true);
    } else if (currentPlayer.score > targetScore) {
      const otherPlayerIndex = (currentPlayerIndex + 1) % 2;
      players[otherPlayerIndex].isWinner = true;
      setEndGame(true);
    }

    updatePlayer(currentPlayer);
    switchPlayer();
  }

  function updatePlayer(updatedPlayer) {
    const newPlayers = players.map((player, index) =>
      index === currentPlayerIndex ? updatedPlayer : player
    );
    setPlayers(newPlayers);
  }

  function switchPlayer() {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % 2);
  }

  return (
    <main className="container">
      {!gameStarted && <GameInstructions onStartGame={handleStartGame} />}
      <>
        <Player {...players[0]} isActive={currentPlayerIndex === 0} />
        <Player {...players[1]} isActive={currentPlayerIndex === 1} />
        <Dice
          onNewGame={handleNewGame}
          onRollDice={handleRollDice}
          onHold={handleHold}
          dice1={dice1}
          dice2={dice2}
        />
      </>
    </main>
  );
}
