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
          {(propertyList.length !== 0) ?
            propertyList.map((item, ind) => <FavouriteDisplayCard values={item} key={ind} />)
            :
            <h3 className='errorMsg'>No Property Added.</h3>
          }
          {console.log(propertyList)}
        </div>
      </div>
    </>
  )
}

export default FavouritePage
