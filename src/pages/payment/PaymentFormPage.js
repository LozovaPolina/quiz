import React, {useEffect, useState} from "react";
import {useQuiz} from "../../contexts/QuizContext";
import {plans} from "../../payment-plan";
function PaymentFormPage({}) {
	const {paymentPlan} = useQuiz();

	const  totalCost = plans.find(item => item.id === paymentPlan).totalCost;

	return (
		<div>

			hi
		</div>
	);
}

export default PaymentFormPage;