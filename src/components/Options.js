import { useQuiz } from "../contexts/QuizContext";
import {useEffect} from "react";
let timeoutId;
function Options({ question }) {
  const { dispatch, answer,index,numQuestions } = useQuiz();


    function onClickHandler(i) {
        if (timeoutId) {
            clearTimeout(timeoutId);  // Clear the previous timeout if it exists
        }
        if(index === numQuestions - 1) {
           return  dispatch({ type: "finish" })
        }
        timeoutId = setTimeout(() => {
            dispatch({ type: "nextQuestion" });
        },500)

        dispatch({type: "newAnswer", payload: i});

    }


  return (
      <>
        <p className={'options_text'} >Select the answer:</p>
        <div className="options">

          {question.options.map((option, i) => (
              <div
                  className={`btn btn-option ${i === answer[index] ? "answer" : ""}`}
                  key={option}
                  onClick={() => onClickHandler(i)}
              >
                  <img src={option.src} alt={option.alt}/>
              </div>
          ))}
        </div>
      </>

  );
}

export default Options;
