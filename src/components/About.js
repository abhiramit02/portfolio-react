import React from "react";
import Skills from './skills.js'

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>I am a student with a strong interest in web development technologies like React, Node.js, MongoDB, and MySQL. </p>
      <p>I am passionate about learning and exploring new tools in the tech world to build innovative projects.</p>
      <Skills /> 
    </section>
  );
}

export default About;
