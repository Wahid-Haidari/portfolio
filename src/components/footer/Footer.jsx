import React , {Component} from 'react';
import './footer.css';
import {FaFacebook} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

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
			{/*
			<div className="footer__socials">
				<a href="https://www.linkedin.com/in/wahidullah-haidari/"><BsLinkedin/></a>
				<a href="https://www.facebook.com/wahidhaidari123"><FaFacebook/></a>
				<a href="https://www.instagram.com/wahid_haidari_/"><BsInstagram/></a>
			</div>
			*/}
		</footer>
	);
	
}

export default Footer;