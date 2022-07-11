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
			<div >

				<div className="container about__container">

					<div className="about__me">
						<div className="about__me-image">
							<img src={Headshot} alt="About image"/>
						</div>
					</div>
					
					<div className="about__content">
						{/*
						<div className="about__cards">
							
							<article className="about__card">
								<MdWorkOutline className="about__icon"/>
								<h5>Experience</h5>
								<small>2+ Years</small>
							</article>
							
							<article className="about__card">
								<FiUsers className="about__icon"/>
								<h5>Clients</h5>
								<small>200+ Clients</small> 
							</article>
							<article className="about__card">
								<VscFolderLibrary className="about__icon"/>
								<h5>Projects</h5>
								<small>5+ Projects</small>
							</article>
						</div>
						*/}

						<p>
							I am a senior student studying Computer Science at the University
							of Oklahoma. I am an aspiring full stack web developer. I have 
							worked on several small web and mobile applications. 
							I am familiar with several web development skills, and platforms.
						</p>
						{/*
						<a href="#contact" className='btn btn-primary'>Let's talk</a>
						*/}
						
					</div>

				</div>
			</div>
		);
	}
}

export default About;