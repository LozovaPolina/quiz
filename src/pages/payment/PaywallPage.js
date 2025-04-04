import React from "react";
import iqImage from '../../assets/img/iq_test_paywall_top_pic.png'
import './PaywallPage.css'
import PaymentPlan from "../../components/payment-plan/PaymentPlan";
// import Review from "../components/reviews/Review";
import ReviewCarousel from "../../components/reviews/ReviewCarousel";
import iqTestRating from '../../assets/icon/iqTestRating.svg'
import secureImg from '../../assets/img/secure.png'
import {Link} from "react-router-dom";

function PaywallPage() {
	return (

		<section >
			<div className='paywall'>
				<div className="paywall_image">
					<img src={iqImage} alt="iq top"/>
				</div>
				<PaymentPlan/>
				<div className="rating_image">
					<img src={iqTestRating} alt="iq test rating"/>
				</div>
				<ReviewCarousel/>
				<div className="guarantee">

					<img className='guarantee_img' src={secureImg} alt="secure"/>
					<h3 className={'guarantee_title'}>30-day money-back guarantee</h3>
					<p className="guarantee_text">We aim to help you see positive changes within 4 weeks. If you do not notice the expected improvements and can show that you followed the plan, we will refund your payment.</p>

					<p className="guarantee_text">Please refer to our <Link to="money-back">Money-back</Link> policy for more information</p>
				</div>
			</div>
		</section>
	);
}

export default PaywallPage;