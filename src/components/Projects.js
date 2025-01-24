import React from "react";
import "./projects.css"; // Make sure to import the CSS file

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <strong>Wind Plus EV:</strong> Developed and integrated a small-scale wind turbine (Archimedes Liam f1) for EVs to power auxiliary systems and extend range. Created a 3D model in Blender and designed a UX/UI for a monitoring app to enhance user control over energy generation and distribution.
        </li>
        <li>
          <strong>Course Management System:</strong> Developed a Course Management System in Java with JDBC and SQL for managing courses, students, instructors, and enrollments. Implemented CRUD operations using the DAO pattern and designed a MySQL database with relationships. Focused on error handling, data integrity, and user experience through a console-based interface. Demonstrated strong skills in Java, database management, and software development.
          <br />
          <a href="https://github.com/SECE-2023-2027/java-db-project-leap-phase-i-abhiramit02.git" target="_blank" rel="noopener noreferrer">
            <button className="view-project-btn">View Project</button>
          </a>
        </li>
        <li>
          <strong>Text Language Translator:</strong> Designed and implemented a web-based Text Language Translator using Python and Natural Language Processing (NLP). The project involved creating an intuitive user interface for seamless text translation across multiple languages, ensuring context-aware and accurate translations through advanced NLP techniques.
        </li>
      </ul>
    </section>
  );
}

export default Projects;
