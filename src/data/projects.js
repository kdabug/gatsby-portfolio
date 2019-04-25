import React from "react"
import StaticTraitor from "../images/projects/static-traitor.png"
import TraitorGif from "../images/projects/traitor.gif"
import StaticGypsy from "../images/projects/static-gypsy.png"
import GypsyGif from "../images/projects/gypsy.gif"
import StaticTrial from "../images/projects/static-trial.png"
import TrialGif from "../images/projects/trial.gif"
import StaticAllergenius from "../images/projects/static-allergenius.png"
import AllergeniusGif from "../images/projects/allergenius.gif"
import StaticSubrats from "../images/projects/static-subrats.png"
import SubratsGif from "../images/projects/subrats.gif"

export const projectData = [
  {
    still: StaticTrial,
    vid: TrialGif,
    giturl: "https://github.com/kdabug/trial-project",
    weburl: "http://judging-eyes.surge.sh",
    title: "Trial",
    about: "quiz show game",
    tech: "rails, react, html, css",
  },
  {
    still: StaticGypsy,
    vid: GypsyGif,
    giturl: "https://github.com/kdabug/GA-project1-game",
    weburl: " https://gypsy-in-red.surge.sh",
    title: "Gypsy",
    about:
      "a game - help the woman collect her dropped gems and receive a 'fortunate' surprise",
    tech: "vanilla javascript, dom manipulation, css, html",
  },
  {
    still: StaticTraitor,
    vid: TraitorGif,
    giturl: "https://github.com/kdabug/project-api",
    weburl: "https://gallant-haibt-6c9b60.netlify.com/",
    title: "Traitor",
    about:
      "kid-friendly stock market app with a pirate theme, because not all 'traders' are 'traitors'",
    tech: "react",
  },
  {
    still: StaticSubrats,
    vid: SubratsGif,
    giturl: "https://github.com/kdabug/subrats",
    weburl: "https://subrats.netlify.com/",
    title: "Subrats",
    about:
      "dev team project - patrons of the MTA can 'rat' out subway stations in terms of cleanliness, wait-time, and business",
    tech: "react, node.js/express, html, css",
  },
  {
    still: StaticAllergenius,
    vid: AllergeniusGif,
    giturl: "https://github.com/kdabug/allergenius",
    weburl: "http://aboard-good-bye.surge.sh/",
    title: "Allergenius",
    about:
      "created with a team of UX designers and devs, this app helps travelers communicate their food allergies abroad",
    tech: "react, node.js/express, html, css",
  },
]
