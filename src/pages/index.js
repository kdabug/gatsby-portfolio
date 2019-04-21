import React from "react"
import { Link } from "gatsby"
import Title from "../components/title"
import NavBar from "../components/navbar"
import Credits from "../components/credits"
import AboutMe from "../components/about-me"
import Projects from "../components/projects"
import Contacts from "../components/contact-me"
import Footer from "../components/footer"
import Technologies from "../components/technologies"
import Layout from "../components/layout"

import "./index.css"

import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO
          description="a portfolio for Mikayda Mills"
          title="Mikayda Mills Portfolio"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Title />
        <div className="container-fluid main">
          <AboutMe />
          <Technologies />
          <Projects />
          <Contacts />
          <Credits />
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default Index
