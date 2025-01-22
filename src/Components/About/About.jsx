import "./About.css";

// eslint-disable-next-line no-unused-vars
import React from 'react';
import play_arrow from "../../assets/play_arrow.png";
import video1 from "../../assets/video1.mp4";

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
          <video width={700} height={300} autoPlay controls>
            <source src={video1} alt="" className="about-video" type="video/mp4"/>
            </video>
        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>Introduction</h2>
            <p>The Divine Assistance Relief Organisation (DARO) is a humanitarian ministry that provides relief and development assistance to individuals and communities in Nigeria.</p>
              <br />
            <p>DARO was established in 2024 as an independent and supporting ministry of the Seventh-day Adventist Church in Nigeria.</p> 
              <br />
            <p>DARO's mission is to improve the quality of life of people in need by assessing need, creating awareness, providing resources, and working with communities, organisations, and government. DARO provides assistance regardless of ethnicity, political affiliation, gender, or religious association.</p>
              <br />
            <p>DARO's work includes disaster relief; community development; food security and nutrition; protection services; water, sanitation and hygiene (WASH); Health Services, Education; Shelter and Reconstruction; Economic Recovery and Livelihood; Advocacy and Policy Work, Climate Change Adaptation etc.</p>
            <h3>Our Purpose</h3>
            <p>To manifest God's love in the life of all by serving humanity.</p>
            <h3>Our Motto</h3>
            <p>Keeping Hope Alive.</p>
            <h3>Identity Statement</h3>
            <p>The Divine Assistance Relief Organisation is an independent, supporting humanitarian ministry of the Seventh-day Adventist Church in Nigeria, that demonstrates God's compassion and love.</p>
            <h3>Mission Statement</h3>
            <p>To support people living in poverty and distress in Nigeria by creating awareness, provide resources, and foster partnership for sustainable positive change.</p>
            <h3>Vision Statement</h3>
            <p>Closing the gap between the Church and communities in Nigeria.</p>
            <h3>Value Statement</h3>
            <p>DARO is committed to build trust by showing compassion that wins confidence, so that proper assessment can be made, service provided, and needs meet, resulting in sustainable development and growth.</p>
            <h3>Core Values</h3>
            <p>
              1. <b>Integrity:</b> maintaining honesty, transparency and moral uprightness in all decisions and actions;<br />
              2. <b>Empathy:</b> understand and share feelings, thoughts, or experiences of other people, and take action or offer support to alleviate their pains or struggle appropriately;<br />
              3. <b>Service:</b> humble dedication to serving others, following the example of Jesus Christ;<br />
              4. <b>Collaboration:</b> Partnering with other organisations, government, ministries, and communities to maximize impact.
            </p>

        </div>
    </div>
  )
}

export default About