import React, {useEffect} from "react";
import Gender from "../../components/gender/Gender";
import {useNavigate} from "react-router";
import {useQuiz} from "../../contexts/QuizContext";

function GenderPage() {
	const {gender,status,age} = useQuiz()
	const navigate = useNavigate();
	useEffect(()=> {
		if(gender !== null && status === "finished") {
			navigate('/payment')
		}else if(gender !== null &&  age ===null) {
			navigate('/age')
		}
	},[])
	return (
		<section className="guest_flow">
			<h1>Well done!</h1>
				<h3>You almost here to get your result</h3>
			<h2>Choose your gender</h2>
			<Gender/>
		</section>
	)
}

export default GenderPage
