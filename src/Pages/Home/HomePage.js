import React from 'react'
import Banner from '../../Components/Banner/Banner'
import DisplayCard from '../../Components/Display Card/DisplayCard'
import { useSelector } from 'react-redux';
import Filter from '../../Components/Filter/Filter';

function HomePage() {
  const propertyList = useSelector(state => state.PropertyList.propertyList);
  return (
    <>
      <Banner />
      <div className="mainContainer">
        <h1 className='mainHeading'>Properties To <span>Rent</span></h1>
        <Filter />
        <div className='cardContainer'>
          {propertyList.map((item, ind) => <DisplayCard values={item} key={ind} />)}
        </div>
      </div>
    </>
  )
}

export default HomePage
