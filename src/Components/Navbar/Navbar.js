import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import iconLogo from '../../Images/logo.png'
import { setNavToggle } from '../../ReduxStore/NavToggleSlice'
import whiteHeartIcon from '../../Images/Icons/whiteHeartIcon.png'
import menuIcon from '../../Images/Icons/menuIcon.png'
import './Navbar.css'

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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Service</Link></li>
                    </ul>
                    <Link to='/favourite'><img src={whiteHeartIcon} className='headerIconStyle' alt="favouriteBtn" /></Link>
                </div>
                <img src={menuIcon} onClick={() => toggleNavValue()} className='headerIconStyle' id='menuIcon' alt="menuBtn" />
            </header>
        </>
    )
}

export default Navbar
