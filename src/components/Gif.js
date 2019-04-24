import React, { Component } from "react"
import styled from "styled-components"
import { GoMarkGithub, GoGlobe } from "react-icons/go"

class Gif extends Component {
  constructor() {
    super()
    this.state = {
      gifStatic: true,
      showMore: false,
    }
    this.handleGif = this.handleGif.bind(this)
    this.handleShowMore = this.handleShowMore.bind(this)
  }

  handleGif() {
    this.setState((prevState, nextState) => ({
      gifStatic: !prevState.gifStatic,
    }))
  }

  handleShowMore() {
    this.setState((prevState, nextState) => ({
      showMore: !prevState.showMore,
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
        <Description>
          <p>{this.props.title}</p>
          <ShowButton onClick={this.handleShowMore}>
            {this.state.showMore ? "show less" : "show more"}
          </ShowButton>
          {this.state.showMore && (
            <>
              <p>{this.props.about}</p>
              <p>tech:{this.props.tech}</p>
            </>
          )}
        </Description>
      </GifWrap>
    )
  }
}

export { Gif }

export const GifContainer = styled.div`
  margin-top: 10vh;
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const GifWrap = styled.div`
  width: 35%;
  height: 50%;
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
  p {
    text-align: center;
  }
`

const CardButton = styled.div`
  width: 50%;
  height: 35px;
  background: #ebd4ad;
  align-items: center;
  border: 2px solid #630c4f;
  padding: 17px 0px 17px 0px;
  justify-content: space-around;

  &:hover {
    color: #ebd4ad;
    background: #f80f92;
  }
`

const Description = styled.div`
  height: auto;
  display: flex;
  width: 99%;
  flex-direction: column;
  background: #ebd4ad;
  align-items: center;
  border: 2px solid #630c4f;
  justify-content: space-around;
`

const ShowButton = styled.button`
  display: flex;
  width: 35%;
  background: #835eff;
  align-items: center;
  border: 2px solid #835eff;
  border-radius: 20px;
  justify-content: space-around;
  margin: 10px;

  &:hover {
    color: #ebd4ad;
    background: #f80f92;
  }
`
