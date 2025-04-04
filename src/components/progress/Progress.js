import { useQuiz } from "../../contexts/QuizContext";
import './Progress.css'
function Progress() {
  const { index, numQuestions, answer } = useQuiz();
    const {dispatch} =useQuiz()
  return (
      <header className="progress">

          <progress max={numQuestions} value={index + Number(answer !== null)}/>

          <button className={'progress_btn'} disabled={index === 0} onClick={() =>dispatch({type: 'prevQuestion'}) }>
              <strong>Back</strong>
          </button>
          <p>
              Question <strong>{index + 1}</strong> / {numQuestions}
          </p>


      </header>
  );
}

export default Progress;
