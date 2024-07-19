// src/ProjectDescription.js
import React from 'react';
import './ProjectDescription.css'; // We will add styles later
import companyImage from '../images/company.jpg'; // Ensure you have the company image in this path

const ProjectDescription = () => {
  return (
    <div className="project-container">
      <div className="image-container">
        <img src={companyImage} alt="Company Logo" />
      </div>
      <div className="text-container">
        <div className="caption">
          <h2>Web Application</h2>
          <p>A dynamic web application that improves project management efficiency, developed at ADAI CIRCLE in 2023.</p>
        </div>
        <div className="description">
          <h3>Project Management Tool</h3>
          <p>
            This web application was designed to streamline project management processes and enhance team productivity. 
            It features a user-friendly interface, real-time collaboration tools, and advanced analytics to track project progress. 
            The application was developed for ADAI CIRCLE, a leading tech company, in 2023.
          </p>
          <p>
            The client needed a solution that could integrate seamlessly with their existing systems and provide comprehensive project tracking capabilities. 
            My role involved leading a team of engineers to design, develop, and implement the application using React, Node.js, and PostgreSQL. 
            The tool has been instrumental in reducing development time by 25% and increasing overall team efficiency by 30%.
          </p>
          <p>
            Reflecting on this project, it was a rewarding experience that allowed me to leverage my technical skills to solve real-world problems 
            and contribute significantly to the client's operational success. The success of this project underscores the importance of understanding 
            client needs and delivering tailored solutions that drive business outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;
