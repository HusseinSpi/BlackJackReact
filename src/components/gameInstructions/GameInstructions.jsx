import { useState } from "react";
import "./GameInstructions.css";
import Rules from "./Rules";

export default function GameInstructions({ onStartGame }) {
  const [targetScore, setTargetScore] = useState(0);

  function handleClick() {
    if (targetScore >= 50) {
      onStartGame(targetScore);
    } else {
      alert("Please select a target score");
    }
  }

  function handleChange(event) {
    setTargetScore(parseInt(event.target.value));
  }

  return (
    <div className="start">
      <div className="rules">
        <h2>Game Instructions</h2>
        <Rules />
      </div>
      <div className="get-num">
        <h2>Please select a target score</h2>
        <input onChange={handleChange} type="number" min="1" max="100" />
        <button onClick={handleClick}>Start</button>
      </div>
    </div>
  );
}
