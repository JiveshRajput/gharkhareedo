import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import iconLogo from '../../Assets/Images/logo.png'
import { setNavToggle } from '../../Middleware/ReduxStore/NavToggleSlice'
import menuIcon from '../../Assets/Images/Icons/menuIcon.png'
import '../../Assets/Styles/Navbar.css'


function Navbar() {
    const NavToggleVal = useSelector(state => state.NavToggle);
    const Dispatch = useDispatch();

    function toggleNavValue() {
        Dispatch(setNavToggle());
    }

    return (
        <>
            <header>
                <Link to="/"><img src={iconLogo} alt="logo" className='mainLogo' /></Link>
                <div className={`${(NavToggleVal) ? 'show' : ''} btnSection`}>
                    <ul className='navbar'>
                        <li><Link to="/" onClick={toggleNavValue}>Home</Link></li>
                        <li><Link to="/" onClick={toggleNavValue}>About</Link></li>
                        <li><Link to="/" onClick={toggleNavValue}>Contact Us</Link></li>
                        <li><Link to="/" onClick={toggleNavValue}>Service</Link></li>
                        <li><Link to="/favourite" onClick={toggleNavValue}>Favourite</Link></li>
                    </ul>
                    <div className='navBtnContainer'>
                        <input type="button" className='btn loginBtn' value="Login" />
                        <input type="button" className='btn signUpBtn' value="Sign Up" />
                    </div>
                </div>
                <img src={menuIcon} onClick={() => toggleNavValue()} className='headerIconStyle' id='menuIcon' alt="menuBtn" />
            </header>
        </>
    )
}

export default Navbar
