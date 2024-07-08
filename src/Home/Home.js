import React from 'react';
import "./Home.css";
import grpImg from "../assets/Group 27.png"
import gglimg from "../assets/Google.png"
import fbimg from "../assets/Facebook.png"
const Home = () => {
  return (
    <div className="homescreen">
     <div className="hinfo">
           <div className="head">
           Explore your <span className='hobby'>hobby</span> or <span className='passion'>passion</span>
           </div>
           <div className="firstPara">
           Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…

           </div>
           <div className="secondPara">
           If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
           </div>
           <img src={grpImg} alt="img" className='photo' />
           </div>
        
        <div className="loginBox">
            <div className="btn">
            <button className='signin'>Sign In</button>
            <button className='joinin'>Join In</button>
            </div>  

            <div className="continue">
                <button className='google'> <img src={gglimg} alt="img" className='gglimg' /> <span>Continue with Google</span> 
                </button>
                <button className='facebook'><img src={fbimg} alt="img" className='fblimg' /> <span>Continue with Facebook</span> </button>
            </div>

            <div className="separator">
                <div className="line"></div>
                <div className="sepcon">Or connect with</div>
            </div>

            <div className="siInput">
                    <input type="text" placeholder='Email' className="ipEmail" />
                    <input type="text" placeholder='Password' className="ipPassword" />

                    <div className="confirm">

                        <div className="one"><input type="checkbox" />   Remember me</div>
                        <span>?Forgot Password</span>
                    </div>
                    <button className='siContinue'>Continue</button>
            </div>

        </div>
    </div>
  )
}

export default Home
