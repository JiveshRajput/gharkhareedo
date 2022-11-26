import React, { useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import DisplayCard from '../../Components/Display Card/DisplayCard'
import { useSelector } from 'react-redux';
import Filter from '../../Components/Filter/Filter';

function HomePage() {
  const propertyList = useSelector(state => state.PropertyList.propertyList);
  const [filterLocation, setFilterLocation] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterPrice, setFilterPrice] = useState({});
  const [filterPropType, setFilterPropType] = useState('');

  function submitFilterBtn(e, { location, date, price, propType }) {
    e.preventDefault();
    setFilterLocation(location);
    setFilterDate(date);
    setFilterPrice(price);
    setFilterPropType(propType);
  }

  return (
    <>
      <Banner />
      <div className="mainContainer">
        <h1 className='mainHeading'>Properties To <span>Rent</span></h1>
        <Filter submitFilterBtn={submitFilterBtn} />
        <div className='cardContainer'>
          {(filterLocation) ?
            propertyList
              .filter((item) => item.location === filterLocation)
              .filter((item) => item.available === true)
              .filter((item) => item.rent >= filterPrice.min && item.rent <= filterPrice.max)
              .filter((item) => item.propertyType === filterPropType)
              .map((item, ind) => <DisplayCard values={item} key={ind} />)
            :
            propertyList
              .map((item, ind) => <DisplayCard values={item} key={ind} />)
          }

        </div>
      </div>
    </>
  )
}

export default HomePage
