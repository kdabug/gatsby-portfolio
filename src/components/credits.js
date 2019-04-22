import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./credits.scss"

const Credits = () => (
  <section id="#credits" className="section">
    <div className="credits-container">
      <h1 id="credits" className="credits-title">
        credits
      </h1>
      Inspiration from the following articles{" "}
      <ul className="credits-list">
        <li className="credit-item">
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/maxim-basinski"
            title="Maxim Basinski"
          >
            Maxim Basinski
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </a>
        </li>
        <li className="credit-item">
          {" "}
          Smooth-scrolling from
          <a
            href="https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558"
            title="Chris Fitkin"
          >
            Chris Fitkin
          </a>{" "}
        </li>
        <li className="credit-item">
          {" "}
          Gatsby Portfolio creation from{" "}
          <a
            href="https://medium.freecodecamp.org/how-i-made-my-portfolio-website-blazing-fast-with-gatsby-82ccddc2f671"
            title="Maribel Duran"
          >
            Maribel Duran
          </a>
        </li>
        <li className="credit-item">
          {" "}
          Lavalamp from{" "}
          <a href="https://codepen.io/alexzaworski/pen/qDokc" title="Lavalamp">
            Maribel Duran
          </a>
          and{" "}
          <a href="https://codepen.io/anon/pen/KYejOY" title="Lavalamp">
            CodePen Captain Anonymous
          </a>
        </li>
        <li className="credit-item">
          {" "}
          Tech Icons from{" "}
          <a href="https://konpa.github.io/devicon/" title="Tech Icons">
            Devicon
          </a>
        </li>
        <li className="credit-item">
          {" "}
          Psychadelic Font from{" "}
          <a
            href="https://www.1001fonts.com/psychedelia-hm-font.html"
            title="psychedelia"
          >
            1001 Fonts - humbertogillan94
          </a>
        </li>
        <li className="credit-item">
          {" "}
          Social Icons from{" "}
          <a
            href="https://www.iconfinder.com/icons/1543314/communication_media_network_social_social_media_web_youtube_icon"
            title="iconfinder"
          >
            Iconfinder
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default Credits
//https://www.iconfinder.com/icons/1543314/communication_media_network_social_social_media_web_youtube_icon
//https://codepen.io/anon/pen/KYejOY
