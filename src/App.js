import "./App.css";
import GlobalStyles from "./components/styles/Global";
import StyledContainer from "./components/styles/Container.styled.js";
import HomeButton from "./components/homeButton";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./Quiz.js");
  };

  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <h1>Quiz</h1>
        <h4>Check your genereal knolwedge here</h4>
        <HomeButton handleClick={handleClick} />
      </StyledContainer>
    </>
  );
}

export default App;
