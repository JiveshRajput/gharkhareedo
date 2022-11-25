import React, { useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import DisplayCard from '../../Components/Display Card/DisplayCard'
import { useSelector } from 'react-redux';
import Filter from '../../Components/Filter/Filter';

function HomePage() {
  const propertyList = useSelector(state => state.PropertyList.propertyList);
  const [filterLocation, setFilterLocation] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterPrice, setFilterPrice] = useState({ min: 1500, max: 3000 });
  const [filterPropType, setFilterPropType] = useState('house');

  function submitFilterBtn(e) {
    e.preventDefault();
    console.log(filterLocation);
    console.log(filterDate);
    console.log(filterPrice);
    console.log(filterPropType);
  }

  return (
    <>
      <Banner />
      <div className="mainContainer">
        <h1 className='mainHeading'>Properties To <span>Rent</span></h1>
        <Filter setFilterLocation={setFilterLocation} setFilterDate={setFilterDate} setFilterPrice={setFilterPrice} setFilterPropType={setFilterPropType} submitFilterBtn={submitFilterBtn} />
        <div className='cardContainer'>
          {(filterLocation) ?
            propertyList
              .filter((item) => item.location === filterLocation)
              .filter((item) => item.available === true)
              .filter((item) => item.rent >= filterPrice.min && item.rent <= filterPrice.max)
              .filter((item) => item.propertyType === filterPropType)
              .map((item, ind) => <DisplayCard values={item} key={ind} />)
            :
            propertyList.map((item, ind) => <DisplayCard values={item} key={ind} />)
          }

        </div>
      </div>
    </>
  )
}

export default HomePage
