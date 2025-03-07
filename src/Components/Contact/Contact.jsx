import "./Contact.css";

import React from 'react'
import arrow_right_icon from "../../assets/arrow_right_icon.png";
import location_icon from "../../assets/location_icon.png";
import mail_icon from "../../assets/email_icon.png";
import msg_icon from "../../assets/msg.png";
import phone_icon from "../../assets/phone_icon.png";

const Contact = () => {
    
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9b3a94cc-85fe-4621-8d90-dee04512575b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form of find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />official.daronigeria@gmail.com</li>
                <li><img src={phone_icon} alt="" />07034816436</li>
                <li><img src={location_icon} alt="" />Lagos, Nigeria.</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
                <label>Your Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email address" required/>
                <label>Write your messages here</label>
                <textarea name="message" rows={6} placeholder="Enter your message" required></textarea>
                <button type="submit" className="btn dark-btn" >Submit Now<img src={arrow_right_icon} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact