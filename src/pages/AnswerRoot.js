import React from "react";
import {useQuiz} from "../contexts/QuizContext";
import {useNavigate} from "react-router";
import {Outlet} from "react-router-dom";
import Main from "../components/Main";

function AnswerRoot() {
	const {status} = useQuiz();
	const navigate = useNavigate();

	if(status !== 'finished') {
		navigate('/')
	}
	return (
		<Main>
			<Outlet/>
		</Main>
	);
}

export default AnswerRoot;