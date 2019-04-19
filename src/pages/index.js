import React from "react"
import { Link } from "gatsby"
import Title from "../components/title"
import NavBar from "../components/navbar"
import Credits from "../components/credits"
import AboutMe from "../components/about-me"
import Projects from "../components/projects"
import Contacts from "../components/contact-me"
import Footer from "../components/footer"
import Technologies from '../components/technologies'



import "./index.css"

import SEO from "../components/seo"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => (
  <div>
    <SEO description="a portfolio for Mikayda Mills" title="Mikayda Mills Portfolio" />
    <NavBar />
    <Title />
    <div className="container-fluid main">
      <AboutMe />
      <Technologies />
      <Projects />
      <Contacts />
      <Credits />
      <Footer />
    </div>
  </div>
)

export default IndexPage
