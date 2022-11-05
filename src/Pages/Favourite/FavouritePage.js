import React from 'react'
import FavouriteDisplayCard from '../../Components/Favourite Display Card/FavouriteDisplayCard';
import { useSelector } from 'react-redux';

function FavouritePage() { 
  const propertyList = useSelector(state => state.FavouriteList.favPropertyList)
  return (
    <>
      <div className="mainContainer">
        <h1 className='mainHeading'>Favourite <span>Properties</span></h1>
        <div className='cardContainer'>
          {propertyList.map((item, ind) => <FavouriteDisplayCard values={item} key={ind} />)}
        </div>
      </div>
    </>
  )
}

export default FavouritePage
