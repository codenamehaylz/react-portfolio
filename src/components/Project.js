import React from 'react';

// Reusable component using json data as props to render a single instance for each project
//TODO router props to render right project based on user selection
//TODO render: Project Title, Link to deployed, Link to GitHub Repo, GIF or screenshot of deployed app

//TODO pin the repositories on GitHub profile

function Project(props) {

    // checks if there is a deployed url for the project
    const isDeployed = () => {
        if (props.deployed) {
            return <a href={props.deployed}>Deployed App</a>;
        } else {
            return "";
        }
    }

    return (
        <div>
            <div className="img-container">
                <img alt={`Screenshot of ${props.title}`} src={props.image} />
            </div>
            <div className="project-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                {isDeployed()}<br />
                <a href={props.repo}>GitHub Repo</a>
            </div>
        </div>
    )
}

export default Project;