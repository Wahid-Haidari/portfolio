import React , {Component} from 'react';
import './testimonials.css'
import Avt1 from '../../assets/nadeem.jpg';
import Avt2 from '../../assets/nadeem.jpg';
import Avt3 from '../../assets/nadeem.jpg';
import Avt4 from '../../assets/nadeem.jpg';

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
	{
		avatar: Avt1,
		name: 'Nadeem Akbar',
		review: 
			" akhdfkahf df askhf adfh akdfh akdfh dfhaks fhaksdfh f"
	},

	{
		avatar: Avt2,
		name: 'Ghulam Ali Doulat',
		review: 
			"Wahid Haidari is a good friend and a helpful classmate. He is hardworking and " +
			"a responsible student. He is great at team work, and has a creative mind."
	},

	{
		avatar: Avt3,
		name: 'Shohruz Junaidov',
		review: 
			"fhd hsakdf kkasdhf a ashdkfha kahf dsf sfh aksdfh fsadjf asdkhg adskfjdkh dsahkfha kasdhf k dhf ka. ksadfh fka kdsfhdk fsdhfd, askdfh asdifyweufk f,dfdskh kadhfakfhsdafh ha. akdfhealkdhfkhd!"
	}

]

class Testimonials extends Component{
	render(){
		return(
			<section id='testimonials'>
				<h5>Reviews</h5>
				<h2>Testimonials</h2>


				<Swiper className='container testimonials__container'
					modules={[Pagination]}
				    spaceBetween={40}
				    slidesPerView={1}
				    pagination={{ clickable: true }}>
					{
						data.map(({avatar, name, review}, index) => {
							return (
								
								<SwiperSlide key={index} className='testimonial'>
									<div className='client__avatar'>
										<img src={avatar} alt='avatar 1'/>
									</div>
									<h5 className='client__name'>{name}</h5>
									<small className='client__review'>{review}</small>	
								</SwiperSlide>
								
							)
						})
					}
				</Swiper>
			</section>
		);
	}
}

export default Testimonials;