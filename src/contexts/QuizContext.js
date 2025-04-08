import { createContext, useContext, useReducer, useEffect } from "react";
import {QUESTION_LINK} from "../util/http";

const QuizContext = createContext();

const SECS_PER_QUESTION = 360;


const initialState = {
  questions: [],
  // 0 - female, 1 - male,
  gender: null,
  // 0 -(18-24), 1 - (25-34), 2-(35-44),3-(45-60),4-(60+)
  age: null,
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: [],
  points: 0,
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
        // answer: Array.from({length: state.questions.length }).fill(' ')
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
        seconds: state.questions.length * SECS_PER_QUESTION
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      const copyArray  = [...state.answer]
      if(copyArray.length === 0) {
        copyArray.push(action.payload)
      } else  {
        copyArray[state.index] = action.payload;
        console.log(copyArray)
      }

      return {
        ...state,
        answer: copyArray,
      };
    case "nextQuestion":
      console.log('hi')
      return { ...state, index: state.index + 1, };
    case "prevQuestion":
      return { ...state, index: state.index - 1,  };
    case "finish":
      const pointsSum = state.answer.reduce((acc,cur,i) => {
        return cur === state.questions[i].correct_option // Check if the selected answer is correct
            ? acc + state.questions[i].score // Add the question's points if correct
            : acc;
      }, 0)
      return {
        ...state,
        status: "finished",
        points: pointsSum,
        seconds: state.seconds -state.secondsRemaining
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
    { questions, status, index, answer, points,  secondsRemaining,age,gender,paymentPlan,seconds },
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
      age,
      gender,
      paymentPlan,seconds
    };

    localStorage.setItem("quizState", JSON.stringify(stateToSave));
  }, [
    questions,
    status,
    index,
    answer,
    points,
    secondsRemaining,
    age,
    gender,
    paymentPlan,seconds
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
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        age,
        gender,
        dispatch,
        paymentPlan,
        seconds
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
