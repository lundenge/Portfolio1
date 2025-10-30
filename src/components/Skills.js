import React from 'react';
import './style_skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-section">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>C#</li>
          </ul>
        </div>

        <div className="skills-section">
          <h3>Web Development</h3>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>PHP</li>
          </ul>
        </div>

        <div className="skills-section">
          <h3>Database Management</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>SQL Server</li>
            <li>Redis</li>
          </ul>
        </div>

        <div className="skills-section">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>VS Code</li>
            <li>Jira</li>
          </ul>
        </div>

        <div className="skills-section">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Team Leadership</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>

      {/* <div className="skills-section">
        <h3>Soft Skills</h3>
        <ul>
          <li>Team Leadership</li>
          <li>Project Management</li>
          <li>Communication</li>
          <li>Problem-Solving</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Skills;
