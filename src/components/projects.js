import React from "react"
import "./projects.scss"

const Projects = ({ projectImgData }) => {
  return (
    <section id="#projects" className="section">
      <h1 id="projects" className="projects-title">
        projects
      </h1>
      <div className="project-container">
        {/* {projectList.map(project => (
          <div className="col-sm-2" key={contact.url}>
            <a
              href={contact.url}
              target="_blank"
              title={`External link to my ${contact.name} account`}
              className="btn-social-icon"
              rel="noopener noreferrer"
            >
              <span
                className={`fa fa-${contact.icon}`}
                alt={`External link to my ${contact.name} account`}
              />
            </a>
          </div>
        ))} */}
      </div>
    </section>
  )
}

export default Projects
