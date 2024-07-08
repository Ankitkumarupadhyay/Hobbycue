import React from 'react';
import "./Feature.css";
import ppl from "../assets/groups_black_24dp (1) 1.png"
import place from "../assets/location_on_black_24dp 1.png"
import program from "../assets/event_available_black_24dp 2.png"
import product from "../assets/shopping_basket_black_24dp (2) 1.png"

const Feature = () => {
  return (
    <div className='thirdpg'>
      <div className="firstBox">
        <img src={ppl} alt="img1" className='fbimg'/>
        <span>People</span>
        <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
        <button className='fbbtn'>Connect</button>
      </div>



      <div className="secondBox">
        <img src={place} alt="img1" className='sbimg'/>
        <span>Place</span>
        <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
        <button className='sbbtn'>Meet Up </button>
      </div>



      <div className="thirdBox">
        <img src={product} alt="img1" className='tbimg'/>
        <span>Product</span>
        <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
        <button className='tbbtn'>Meet Up </button>
      </div>


      <div className="fourthBox">
        <img src={program} alt="img1" className='fbimg'/>
        <span>Program</span>
        <p> Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
        <button className='fbbtn'>Meet Up </button>
      </div>
    </div>
  )
}

export default Feature;
