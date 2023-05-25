import "./App.css";
import GlobalStyles from "./components/styles/Global";
import StyledContainer from "./components/styles/Container.styled.js";
import HomeButton from "./components/homeButton";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <h1 style={{marginTop: ""}}>Quiz</h1>
        <h4>Check your genereal knolwedge here</h4>
        <HomeButton onClick={() => {}} />
      </StyledContainer>
    </>
  );
}

export default App;
