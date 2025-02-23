import React from "react";
import mr from "../images/mr.jpg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.jpeg";
import gmail from "../images/gmail.png";
export default function HomePage() {
  return (
    <div className="MainPage">
      <img
        src={mr}
        alt=""
        style={{
          borderRadius: "50%",
          height: "25%",
          width: "25%",
          margin: "5px",
          border:'1px solid white'
        }}
      />
      <article className="Intro">
        Hi, my name is Majid. I'm a software engineer with a wide range of
        interests. I enjoy backend programming, particularly in PHP and Python,
        and have a strong passion for machine learning models and mathematical
        analysis. I hold an MSc in astrophysics and am currently preparing to
        pursue a PhD in solid-state physics. I thrive on exploring new
        technologies, solving complex problems, and continuously expanding my
        knowledge.
      </article>
      <div className="link-div">
        <a href="https://www.linkedin.com/in/majid-rezaei-phy"  target='_blank' rel="noreferrer">
          {" "}
          <img src={linkedin} alt="" className="link-images" />
        </a>
        <a href="https://github.com/MajidrNEO1879" target='_blank' rel="noreferrer">
          {" "}
          <img src={github} alt="" className="link-images mx-4" />
        </a>
        <a href="mailto:majidrezaeiphy1879@gmail.com" target='_blank' rel="noreferrer">
          {" "}
          <img src={gmail} alt="" className="link-images" />
        </a>
      </div>
    </div>
  );
}
