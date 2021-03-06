import React from "react"
import "./technologies.scss"
import { techList } from "../data/tech.js"

const Technologies = () => {
  return (
    <section id="#tech" className="section">
      <h1 className="tech-title">skills</h1>
      <div className="skills-container">
        <div className="resume-container">
          <a
            href="https://www.dropbox.com/s/bh28yugbae6e7mc/MikaydaMillsSEResume0819.pdf?dl=0"
            download
          >
            <h2>DOWNLOAD RESUME</h2>
          </a>
          <div className="resume-pic-container">
            <div className="resume" />
          </div>
        </div>
        <div className="tech-icon-container">
          <h2>TECH</h2>
          <div className="tech-icon-list">
            {techList.map((icon, i) => {
              return (
                <div className="tech-icon" key={i}>
                  {icon.comp}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
