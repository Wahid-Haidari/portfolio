import React , {Component} from 'react';
import './about.css';
import '../../index.css';
import Headshot from '../../assets/headshot.jpg';

class About extends Component{
	render(){
		return(
			<div >

				<div className="container about__container">

					<div className="about__me">
						<div className="about__me-image">
							<img src={Headshot} alt="About"/>
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
							I am an aspiring and passionate software developer with experience in Web Development. 
							In December 2023, I graduated from the University of Oklahoma with a bachelor's degree in 
							Computer Science. With my passion for web app development, I learned several web development 
							languages and frameworks including HTML, CSS, JavaScript, React.js, Tailwind, and SQL. Using these skills, I have worked on several 
							projects. Additionally, I have some familiarity with Android Studio.
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