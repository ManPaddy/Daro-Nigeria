/* eslint-disable no-unused-vars */
import "./program.css";

import React from 'react'
import arrow from '../../assets/arrow.png';
import images from "../../assets/image.jpeg"
import images_2 from "../../assets/image 2.jpeg"
import images_3 from "../../assets/image 3.jpeg"

const Program = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={images} alt="" />
            <div className="caption">
                <img src={arrow} alt="" />
                <p>Mental health Awareness</p>
            </div>
        </div>
        <div className="program">
            <img src={images_2} alt="" />
            <div className="caption">
                <img src={arrow} alt="" />
                <p>Mental health Awareness</p>
            </div>
        </div>
        <div className="program">
            <img src={images_3} alt="" />
            <div className="caption">
                <img src={arrow} alt="" />
                <p>Mental health Awareness</p>
            </div>
        </div>
    </div>
  )
}

export default Program