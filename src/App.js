import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/experience/Skills';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';




const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
    );
}

export default App;

/*
class App extends Component{
  constructor(){
    super();
    this.state = {
      buttonClicked: "home"
    }
  }


  onButtonHomeClicked = () => {
      this.setState({buttonClicked: "home"});
      console.log("home clicked");

  }

  onButtonAboutClicked = () => {
      this.setState({buttonClicked: "about"});
    
  }

  render(){
    let currentView;
    if(this.state["buttonClicked"]==="home"){
      currentView = <Profile/>
    }
            
    else if(this.state["buttonClicked"]==="about"){
      currentView = <About/>
    }

    return (
      <div>
        <Header aboutClicked={this.onButtonAboutClicked} homeClicked={this.onButtonHomeClicked} />
        {currentView}
      </div>
    );
  }
  
}

export default App;

*/
