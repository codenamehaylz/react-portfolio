import React, { useState } from 'react';
import Project from './Project';
import projects from '../projects.json';

//TODO must render dynamically 6 instances of the Project component

function ProjectGallery() {
  //sets the 'project' state to all the projects in my json file
  const [project, setProject] = useState(projects)
    return (
      <div>
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
    );
}
  
export default ProjectGallery;