import React from 'react'
import './Filter.css'

function Filter() {
    return (
        <>
            <form className='filterContainer'>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterLocation">Location</label>
                    <select name="filterLocation" className='filterValue' id="filterLocation">
                        <option value="Bengluru">Bengluru</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterDate">When</label>
                    <input type="date" name="filterDate" className='filterValue' id="filterDate" />
                </div>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterPrice">Price</label>
                    <select name="filterPrice" className='filterValue' id="filterPrice">
                        <option value="₹1500 - ₹2000">₹1500 - ₹3000</option>
                        <option value="₹3000 - ₹4500">₹3000 - ₹4500</option>
                        <option value="₹4500 - ₹6000">₹4500 - ₹6000</option>
                        <option value="₹6000 - ₹7500">₹6000 - ₹7500</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label className='filterLabel' htmlFor="filterPropType">Property Type</label>
                    <select name="filterPrice" className='filterValue' id="filterPropType">
                        <option value="house">Houses</option>
                        <option value="flat">Flats</option>
                    </select>
                </div>
                <div className="filterBox"><input type="submit" value="Submit" id='filterBtn' /></div>
            </form>
        </>
    )
}

export default Filter
