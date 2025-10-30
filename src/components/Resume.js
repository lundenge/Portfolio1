// src/Resume.js
import React from 'react';
import './Resume.css'; // We will add styles later
import FullScreenSection from "./FullScreenSection";
import livingstonia from '../images/livingstonia.jpg'; // Ensure you have the school image in this path
import unic from '../images/unic.PNG'; 
import companyImage from '../images/companyImage.jpg'; // Ensure you have the company image in this path
import head from '../images/head.JPG';
import it from '../images/it.PNG'
const Resume = () => {
  return (
    <FullScreenSection
      backgroundImage={require("../images/background3.PNG")}
      backgroundColor="#14532d"
    >
    <div className="resume-container">
      <div className="section">
        <div className="image-container">
          <img src={livingstonia} alt="University of Livingstonia" />
        </div>
        <div className="text-container">
          <h2>Education</h2>
          <h3>Bachelor's Degree  in Computer Engineering</h3>
          <p>University of Livingstonia,</p>
          <p>Livingstonia, Malawi</p>
          <p>(September 2019 - November 2023)</p>
        </div>

      </div>

      <div className="section">
        <div className="image-container">
          <img src={unic} alt="unic" />
        </div>
        <div className="text-container">
          
          <h3> Diploma in Management and Economic Sciences</h3>
          <p>University of CEPROMAD</p>
          <p>South KIVU, DRCongo</p>
          <p>(September 2013 - November 2015)</p>
        </div>
      </div>



      <div className="section">
        <div className="image-container-adai">
          <img src={head} alt="ADAI CIRCLE" />
        </div>
        
        <div className="text-container">
        <h2>Professional Experience</h2>
          <h3>ADAI CIRCLE</h3>
          <p><strong>Head of Engineering Department</strong>(June 2022 - Present)</p>
          <p>Dowa, Malawi</p>
          <p></p>
          <ul>
            <li>Led a team of engineers in the design, development, and implementation of various software projects, increasing overall team efficiency by 30%.</li>
            <li>Spearheaded the development of a project management tool that reduced development time by 25%.</li>
            <li>Implemented advanced analytics and real-time collaboration tools, enhancing project tracking capabilities and team productivity.</li>
            <li>Successfully integrated new solutions with existing systems, ensuring seamless functionality and operational success.</li>
            <li>Provided technical leadership and mentorship, fostering a collaborative and innovative engineering environment.</li>
          </ul>
        </div>
      </div>


      <div className="section">
        <div className="image-container">
          <img src={companyImage} alt="ADAI CIRCLE" />
        </div>
        <div className="text-container">
          
          <h3>Microsoft for Africa</h3>
          <p><strong>Senior Developer</strong>(October 2018 - December 2021)</p>
          <p>Dowa, Malawi</p>
          <h3>	Role and Responsibilities:</h3>
          <ul>
            <li>	Developed and maintained software solutions tailored to the African market, focusing on accessibility and scalability..</li>
            <li>	Collaborated with a cross-functional team of designers, product managers, and other developers to implement innovative features and optimize user experiences</li>
            <li>	Contributed to the design and architecture of software systems, ensuring alignment with Microsoft's quality standards and best practices.</li>
            <li>	Wrote clean, efficient, and well-documented code, primarily using C#, .NET MAUI, Asp .NET, .NET 6.</li>
            <li>	Participated in code reviews, providing constructive feedback and mentoring junior developers.</li>
            <li>	Engaged in regular communication with stakeholders to gather requirements and provide project updates</li>
            <li>	Spearheaded the development of a key feature that improved user engagement by 30%, enhancing the overall product's value.</li>
            <li>	Played a pivotal role in the successful launch of Dzaleka Notify, which was well-received by the target audience and garnered positive feedback.</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <div className="image-container-it">
          <img src={it} alt="it" />
        </div>
        <div className="text-container">
          <h2>Internship</h2>
          <h3>Jesuit Refugee Service (JRS)</h3>
          <p><strong>IT Intern</strong>(Junuary 2022 - December 2022)</p>
          <p>Dowa, Malawi</p>
          <p></p>
          <ul>
            <li>	Assisted in the installation, configuration, and maintenance of computer systems and networks, ensuring smooth operation and connectivity.</li>
            <li>	Provided technical support to staff, troubleshooting hardware and software issues, and offering timely solutions.</li>
            <li>	Assisted in the setup and maintenance of the organization's IT infrastructure, including servers, routers, and firewalls</li>
            <li>	Helped in managing and securing sensitive data, ensuring compliance with privacy and data protection policies.</li>
            <li>	Participated in a project to upgrade the network infrastructure, resulting in enhanced system performance and reliability.</li>
          </ul>
        </div>
      </div>

    </div>
    </FullScreenSection>
  );
}

export default Resume;
