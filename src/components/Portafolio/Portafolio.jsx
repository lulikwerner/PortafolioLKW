import React, { useState, useEffect } from 'react';
import { gFetch } from "/src/utils/gFetch.js"


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
      <nav>
        <section>
          {projects.map(project => (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <img src={project.img} alt={project.title} />
              
              <p>{project.description}</p>
            </div>
          ))}
        </section>
      </nav>
    </header>
  );
};

export default Portafolio;
