import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
      <div>
        <div className="hero-container container-fluid">
          <img alt="Headshot of Hayley Blackburn" src={require("../images/Me.jpg")} />
          <div className="hero-content">
            <h1 className="display-1">Hayley Blackburn</h1>
            <h3 className="display-5">Front End Web Developer</h3>
            <p className="lead">Welcome to my portfolio! Go ahead and take a look at the previous projects that I've worked on. My passion is creating beautiful products with clean and efficient code.</p>
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/hayley-blackburn1/"><FontAwesomeIcon icon={faLinkedin} /></a> 
              <a href="https://github.com/codenamehaylz"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default Home;