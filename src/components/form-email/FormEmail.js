import React from "react";
import {useInput} from "../../hooks/useInput";
import Input from "../UI/Input";
import {isEmail, isNotEmpty} from "../../util/validation";
import {POST_EMAIL_LINK,requestConfig} from "../../util/http";
import {useHttp} from "../../hooks/usehttp";
import {useNavigate} from "react-router";
import './FormEmail.css'
function FormEmail() {
	const navigate = useNavigate()
	const {
		value: emailValue,
		handleInputBlur: handleEmailBlur,
		handleInputChange: handleEmailChange,
		hasError: emailHasError,
	} = useInput("", (value) => isEmail(value) && isNotEmpty(value));
	const { data, isLoading, error, sendRequest } =
		useHttp(POST_EMAIL_LINK, requestConfig);


	async function handleSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.target);
		const formData = Object.fromEntries(fd.entries());
		sendRequest(
			JSON.stringify({customer: formData,})
		);
	}

	let actions = (
		<>
			<button type="submit" disabled={true} className="btn btn-form">Send</button>
		</>
	);
	if( emailValue && !error) {
		actions = <button type="submit" disabled={false} className="btn btn-form">Send</button>;
	}

	if (isLoading) {
		actions = <button type="submit" disabled={true} className="btn btn-form">Sending data</button>;
	}

	if (data && !error) {
		return (
			navigate('/')
		);
	}
	return (
		<form onSubmit={handleSubmit}>
			<Input
				label="E-Mail Address"
				type="email"
				id="email"
				placeholder={'📧   Email'}
				onBlur={handleEmailBlur}
				onChange={handleEmailChange}
				value={emailValue}
				error={emailHasError && <p>Please enter a valid email address</p>}
			/>

			<p className={"form-text"}>By continuing you indicste that you've read and agree to our <a>Terms & Conditions</a>, <a>Privacy
				Policy</a> and <a>Subscription Policy</a></p>
			<p className="form-actions">{actions}</p>
		</form>
	);
}

export default FormEmail;