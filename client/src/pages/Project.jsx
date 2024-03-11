import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";
import image from '/dash-bg.jpg'
function Project() {
    return (
        <div style={{ backgroundImage: `url(${image})`, width: '1240px', height: '100%', position: "fixed", display: 'flex' }}>
            <div style={{ flex: 1, justifyContent: 'center', display: 'grid', marginTop: '20px', padding: '10px 50px' }}>
                <h2 style={{ display: 'flex', color: "white", justifyContent: 'center', alignItems: 'center', }}>
                    Here are a few projects I've worked on recently.
                </h2>
                <div style={{ justifyContent: 'center', display: 'flex', }}>

                    {/* CARD BODY */}
                    <div style={{ marginRight: '50px', width: "20rem", backgroundColor: 'whitesmoke', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: '10px', borderRadius: '10px', }}>
                        <img src="./dash-bg.jpg" alt="..." width={300} />
                        <strong style={{ paddingTop: '10px', fontSize: '20px' }}>Title </strong>
                        <h4 style={{ margin: '0px', paddingTop: '10px' }}>Project Title</h4>
                        <div style={{ padding: '10px 5px' }}>
                            <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div style={{ color: "blueviolet", display: "flex", }}>
                            <a href="#" style={{ fontSize: "20px", fontWeight: "bold" }}>Project Link</a>
                        </div>
                    </div>
                    {/* second card */}
                    <div style={{ marginRight: '50px', width: "20rem", backgroundColor: 'whitesmoke', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: '10px', borderRadius: '10px', }}>
                        <img src="./dash-bg.jpg" alt="..." width={300} />
                        <strong style={{ paddingTop: '10px', fontSize: '20px' }}>Title </strong>
                        <h4 style={{ margin: '0px', paddingTop: '10px' }}>Project Title</h4>
                        <div style={{ padding: '10px 5px' }}>
                            <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div style={{ color: "blueviolet", display: "flex", }}>
                            <a href="#" style={{ fontSize: "20px", fontWeight: "bold" }}>Project Link</a>
                        </div>
                    </div>

                    {/* third card */}

                    <div style={{ marginRight: '50px', width: "20rem", backgroundColor: 'whitesmoke', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: '10px', borderRadius: '10px', }}>
                        <img src="./dash-bg.jpg" alt="..." width={300} />
                        <strong style={{ paddingTop: '10px', fontSize: '20px' }}>Title </strong>
                        <h4 style={{ margin: '0px', paddingTop: '10px' }}>Project Title</h4>
                        <div style={{ padding: '10px 5px' }}>
                            <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div style={{ color: "blueviolet", display: "flex", }}>
                            <a href="#" style={{ fontSize: "20px", fontWeight: "bold" }}>Project Link</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    );
}

export default Project;
