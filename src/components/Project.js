import React from 'react';

//TODO Reusable component using json data as props to render a single instance for each project
//TODO router props to render right project based on user selection
//TODO render: Project Title, Link to deployed, Link to GitHub Repo, GIF or screenshot of deployed app

//TODO pin the repositories on GitHub profile

function Project(props) {
    return (
        <div>
            <div className="img-container">
                <img alt={`Screenshot of ${props.title}`} src={props.image} />
            </div>
            <div className="project-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.deployed}>Deployed App</a> / 
                <a href={props.repo}>GitHub Repo</a>
            </div>
        </div>
    )
}

export default Project;