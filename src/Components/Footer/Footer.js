import React from 'react'
import './Footer.css'
import logo from '../../Images/logo.png'
import facebook from '../../Images/Icons/facebook.png'
import google from '../../Images/Icons/google.png'
import instagram from '../../Images/Icons/instagram.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div id="foot">
                <div className="footContainer" id="footContainer1">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footContainer" id="footContainer2">
                    <h3>Ghar Khareedo</h3>
                    <p>Ghar Khareedo is a website for buying & renting of house. There you can find houses of any location.</p>
                </div>
                <div className="footContainer" id="footContainer3">
                    <h3>Check</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Contact Us</Link></li>
                        <li><Link to='/'>Service</Link></li>
                        <li><Link to="/favourite">Favourite</Link></li>
                    </ul >
                </div >
                <div className="footContainer" id="footContainer4">
                    <a href='https://facebook.com' target='_blank' rel="noreferrer"><img src={facebook} alt="fb" className='footerSMIcons'  /></a>
                    <a href='https://google.com' target='_blank' rel="noreferrer"><img src={google} alt="gl" className='footerSMIcons' /></a>
                    <a href='https://instagram.com' target='_blank' rel="noreferrer"><img src={instagram} alt="ig" className='footerSMIcons' /></a>
                </div>
            </div >
        </>
    )
}

export default Footer
