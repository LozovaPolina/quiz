import React from 'react';

import  moneyBackPolicy from "../../docs/money_back_policy.pdf"
import Iframe from "../../components/iframe/Iframe";
const MoneyBackPolicyPage = () => {
	return (
			<Iframe src={moneyBackPolicy} title={'Money-back Policy'}/>
	);
};

export default MoneyBackPolicyPage;