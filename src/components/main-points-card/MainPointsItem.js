import React from "react";
import './MainPoints.css'
function MainPointsItem({item}) {
	const {img, title,text} = item;
	return (
		<div className='card-item'>
			<div className="card-image">
				<img src={img} alt="card"/>
			</div>
			<div className="card-content">
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	);
}

export default MainPointsItem;