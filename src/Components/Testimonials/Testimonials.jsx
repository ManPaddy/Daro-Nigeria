import "./Testimonials.css";

import React, { useRef } from 'react';

import back_btn from "../../assets/arrow_back.png";
import next_btn from "../../assets/arrow_forward.png";
import user_1 from "../../assets/user 1.jpg";
import user_2 from "../../assets/user 1.jpg";
import user_3 from "../../assets/user 1.jpg";
import user_4 from "../../assets/user 1.jpg";

const Testimonials = () => {
    
    const slider = useRef();
    let tx = 0;
  
  const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
  }
  
    return (
    <div className="testimonials">
        <img src={next_btn} alt="" className="next-btn" onClick={slideForward}/>
        <img src={back_btn} alt="" className="back-btn" onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Corby</h3>
                                <span>Plato Chambers, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis accusamus? Tempora quae debitis eos aut, minima in impedit inventore iure quaerat! Distinctio facilis, quaerat expedita necessitatibus ipsum nulla exercitationem.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Kosy</h3>
                                <span>Plato Chambers, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis accusamus? Tempora quae debitis eos aut, minima in impedit inventore iure quaerat! Distinctio facilis, quaerat expedita necessitatibus ipsum nulla exercitationem.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Uzo</h3>
                                <span>Plato Chambers, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis accusamus? Tempora quae debitis eos aut, minima in impedit inventore iure quaerat! Distinctio facilis, quaerat expedita necessitatibus ipsum nulla exercitationem.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Essien</h3>
                                <span>Plato Chambers, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perferendis accusamus? Tempora quae debitis eos aut, minima in impedit inventore iure quaerat! Distinctio facilis, quaerat expedita necessitatibus ipsum nulla exercitationem.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials