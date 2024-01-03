import React, { useState, useEffect } from 'react';
import { gFetch } from "/src/utils/gFetch.js"
import './Portafolio.css'


const Portafolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data when the component mounts
    gFetch()
      .then(projectsData => {
        setProjects(projectsData);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <header>
      <nav id="section3">
        <section className="sectionProject">
          {projects.map(project => (
            <div className="cardProject" key={project.id}>
              <div className="col">
              <h2 className="titleProject" >{project.title}</h2>
              <a href={project.link} className="read-btn">See More</a>
               <p className="descriProject">{project.description}</p>
               </div>
              <img className="imgProject" src={project.img} />
           </div>
          ))}
        </section>
      </nav>
    </header>
  );
};

export default Portafolio;
