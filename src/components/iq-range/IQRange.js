import React from "react";
import './IQRange.css';
import arrowImg from '../../assets/icon/arrow.svg'
import rangeImg from '../../assets/img/normal-distribution.avif'
const iqRanges = [
	{ range: "Above 144", description: "Highly Gifted" },
	{ range: "130-144", description: "Gifted" },
	{ range: "115-129", description: "Above Average" },
	{ range: "85-114", description: "Average" },
	{ range: "70-84", description: "Below Average" },
	{ range: "Below 70", description: "Lower Extreme" }
];
const IQRange = () => {
	return (
		<div className='range-wrap'>
			<div className="flex-wrap">
				<ul>
					{iqRanges.map((item, index) => (
						<li key={index} className="iq-range-item">
							<div className="iq-range-label">{item.range}</div>
							<img
								alt="Small arrow"
								className="iq-range-arrow"
								src={arrowImg}
							/>
							<div className="iq-range-description">{item.description}</div>
						</li>
					))}
				</ul>

			</div>
			<div className="range_img">
				<img src={rangeImg} alt=""/>
			</div>
		</div>

	);
};

export default IQRange;