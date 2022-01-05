import React, { Component } from 'react';

class Certifications extends Component {
  render() {

    if(this.props.data){
      var certifications = this.props.data.certifications.map(function(certifications){
        return  <li key={certifications.user}>
            <blockquote>
               <p>{certifications.text}</p>
               <cite>{certifications.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="certifications">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                     <blockquote>
                        <p>Certifications</p>
                       
                     </blockquote>
                     <div align="center" >
           
           <table>
    <tr>
      <th>Name</th>
      <th>Platform</th>
      <th>Links</th>
    </tr>
    <tr>
      <td>Fundamentals of Digital Marketing</td>
      <td>Google Digital Garage</td>
      <td><a href="https://drive.google.com/file/d/1YHMT2izVgXdImnpcl1FPXtlT1sT6Cygp/view?usp=sharing">Link</a></td>
    </tr>
    <tr>
      <td>Bits and Bytes of Computer Networking</td>
      <td>Coursera</td>
      <td><a href = "https://coursera.org/share/036da1b8e93db99f4338fe0b6739f0bb">Link</a></td>
    </tr>
    <tr>
      <td>Python Data Structures</td>
      <td>Coursera</td>
      <td><a href= "https://coursera.org/share/e4fa5896dbe4cd9f6edcc3b6a993e202">Link</a></td>
    </tr>
    <tr>
      <td>TCS iON Career Edge - Young Professional</td>
      <td>TCS iON</td>
      <td><a href="https://drive.google.com/file/d/1yPheK_yJf0uqLURYdLs1Tzv4AQjURYHt/view?usp=sharing">Link</a></td>
    </tr>
  </table>
  
  
           </div>
                  </ul>
               </div>
            </div>
         </div>

         

         
   </section>


    );
  }
}

export default Certifications;
