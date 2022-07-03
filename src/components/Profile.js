import React , {Component} from 'react';
import './Profile.css'

class Profile extends Component{
	render(){
		return(
			<main class="content">
				<div class="picture">
					<img src={require("./image/headshot.jpg")} className=" pa3 grow w-25 " alt=""></img>
				</div>
				<br></br>
				<div class="intro">
					<h1>Wahidullah Haidari</h1>
					<p>Programmer and Web Developer</p>
				</div>
				<nav class="links">
					<a href="https://www.instagram.com/wahid_haidari_/"><img class=" grow zone logo" src={require("./image/Instagram.png")}></img></a>
					<a href="https://www.linkedin.com/in/wahidullah-haidari/"><img class=" grow zone logo" src={require("./image/LinkedIn.png")}></img></a>
					<a href="https://github.com/Wahid-Haidari"><img class="grow zone logo" src={require("./image/GitHub.png")}></img></a>
				</nav>
			</main>
		);
	}
}

export default Profile;

	