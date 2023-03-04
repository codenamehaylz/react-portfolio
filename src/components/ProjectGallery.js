import React, { useState } from 'react';
import Project from './Project';
import projects from '../projects.json';

//TODO must render dynamically 6 instances of the Project component

function ProjectGallery() {
  const [project, setProject]= useState(projects)
  console.log();
    return (
      <div>
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