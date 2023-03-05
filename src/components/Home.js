import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
      <div>
        <div className="hero-container">
          <img alt="Headshot of Hayley Blackburn" src={require("../images/Me.jpg")} />
          <h1>Hayley Blackburn</h1>
          <h2>Front End Web Developer</h2>
          <p>Welcome to my portfolio! Go ahead and take a look at the previous projects that I've worked on. My passion is creating beautiful products with clean and efficient code.</p>
          <a href="https://www.linkedin.com/in/hayley-blackburn1/"><FontAwesomeIcon icon={faLinkedin} /></a> 
          <a href="https://github.com/codenamehaylz"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    );
}
  
export default Home;