import React , {Component} from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';


const HeaderSocials = () => {

	return(
		<div className="header__socials">
			<a href="https://github.com/Wahid-Haidari"><FaGithub/></a>
			<a href="https://www.linkedin.com/in/wahidullah-haidari/"><BsLinkedin/></a>
			<a href="https://www.instagram.com/wahid_haidari_/" target="_blank"><BsInstagram/></a>

		</div>
	);
	
}

export default HeaderSocials;