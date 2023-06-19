import "./AboutMe.css";
import headshot from "../../images/headshot.jpeg";

const AboutMe = () => {
  return (
    <>
      <main id="about">
        <div className="aboutMe-container">
          <div className="abouMe-row">
            <div
              className=" col-lg-8 col-md-7 col-sm-12 about_myinfo"
              data-aos="fade-up"
            >
              <div className="title">
                About Me
              </div>
              <div className="about-description">
                Hi, my name is John Friess, and I'm currently a student at the University of Texas at Austin studying Computer Science in the <a href="https://www.cs.utexas.edu/turing-scholars" target="_blank" rel="noopener noreferrer">Turing Scholars Honors Program</a>.
                I have experience creating full stack applications in a variety of different languages and frameworks. I am especially passionate about the blockchain and decentralized finance. In my free time, I enjoy going to the gym, playing card games, and hanging out with friends.

              </div>

              <div className="itscv">
                <a
                  href={process.env.PUBLIC_URL + "/resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="download-cv">
                    Resume
                  </button>
                </a>
              </div>
            </div>
            <div
              className="col-md-4 about-img"
              data-aos="fade-up"
            >
              <div className="about-img-details">
                <a 
                href="https://www.linkedin.com/in/johnrfriess/"
                target="_blank"
                rel="noopener noreferrer">
                  <img src={headshot} alt=""/>
                </a>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
