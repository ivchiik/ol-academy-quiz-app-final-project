import { useState, useEffect } from "react";
import QuizContStyled from "./components/styles/QuizCont.styled";
import GlobalStyles from "./components/styles/Global";
import Flex from "./components/styles/Flex";
import "./App";
import Lottie from "lottie-react";
import animationData from "./assets/97832-m5-progress-bar.json";

const Quiz = () => {
  const [data, setData] = useState({});
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [num, setNum] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db"
        );
        const jsonData = await response.json();
        setData(jsonData);
        setQuestions(jsonData.questions);
        setAnswers(jsonData.answers);
        setNum(jsonData.questions[0].id);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Save data to local storage
  localStorage.setItem("myData", JSON.stringify(data));

  // Set an expiration time (e.g., 5 minutes from now)
  const expirationTime = new Date().getTime() + 10 * 60 * 1000;

  // Save the expiration time in local storage
  localStorage.setItem("expirationTime", expirationTime);

  // Check if the data has expired
  const currentTime = new Date().getTime();
  const savedExpirationTime = localStorage.getItem("expirationTime");

  if (currentTime > savedExpirationTime) {
    // Data has expired, remove it from local storage
    localStorage.removeItem("myData");
    localStorage.removeItem("expirationTime");
  }

  useEffect(() => {
    console.log(questions);
    console.log(answers);
  }, [questions, answers]);

  console.log(num);
  return (
    <>
      <GlobalStyles />
      <Flex>
        <QuizContStyled>
          <div style={{ display: "flex", flexDirection: "column", flex: 2 }}>
            {questions
              .filter(({ id, type, question, options }) => id === num)
              .map(({ id, type, question, options }) => (
                <div key={id}>
                  <h3 style={{ marginLeft: "0.8em" }}>{question}</h3>
                  {options &&
                    options.map((item) => (
                      <div key={item}>
                        <button id="btnQuiz">{item}</button>
                      </div>
                    ))}
                </div>
              ))}
          </div>
          <Lottie animationData={animationData} style={{ width: "40%" }} />
          <button
            id="btnNext"
            onClick={() => {
              setNum(num + 1);
            }}
          >
            Next
          </button>
        </QuizContStyled>
      </Flex>
    </>
  );
};

export default Quiz;
