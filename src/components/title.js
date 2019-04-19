import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Lavalamp from './lavalamp'
import './title.css'

const Title = () => (
  <div>
    <h1 id="#kdabug" className='title'>@kdabug</h1>
    <h2> web dev </h2>
    <p>curious, goal-oriented, bookish </p>
    <Lavalamp />
  </div>
)

export default Title
