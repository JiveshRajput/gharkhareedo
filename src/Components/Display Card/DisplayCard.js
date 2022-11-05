import React from 'react'
import { useDispatch } from 'react-redux';
import { changeFavValue } from '../../ReduxStore/PropertyListSlice';
import { addToFavouriteProperty, removeFromFavouriteProperty } from '../../ReduxStore/FavouriteListSlice'
import './DisplayCard.css'

import heartLogo from '../../Images/Icons/heartIcon.png'
import filledHeartLogo from '../../Images/Icons/redHeartIcon.png'
import bathroomLogo from '../../Images/Icons/bathroomIcon.png'
import bedroomLogo from '../../Images/Icons/bedroomIcon.png'

function DisplayCard(props) {
    const { id, location, address, rent, rentType, favourite, image, bedroom, bathroom } = props.values;
    const Dispatch = useDispatch();

    function changeFavouriteValue() {
        Dispatch(changeFavValue({ id, favourite: !favourite }));
        if (!favourite) {
            Dispatch(addToFavouriteProperty({ ...props.values, favourite: !favourite }));
        } else {
            Dispatch(removeFromFavouriteProperty(id));
        }
    }

    return (
        <>
            <div className="displayCard">
                <div className="cardHeader">
                    <img src={image} alt='propertyImage' />
                </div>
                <div className="cardBody">
                    <div className="proMainDetail">
                        <div className="proRentDetail">
                            <span className="proRent">${rent}</span>/<span className="proRentType">{rentType}</span>
                        </div>
                        <h5 className='proAreaName'>{location}</h5>
                        <p className="proAddress">{address}</p>
                    </div>
                    <div className="heartLogoContainer" onClick={changeFavouriteValue}>
                        <img src={(favourite) ? filledHeartLogo : heartLogo} alt="heart" />
                    </div>
                    <div className="moreDetailContainer">
                        <div className="moreDetailBox">
                            <img src={bedroomLogo} alt="bedroom" />{bedroom} Beds
                        </div>
                        <div className="moreDetailBox">
                            <img src={bathroomLogo} alt="bathroom" />{bathroom} Bathroom
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayCard
