import React , {Component} from 'react';
import './footer.css';

const Footer = () => {

	return(
		<footer>
			{/*<a href='#' className='footer__logo'>WAHID</a>*/}
			<ul className='permalinks'>
				<li><a href="#">About</a></li>
				<li><a href="#experience">Skills</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			
		</footer>
	);
	
}

export default Footer;