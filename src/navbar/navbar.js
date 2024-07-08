import React from 'react';
import './navbar.css';
import logo from "../assets/HobbyCue Logo.png"
import bookmark from "../assets/bookmark_black_24dp 1.png"
import explore from "../assets/Explore.png"
import group from "../assets/Group 17.png"
import hobbies from "../assets/Hobbies.png"
import icons from "../assets/icons8_expand_arrow 1.png"
import notification from "../assets/notifications_black_24dp 1.png"
import product from "../assets/Product 3.png"
import elist from "../assets/Explore List.png"

const Navbar = () => {
  return (

    <div className="navbar">

      <img src={logo} alt='logo' className='logo' />
      <input type="text" placeholder='Search here... ' className='ip' />
      <img src={group} alt="search" className='search' />

        <div className="explore">
          <div className="eximg1">
            <img src={explore} alt="exp"  />
          </div>
          <div className="excon">
              Explore
            </div>
            <div className="eximg2">
            <img src={icons} alt="exp"  />
          </div>

        </div>


        <div className="hb">
          <div className="hbimg1">
            <img src={hobbies} alt="hb"  />
          </div>
          <div className="hbcon">
              Hobbies
            </div>
            <div className="hbimg2">
            <img src={icons} alt="exp"  />
          </div>

        </div>
        <img src={bookmark} alt="bkm" className='bkm' />
        <img src={notification} alt="bkm" className='noti' />
        <img src={product} alt="bkm" className='product' />

        <button className='siBtn'>Sign In</button>

        <div className="elist">
          <img src={elist} alt="list" />
        </div>

      </div>
  

  )
}

export default Navbar
