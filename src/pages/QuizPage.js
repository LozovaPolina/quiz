import React, {useEffect} from "react";
import Main from "../components/Main";
import Timer from "../components/Timer";
import Progress from "../components/progress/Progress";
import Question from "../components/question/Question";
import {useNavigate} from "react-router";
import {useQuiz} from "../contexts/QuizContext";


function QuizPage() {
	const navigate = useNavigate()
	const {status,questions} = useQuiz()

	useEffect(() => {
		if (status === "finished") {
			navigate("/answer/gender"); // Redirect to results page
		}
		if (status === 'loading') {
			navigate('/')
		}
	}, [status, navigate]);
	return (
		<Main>
			{ status !=='loading' && status !== 'finished' && questions &&
				<>
					<Timer/>
					<Progress/>
					<Question/>
				</>
			}

		</Main>
	);
}

export default QuizPage;