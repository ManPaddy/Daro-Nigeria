import './Campus.css';

import React from 'react';
import images_1 from "../../assets/qoute.jpeg";
import images_2 from "../../assets/image 1.jpeg";
import images_3 from "../../assets/qoute2.jpeg";
import images_4 from "../../assets/image 3.jpeg";
import images_5 from "../../assets/qoute1.jpeg";
import images_6 from "../../assets/image 3.jpeg";
import play_circle from "../../assets/trending_flat.png";

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={images_1} alt="" />
            <img src={images_2} alt="" />
            <img src={images_3} alt="" />
            <img src={images_4} alt="" />
            <img src={images_5} alt="" />
            <img src={images_5} alt="" />
        </div>
        <button className="btn dark-btn">See more here <img src={play_circle} alt="" /></button>
    </div>
  )
}

export default Campus