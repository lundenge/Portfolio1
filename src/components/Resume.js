// src/Resume.js
import React from 'react';
import './Resume.css'; // We will add styles later
import schoolImage from '../images/schoolImage.jpg'; // Ensure you have the school image in this path
import companyImage from '../images/companyImage.jpg'; // Ensure you have the company image in this path

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="section">
        <div className="image-container">
          <img src={schoolImage} alt="University of Livingstonia" />
        </div>
        <div className="text-container">
          <h2>Education</h2>
          <h3>Bachelor of Science in Computer Engineering</h3>
          <p>University of Livingstonia</p>
          <p>Livingstonia, Malawi</p>
          <p>September 2019 - November 2023</p>
        </div>
      </div>

      <div className="section">
        <div className="image-container">
          <img src={companyImage} alt="ADAI CIRCLE" />
        </div>
        <div className="text-container">
          <h2>Professional Experience</h2>
          <h3>Head of Engineering Department</h3>
          <p>ADAI CIRCLE</p>
          <p>Blantyre, Malawi</p>
          <p>June 2019 - Present</p>
          <ul>
            <li>Led a team of engineers in the design, development, and implementation of various software projects, increasing overall team efficiency by 30%.</li>
            <li>Spearheaded the development of a project management tool that reduced development time by 25%.</li>
            <li>Implemented advanced analytics and real-time collaboration tools, enhancing project tracking capabilities and team productivity.</li>
            <li>Successfully integrated new solutions with existing systems, ensuring seamless functionality and operational success.</li>
            <li>Provided technical leadership and mentorship, fostering a collaborative and innovative engineering environment.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
