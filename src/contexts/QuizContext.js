import { createContext, useContext, useReducer, useEffect } from "react";
import {QUESTION_LINK} from "../util/http";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;


const initialState = {
  questions: [],
  gender: null,
  age: null,
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: [],
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  paymentPlan: ''
};

function getInitialState() {
  const stored = localStorage.getItem("quizState");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse localStorage data:", e);
    }
  }
  return initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case "selectGender":
      return {
        ...state,
        gender: action.payload,

      };
    case "selectAge":
      return {
        ...state,
        age: action.payload,

      };
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      const copyArray  =[...state.answer]
      copyArray[state.index] = action.payload;
      return {
        ...state,
        answer: copyArray,

      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, };
    case "prevQuestion":
      return { ...state, index: state.index - 1,  };
    case "finish":
      const pointsSum = state.answer.reduce((acc,cur,i) => {
        return cur === state.questions[i].correctOption // Check if the selected answer is correct
            ? acc + state.questions[i].points // Add the question's points if correct
            : acc;
      }, 0)
      return {
        ...state,
        status: "finished",
        points: pointsSum,
        // highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    case 'paymentPlan':
      return {
        ...state,
        paymentPlan: action.payload
      }
    default:
      throw new Error("Action unkonwn");
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining,age,gender,paymentPlan },
    dispatch,
  ] = useReducer(reducer, getInitialState());

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  useEffect(() => {
    const stateToSave = {
      status,
      questions,
      index,
      answer,
      points,
      highscore,
      age,
      gender,
      paymentPlan
    };

    localStorage.setItem("quizState", JSON.stringify(stateToSave));
  }, [
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
    age,
    gender,
    paymentPlan
  ]);
  useEffect(function () {
    fetch(QUESTION_LINK)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        age,
        gender,
        dispatch,
        paymentPlan
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
