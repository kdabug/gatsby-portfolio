import React from "react"
import "./about-me.scss"

const AboutMe = () => {
  return (
    <section id="#about-me" className="section">
      <div className="about-me-container">
        <h1 id="about-me" className="about-me-title">
          about me
        </h1>
        <div className="about-me-content">
          <p>this is the about me content. pretend there is stuff here.</p>
        </div>
        <div className="about-me-picture">
          <p>INSERT PICTURE HERE</p>
        </div>
        <div className="about-me-content">
          <h2>My Goals</h2>
          <p>goalz</p>
        </div>
        <div className="about-me-content">
          <h2>My Topics</h2>
          <p>
            my dog Brady, the Beatles, the color green, LSU Tigers, baseball,
            John Irving novels, triathalons, gemstones, video games, tarot card
            readings, yoga, crochet
          </p>
        </div>
        <div className="about-me-content">
          <h2>Link To Resume Here:</h2>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
