import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';

function Contact() {


  const form = useRef();


  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <p className='mr-1'>Write to me at: <a
              className="text-decoration-none"
              href="mailto:gargrajesh009@gmail.com"
            >
              gargrajesh009@gmail.com
            </a></p> 
            
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;