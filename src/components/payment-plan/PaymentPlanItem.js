import React from "react";
import './PaymentPlan.css'
import {currencyFormatter} from "../../util/formatting";
function PaymentPlanItem({checked,onChange,plan}) {
	const {popular,costPerDay,durationDays,totalCost,discount,name,id,img} = plan;

	return (
		<div className={`card ${popular ? 'popular' : ''} ${checked && 'selected'}`} onClick={onChange} >
		<div className="card-header">
			<h2>{name}</h2>
			<div className="discount">
				<span>{discount}</span>
			</div>
		</div>
		<div className="card-body">
			<div className="card-body-image">
				<img src={img} alt="brain"/>
			</div>
			<div className="card-body-conten">
				<p className="description">Total Cost: <span>{currencyFormatter.format(totalCost)}</span></p>
				<p className="duration">Duration: {durationDays} Days</p>
				<p className="cost-per-day">Cost per Day: <span>{currencyFormatter.format(costPerDay)}</span></p>
			</div>
		</div>
	</div>

	)
}

export default PaymentPlanItem;