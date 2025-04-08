import { useQuiz } from "../contexts/QuizContext";
import {useEffect, useState} from "react";
let timeoutId;
function Options({ question }) {
  const { dispatch, answer,index,numQuestions } = useQuiz();
    const [timeoutId, setTimeoutId] = useState(null);

    const onClickHandler = (i) => {
        if (timeoutId) {
            clearTimeout(timeoutId);  // Clear the previous timeout if it exists
        }

        dispatch({ type: "newAnswer", payload: i + 1 });


        if (index === numQuestions - 1) {
            return dispatch({ type: "finish" });
        }



        const id = setTimeout(() => {
            dispatch({ type: "nextQuestion" });

        }, 500);

        setTimeoutId(id);  // Save the timeoutId to state
    };
    console.log(question.correct_option )
  return (
      <>
        <p className={'options_text'} >Select the answer:</p>
        <div className="options">

          {[question.option_1,question.option_2,question.option_3,question.option_4].map((option, i) => (
              <div
                  className={`btn-image btn-option img-option ${i === answer[index] - 1 ? "answer" : ""}`}
                  key={option}
                  onClick={() => onClickHandler(i)}
              >
                  <img src={option} alt='option'/>
              </div>
          ))}
        </div>
      </>

  );
}

export default Options;
