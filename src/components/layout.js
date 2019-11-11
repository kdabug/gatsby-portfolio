import React from "react"

import Navbar from "./navbar"
import Lavalamp from "./lavalamp"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const {children } = this.props
 

    // if (typeof window !== "undefined") {
    //   // eslint-disable-next-line global-require
    //   require("smooth-scroll")('a[href*="#"]')
    // }
    return (
      <div>
        <Navbar />
        <Lavalamp />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
