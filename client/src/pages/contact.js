import emailjs from 'emailjs-com'
import React, { useRef } from 'react';


function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8ay7mtg', 'template_82pk7ug', form.current, 'user_Z3Uw7S4NdF2sMVDD6Paud', this)
        .then((result) => {
            alert(`Your message was sent ${result.text}`);
            
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
      <div className="">
        <div id="bg-image-contact" className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
                 <h1 className="display-4 fst-italic">Contact us!</h1>
                 <p className="lead my-3 m-1">
                   If:<br></br>
                    You're interested in joining our team of developers...<br></br>
                    You're stuck on one of the levels...<br></br>
                    You just wanna tell us something...<br></br>
                 </p>
            </div>
            </div>
               <div className="p-4 p-md-5 text-white rounded bg-dark">
               <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <div className="input-group">
                <input className="form-control" type="text" name="user_name" />
                </div>
                <label>Email</label>
                <input className="form-control" type="email" name="user_email" />
                <label>Message</label>
                <textarea className="form-control" name="message" />
                <input className="mt-4" type="submit" value="Send" />
                </form>
               
               </div>
            </div>
    );
  };

export default Contact;