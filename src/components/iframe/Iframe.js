import React from "react";
import moneyBackPolicy from "../../docs/money_back_policy.pdf";

function Iframe({src,title}) {

	return (
		<div>
			<h1>{title}</h1>
			<iframe
				src={src}
				width="100%"
				height="600px"
				title={<title></title>}
			></iframe>
		</div>
	);
}

export default Iframe;