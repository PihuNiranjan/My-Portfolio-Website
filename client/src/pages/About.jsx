import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "../components/AboutCard";
import laptopImg from "../../public/about.png";
import image from '/dash-bg.jpg'
function About() {
    return (
        <Container fluid className="about-section" style={{ backgroundImage: `url(${image})`, width: '1240px', height: '100%', position: "fixed" }}>

            <Container>
                <Row style={{ display: 'flex', justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={3}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: 'white' }}>
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        sm={3}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" width={600} className="img-fluid" />
                    </Col>
                </Row>



            </Container>
        </Container>
    );
}

export default About;

