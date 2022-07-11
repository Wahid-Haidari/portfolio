import React , {Component} from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi';

class Services extends Component{
	render(){
		return(
			<section id='services'>
				<h2>Servies</h2>

				<div className="container services__container">
					<article className="service">
						<div className="service__head">
							<h3>UI/UX Design</h3>
						</div>

						<ul className='service__list'>
							<li>
								<BiCheck className='service__list-icon'/>
								<p>sdf fhdskfh  dkfhf sakfhkfh akdshfkdsa fh ksdahfd kfh</p>
							</li>
							<li>
								<BiCheck className='service__list-icon'/>
								<p>sdf fhdskfh  dkfhf sakfhkfh akdshfkdsa fh ksdahfd kfh</p>
							</li>
							<li>
								<BiCheck className='service__list-icon'/>
								<p>sdf fhdskfh  dkfhf sakfhkfh akdshfkdsa fh ksdahfd kfh</p>
							</li>
						</ul>
					</article>	
					{/*End of UI/UX*/}	

					<article className="service">
						<div className="service__head">
							<h3>Web Development</h3>
						</div>

						<ul className='service__list'>
							<li>
								<BiCheck className='service__list-icon'/>
								<p>sdf fhdskfh  dkfhf sakfhkfh akdshfkdsa fh ksdahfd kfh</p>
							</li>
							<li>
								<BiCheck className='service__list-icon'/>
								<p>sdf fhdskfh  dkfhf sakfhkfh akdshfkdsa fh ksdahfd kfh</p>
							</li>
							<li>
								<BiCheck className='service__list-icon'/>
								<p>sdf fhdskfh  dkfhf sakfhkfh akdshfkdsa fh ksdahfd kfh</p>
							</li>
						</ul>
					</article>
					{/*End of Webdevelopment*/}
					{/*
					<article className="service">
						<div className="service__head">
							<h3>Content Creation</h3>
						</div>

						<ul className='service__list'>
							<li>
								<BiCheck className='service__list-icon'/>
								<p>sdf fhdskfh  dkfhf sakfhkfh akdshfkdsa fh ksdahfd kfh</p>
							</li>
							<li>
								<BiCheck className='service__list-icon'/>
								<p>sdf fhdskfh  dkfhf sakfhkfh akdshfkdsa fh ksdahfd kfh</p>
							</li>
							<li>
								<BiCheck className='service__list-icon'/>
								<p>sdf fhdskfh  dkfhf sakfhkfh akdshfkdsa fh ksdahfd kfh</p>
							</li>
						</ul>
					</article>	
					*/}
					{/*End of Content Creation*/}	
				</div>
			</section>
		);
	}
}

export default Services;