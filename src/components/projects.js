import React from "react"
import "./projects.scss"
import { projectData } from "../data/projects"
import "./projects.scss"
import { Gif, GifContainer } from "../components/Gif"

const Projects = () => {
  return (
    <section id="#projects" className="section">
      <h1 id="projects" className="projects-title">
        projects
      </h1>
      <div className="project-container">
        <GifContainer>
          {projectData.map(({ still, vid }) => (
            <Gif static={still} vid={vid} />
          ))}
        </GifContainer>
      </div>
    </section>
  )
}

export default Projects
