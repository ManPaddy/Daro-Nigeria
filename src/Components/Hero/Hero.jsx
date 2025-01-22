import './Hero.css';

// eslint-disable-next-line no-unused-vars
import React from 'react';
import arrow from '../../assets/arrow.png';

const Hero = () => {
  return (
    <div className="hero container">
        <div className="hero-text">
            <h1>Achieving Peace through ministering to the Needy</h1>
            <p>Divine Assistance Relief Organization (DARO) believes in the power of love by touching lives as a tool for healing and bringing the sense of humanity to the earth.</p>
            <button className='btn'>Explore More <img src={arrow} alt="" /> </button>
            
        </div>
    </div>
  )
}

export default Hero