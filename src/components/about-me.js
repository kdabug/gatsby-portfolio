import React from "react"
import "./about-me.scss"

const AboutMe = () => {
  return (
    <section id="#about-me" className="section">
      <div className="about-me-container">
        <h1 id="about-me" className="about-me-title">
          about me
        </h1>
        <div className="about-me-content-container">
          <div className="about-me-content general">
            <h2>hi, i'm Mikayda Mills</h2>
            <p>
              i live in nyc. my husband and i are both devs.{" "}
              <span className="accent">so is our dog</span>.
              <br />
              diggin' the groovy vibes? 'life is nothing w/o a theme' - emily
              dickinson{" "}
              <span className="accent">#ladieswhocode #lawyerswhocode</span>
            </p>
          </div>
          <div className="about-me-content goals">
            <h2>my goalz</h2>
            <p>
              be of use, <span className="accent">make an impact</span>, create
              world-changing tech, complete the mission, dance in all of the
              meadows, watch a baseball game in every major league stadium.
            </p>
          </div>
          <div className="about-me-content topics">
            <h2>my topicz</h2>
            <p>
              the Beatles, a dog called Brady, the color green, geaux LSU
              Tigers, baseball, John Irving novels, triathalons, gemstones,
              video games, tarot card readings, yoga, crochet hooks, art
              galleries
            </p>
          </div>
        </div>
        <div className="about-me-picture-container">
          <div className="about-me-picture" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
