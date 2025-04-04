import React from "react";
import FormEmail from "../../components/form-email/FormEmail";
import secureImg from '../../assets/img/secure.png'
import './FormEmailPage.css'
function FormEmailPage() {
	return (
		<div className='form_section'>
			<h1>Enter your email to get </h1>
			<h2>your IQ test</h2>
			<p>We'll send the report to the email blow</p>
			<FormEmail/>

			<div className="form_secure">
				<img src={secureImg} alt='secure icon'/>
				<p>We respect your privacy and are committed to protecting your personal data. We will email you access to your plan for your convenience</p>
			</div>
		</div>
	);
}

export default FormEmailPage;