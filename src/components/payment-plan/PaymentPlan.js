import React, {useState} from "react";
import PaymentPlanItem from "./PaymentPlanItem";
import './PaymentPlan.css'
import secureImg from '../../assets/img/secure.png'
import {useNavigate} from "react-router";
import {useQuiz} from "../../contexts/QuizContext";
import {plans} from "../../payment-plan";

function PaymentPlan() {

	const [itemChecked , setItemChecked] = useState("plan-4w");
	const navigate  = useNavigate();
	const {dispatch} = useQuiz();
	function  onItemCheckedHandler(id) {
		setItemChecked(id)
	}
	function onSubmitFunction () {
		navigate('payment-form');
		dispatch({type: 'paymentPlan', payload: itemChecked});
	}
	return (
		<section className='payment-section'>


			<form className="payment_plan">
				<div className="payment_plan__radio-block">
					{plans.map(item => <PaymentPlanItem id={item.id} key={item.id} checked={item.id === itemChecked}
					                                    onChange={() => onItemCheckedHandler(item.id)} plan={item}/>)}
				</div>

				<button onClick={onSubmitFunction} className={'btn btn-form'} type={'button'}>Continue</button>
			</form>
			<div className="payment-note">

				<p className="payment-note_text">Please note that, without cancellation, before the selected discounted
					intro plan ends, your subscription will be automatically renewed every 4 weeks at the full price of
					$39.98 until you cancel. If you want to manage your subscription, you may do so via your personal
					account.</p>
				<div className="payment-note_image">
					<img src={secureImg} alt="secure"/>
					<span>Pay safe & secure</span>
				</div>
			</div>

		</section>

	);
}

export default PaymentPlan;