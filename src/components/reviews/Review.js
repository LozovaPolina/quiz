import React from "react";
import Star from "./Star";
import './Reviews.css'
function Review({name,title,text,stars=5}) {
	return (
		<div className={"review"}  >
			<div className="stars-box">
				<div className="stars">
					{new Array(stars).fill(0).map((_,i) => <Star key={i} size={15} />)}
				</div>
				<div className="h3">by {name}</div>
			</div>
			<div className="review-content">
				<h4 className="review-title">{title}</h4>
				<p className="review-text">{text}</p>
			</div>
		</div>
	);
}

export default Review;