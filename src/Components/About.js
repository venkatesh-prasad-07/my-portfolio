import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic" alt="DP" src={profilepic}  />
         </div>
         <div className="nine columns main-col">
         <div data-aos="fade-left">
            <h2>About Me</h2>

            <p>{bio}</p>
            </div>

            <div className="row">
               <div className="columns contact-details">
               <div data-aos="fade-right">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
                  </div>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://drive.google.com/file/d/13ESnglhFT2V77Dq2vRTKSIAMVPwEUmog/view?usp=sharing" className="button" >My Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
