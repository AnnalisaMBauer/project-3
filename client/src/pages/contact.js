import emailjs from 'emailjs-com'
import React, { useRef } from 'react';
import Zoom from 'react-reveal/Zoom';


function Contact() {
  const Style = {
    boxShadow: '4px 4px 10px 1px black',
    borderRadius: '1rem',
    background: 'linear-gradient(180deg, rgba(83,175,200,1) 10%, rgba(255,255,255,0.4983734227129337) 100%)',
    color: "white",
    padding: '1rem',
    width: '800px',
  };
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
      <div className="d-flex justify-content-center">
        <Zoom>
      <div>
        <div id="bg-image-contact" className="mb-5" style={Style}>
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
               <div className="pt-5" style={Style}>
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
            </Zoom>
            </div>
    );
  };

export default Contact;