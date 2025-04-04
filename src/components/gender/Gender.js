import React from "react";
import {useQuiz} from "../../contexts/QuizContext";
import {useNavigate} from "react-router";
import './Gender.css'
function Gender() {
	const { dispatch } = useQuiz();
	const navigate =useNavigate()
	function onGenderSelect(gender) {
		dispatch({type: 'selectGender', payload:gender });
		navigate('/answer/age')
	}
	return (
		<div className="gender">
			<div className="gender_item" onClick={() => onGenderSelect('male')}>
				<div className="gender__image">
					<img src="" alt=""/>
				</div>
				<h3>Male</h3>
			</div>

			<div className="gender_item"  onClick={() => onGenderSelect('female')}>
				<div className="gender__image">
					<img src="" alt=""/>
				</div>
				<h3>Female</h3>
			</div>
		</div>
	);
}

export default Gender;