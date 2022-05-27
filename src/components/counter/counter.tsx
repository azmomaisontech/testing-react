import React from "react";
import { AddContainer, CounterWrapper } from "./styles";

export default function Counter() {
  const [increment, setIncrement] = React.useState(1);
  const [count, setCount] = React.useState(0);

  return (
    <CounterWrapper>
      <h1>My Counter</h1>
      <h2 style={{ color: count > 100 ? "green" : undefined }}>{count}</h2>
      <AddContainer>
        <button onClick={() => setCount((count) => count - increment)}>
          <span>-</span>
        </button>
        <input
          type="number"
          name="increment"
          value={increment}
          onChange={(e) => setIncrement(Number(e.target.value))}
        />
        <button onClick={() => setCount((count) => count + increment)}>
          <span>+</span>
        </button>
      </AddContainer>
    </CounterWrapper>
  );
}
