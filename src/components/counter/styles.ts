import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 1em 0;
  }

  h2 {
    margin-bottom: 1em;
    font-size: 2.5em;
  }
`;

export const AddContainer = styled.div`
  input {
    padding: 0.5em;
    text-align: center;
  }
  button {
    padding: 0.5em;
  }
`;
