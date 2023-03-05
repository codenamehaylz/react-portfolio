import React, { useState } from 'react';
import Project from './Project';
import projects from '../projects.json';

//TODO display projects in grid

function ProjectGallery() {
  //sets the 'project' state to all the projects in my json file
  const [project, setProject] = useState(projects)
    return (
      <div>
        <h1 className="text-center p-3">Projects</h1>
        <div className="project-container container">
          <div className="row row-cols-sm-1 row-cols-lg-2 g-4">
            {/* iterates through the projects and displays the info for each one*/}
            {project.map(project => (
            <Project 
            title={project.title}
            image={project.image}
            description={project.description}
            deployed={project.deployed}
            repo={project.repo}
            key={project.key}
            />
            ))}
          </div>
        </div>
      </div>
    );
}
  
export default ProjectGallery;