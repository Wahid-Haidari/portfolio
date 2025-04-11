import React , {Component} from 'react';
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs';

class Skills extends Component{
	render(){
		return(
			<section id="experience">
				<h2>Skills</h2>
				<div className="container experience__container">
					<div className="experience__frontend">
						<h3>Frontend Development</h3>
						<div className="experience__content">
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>HTML</h4>
									<small className="text-light">Advanced</small>
								</div>

							</article>
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>CSS</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>Tailwind CSS</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>JavaScript</h4>
									<small className="text-light">Advanced</small>
								</div>	
							</article>
			
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>React.js</h4>
									<small className="text-light">Advanced</small>
								</div>	
							</article>
						</div>
					</div>
					<div className="experience__backend">
						<h3>Backend Development</h3>
						<div className="experience__content">

							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>SQL</h4>
									<small className="text-light">Advanced</small>
								</div>
							</article>
							
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>FastAPI</h4>
									<small className="text-light">Advanced</small>
								</div>								
							</article>
		
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>PHP</h4>
									<small className="text-light">Beginner</small>
								</div>								
							</article>
						
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>Python</h4>
									<small className="text-light">Intermediate</small>
								</div>								
							</article>
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>SQLite</h4>
									<small className="text-light">Intermediate</small>
								</div>								
							</article>

						</div>						
					</div>

					<div className="experience__other">
						<h3>Other skills</h3>
						<div className="experience__content">
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>Java</h4>
									<small className="text-light">Experienced</small>
								</div>

							</article>
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>C/C++</h4>
									<small className="text-light">Experienced</small>
								</div>
								
							</article>
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>Photoshop</h4>
									<small className="text-light">Experienced</small>
								</div>
							</article>
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>Git/GitHub</h4>
									<small className="text-light">Beginner</small>
								</div>
							</article>
							<article className='experience__details'>
								<BsFillPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>Command Line</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;