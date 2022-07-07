import React , {Component} from 'react';
import './projects.css'
import IMG1 from '../../assets/ahmad-zahir.png';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Ahmad Zahir App',
		github: 'https://github.com/Wahid-Haidari/Ahmad-Zahir-App',
		demo: 'https://dribbble.com/Alien_pixels'

	},

	{
		id: 2,
		image: IMG1,
		title: 'Ahmad Zahir App',
		github: 'https://github.com/Wahid-Haidari/Ahmad-Zahir-App',
		demo: 'https://dribbble.com/Alien_pixels'

	},

	{
		id: 3,
		image: IMG1,
		title: 'Ahmad Zahir App',
		github: 'https://github.com/Wahid-Haidari/Ahmad-Zahir-App',
		demo: 'https://dribbble.com/Alien_pixels'

	},

	{
		id: 4,
		image: IMG1,
		title: 'Ahmad Zahir App',
		github: 'https://github.com/Wahid-Haidari/Ahmad-Zahir-App',
		demo: 'https://dribbble.com/Alien_pixels'

	}

]

const Projects = () => {
	return(
		<section id='projects'>
			<h5>My works</h5>
			<h2>Projects</h2>
			<div className="container portfolio__container">
			{
				data.map(({id, image, title, github, demo}) => {
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
				})	
			}
			</div>
			
		</section>
	);

}

export default Projects;