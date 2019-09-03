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
              aka kdabug. i live in nyc. my husband and i are both devs.{" "}
              <span className="accent">so is our dog</span>.
              <br /> i put smart, research-driven ideas forward to create
              impactful solutions. i love logic games, and i consistently
              challenge myself - which is how I've landed in software
              engineering.
              <span className="accent">#ladieswhocode #lawyerswhocode</span>
            </p>
          </div>
          <div className="about-me-content goals">
            <h2>let's talk about:</h2>
            <p>
              being of use & <span className="accent">making an impact</span>,
              creating world-changing tech, completing the mission, dancing in
              all of the meadows, watching a baseball game in every major league
              stadium.
            </p>
            <p>
              the Beatles, a dog called Brady, the color green, geaux LSU
              Tigers, baseball, gemstones, video games, tarot card readings,
              yoga, crochet hooks
            </p>
          </div>
          {/* <div className="about-me-content topics">
            <h2>my topicz</h2>
            <p>
              the Beatles, a dog called Brady, the color green, geaux LSU
              Tigers, baseball, gemstones, video games, tarot card readings,
              yoga, crochet hooks
            </p>
          </div> */}
        </div>
        <div className="about-me-picture-container">
          <div className="about-me-picture" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
