import "./Player.css";

export default function Player({
  name,
  score,
  currentScore,
  isWinner,
  isActive,
}) {
  return (
    <div
      className={`player ${isWinner ? "winner" : ""} ${
        isActive ? "" : "notActive"
      }`}
    >
      <h1>{name}</h1>
      <h1 className="scoreNum">{score}</h1>
      {isWinner && <h2 className="textWin">Winner!</h2>}
      <div className="score">
        <h2>Current</h2>
        <h2>{currentScore}</h2>
      </div>
    </div>
  );
}
