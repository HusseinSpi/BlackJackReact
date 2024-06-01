import { RULES } from "./data-rules";

export default function Rules() {
  return (
    <ul>
      {RULES.map((rule, index) => (
        <li key={index}>{rule.description}</li>
      ))}
    </ul>
  );
}
