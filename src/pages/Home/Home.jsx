import React from 'react'
import { NavLink } from 'react-router-dom'





const Home = () => {
  return (
    <>
    <mein>
      <section className='section-hero'>
        <div className="container grid-two-cols">
          <div className="hero-content">
            <p>We are the World is best IT Company </p>
            <h1>Welcome to Strugbits Private Limited </h1>
            <p>Are you ready to take your business to the next level with 
            cutting -edge IT Solution ? Look no further !  At Strugbits private Limited , 
            we specialized  in providing innovative IT services and Solutions 
            tailored to meet your unique needs   </p>
            <div className="btn btn-group">
              <NavLink to="/contact"><button className='btn'> Connect Now</button></NavLink>
              <NavLink to="/service"><button className='btn secondary-btn'> learn more</button></NavLink>
            </div>
          </div>
          {/* {useing image} */}
          <div className="hero-img">
            <img src="/image/sirumair.jpg" alt='Home image' width="400" height="400" />
          </div>
        </div>
      </section>
    </mein>
    {/* /// { 2nd sections start} */}
    <section className='section-analytics'>
      <div className='container grid grid-four-cols'>
         <div className="div1">
          <h2>50+</h2>
          <p>register companies</p>
          </div>     
          <div className="div1">
          <h2>100,00+</h2>
          <p>Happy client</p>
          </div> 
          <div className="div1">
          <h2>500+</h2>
          <p>Well know developer </p>
          </div>    
          <div className="div1">
          <h2>24/7</h2>
          <p>Service </p>
          </div> 
      </div>
    </section>
    {/* 3rd sections start */}
    <section className='section-hero'>
        <div className="container grid-two-cols">
        <div className="hero-img">
            <img src="/image/sirumair.jpg" alt='Home image' width="400" height="400" />
          </div>
          <div className="hero-content">
            <p>We are the World is best IT Company </p>
            <h1>Get Started today </h1>
            <p>Are you ready to take your business to the next level with 
            cutting -edge IT Solution ? Look no further !  At Strugbits private Limited , 
            we specialized  in providing innovative IT services and Solutions 
            tailored to meet your unique needs   </p>
            <div className="btn btn-group">
              <NavLink to="/contact"><button className='btn'> Connect Now</button></NavLink>
              <NavLink to="/service"><button className='btn secondary-btn'> learn more</button></NavLink>
            </div>
          </div>
          {/* {useing image} */}
         
        </div>
      </section>
    </>
  )
}

export default Home