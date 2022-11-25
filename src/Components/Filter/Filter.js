import React from 'react'
import './Filter.css'

function Filter(props) {
    const { setFilterLocation, setFilterDate, setFilterPrice, setFilterPropType, submitFilterBtn } = props;
    return (
        <>
            <form className='filterContainer' onSubmit={(e) => submitFilterBtn(e)}>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterLocation">Location</label>
                    <select name="filterLocation" className='filterValue' id="filterLocation" onClick={(e) => setFilterLocation(e.target.value)}>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterDate">When</label>
                    <input type="date" name="filterDate" className='filterValue' id="filterDate" onChange={(e) => setFilterDate(e.target.value)} />
                </div>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterPrice">Price</label>
                    <select name="filterPrice" className='filterValue' id="filterPrice" onChange={(e) => setFilterPrice(JSON.parse(e.target.value))}>
                        <option value='{"min":1500,"max":3000}'>₹1500 - ₹3000</option>
                        <option value='{"min":3000,"max":4500}'>₹3000 - ₹4500</option>
                        <option value='{"min":4500,"max":6000}'>₹4500 - ₹6000</option>
                        <option value='{"min":6000,"max":7500}'>₹6000 - ₹7500</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterPropType">Property Type</label>
                    <select name="filterPrice" className='filterValue' id="filterPropType" onChange={(e) => setFilterPropType(e.target.value)}>
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
