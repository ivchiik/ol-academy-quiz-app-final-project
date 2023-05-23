import "./App.css";
import { styled } from "styled-components";

function App() {
  return (
    <StyledHeader>
      <h1>Quiz</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: aqua;
`;

export default App;
