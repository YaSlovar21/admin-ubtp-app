import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

import logo from '../../images/logo-header.svg';
import { useSelector } from "react-redux";

function Header() {
    const userData = useSelector(store => store.user);
    return (
        <div className="flex justify-between bg-purple-50 max-w-full p-4 m-4">
            <NavLink className={(isActive)=> isActive ? `font-medium` : ''} to={ROUTES.main}><img className="w-8" src={logo} alt="" /></NavLink>
            <NavLink className={(isActive)=> isActive ? `font-medium` : ''} to={ROUTES.adminSchemes}>Схемы</NavLink>
            {
                !userData.isLoggedIn ?
                <NavLink to={ROUTES.login}>Войти</NavLink>
                : <p>{userData.name}</p>
            }
        </div>
    );
}

export default Header;