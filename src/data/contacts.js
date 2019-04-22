import React from "react"
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaEnvelopeSquare,
  FaLinkedin,
} from "react-icons/fa"

export const contactList = [
  {
    name: "Github",
    comp: <FaGithub size={32} color={"blue"} />,
    icon: "Github",
    type: "social-media",
    url: "https://github.com/kdabug",
  },
  {
    name: "Twitter",
    comp: <FaTwitter size={32} color={"lightblue"} />,
    icon: "Twitter",
    type: "social-media",
    url: "https://twitter.com/kdabug",
  },
  {
    name: "Instagram",
    comp: <FaInstagram size={32} color={"brown"} />,
    icon: "Instagram",
    type: "social-media",
    url: "https://www.instagram.com/kdabug",
  },
  {
    name: "LinkedIn",
    comp: <FaLinkedin size={32} color={"blue"} />,
    icon: "Linkedin",
    type: "social-media",
    url: "https://www.linkedin.com/in/mikayda",
  },
  {
    name: "Email",
    comp: <FaEnvelopeSquare size={32} color={"red"} />,
    icon: "EnvelopeSquare",
    type: "email",
    url: "mailto:mills.ma12@gmail.com",
  },
]
