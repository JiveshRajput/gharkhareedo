import React from 'react'
import houseImage from '../../Assets/Images/houseImage01.jpg'
import '../../Assets/Styles/Banner.css'

function Banner() {
  return (
    <div className='bannerContainer'>
        <h1 className='bannerHeading'>Ghar Khareedo</h1>
        <div className="colorOverlay"></div>
        <img src={houseImage} alt="banner" />
    </div>
  )
}

export default Banner
