import React, {useEffect} from "react";

import {useQuiz} from "../../contexts/QuizContext";
import {useNavigate} from "react-router";

function AgePage() {
	const {dispatch,age} = useQuiz();
	const navigate = useNavigate();

	function onAgeHandler(age) {
		dispatch({type: "selectAge", payload: age});
		navigate('/answer/analyzer')

	}
	useEffect(()=> {
		if(age !== null ) {
			navigate('/payment')
		}
	},[])
	return (

		<div>
			<h4>What's your age?</h4>
			<div className="options">
				{['18-24', '25-34', '35-44', '25-60', '60+'].map((option, index) => (
					<button
						className={`btn btn_age`}
						key={option}
						onClick={() =>onAgeHandler(option) }
					>
						{option}
					</button>
				))}
			</div>

		</div>
	);
}

export default AgePage;