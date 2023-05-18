import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <div className="filters-container">
        {/* Instead of these being links to different pages they should be buttons that tap into the filtering directly from the api */}
        <Link to="/all-items" className="filter item1">
          <img src={"/assets/all.png"} alt="All products" className="filterImg"></img>
        </Link>

        <Link to="/electronics" className="filter item2">
        <img src={"/assets/electronics.jpg"} alt="Electronics" className="filterImg"></img>
        </Link>

        <Link to="/mens-clothing" className="filter item3">
        <img src={"/assets/mens.jpg"} alt="Mens category" className="filterImg"></img>
        </Link>

        <Link to="/jewelery" className="filter item4">
        <img src={"/assets/jewelery.jpg"} alt="Jewelery"  className="filterImg"></img>
        </Link>
        
        <Link to="/womens-clothing" className="filter item5">
        <img src={"/assets/womens_clothing.jpg"} alt="Womens Clothing" className="filterImg"></img>
        </Link>
      </div>
    </div>
  )
}
