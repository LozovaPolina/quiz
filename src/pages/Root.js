
import { Outlet} from "react-router-dom";
import MainNavigation from "../components/nav-menu/MainNavigation";

import Main from "../components/Main";
import {useEffect} from "react";
import {useNavigate} from "react-router";


function Root() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate(".", { replace: true }); // Replaces the current history entry
	}, [navigate]);
	return (
			<Main>
				<MainNavigation/>
				<Outlet />
				<footer className='legal_footer'>
				<p className='legal_text'>
					•24 Peiraios Str., 1st floor, Strovolos, 2023 Nicosia, Cyprus
					Terms & Conditions • Privacy Policy • Subscription Policy
				</p>
				</footer>

			</Main>
	);
}

export default Root;