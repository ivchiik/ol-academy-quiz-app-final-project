import React from "react";
import QuizContStyled from "./components/styles/QuizCont.styled";
import GlobalStyles from "./components/styles/Global";
import Flex from "./components/styles/Flex";
import "./App";
import Lottie from "lottie-react";
import animationData from "./assets/97832-m5-progress-bar.json";

const Quiz = () => {
  const arr = ["Iva", "Elene", "Giorgi", "Luka"];
  return (
    <>
      <GlobalStyles />
      <Flex>
        <QuizContStyled>
          <div style={{ display: "flex", flexDirection: "column", flex: 2 }}>
            <h3 style={{ marginLeft: "0.8em" }}>1. Whats your name?</h3>
            {arr.map((item) => (
              <div style={{ margin: "0.8em" }}>
                <button id="btnQuiz">{item}</button>
              </div>
            ))}
          </div>
          <Lottie animationData={animationData} style={{ width: "40%" }} />
          <button id="btnNext">Next</button>
        </QuizContStyled>
      </Flex>
    </>
  );
};

export default Quiz;
