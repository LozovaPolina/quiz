import React from "react";
import MultiStepProgress from "../../components/MultiStepProgress";
import './AnalyzerPage.css'

import ReviewCarousel from "../../components/reviews/ReviewCarousel";
import {useQuiz} from "../../contexts/QuizContext";
import {useNavigate} from "react-router";
function AnalyzerPage() {
	const {status,gender,age} = useQuiz()
	const navigate = useNavigate()
	if(status === 'finished' && gender !== null  && age !==null) {
		navigate('/payment')
	} else if (status === 'finished') {
		navigate('gender')
	}
	return (
		<section className={'analyzer'}>
			<h1 className='analyzer__title'>We are analyzing your</h1>
			<h2 className='analyzer_subtitle'> results...</h2>
			<MultiStepProgress/>
			<ReviewCarousel/>
		</section>
	);
}

export default AnalyzerPage;