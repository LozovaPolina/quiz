import React, {useEffect} from "react";

import {useQuiz} from "../contexts/QuizContext";
import Main from "../components/Main";
import Loader from "../components/Loader";
import Error from "../components/Error";
import './QuizStartPage.css'
import {useNavigate} from "react-router";

function QuizStartPage() {
	const {numQuestions, dispatch, status,gender,age} = useQuiz();
	const navigate = useNavigate()


	useEffect(() => {

		if (gender !== null && age !== null) {
			navigate("/payment");
		} else if( status === 'finished' && gender === null) {
			navigate("/gender");
		}
	}, [status]);

	return (
		<div className="app">
			<Main>
				<div className="start">
					<h1>An accurate IQ test taken by 8 million people</h1>
					<p>Discover your IQ -Take the test now!</p>
					<h2>1 minute quiz </h2>

					<ul>
						<li className="startListItem">{numQuestions ?? 30} questions</li>
						<li className="startListItem"> Official IQR™ Certified IQ Test</li>
						<li className="startListItem"> IQ Certificate and Detailed Performance Report</li>
					</ul>
					{status === "loading" && <Loader/>}
					{status === "error" && <Error/>}
					{(status === 'ready' || status === 'active') && <button
						className="btn btn-ui"
						onClick={() => {
							dispatch({type: "start"})
							navigate('/quiz')
						}}
					>
						Let's start
					</button>}

				</div>
			</Main>
		</div>
	);
}




export default QuizStartPage;