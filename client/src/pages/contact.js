import emailjs from "emailjs-com";
import React, { useRef } from "react";
import Zoom from "react-reveal/Zoom";

function Contact() {
  const Style = {
    padding: "1rem",
    width: "800px",
    fontFamily: 'Orbitron',
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l2bjs3j",
        "template_x7ehsc6",
        form.current,
        "user_Z3Uw7S4NdF2sMVDD6Paud",
        this
      )
      .then(
        (result) => {
          alert(`Your message was sent ${result.text}`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="d-flex justify-content-center">
      <Zoom>
        <div>
          <div id="bg-image-contact" className="mt-1" style={Style}>
            <div className="col px-1">
              <h1 className="display-4 fst-italic">Contact us!</h1>
              <p className="lead m-1">
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
}

export default Contact;