import React from "react";
import QuizContStyled from "./components/styles/QuizCont.styled"
import GlobalStyles from "./components/styles/Global";
import Flex from "./components/styles/Flex";

const Quiz = () => {
  return (
    <>
      <GlobalStyles />
      <Flex>
        <QuizContStyled>
          <h1>Hello</h1>
        </QuizContStyled>
      </Flex>
    </>
  );
};

export default Quiz;
