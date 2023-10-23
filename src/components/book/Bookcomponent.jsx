import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Bookcomponent.css'

function Book() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qei9xph', 'template_006mqg5', form.current, 'SnYKvxFO7qdiKlqMI')
        .then((result) => {
            console.log(result.text);
            alert("Thank you! We'll write you back soon.")
        }, (error) => {
            console.log(error.text);
            alert("Hi awesome, I think something went wrong,Offcourse its not your fault. Maybe try later")
        });
    };

  return (
    <section className="book_section">
<div className='book_content'>
<h1>Book an Expert</h1>
<ul className='book_ul'>
    <li><span>1</span><p>Through money-making strategies backed by data,we find your audience and point of difference to amplify your brand.</p></li>
    <li><span>2</span><p>Develop powerful creatives that stop the scroll,build value and drive sales.</p></li>
    <li><span>3</span><p>Then,we test and refine to get you more customers faster, more effeciently and more reliably.</p></li>
</ul>

</div>
<div className='form_content'>
  <h1>Book A Strategy Session</h1>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name="from_name" required placeholder='Full Name'/>
<input type="number" name="from_phone" required placeholder='Phone Number'/>
      <input type="email" name="from_email" required placeholder='Email'/>
      <input type="text" name="from_company" required placeholder='Company Name'/>
      
      
      <textarea name="message" placeholder='How Can We Help' required/>
      <input className="button"type="submit" value="Get In Touch" />
    </form>

</div>

    </section>
  )
}

export default Book