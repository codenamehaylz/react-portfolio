import React from 'react';
import workoutImg from "../images/Workout-Kitchen.png";
import teamProfileImg from "../images/Team-Profile-Generator.png";
import codeQuizImg from "../images/Code-Quiz.png";
import passwordGenImg from "../images/Password-Generator.gif";
import workdayImg from "../images/Work-Day-Scheduler.png";

// Reusable component using json data as props to render a single instance for each project
//TODO router props to render right project based on user selection
//TODO render: Project Title, Link to deployed, Link to GitHub Repo, GIF or screenshot of deployed app

//TODO pin the repositories on GitHub profile


function Project(props) {

    // checks if there is a deployed url for the project
    const isDeployed = () => {
        if (props.deployed) {
            return <a href={props.deployed}><button className="btn">Deployed App</button></a>;
        } else {
            return "";
        }
    }
    // displays the correct image for each project
    const displayImage = () => {
        switch (props.title) {
            case "Workout Kitchen":
                return `url('${workoutImg}')`
            case "Team Profile Generator":
                return `url('${teamProfileImg}')`
            case "README Generator":
                return `url('${teamProfileImg}')`
            case "Code Quiz":
                return `url('${codeQuizImg}')`
            case "Password Generator":
                return `url('${passwordGenImg}')`
            case "Work Day Scheduler":
                return `url('${workdayImg}')`
            default:
            break;
        }
    }

    return (
        <div>
            <div className="project-column column">
                <div className="img-container" style={{backgroundImage: displayImage()}}>
                </div>
                <div className="project-content p-3">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    {isDeployed()}
                    <a href={props.repo}><button className="btn">GitHub Repo</button></a>
                </div>
            </div>
        </div>
    )
}

export default Project;