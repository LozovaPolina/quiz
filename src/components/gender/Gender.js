import React from "react";
import {useQuiz} from "../../contexts/QuizContext";
import {useNavigate} from "react-router";
import img_Female from '../../assets/icon/img_Female.svg'
import img_Male from '../../assets/icon/img_Male.svg'
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
			<div className="gender_item" onClick={() => onGenderSelect('F')}>
				<div className="gender__image">
					<img src={img_Female} alt="female"/>
				</div>
				<h3>Male</h3>
			</div>

			<div className="gender_item"  onClick={() => onGenderSelect('M')}>
				<div className="gender__image">
					<img src={img_Male} alt="male"/>
				</div>
				<h3>Female</h3>
			</div>
		</div>
	);
}

export default Gender;