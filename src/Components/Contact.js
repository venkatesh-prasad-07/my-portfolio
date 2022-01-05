import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkwryly");
  
  if (state.succeeded) {
      return <p align="center">Thanks for joining!</p>;
      
  }
  return (
    <section id="contact">
      <form onSubmit={handleSubmit}>

<div className="row section-head" align="center">

   <div className="two columns header-col">

      

   </div>

   <div className="ten columns">

         <p className="lead">To help me improve, you can contact me or send me a feedback given below.</p>

   </div>

</div>    
<fieldset>     
      <label htmlFor="email" className="text-center">
        Email Address
        <span className="required"> *</span>
      </label>
      <input
        id="email"
        type="email" 
        name="email" 
        className="text-center"
        required
      />
      
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="text-center"
      />

<label htmlFor="contactName" className="text-center" >Name <span className="required">*</span> </label>
		<input type="text" className="text-center" defaultValue="" size="35" 
      id="contactName" name="contactName" required/>
      <label htmlFor="contactMessage" className="text-center">
        Feedback <span className="required">*</span>
      </label>
      <textarea
        id="message"
        name="message"
        className="text-center"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <button type="submit" className = "submit" disabled={state.submitting}>
        Submit
        
                     
      </button>
      
           
      </fieldset>
    </form>
    
    </section>
    
  );
  
}


  
export default ContactForm;