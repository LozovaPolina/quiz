import React from "react";

import './CardImage.css'

import  backgroundCardImg from '../assets/img/background-card.avif'
function CardImage({image, children}) {
	return (
		<div className="start_images_wrap">
			<div className="start_images">
				<img className="img_card" src={image} alt="card"/>
				<img src={backgroundCardImg} alt="" className="img_card_bg"/>
			</div>
			{children}
		</div>
	);
}

export default CardImage;