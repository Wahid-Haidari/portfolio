import React , {Component} from 'react';
import './Header.css';
import CTA from './CTA';
import Headshot from '../../assets/headshot.jpg';
import HeaderSocials from './HeaderSocials';
import About from '../about/About';

const Header = () => {
	
		return (
      		<header>
      			<div className="container header__container">
      				<h1>Wahidullah Haidari</h1>
      				<h5 className="text-light">Full Stack Web Developer</h5>
      				<CTA/>
      				<HeaderSocials/>
      				<div >
      					<About/>
      				</div>
      				<a href="#contact" className='scroll__down'>Scroll Down</a>
      			</div>
      		</header>
		);
	
}

export default Header;