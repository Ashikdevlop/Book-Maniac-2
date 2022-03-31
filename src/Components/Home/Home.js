import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import RowPost from './RowPost'
const Home = () => {
  return (
    <div className="home">
        <div className="navbar">
            <h1 className="brand">Book maniac</h1>
            <Link to="/about" className="about-link">About Us</Link>
        </div>
        <div className='banner'>
            <h1 className="banner-title">This Is Our Book Collection...</h1>
        </div>
        <RowPost/>
    </div>
  )
}

export default Home