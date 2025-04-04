
import styles from "./MainNavigation.module.css";
import {NavLink} from "react-router-dom";
import {ReactNode} from "react";

//styleMode (desktop || mobile)

function NavigationLinkItem({styleMode ='desktop', text='Home',path="/", additionalStyles='' } ) {

	let linkElem =<NavLink to={path} className={({isActive}) => (!isActive ? styles.navMenu__link : `${styles.navMenu__link_active} `)} >{text}</NavLink>
	if(styleMode === 'mobile' ) {
		linkElem = <NavLink  to={path} className={({isActive}) => (!isActive ? '' : `${styles.navMenuMobile__toggle_active} `) }>
			<label htmlFor="menuCheckbox">{text}</label>
		</NavLink>
	}
	return (
		<li className={additionalStyles}>{linkElem}</li>
	)

}

export default NavigationLinkItem;