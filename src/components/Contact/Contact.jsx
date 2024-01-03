import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Check if the form fields are not empty
    const email = document.getElementById('emailInput').value.trim();
    const name = document.getElementById('nameInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();
    if (!email || !name || !message) {
      // Show error toast for empty fields
      toast.error('Please fill in all fields!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        icon:'👎 ',
        style: { color: '#997066' },
      });
      return;
    }

    // If form fields are not empty, show success toast
    toast.success('Request Sent!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, 
      icon: '👍',
      style: { color: '#997066' },
    });

    document.getElementById('my-form').reset();
  };

  return (
    <header className="header-form" id="section4">
      <meta name="keywords" content="Contact, Work, Quote, Hire"></meta>
      <nav className="form_format">
        <h1 className="title-form">Get in Touch</h1>
        <p className="description-form">
          For business inquiries and collaborations, please contact me below. I
          will get back to you promptly. Please allow me 1-2 business days for
          my response—you might even receive a response the same day. <br></br>I am
          looking forward to hearing from you!
        </p>
        <form id="my-form" className="my-form" action="/your-form-endpoint" method="post">
          <div className="box1">
            <input type="text" name="email" className="box" id="emailInput" placeholder="Email" />
          </div>
          <div className="box2">
            <input type="text" name="name" className="box" id="nameInput" placeholder="Name" />
          </div>
          <div className="box3">
            <textarea name="text" rows="14" cols="10" className="box box3" id="messageInput" placeholder="Message"></textarea>
          </div>
          <div className="wrap4">
            <button type="submit" className="btn-sumbit" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>
      </nav>
      <ToastContainer />
    </header>
  );
};

export default Contact;
