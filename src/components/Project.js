import React from 'react';
import workoutImg from "../images/Workout-Kitchen.png";
import teamProfileImg from "../images/Team-Profile-Generator.png";
import codeQuizImg from "../images/Code-Quiz.png";
import passwordGenImg from "../images/Password-Generator.gif";
import workdayImg from "../images/Work-Day-Scheduler.png";

function Project(props) {

    // checks if there is a deployed url for the project
    const isDeployed = () => {
        if (props.deployed) {
            return <a href={props.deployed}><button>Deployed App</button></a>;
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
                    <a href={props.repo}><button>GitHub Repo</button></a>
                </div>
            </div>
        </div>
    )
}

export default Project;