import React , {Component} from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

	const form = useRef();

  	const sendEmail = (e) => {
    	e.preventDefault();

    	emailjs.sendForm('service_jrai4wo', 'template_us0nsqa', form.current, 'hx-_XrRRHoye_QbdV')
      	.then((result) => {
          console.log(result.text);
      	}, (error) => {
          console.log(error.text);
    	})

    	e.target.reset();
	};

	return(
		<section id="contact">
			<h5>Get in touch</h5>
			<h2>Contact me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon'/>
						<h5>wahidullahhaidari2@gmail.com</h5>
						<a href="mailto:wahidullahhaidari2@gmail.com" target="_blank">Send a message</a>
					</article>

					<article className='contact__option'>
						<RiMessengerLine className='contact__option-icon'/>
						<h5>Wahid Haidari</h5>
						<a href="https://m.me/wahidhaidari123" target="_blank">Send a message</a>
					</article>

					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon' />
						<h5>+1(405)802-4983</h5>
						<a href="http://wa.me/+14058024983" target="_blank">Send a message</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS*/}
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder='Your Full Name' required />
					<input type="email" name="email" placeholder='Your Email' required/>
					<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
					<button type='submit'className='btn btn-primary'>Send Message</button>
				</form>
			</div>
			
		</section>
		);

}

export default Contact;