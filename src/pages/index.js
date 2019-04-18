import React from "react";
import { Link } from "gatsby"
import Title from "../components/title";
import NavBar from "../components/navbar";
import Credits from "../components/credits";
import AboutMe from "../components/about-me";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import favicon from './images/ladybug.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import { Helmet } from "react-helmet";
import SEO from "../components/seo"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}


const IndexPage = () => (
  <div>
  <Helmet>
          <meta charSet="utf-8" />
          <title> Mikayda Mills Portfolio </title>
          <link rel="canonical" href="http://mikayda.com" />
          <link rel="icon" type="/image/png" href={favicon} />
  </Helmet>  
  <Title coverImg={} />
      <div className="container-fluid main">
        <NavBar />
        <AboutMe  />
        <Projects  />
        <Contacts />
        <Credits />
        <Footer />
      </div>

  </div>
)

export default IndexPage
