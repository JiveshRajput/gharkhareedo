import React, { useState } from 'react'
import '../../Assets/Styles/Filter.css'

function Filter({ submitFilterBtn }) {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [propType, setPropType] = useState('');

    function handleFilterSubmit(e) {
        submitFilterBtn(e, { location, date, price, propType });
    }

    return (
        <>
            <form className='filterContainer' onSubmit={(e) => handleFilterSubmit(e)}>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterLocation">Location</label>
                    <select name="filterLocation" className='filterValue' id="filterLocation" onChange={(e) => setLocation(e.target.value)}>
                        <option value="">Select Location</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterDate">When</label>
                    <input type="date" name="filterDate" className='filterValue' id="filterDate" onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterPrice">Price</label>
                    <select name="filterPrice" className='filterValue' id="filterPrice" onChange={(e) => setPrice(e.target.value)}>
                        <option value=''>Select Price</option>
                        <option value='{"min":1500,"max":3000}'>₹1500 - ₹3000</option>
                        <option value='{"min":3000,"max":4500}'>₹3000 - ₹4500</option>
                        <option value='{"min":4500,"max":6000}'>₹4500 - ₹6000</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterPropType">Property Type</label>
                    <select name="filterPrice" className='filterValue' id="filterPropType" onChange={(e) => setPropType(e.target.value)}>
                        <option value="">Select Type</option>
                        <option value="house">Houses</option>
                        <option value="flat">Flats</option>
                    </select>
                </div>
                <div className="filterBox"><button id='filterBtn'>Submit</button> </div>
            </form>
        </>
    )
}

export default Filter
