import './Navbar.css';

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import logo from '../../assets/Daro.jpeg';

const Navbar = () => {
      
    const [sticky, setSticky] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[])
  
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className="logo" />
        <h2 className="name">DIVINE ASSISTANCE RELIEF ORGANISATION </h2>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='about' smooth={true} offset={-260} duration={500} >About Us</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500} >Programs</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500} >Gallery</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn" >Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar