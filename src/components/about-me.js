import React from "react"
import "./about-me.css"
import Img from "gatsby-image"
import Hobbies from "./hobbies"

const AboutMe = ({ profileImg }) => {
  return (
    <section id="about" className="section">
      <h1 id="about-me">about me</h1>
      <div className="about-me-content">
        this is the about me content. pretend there is stuff here.
      </div>
      <div className="about-me-picture">
        <Img
          title="Profile image"
          alt="pic of Mikayda"
          sizes={profileImg.sizes}
          className="img-responsive center-block"
        />
      </div>
      <div className="about-me-content">
        <h2>My Goals</h2>
        <p>goalz</p>
      </div>
      <div className="about-me-content">
        <h2>My Topics</h2>
        <p>
          my dog Brady, the Beatles, the color green, LSU Tigers, baseball, John
          Irving novels, code-alongs, triathalons, gemstones, video games, tarot
          card readings, yoga, crochet, hack-a-thons
        </p>
      </div>
      <div className="about-me-content">
        <h2>Link To Resume Here:</h2>
      </div>
    </section>
  )
}

export default AboutMe
