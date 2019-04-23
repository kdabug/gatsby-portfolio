import React from "react"
import { Link } from "gatsby"
import Title from "../components/title"
import Credits from "../components/credits"
import AboutMe from "../components/about-me"
import Projects from "../components/projects"
import Contacts from "../components/contact-me"
import Technologies from "../components/technologies"
import Layout from "../components/layout"
import "./index.scss"
import SEO from "../components/seo"

const Index = () => {
  return (
    <Layout>
      <SEO
        description="curious | goal-oriented | bookish | developer"
        title="Mikayda Mills Portfolio"
        keywords={[`portfolio`, `gatsby`, `javascript`, `react`]}
      />
      <Title />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contacts />
      <Credits />
    </Layout>
  )
}

export default Index
