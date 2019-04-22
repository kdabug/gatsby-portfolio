import React from "react"
import "./about-me.scss"
import Img from "gatsby-image"

const AboutMe = ({ profileImg }) => {
  console.log(profileImg)
  return (
    <section id="#about-me" className="section">
      <div className="about-me-container">
        <h1 id="about-me" className="about-me-title">
          about me
        </h1>
        <div className="about-me-content-container">
          <div className="about-me-content general">
            <h2>Hi, I'm Mikayda Mills.</h2>
            <p>
              i live in nyc. my husband and i are both devs. so is our dog.
              diggin' my groovy vibes? 'life is nothing w/o a theme' - emily
              dickinson #girlswhocode #lawyerswhocode
            </p>
          </div>
          <div className="about-me-content goals">
            <h2>My Goalz</h2>
            <p>
              Be of use, make an impact, create world-changing tech, complete
              the mission, dance in all of the meadows, watch a baseball game in
              every major league stadium.
            </p>
          </div>
          <div className="about-me-content topics">
            <h2>My Topics</h2>
            <p>
              the Beatles, my dog Brady, the color green, geaux LSU Tigers,
              baseball, John Irving novels, triathalons, gemstones, video games,
              tarot card readings, yoga, crochet hooks, art galleries
            </p>
          </div>
        </div>
        <div className="about-me-picture-container">
          <div className="about-me-picture" />
        </div>

        <div className="about-me-content resume">
          <h2>Link To Resume Here:</h2>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
