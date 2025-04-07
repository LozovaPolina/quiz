import React from "react";
import './Title.css'
function Title({title,subtitle}) {
	return (
		<div className='title-box'>
			<h2 className="title">{title}</h2>
			<p className="subtitle">{subtitle}</p>
		</div>
	);
}

export default Title;