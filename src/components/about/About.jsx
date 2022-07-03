import React , {Component} from 'react';
import './about.css';
import '../../index.css';
import Headshot from '../../assets/headshot.jpg';
import {MdWorkOutline} from 'react-icons/md';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

class About extends Component{
	render(){
		return(
			<section id="about">
				<h5>Get to know</h5>
				<h2>About me</h2>

				<div className="container about__container">

					<div className="about__me">
						<div className="about__me-image">
							<img src={Headshot} alt="About image"/>
						</div>
					</div>

					<div className="about__content">
						<div className="about__cards">
							<article className="about__card">
								<MdWorkOutline className="about__icon"/>
								<h5>Experience</h5>
								<small>3+ Years Working Experience</small>
							</article>

							<article className="about__card">
								<FiUsers className="about__icon"/>
								<h5>Clients</h5>
								<small>200+ Clients</small> 
							</article>

							<article className="about__card">
								<VscFolderLibrary className="about__icon"/>
								<h5>Projects</h5>
								<small>80+</small>
							</article>

							<p>
								My name is Wahid Haidari. I am graduated from UWC ISAK Japan, and now I am a juniour student
								 studying Computer Science at the University of Oklahoma. I am a web developer and I have had
								  a few simple projects. Apart from my studies, I have a part time job as a Community Assistant. 
								  I am fimiliar with Java, C++, HTML, CSS and JavaScript programming languages. 
							</p>

							<a href="#contact" className='btn btn-primary'>Let's talk</a>
						</div>
					</div>

				</div>
			</section>
		);
	}
}

export default About;