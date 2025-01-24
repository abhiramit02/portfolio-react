import React from "react";
import "./skills.css"; 
function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      
      <div className="skill-category">
        <h3>Programming Languages</h3>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Java</li>
          <li>c</li>
          <li>c++</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Technologies</h3>
        <ul>
          <li>Machine Learning</li>
          <li>Deep Learning</li>
          <li>Data Science</li>
          <li>Artificial Intelligence (AI)</li>
        </ul>
      </div>

      <div className="skill-category">
  <h3>Tools & Frameworks</h3>
  <ul>
    <li>VisualStudio Code</li>
    <li>IntelliJ IDEA</li> 
    <li>GitHub</li>
    <li>MongoDB</li>
    <li>MySQL</li> 
    <li>Power BI</li>
    <li>Jupyter Notebook</li>
  </ul>
</div>


      <div className="skill-category">
        <h3>Web Development</h3>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>HTML5 & CSS</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Skills;
