import React, {useEffect} from "react";

import {useQuiz} from "../contexts/QuizContext";
import Main from "../components/Main";
import Loader from "../components/Loader";
import Error from "../components/Error";
import './QuizStartPage.css'
import {useNavigate} from "react-router";
import CardImage from "../components/CardImage";
import cardImg from "../assets/img/first-card.avif";
import cardImg_2 from "../assets/img/second-card.avif";
import cardMiniImg from "../assets/img/cards-min.avif";
import Title from "../components/Title";
import MainPoints from "../components/main-points-card/MainPoints";
import CountriesList from "../components/countries-avarege/ContiriesList";
import IQRange from "../components/iq-range/IQRange";
function QuizStartPage() {
	const {numQuestions, dispatch, status,gender,age} = useQuiz();
	const navigate = useNavigate()


	useEffect(() => {

		if (gender !== null && age !== null) {
			navigate('/answer/email')
		} else if( status === 'finished' && gender === null) {
			navigate("/gender");
		}
	}, [status]);

	return (
		<div className="app">
			<Main>
				<div className="start">
					<div className="start_header">
						<div className="">
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
							{(status === "ready" || status === "active") && <button
								className="btn btn-ui"
								onClick={() => {
									dispatch({type: "start"});
									navigate("/quiz");
								}}
							>
								Let's start
							</button>}
						</div>
						<CardImage image={cardImg}>

							<img src={cardMiniImg} className="card-mini-img" alt="cards"/>
						</CardImage>

					</div>

					<Title title='Main Points' subtitle='The Quick IQ Test assesses different facets of your intelligence and personality, offering insights on areas for potential improvement'/>
					<MainPoints/>
					<Title title='Try our IQ test challenge right now!'  subtitle='Find out how smart you are with this 30-question IQ challenge that will test your cognitive abilities and provide valuable insights into your intellectual prowess'/>
					<div className="analytics">
						<div className="analytics_card">
							<span>108</span>
							<div className='analytics_card-text'> average IQ score today</div>
						</div>
						<div className="analytics_card">
							<span>138</span>
							<div  className='analytics_card-text'>highest IQ score today</div>
						</div>
						<div className="analytics_card">
							<span>1802</span>
							<div className='analytics_card-text'> people took the test today
							</div>
						</div>

					</div>
					{(status === "ready" || status === "active") && <button
						className="btn btn-ui"
						onClick={() => {
							dispatch({type: "start"});
							navigate("/quiz");
						}}
					>
						 Start IQ test
					</button>}
				</div>
				<section className="average">
					<CardImage image={cardImg_2}>
					</CardImage>
					<Title title='Average IQ Scores by Country'

					       subtitle='The data presented offers a comparative analysis of intelligence levels around the world, providing insight into the global distribution of cognitive abilities'/>
					<CountriesList/>
				</section>
				<section className="range">
					<Title title='IQ Distribution in General Population' subtitle='We can observe the distribution of different intellectual capacities within society and discern statistical trends when evaluating the intelligence of the population'/>
					<IQRange/>
				</section>
			</Main>
		</div>
	);
}


export default QuizStartPage;