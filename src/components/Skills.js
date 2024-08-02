import React from 'react';
import './style_skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-section">
        <h3>Programming Languages</h3>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>C#</li>
          <li>AI</li>
          <li>Machine Learning</li>
          <li>Deep Learning</li>
          <li>Neural Network</li>
        </ul>
      </div>

      <div className="skills-section">
        <h3>Web Development</h3>
        <ul>
          <li>React, HTML, CSS, JavaScript, PHP</li>
          <li></li>
         
        </ul>
      </div>

      <div className="skills-section">
        <h3>Database Management</h3>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="skills-section">
        <h3>Tools & Technologies</h3>
        <ul>
          <li>Git</li>
          <li>Docker</li>
          <li>AWS</li>
        </ul>
      </div>

      <div className="skills-section">
        <h3>Soft Skills</h3>
        <ul>
          <li>Team Leadership</li>
          <li>Project Management</li>
          <li>Communication</li>
          <li>Problem-Solving</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
