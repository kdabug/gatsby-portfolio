import React, { Component } from "react"
import styled from "styled-components"
import { GoMarkGithub, GoGlobe } from "react-icons/go"

class Gif extends Component {
  constructor() {
    super()
    this.state = {
      gifStatic: true,
    }
    this.handleGif = this.handleGif.bind(this)
  }

  handleGif() {
    this.setState((prevState, nextState) => ({
      gifStatic: !prevState.gifStatic,
    }))
  }

  render() {
    const source = this.state.gifStatic ? this.props.static : this.props.vid
    return (
      <GifWrap onMouseEnter={this.handleGif} onMouseLeave={this.handleGif}>
        <img src={source} />
        <div>
          <CardButton>
            <GoMarkGithub size={20} />
            github project
          </CardButton>
          <CardButton>
            <GoGlobe size={20} />
            website
          </CardButton>
        </div>
      </GifWrap>
    )
  }
}

export { Gif }

const CardButton = styled.div`
  width: 50%;
  height: 35px;
  border: 3px solid gray;
  padding: 17px 30px 17px 30px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    color: red;
  }
`

export const GifContainer = styled.div`
  margin-top: 10vh;
  height: 80vh;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;
  justify-content: space-around;
`

export const GifWrap = styled.div`
  max-height: 357px;
  border: 1px solid green;
  width: 30%;
  cursor: pointer;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
  img {
    /* border-radius: 1em; */
    padding: 0;
    margin: 0;
    height: 315px;
    width: 100%;
    &:hover {
      transform: scale(1.05);
      transition: all 1s;
    }
  }
`
