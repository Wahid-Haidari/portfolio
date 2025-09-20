import './projects.css'
import AHMAD_ZAHIR from '../../assets/ahmad-zahir.png';
import JOB_TRACKER from '../../assets/job-tracker.png';
import ZANGI_WUSHU_CENTER from '../../assets/zangi-wushu-center.png';
import IT_SUPPORT from '../../assets/it-support.PNG'


const data = [
	{
		id: 1,
		image: JOB_TRACKER,
		title: 'Job Tracker',
		github: 'https://github.com/Wahid-Haidari/JobTracker',
		demo: 'https://job-tracker-xkmo.onrender.com/'

	},

	{
		id: 2,
		image: ZANGI_WUSHU_CENTER,
		title: 'Zangi Wushu Center',
		github: 'https://github.com/Wahid-Haidari/zangi-wushu-center',
		demo: 'https://wahid-haidari.github.io/zangi-wushu-center/'

	},

	{
		id: 3,
		image: IT_SUPPORT,
		title: 'IT Support Chatbot',
		github: 'https://github.com/Wahid-Haidari/itsupport_ai'

	},
	
	
	{
		id: 4,
		image: AHMAD_ZAHIR,
		title: 'Ahmad Zahir App',
		github: 'https://github.com/Wahid-Haidari/Ahmad-Zahir-App',
		demo: ''

	}

	

]

const Projects = () => {
	return(
		<section id='projects'>
			<h2>Projects</h2>
			<div className="container portfolio__container">
			{
				data.map(({id, image, title, github, demo}, index) => {
					if (index === 3) {
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