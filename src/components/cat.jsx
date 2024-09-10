import React, { Component } from "react";
import githubLogo from "../assets/github.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
  state = {
    type: this.props.line.type,
    value: this.props.line.value,
  };

  style = {
    align: "middle",
  };

  information = {
    about:
      "I’m Karthikeya Somayajula a boundary-pushing developer and designer weaving innovation into lines of code and stark aesthetics",
    education:
      "Studied Artificial Intelligence and Machine Learning - GMRIT( 2021 - 2025 )",
    projects: [
      {
        projectName: "Image Tampering Detection and Deduction",
        liveDemo: "https://github.com/RetardRento/image_tampering_Unet",
        linkToGithub: "https://github.com/RetardRento",
      },
      {
        projectName: "Dynamic Attendance Management Systems - ( DAMS )",
        liveDemo: "https://github.com/RetardRento/DAMS",
        linkToGithub: "https://github.com/RetardRento",
      },
    ],
    social: [
      {
        platform: "Github",
        link: "https://github.com/RetardRento",
      },

      {
        platform: "Linkedin",
        link: "https://www.linkedin.com/in/karthikeyasomayajula/",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <p className="prompt"> {this.props.line.value} </p>
        {this.handelCd()}
      </React.Fragment>
    );
  }

  handelCd = () => {
    const navigation = this.state.value.split(" ")[1];
    if (navigation) {
      const lower = navigation.toLowerCase();
      if (lower === "about") {
        return <p className="result">{this.information.about}</p>;
      } else if (lower === "education") {
        return <p className="result">{this.information.education}</p>;
      } else if (lower === "education") {
      } else if (lower === "projects" || lower === "project") {
        return (
          <React.Fragment>
            {this.information.projects.map((everyProject) => {
              return (
                <p className="result">
                  {everyProject.projectName}
                  <a href={everyProject.liveDemo} target="_blank">
                    Live Link
                  </a>
                  <a href={everyProject.linkToGithub} target="_blank">
                    {/* <img src={githubLogo} alt="GithubLink to Code" /> */}
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else if (
        lower === "socials" ||
        lower === "social" ||
        lower === "contact me" ||
        lower === "contactme" ||
        lower === "contact_me" ||
        lower == "contact"
      ) {
        return (
          <React.Fragment>
            {this.information.social.map((everySocial) => {
              return (
                <p className="result">
                  <a href={everySocial.link} target="_blank">
                    {everySocial.platform}
                  </a>
                  <a href="https://github.com/RetardRento" target="_blank">
                    {/* <img src={githubLogo} alt="GithubLink to Code" /> */}
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else if (lower === "me" && this.state.value.split(" ")[2] === "face") {
        return (
          <React.Fragment>
            <p className="result">Here is my face</p>
            <img
              src="https://i.ibb.co/KLGqJdR/KK-Rento.png"
              alt="My Face"
              style={{ width: "200px", height: "200px" }}
            />
            <br></br>
          </React.Fragment>
        );
      } else {
        return <p className="result">Opps wrong input</p>;
      }
    } else {
      return <p className="result">Opps wrong input</p>;
    }
  };
}

export default Cat;
