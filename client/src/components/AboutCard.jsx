import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: 'white' }}>
            Hi Everyone, I am <span style={{ color: 'orange' }}>Piyush Niranjan </span>
            from <span className="purple"> Bhopal, Madhya Pradesh, India.</span>
            <br />
            I am currently pursuing a B.Tech. in Computer Science from Barkatullah University Institute of Technology.
            <br />
            I have completed my schooling from Govt. Subhash Higher Secondary School for Excellence  in Mathematics

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity" style={{ color: 'white' }}>
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity" style={{ color: 'white' }}>
              <ImPointRight /> Making electronic gadets
            </li>
            <li className="about-activity" style={{ color: 'white' }}>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer style={{ color: 'white' }}>Piyush Niranjan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
