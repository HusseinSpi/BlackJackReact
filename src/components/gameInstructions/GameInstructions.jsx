import { useState } from "react";
import "./GameInstructions.css";

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
        <ul>
          <li>
            In your turn - roll the dice (at least) and accumulate the result in
            "current".
          </li>
          <li>
            You can roll again or click "Hold" to save the points from "current"
            and end the turn.
          </li>
          <li>
            Note! If you get 6-6 - you will lose all points from "current" and
            the turn will go to your opponent.
          </li>
          <li>
            If you managed to reach exactly the target score - you win! If you
            passed it - you lose ...
          </li>
        </ul>
      </div>
      <div className="get-num">
        <h2>Please select a target score</h2>
        <input onChange={handleChange} type="number" min="1" max="100" />
        <button onClick={handleClick}>Start</button>
      </div>
    </div>
  );
}
