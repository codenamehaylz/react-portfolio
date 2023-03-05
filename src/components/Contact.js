import React from 'react';
import { useState } from 'react';

//TODO contain contact info
//TODO contact form for handling events

function Contact() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    access_key: "0eabe439-a824-4e37-9720-c804be54627a"
  });

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

  const formChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }


    return (
      <div>
        <h1>Contact Me</h1>

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
            placeholder="Type your message here" />

          <button type="submit">Submit</button>

          {success && <p>Message Sent!</p>}
        </form>
      </div>
    );
}
  
export default Contact;