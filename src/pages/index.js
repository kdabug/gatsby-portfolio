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
import "./index.scss"
// import "font-awesome/css/font-awesome.min.css"
// import { library } from "@fortawesome/fontawesome-svg-core"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaEnvelopeSquare,
  FaLinkedin,
} from "react-icons/fa"

import SEO from "../components/seo"

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const metaDescr = data.site.siteMetadata.description
  const { edges: socialImgs } = data.SocialImgs
  const { edges: projectImgs } = data.ProjectImgs

  return (
    <Layout>
      <SEO
        description="a portfolio for Mikayda Mills"
        title="Mikayda Mills Portfolio"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Title />
      <AboutMe profileImg={data.profileImg} />
      <Technologies />
      <Projects projectImgs={projectImgs} />
      <Contacts socialImgs={socialImgs} />
      <Credits />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    profileImg: imageSharp(id: { regex: "/Mikayda/" }) {
      sizes(maxWidth: 420, maxHeight: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    SocialImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/social/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 40) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
