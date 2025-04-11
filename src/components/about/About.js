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
						I am a passionate and aspiring software developer with hands-on experience in web development. 
						In December 2023, I earned my Bachelor's degree in Computer Science from the University of 
						Oklahoma, and I am currently pursuing a Master's degree in Management of Information and Technology 
						(MIT) at the same university. Driven by my enthusiasm for building dynamic and user-friendly web 
						applications, I have gained proficiency in a range of web technologies, including HTML, CSS, 
						JavaScript, React.js, Tailwind CSS, SQL, and FastAPI. I’ve applied these skills across several 
						projects that showcase both front-end and back-end development. Additionally, I have some 
						familiarity with Android Studio and mobile app development, expanding my versatility as a developer.
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