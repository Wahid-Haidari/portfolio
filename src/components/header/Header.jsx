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
      				<h5 className="name" >Wahidullah Haidari</h5>
      				<h5 className="email">wahidullahhaidari2@gmail.com</h5>
      				<h5 className="text-light">Full Stack Web Developer</h5>
      				<CTA/>
      				<HeaderSocials/>
      				<div >
      					<About/>
      				</div>
  
      			</div>
      		</header>
		);
	
}

export default Header;