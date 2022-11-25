import projects from "./projectDetails.json";
import { useEffect, useState } from "react";
import "./projects.css";
import React from "react";

const Projects = () => {
  const [col1, setColumn1] = useState([]);
  const [col2, setColumn2] = useState([]);
  const [projectsDetails, setProjectsDetails] = useState([]);

  useEffect(() => {
    setProjectsDetails(projects);
    let c1 = [];
    let c2 = [];
    projectsDetails?.length && projectsDetails.map((details, index) => {
      if(index % 2 === 0) {
        c1[index/2] = details;
      }
      else {
        c2[Math.floor(index/2)] = details;
      }
    });
    setColumn1(c1);
    setColumn2(c2);
  }, [projectsDetails]);

  const renderDetails = (details) => {
    return (
      <div className="project" data-aos="fade-up">
        <div className="project-vid">
        <iframe
            src={details.video}
            alt=""
            className="work-vid"
            title={details.title}
          />
        </div>

        <div className="work-details">
          <div className="project-header">
            <div className="project-title">
              <div className="project-title-whole">
                {details.title}
              </div>
              <div className="github-link">
                <a
                  href={details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="learnmore">
                    <i className="fa fa-github"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="project-lang">
              {details.languages}
            </div>
          </div>
          <p className="work-info">{details.description}</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="mywork" id="projects">
      <div className="mywork-title" data-aos="fade-up">
        Projects
      </div>
    </div>

    <div className="project-column">
      <div className="left-col">
        {col1?.length && (col1?.map((details) => (
            renderDetails(details)
          ))
        )}
      </div>

      <div className="right-col">
        {col2?.length && (col2?.map((details) => (
            renderDetails(details)
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default Projects;
