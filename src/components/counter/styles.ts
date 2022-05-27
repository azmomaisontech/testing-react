import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 2em 0 0.5em 0;
    font-size: 3em;
  }

  h2 {
    margin-bottom: 0.5em;
    font-size: 3em;
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
