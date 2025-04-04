import React from "react";
import './ErrorPage.css'
import {useNavigate} from "react-router";
function ErrorPage() {
	const navigate = useNavigate()
	return (
		<div className="overlay">
			<div className="error">
				<h2>Oops something went wrong</h2>
				<p className='error-peragraf' onClick={()=> navigate('../')}>Go back</p>
			</div>
		</div>
	);
}

export default ErrorPage;