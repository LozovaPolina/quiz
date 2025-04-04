import { useQuiz } from "../../contexts/QuizContext";
import Options from "../Options";
import './Question.css'
function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div key={index} className='question'>
        <div className="question_img_wrap">
            <img src={question.src}  alt={question.alt}/>
        </div>

        <Options question={question}  />
    </div>
  );
}

export default Question;
