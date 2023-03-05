import React from 'react';
import { useState } from 'react';

//TODO contain contact info
//TODO contact form for handling events

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: ""
  });

  const formSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
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
            onChange={formChange}
            type="text" 
            name="firstName"
            placeholder="First Name"/>

          <input
            onChange={formChange}
            type="text" 
            name="lastName"
            placeholder="Last Name"/>

          <textarea
            onChange={formChange}
            name="message"
            placeholder="Type your message here" />

          <button>Submit</button>
        </form>
      </div>
    );
}
  
export default Contact;