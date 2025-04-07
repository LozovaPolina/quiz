import React from "react";
import cardImg_1 from '../../assets/img/1.avif'
import cardImg_2 from '../../assets/img/2.avif'
import cardImg_3 from '../../assets/img/3.avif'
import MainPointsItem from "./MainPointsItem";
const cads = [
	{title: '30 progressive IQ questions',text: "In this IQ test, you'll face 30 thoughtfully designed questions that challenge your intellect with increasing complexity", img: cardImg_1},
	{title: '6 choices, 1 correct answer',text: "For each question, you'll have six options to choose from, elevating your decision-making process to be more thought-provoking",img:cardImg_2},
	{title: 'Skip and return at your pace',text: "Don't worry if a question stumps you initially. You can skip a question and return to it later, ensuring a comfortable testing experience",img: cardImg_3}
]
function MainPoints() {
	return (
		<section className='main-points'>
				{cads.map(card =><MainPointsItem item={card}/>)}
		</section>
	);
}

export default MainPoints;