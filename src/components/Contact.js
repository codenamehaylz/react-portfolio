import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Contact() {
  // creates a state for the contact form submission
  const [success, setSuccess] = useState(false);
  // creates a state for the data within the contact form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    access_key: "0eabe439-a824-4e37-9720-c804be54627a"
  });

  // Function for submitting form data to an email address using Web3Forms API
  const formSubmit = (event) => {
    event.preventDefault()
    const json = JSON.stringify(formData);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
      })
      .then(response => response.json())
      .then(data => {
        setSuccess(true);
        setFormData({
          ...formData,
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch(error => console.log(error));

  }

  // Function for updating the formData state when user types into the form
  const formChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }


    return (
      <div>
        <h1 className="contact-title">Contact Me</h1>

        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} /> hb_060492@hotmail.co.uk <br />
          <FontAwesomeIcon icon={faMobileScreen} /> 07725 333956 <br />
          <a href="https://www.linkedin.com/in/hayley-blackburn1/"><FontAwesomeIcon icon={faLinkedin} /></a> 
          <a href="https://github.com/codenamehaylz"><FontAwesomeIcon icon={faGithub} /></a>
          <p>Or send me a message:</p>
        </div>
        
        <div className="form-container">
          <form onSubmit={formSubmit}>

          <input 
            type="hidden" 
            name="access_key" 
            value="0eabe439-a824-4e37-9720-c804be54627a" />

          <input
            onChange={formChange}
            type="text" 
            name="firstName"
            value={formData.firstName}
            placeholder="First Name" />

          <input
            onChange={formChange}
            type="text" 
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name" />

          <input
            onChange={formChange}
            type="text" 
            name="email"
            value={formData.email}
            placeholder="Email address" />

          <textarea
            onChange={formChange}
            name="message"
            value={formData.message}
            rows={10}
            cols={50}
            placeholder="Type your message here" />

          <button type="submit">Submit</button>

          {success && <p>Message Sent!</p>}
        </form>
        </div>
      </div>
    );
}
  
export default Contact;