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
        <div className="contact-container p-5">
          <div className="contact-title">
            <h1>Contact Me</h1>
          </div>
          
          <div className="contact-content">
            <FontAwesomeIcon icon={faEnvelope} /> hb_060492@hotmail.co.uk <br />
            <FontAwesomeIcon icon={faMobileScreen} /> 07725 333956 <br />
            <a href="https://www.linkedin.com/in/hayley-blackburn1/"><FontAwesomeIcon icon={faLinkedin} /></a> 
            <a href="https://github.com/codenamehaylz"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
        
        <div className="form-container">
          <form className="row g-3 flex-column" onSubmit={formSubmit}>
          <input 
            className="form-control"
            type="hidden" 
            name="access_key" 
            value="0eabe439-a824-4e37-9720-c804be54627a" />

          <div className="col-sm-10 col-lg-8 align-self-center">
          <input
            className="form-control"
            onChange={formChange}
            type="text" 
            name="firstName"
            value={formData.firstName}
            placeholder="First Name" />
          </div>

          <div className="col-sm-10 col-lg-8 align-self-center">
          <input
            className="form-control"
            onChange={formChange}
            type="text" 
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name" />
          </div>

          <div className="col-sm-10 col-lg-8 align-self-center">
          <input
            className="form-control"
            onChange={formChange}
            type="text" 
            name="email"
            value={formData.email}
            placeholder="Email address" />
          </div>

          <div className="col-sm-10 col-lg-8 align-self-center">
          <textarea
            className="form-control"
            onChange={formChange}
            name="message"
            value={formData.message}
            rows={10}
            cols={50}
            placeholder="Type your message here" />
          </div>

          <div className="col-sm-10 col-lg-8 align-self-center">
          <button type="submit">Submit</button>
          </div>

          {success && <p>Message Sent!</p>}
        </form>
        </div>
      </div>
    );
}
  
export default Contact;