import React , {Component} from 'react';
import './testimonials.css'
import Avt1 from '../../assets/nadeem.jpg';
import Avt2 from '../../assets/ghulam.png';
import Avt3 from '../../assets/nadeem.jpg';
import Avt4 from '../../assets/nadeem.jpg';

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/navigation";


const data = [
	{
		avatar: Avt1,
		name: 'Nadeem Akbar',
		review: 
			"I've had the pleasure of knowing Wahid since our high school days in Japan, " +
			"and I can confidently say that his ambition knows no bounds. From our early days " +
			"of studying together to our journey to the United States, I've witnessed his unwavering determination firsthand."
	},

	{
		avatar: Avt2,
		name: 'Ghulam Ali Doulat',
		review: 
			"Wahid Haidari is a good friend and a helpful classmate. He is hardworking and " +
			"a responsible student. He is great at team work, and has a creative mind."
	}

]

class Testimonials extends Component{
	render(){
		return(
			<section id='testimonials'>
      			
				<h2>Testimonials</h2>


				<Swiper className='container testimonials__container'
					modules={[Pagination, Navigation]}
				    spaceBetween={40}
				    slidesPerView={1}
				    pagination={{ clickable: true }}
				    navigation={true}
				    loop={false}
				    >
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