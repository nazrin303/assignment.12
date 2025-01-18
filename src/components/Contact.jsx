import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaHeart } from "react-icons/fa6";


function Contact() {
  return (
    <div className="p-0">
      <Form className='formclr text-white'>
        <h1 className='text-center p-3 '>Contact</h1>

        <div className="mb-3 p-3 container">
          <div className="row">
            <div className="col-md-6">
            
              <Form.Control id='name' type="text" placeholder="Your Name" required />
            </div>
            <div className="col-md-6">
              
              <Form.Control type="email" placeholder="Your Email" required />
            </div>
          </div>
        </div>

        <div className="mb-3 container">
          
          <Form.Control as="textarea" placeholder="Your Message"   rows={3} />
          
     
        </div>
        <div className='d-flex justify-content-center'>
        <Button  variant="primary">Send Message</Button>
        </div>
      
      </Form>
      
      <footer className="bg-dark text-white py-3 mt-3 w-100 position-realtive">
      <div className='d-flex justify-content-center text-white bg-dark w-100 '>
          <p>© 2024 Cristiano Ronaldo Portfolio | Designed with <FaHeart className='text-danger' />
           </p>
        </div>
      
      </footer>
      </div>
    
    


  );
}

export default Contact;
