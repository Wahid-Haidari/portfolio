import React , {Component} from 'react';
import './projects.css'
import AHMAD_ZAHIR from '../../assets/ahmad-zahir.png';
import ROBOFRIENDS from '../../assets/robofriends.PNG';
import TIC_TAC_TOE from '../../assets/tic-tac-toe.png';


const data = [
	{
		id: 1,
		image: ROBOFRIENDS,
		title: 'Robofriends',
		github: 'https://github.com/Wahid-Haidari/robofriends',
		demo: 'wahid-haidari.github.io/robofriends/'

	},

	{
		id: 2,
		image: AHMAD_ZAHIR,
		title: 'Ahmad Zahir App',
		github: 'https://github.com/Wahid-Haidari/Ahmad-Zahir-App',
		demo: ''

	},

	{
		id: 3,
		image: TIC_TAC_TOE,
		title: 'Tic Tac Toe Game',
		github: 'https://github.com/Wahid-Haidari/Ahmad-Zahir-App',
		demo: ''

	}

]

const Projects = () => {
	return(
		<section id='projects'>
			<h5>My works</h5>
			<h2>Projects</h2>
			<div className="container portfolio__container">
			{
				data.map(({id, image, title, github, demo}, index) => {
					if (index === 1 || index === 2 ) {
						return (
							<article key={id} className="mobile-portfolio__item portfolio__item">
								<div className="mobile-portfolio__item-image">
									<img src={image} alt={title}/>
								</div>
								<div>
									<h3>{title}</h3>
									<div className='portfolio__item-cta'>
										<a href={github} class="btn">GitHub</a>
									</div>	
								</div>
								
							</article>
						)		
					} else{
						return (
							<article key={id} className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={image} alt={title}/>
								</div>
								<h3>{title}</h3>
								<div className='portfolio__item-cta'>
									<a href={github} class="btn">GitHub</a>
									<a href={demo} class="btn btn-primary" target="_blank">Live Demo</a>
								</div>	
							</article>
						)
					}			
				})	
			}
			</div>
			
		</section>
	);

}

export default Projects;