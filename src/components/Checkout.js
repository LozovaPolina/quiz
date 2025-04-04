import React, {useState} from "react";
import {useElements, useStripe} from "@stripe/react-stripe-js";

function Checkout({amount}) {

	const stripe = useStripe();
	const elements = useElements();
	const [errorMessage, setErrorMessage] = useState();
	const [clientSecret, setClientSecret] = useState("");
	const [loading, setLoading] = useState(false);
	return (
		<div></div>
	);
}

export default Checkout;