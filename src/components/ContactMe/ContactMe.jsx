import "./ContactMe.css";
import logo from "../../images/logo.png";

const ContactMe = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-me2">
          <div className="contact-row">
              
            <img className="contact-img" src= {logo} alt=""/>

            <div className="contact-info">

              <div className="contact-details">
                <a
                  href="mailto:johnrfriess@gmail.com"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </div>

              <div className="contact-details">
                <a
                  href="https://github.com/johnfriess"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="contact-details">
                <a
                  href="https://www.linkedin.com/in/johnrfriess/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
