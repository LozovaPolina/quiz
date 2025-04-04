import React, {useEffect,useState} from "react";
import './MultiStepProgress.css'
import {useNavigate} from "react-router";
const progressText = [
	'Analyzing your answer',
	'Calculating your IQ score',
	'Preparing your IQ report',
]
const progressQuestion = [
	'Did you get distracted while taking the test? ',
	'Do you want to compare your result with our other users?',
	'Do you want to track your progress over time?',
]
function MultiStepProgress() {
	const [progressBars, setProgressBars] = useState([0, 0, 0]); // Track progress for each bar
	const [currentBar, setCurrentBar] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [answered, setAnswered] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (progressBars[currentBar] < 100 && !showModal) {
			const interval = setInterval(() => {
				setProgressBars((prev) => {
					const newProgress = [...prev];
					newProgress[currentBar] += 2;

					if (newProgress[currentBar] >= 50 && !answered) {
						setShowModal(true);
						clearInterval(interval);
						return newProgress;
					}

					if (newProgress[currentBar] >= 100) {
						clearInterval(interval);
						setTimeout(() => {
							// Move to next bar once current bar reaches 100%
							if (currentBar < 2) {
								setCurrentBar(currentBar+1);
								setAnswered(false); // Reset answered state
							}
							if (currentBar === 2) {
								navigate('/answer/email')
							}
						}, 500);
					}

					return newProgress;
				});
			}, 50);

			return () => clearInterval(interval);
		}
	}, [progressBars, currentBar, showModal, answered]);

	const handleAnswer = () => {
		setShowModal(false);
		setAnswered(true);
	};

	return (
	<div className='progress-section'>
		{progressBars.map((progress, index) => (
			<div key={index} className="progress-bar-container">
				<div className="progress-label">{progress} %</div>
				<div className="progress-label-text">{progressText[index]} </div>
				<div className="progress-bar-bg">
					<div
						className={`progress-bar-fill ${
							progress === 100 ? "completed" : "ongoing"
						}`}
						style={{
							width: `${progress}%`,
						}}
					></div>
				</div>
			</div>
		))}

		{showModal && (
			<div className="modal-overlay">
				<div className="modal-box">
					<p style={{fontSize: "12px", marginBottom: "6px", color: '#cacaca'}}>
						To move forward , please specify
					</p>
					<p style={{fontSize: "18px", marginBottom: "20px"}}>
						{progressQuestion[currentBar]}
					</p>
					<div className="modal-btn-box">
						<button className="modal-button" onClick={handleAnswer}>
							Yes
						</button>
						<button className="modal-button" onClick={handleAnswer}>
							No
						</button>
					</div>

				</div>
			</div>
		)}
	</div>
	);
}

export default MultiStepProgress;