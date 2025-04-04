
import NavigationLinkItem from "./NavigationLinkItem.js";
import styles from './MainNavigation.module.css'

import NavigationLogo from "./NavigationLogo.js";
function MobileNav() {
	return (
		<nav className={styles.navMenuMobile}>
			<div className={styles.navMenuMobile__wrap}>
				<NavigationLogo />
				<div className={styles.navMenuMobile__toggle}>

					<input type="checkbox" id="menuCheckbox"/>
					<span></span>
					<span></span>
					<span></span>

					<ul className={styles.navMenuMobile__menuList}>
						<NavigationLinkItem styleMode={'mobile'} text={'Terms & Conditions'} path={"/r"}/>
						<NavigationLinkItem styleMode={'mobile'} text={'Privacy Policy'} path={"/r"}/>
						<NavigationLinkItem styleMode={'mobile'} text={'Subscription Policy'} path={"/r"}/>
						<NavigationLinkItem  styleMode={'mobile'} text={'Contact Us'} path={"/use-"}/>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default MobileNav;