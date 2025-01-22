import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import Program from './Components/Programs/Program';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Testimonials from './Components/Testimonials/Testimonials';
import Title from './Components/Title/title';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
          <Title subTitle= "Our PROGRAMS" title="Our Journey"/>
          <Program />
          <About />
          <Title subTitle= "Gallery" title="Our Photos"/>
          <Campus />
          <Title subTitle= "TESTIMONIALS" title="What People Say"/>
          <Testimonials />
          <Title subTitle= "CONTACT US" title="Get in Touch"/>
          <Contact />
          <Title subTitle= "FOR DONATIONS AND GIFTS" title="We appreciate your kind gifts" />
          <div color="green" textAlign="center" >
            <h2>DIVINE ASSISTANCE RELIEF ORGANIZATION</h2>
            <h3>1027650209</h3>
            <h3>UNITED BANK OF AFRICA</h3>
          </div>
          <Footer />
      </div>
    
    </div>
  )
}

export default App