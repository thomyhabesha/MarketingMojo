import Image from '../../constants/Image'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css'
export default function Footer(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qei9xph', 'template_48w5fp3', form.current, 'SnYKvxFO7qdiKlqMI')
      .then((result) => {
          console.log(result.text);
          alert("Thank you! We'll write you back soon.")
      }, (error) => {
          console.log(error.text);
          alert("Hi awesome, I think something went wrong,Offcourse its not your fault. Maybe try later")
      });
  };

    return(
        <footer >
            <div className='footer_sec' >
                <div className="logo_and_email">
        <div className='logo_section'>
            <img className='headerlogo' src={Image.Logo} alt=""/>
            <p>MARKETING MOJO</p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
      
      <input type="email" name="from_email" required placeholder='Email'/>
      <label>Message</label>
      <textarea name="message" placeholder='Write Us' required/>
      <input className="button"type="submit" value="Send" />
    </form>
    </div>
<div className='social_and_contact'>
        <div className='social_media'>
            <ul>
                <li><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fmarketing__mojo%3Figshid%3DMzMyNGUyNmU2YQ%253D%253D%26fbclid%3DIwAR0Bx_7HMLBZSfqXCrdsuEyd7mMfaATbMy4DSmNOLVCowNYaNPck6zkaJuI&h=AT2LfdJzFsHgK2qPlvi0kkO0IjATiBp6xaEkWMQDug1dlj6SIH7N4dT7rh6gAlK3266qEwiNtV4KEFQ93YxfpjEIv5zdBOiItqnod3_1M8pljnTJ6mmp9c3Uhzsy6oc9A_1x0g" target="_blank"><span><img src={Image.Insta} alt=""/></span></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61550717290680" target="_blank"><span><img src={Image.Fb} alt=""/></span></a></li>
                <li><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmarketingmojodigiatal%2F%3Ffbclid%3DIwAR3ayHB5efhbYBnsTWc5pkXd3nr_CtnXbslsHTx2c5dkZ_ZS2t8byz9_gdU&h=AT2LfdJzFsHgK2qPlvi0kkO0IjATiBp6xaEkWMQDug1dlj6SIH7N4dT7rh6gAlK3266qEwiNtV4KEFQ93YxfpjEIv5zdBOiItqnod3_1M8pljnTJ6mmp9c3Uhzsy6oc9A_1x0g" target="_blank"><span><img src={Image.Linkden} alt=""/></span></a></li>
            </ul>
        </div>
        <div className='contact_phone'>
       <p>Call Us</p>
       <p>+251969122241</p>
       <p>+251944024998</p>
        </div>
        </div>
        </div>
        <div className='footer_footer'>
            <strong>&copy;Copyright 2023 Marketing Mojo</strong>
        </div>
        </footer>
    )
}