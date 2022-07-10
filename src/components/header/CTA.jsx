import React , {Component} from 'react';
import Resume from '../../assets/resume.pdf'

const CTA = () => {
	
		return (
      		<div className="cta">
      			<a href={Resume} download className="btn">Download Resume</a>
      		</div>
		);
	
}

export default CTA;