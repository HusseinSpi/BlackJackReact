import "./Dice.css";

export default function Dice({ onNewGame, onRollDice, onHold, dice1, dice2 }) {
  return (
    <div className="dice">
      <button onClick={onNewGame}>🔁 NEW GAME</button>
      <img src={`image/dice-${dice1}.png`} alt={`dice-${dice1}`} />
      <img src={`image/dice-${dice2}.png`} alt={`dice-${dice2}`} />
      <button onClick={onRollDice}>🎲 ROLL DICE</button>
      <button onClick={onHold}>🕹️ HOLD</button>
    </div>
  );
}
