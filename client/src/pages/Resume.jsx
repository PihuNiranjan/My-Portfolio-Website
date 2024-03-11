import React from 'react'

export default function Resume() {
    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <div style={{ margin: "40px 140px", justifyContent: "center", backgroundColor: 'white', width: '800px', border: "2px solid black", borderRadius: "5px", padding: '20px 60px', color: 'black' }}>
                <div>
                    <h1 style={{ margin: "25px 0px" }}>
                        Piyush Niranjan
                    </h1>
                    <div class="smallText">
                        <h2 style={{ lineHeight: "30px", color: 'black' }}>
                            Bhopal, Madhya Pradesh | 8817945991 | <a href="mailto:piyushniranjan416@gmail.com">piyushniranjan416@gmail.com</a> <br />Linkedin – <a href="https://www.linkedin.com/in/piyush-niranjan-598bb4200/"> piyush-niranjan-598bb4200</a> | Github – <a href="https://github.com/PihuNiranjan">PihuNiranjan</a>
                        </h2>
                    </div>
                </div>

                {/* SKILL */}

                <div style={{ marginTop: '50px' }}>
                    <h2 >Skills</h2><hr style={{ border: '1px solid black' }} />
                    <p style={{ fontSize: "20px", color: 'black' }}>C++ | C | Python | JavaScript | CSS (including Bootstrap, Material UI) | Database Management (SQL, NOSQL) | Django | Docker | Express JS | Git (including GitHub) | HTML/HTML5 | MongoDB | NodeJS | ReactJS (including Next JS ) | Google Cloud(firebase) | API Integration (RESTful API) | Frontend | Backend | Full Stack | Software Development | Java | MySQL | Programming | Linux | Web Development | Testing | Problem Solving | Team Collaboration | Time Management | Adaptability | Critical Thinking | Creativity</p>
                </div>
                {/* EXPERIENCE  */}
                <div style={{ marginTop: '50px' }}>
                    <h2 >Experience</h2><hr style={{ border: '1px solid black' }} />
                    <p style={{ fontSize: "20px", color: 'black' }}>Absolute Compliance | Full Stack Developer | Bhopal, India
                        <ul>
                            <li>Developed and maintained web applications using Python Django, ReactJS, Redux, and JavaScript, HTML, CSS, SAAS, Docker ensuring robust functionality and a seamless user experience by 50%.</li>
                            <li>Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues and increased SEO score by 60 points.</li>
                            <li>Provided effective troubleshooting and remediation for web applications.</li>
                            <li>Leveraged AWS services to deploy and manage scalable cloud infrastructure, optimizing application performance and reliability</li>
                        </ul>
                    </p>
                </div>

                {/* EDUCATION */}

                <div style={{ marginTop: '50px' }}>
                    <h2 >Education</h2><hr style={{ border: '1px solid black' }} />
                    {/* 1 */}
                    <div class="smallText" style={{ display: 'flex', flexDirection: "row", margin: 0, padding: 0 }}>
                        <p style={{ flex: 0.9, color: 'black', fontSize: 18, fontWeight: 550, marginBottom: 10 }}>
                            BARKATULLAH UNIVERSITY INSTITUTE OF TECHNOLOGY, B.Tech</p>
                        <p style={{ flex: 0.1, color: 'black', fontSize: 18, fontWeight: 550, marginBottom: 10 }}>2020-2024</p>

                    </div>
                    <p style={{ display: 'block', color: 'black', fontSize: "18px", padding: 0, margin: 0 }}>MAJOR: COMPUTER SCIENCE</p>
                    {/* 2 */}
                    <div class="smallText" style={{ display: 'flex', flexDirection: "row", margin: 0, padding: 0 }}>
                        <p style={{ flex: 0.9, color: 'black', fontSize: 18, fontWeight: 550, marginBottom: 10 }}>
                            SWAYAM ONLINE COURSE CERTIFICATION</p>
                        <p style={{ flex: 0.1, color: 'black', fontSize: 18, fontWeight: 550, marginBottom: 10 }}>2023-2023</p>

                    </div>
                    <p style={{ display: 'block', color: 'black', fontSize: "18px", padding: 0, margin: 0 }}>PROGRAMMING IN PYTHON</p>
                    {/* 3 */}
                    <div class="smallText" style={{ display: 'flex', flexDirection: "row", margin: 0, padding: 0 }}>
                        <p style={{ flex: 0.9, color: 'black', fontSize: 18, fontWeight: 550, marginBottom: 10 }}>
                            GOVT. SUBHASH HIGHER SECONDARY SCHOOL FOR EXCELLENCE</p>
                        <p style={{ flex: 0.1, color: 'black', fontSize: 18, fontWeight: 550, marginBottom: 10 }}>2019-2020</p>

                    </div>
                    <p style={{ display: 'block', color: 'black', fontSize: "18px", padding: 0, margin: 0 }}>12TH (PCM)</p>

                    {/* 4 */}
                    <div class="smallText" style={{ display: 'flex', flexDirection: "row", margin: 0, padding: 0 }}>
                        <p style={{ flex: 0.9, color: 'black', fontSize: 18, fontWeight: 550, marginBottom: 10 }}>
                            GOVT. SUBHASH HIGHER SECONDARY SCHOOL FOR EXCELLENCE</p>
                        <p style={{ flex: 0.1, color: 'black', fontSize: 18, fontWeight: 550, marginBottom: 10 }}>2017-2018</p>

                    </div>
                    <p style={{ display: 'block', color: 'black', fontSize: "18px", padding: 0, margin: 0 }}>10TH </p>
                </div>


                {/* PROJECT  */}
                <div style={{ marginTop: '50px' }}>
                    <h2 >Project</h2><hr style={{ border: '1px solid black' }} />

                    <ul style={{ fontSize: "20px", color: 'black' }}>
                        <li><strong>My Portfolio Website</strong> –  Using React.js(Frontend), Node.js, Express(Backend) ,  MongoDB(Database)</li>
                        <li><strong>ChatGPT CLone</strong> –  Using React Native(Frontend), Open.ai - API(Server)</li>
                        <li><strong>Weather Forecasting</strong> –  Using Python tkinter-library(Frontend), OpenWeather.org - API(Server)</li>
                    </ul>

                </div>



            </div>
        </div>
    )
}
