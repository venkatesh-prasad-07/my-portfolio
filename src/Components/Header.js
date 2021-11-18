import React, { Component } from 'react';
import Typical from 'react-typical';

<script>
  AOS.init();
</script>
class Header extends Component {
  render() {

    if(this.props.data){
      
      var description= this.props.data.description;
      
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#certifications">Certifications</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      
        
      <div className="row banner">
         <div className="banner-text">
         
            <h1 className="responsive-headline" >
               Hello! this is <br/>Venkatesh Prasad {' '}
               
            </h1>
            
            <hr/>
            <h3>Welcome to my personal portfolio website. {description}.</h3>
            <hr />
            <ul className="social" target="_blank">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
