import React from 'react'
import { useDispatch } from 'react-redux';
import { changeFavValue } from '../../Middleware/ReduxStore/PropertyListSlice';
import { removeFromFavouriteProperty } from '../../Middleware/ReduxStore/FavouriteListSlice'
import heartLogo from '../../Assets/Images/Icons/heartIcon.png'
import filledHeartLogo from '../../Assets/Images/Icons/redHeartIcon.png'
import bathroomLogo from '../../Assets/Images/Icons/bathroomIcon.png'
import bedroomLogo from '../../Assets/Images/Icons/bedroomIcon.png'
import '../../Assets/Styles/FavouriteDisplayCard.css'

function FavouriteDisplayCard(props) {
  const { id, location, address, rent, rentType, favourite, image, bedroom, bathroom, propertyType } = props.values;
  const Dispatch = useDispatch();

  function changeFavouriteValue() {
    Dispatch(changeFavValue({ id, favourite: !favourite }));
    Dispatch(removeFromFavouriteProperty(id));
  }

  return (
    <>
      <div className="favDisplayCard">
        <div className="favCardHeader">
          <img src={image} alt='propertyImage' />
          <span className="favProType">
            {propertyType}
          </span>
        </div>
        <div className="favCardBody">
          <div className="favProMainDetail">
            <h5 className='favProAreaName'>{location}</h5>
            <p className="favProAddress">{address}</p>
            <div className="favProRentDetail">
              <span className="favProRent">₹{rent}</span>/<span className="favProRentType">{rentType}</span>
            </div>
          </div>
          <div className="favHeartLogoContainer" onClick={changeFavouriteValue}>
            <img src={(favourite) ? filledHeartLogo : heartLogo} alt="heart" />
          </div>
          <div className="favMoreDetailContainer">
            <div className="favMoreDetailBox">
              <img src={bedroomLogo} alt="bedroom" /> {bedroom} Beds
            </div>
            <div className="favMoreDetailBox">
              <img src={bathroomLogo} alt="bathroom" /> {bathroom} Bathroom
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FavouriteDisplayCard
