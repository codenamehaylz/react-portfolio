import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
      <div>
        <div className="hero-container container-fluid">
          <img alt="Headshot of Hayley Blackburn" src={require("../images/Me.jpg")} />
          <div className="hero-title">
            <h1 className="display-2">
            <span className="blue">console</span><br />
            <span className="yellow">.log</span>
            <span className="gold">(</span>
            <span className="orange">"Hi!"</span>
            <span className="gold">)</span>;</h1>
          </div>
        </div>
        <div className="hero-content container-fluid">
          <p>My name is Hayley Blackburn, i'm a Front End Web Developer, and my passion is to create beautiful products with clean and efficient code.
          Go ahead and take a look at the projects that I have worked on, and drop me a message if you're interested in creating something cool together.</p>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/hayley-blackburn1/"><FontAwesomeIcon icon={faLinkedin} /></a> 
            <a href="https://github.com/codenamehaylz"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
    );
}
  
export default Home;