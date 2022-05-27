import React from "react";
import { AddContainer, CounterWrapper } from "./styles";

export default function Counter() {
  const [increment, setIncrement] = React.useState(1);
  const [count, setCount] = React.useState(0);

  return (
    <CounterWrapper>
      <h1 data-testid="header-text">My Counter</h1>
      <h2
        data-testid="counter"
        style={{
          color: count > 100 ? "green" : count < -100 ? "red" : undefined,
        }}
      >
        {count}
      </h2>
      <AddContainer>
        <button
          data-testid="minus"
          onClick={() => setCount((count) => count - increment)}
        >
          <span>-</span>
        </button>
        <input
          data-testid="input"
          type="number"
          name="increment"
          value={increment}
          onChange={(e) => setIncrement(Number(e.target.value))}
        />
        <button
          data-testid="plus"
          onClick={() => setCount((count) => count + increment)}
        >
          <span>+</span>
        </button>
      </AddContainer>
    </CounterWrapper>
  );
}
