import styles from "./MainNavigation.module.css";
import logo from "../../assets/img/logo.png";


function NavigationLogo() {
	return (
		<div className={styles.navMenuMobile__logo}>
			<img src={logo} alt={'logo'}/>
		</div>
	);
}

export default NavigationLogo;