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
    // displays the correct image for each project
    const displayImage = () => {
        switch (props.title) {
            case "Workout Kitchen":
                return <img alt={`Screenshot of ${props.title}`} src={require("../images/Workout-Kitchen.png")} />
            case "Team Profile Generator":
                return <img alt={`Screenshot of ${props.title}`} src={require("../images/Team-Profile-Generator.png")} />
            case "README Generator":
                return <img alt={`Screenshot of ${props.title}`} src="" />
            case "Code Quiz":
                return <img alt={`Screenshot of ${props.title}`} src={require("../images/Code-Quiz.png")} />
            case "Password Generator":
                return <img alt={`Screenshot of ${props.title}`} src={require("../images/Password-Generator.gif")} />
            case "Work Day Scheduler":
                return <img alt={`Screenshot of ${props.title}`} src={require("../images/Work-Day-Scheduler.png")} />
            default:
            break;
        }
    }

    return (
        <div>
            <div className="img-container">
                {displayImage()}
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