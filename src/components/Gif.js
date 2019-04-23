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
          <CardButton onClick={() => window.open(this.props.giturl, "_blank")}>
            <GoMarkGithub size={20} />
            github project
          </CardButton>
          <CardButton onClick={() => window.open(this.props.weburl, "_blank")}>
            <GoGlobe size={20} />
            website
          </CardButton>
        </div>
      </GifWrap>
    )
  }
}

export { Gif }

export const GifContainer = styled.div`
  margin-top: 10vh;
  margin: 0 auto;
  width: 75vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const GifWrap = styled.div`
  max-height: 357px;
  width: 35%;
  cursor: pointer;
  margin: 30px;
  padding: 0;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    transition: all 1s;
  }
  div {
    display: flex;
  }
  img {
    padding: 0;
    margin: 0;
    height: 315px;
    width: 100%;
  }
`

const CardButton = styled.div`
  width: 50%;
  height: 35px;
  display: flex;
  background: lightgray;
  align-items: center;
  border: 2px solid gray;
  padding: 17px 30px 17px 30px;
  justify-content: space-around;

  &:hover {
    color: white;
    background: gray;
    border: 2px solid lightgray;
  }
`
