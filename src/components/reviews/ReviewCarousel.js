import React, {useEffect,useState} from "react";
import Review from "./Review";
import './Reviews.css'
const reviews = [
	{
		name: "Emily R.",
		stars: 5,
		title: "Challenging Yet Entertaining",
		text: "I loved this IQ test! The questions really made me think, and I enjoyed the mix of logic, math, and pattern recognition. It felt like a fun brain workout rather than just a test. Highly recommended for anyone who loves puzzles!"
	},
	{
		name: "James T.",
		stars: 5,
		title: "Impressive Results",
		text: "I was skeptical at first, but the results were surprisingly accurate. I compared my score with a professionally administered test, and the results were very close. A great way to gauge your problem-solving skills!"
	},
	{
		name: "Sarah L.",
		stars: 4,
		title: "Good but a Bit Frustrating",
		text: "Some of the questions were really tricky, almost too much so. I wish there were clearer explanations at the end. Still, it was a great mental challenge!"
	},
	{
		name: "Mark D.",
		stars: 5,
		title: "Quick and Engaging",
		text: "This test was a great way to pass time while sharpening my thinking skills. I liked that it was quick but still made me think hard. Would love to see more variations!"
	},
];



const ReviewCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fade, setFade] = useState(false);
	useEffect(() => {
		const interval = setInterval(() => {
			setFade(true); // Trigger fade-out animation
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
				setFade(false); // Trigger fade-in animation
			}, 500); // Time for fade-out effect
		}, 5000); // Change review every 2 sec

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<h3 className='review-main-title'>More then 8 million</h3>
			<h2 className='review-main-subtitle'>IQ test taken</h2>
			<section className={`review-container ${fade ? "fade-out" : "fade-in"}`}>
				<Review
					text={reviews[currentIndex].text}
					name={reviews[currentIndex].name}
					title={reviews[currentIndex].title}
					stars={reviews[currentIndex].stars}
				/>
			</section>
		</>

	);
};

export default ReviewCarousel;
