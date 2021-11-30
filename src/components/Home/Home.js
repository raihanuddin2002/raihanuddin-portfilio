import React, { useEffect, useRef, useState } from 'react';
import Typewriter from "typewriter-effect";
import appleImage from "../../images/apple-devices-2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from './Project/Project';
import emailjs from "emailjs-com";
const Home = () => {
    const [projects, setProjects] = useState([]);
    const limitProjects = projects.filter(project => project.display === "true");
    const [isLoading, setIsLoading] = useState(true);
    const [isSend, setIssend] = useState(false);
    const [successMessage, setSuceeessMessage] = useState(false);

    // Animation
    useEffect( () => {
        AOS.init();
    });

    // Projects
    useEffect( () => {
        fetch("./fakedata.json")
        .then(res => res.json())
        .then(data => {
            setIsLoading(true)
            if(data){
                setProjects(data);
                setIsLoading(false);
               
            }
        })
    },[]);
    const myForm = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    // Send email
    const sendEmail = (e) => {
        e.preventDefault();
        setIssend(true);

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        const send = {
            name,email,subject,message
        }
        emailjs.sendForm('raihanuddin2002', 'template_o3yzdon', myForm.current, 'user_RNXtqEf9TfveLEwvvAup1')
            .then((result) => {
                setIssend(false);
                setSuceeessMessage(true);
                setTimeout( () => {
                    setSuceeessMessage(false);
                },3000)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                    <div className="social-links">
                        <a href="https://web.facebook.com/rehan.raihan2002/" target="_blank" rel="noreferrer"><p><i className="fab fa-facebook-square text-success fs-3"></i></p></a>
                        <a href="https://www.linkedin.com/in/raihanuddin2002/" target="_blank" rel="noreferrer"><p><i className="fab fa-linkedin text-success fs-3"></i></p></a>
                        <a href="https://twitter.com/raihanuddin2002" target="_blank" rel="noreferrer"><p><i className="fab fa-twitter-square text-success fs-3"></i></p></a>
                        <a href="https://github.com/raihanuddin2002" target="_blank" rel="noreferrer"><p><i className="fab fa-github-square text-success fs-3"></i></p></a>
                        <a href="https://join.skype.com/invite/Du5Wj9vyXR4O" target="_blank" rel="noreferrer"><p><i className="fab fa-skype text-success fs-3"></i></p></a>
                    </div>
                    <div className="typed-div d-flex justify-content-center align-items-center">
                            <div>
                                <h3 className="typed">
                                <Typewriter
                                    options={{
                                        strings: ['Hi,I am Raihan', 'I am a Jr. Web Developer(MERN & PHP)', 'Welcome to my website'],
                                        autoStart: true,
                                        loop: true,
                                        pauseFor: 2000
                                    }}
                                    />
                                </h3>  
                            </div>
                        </div>
            </section>

            {/* <!-- Buy Domain Hosting Section --> */}
            <section className="promo_box bg-dark text-white py-4" data-wow-offset="50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-9">
                            <div className="promo_content fw-monospace">
                                <h3>Download Resume</h3>
                                <p>Click 'Download' button. It will redirect into google drive. You can read & download resume there. </p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="pb_action" data-aos="zoom-in"  data-aos-duration="1000" >
                                <a className="btn btn-lg bg-light-green rounded-0" href="https://drive.google.com/file/d/1_8kC8PaCvuBD7s-CMhKGFZBERTtslEb6/view?usp=sharing" target="_blank">
                                <i className="fas fa-download"></i> Download
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ABout Us Section --> */}
            <section className="texture-section texture1 fw-monospace">
                <div className="container">
                    <div className="row sub_content">
                        <div className="col-12 col-lg-6" data-wow-offset="200" data-aos="fade-right" data-aos-duration="1000">
                            <div className="dividerHeading mb-3">
                                <h4 className="fs-3"><span>About Me</span></h4>
                                <div className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                            </div>
                            <p>
                                I am a Jr Web Developer. I am a fresher in MERN stack. Recently I have finished MERN stack Course at Programming Hero. I am in web sector since 2018. I started my journey as a WordPress developer. Then I started learning PHP. After finishing PHP course then I got admission at Programming Hero and started learning MERN stack. I worked 3 small professional projects, 2 of projects in local marketplace and 1 project in Fiverr.
                                </p>
                        </div>
                        <div className="col-12 col-lg-6 text-center" data-aos="fade-down" data-aos-duration="1000"  data-aos-duration="1000" >
                            <img src={appleImage} className="about-image img-fluid" alt="raihanuddin2002 -web developer - sleeping-sagacity" />
                        </div>
                    </div>
                </div>
                
            </section>
            
            {/* Projects */}
            <section className="fw-monospace my-5">
                <div className="container">
                    <div className="row">
                        <div className="dividerHeading">
                            <h4 className="fs-3"><span>PROJECTS</span></h4>
                            <div className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 g-4 p-0 m-0">
                            {
                               !isLoading && limitProjects.map(project => <Project key={project.count} data={project}></Project>)
                            }
                        </div>
                            {
                                isLoading && <div className="d-flex justify-content-center my-5">
                                    <div className="spinner-border p-5 text-light-green" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            }
                    </div>
                </div>
            </section>
            {/* Why chooses us & skill section */}
            <section style={{background:'#E9ECEF'}} className="fw-monospace my-5 py-5">
                <div className="container">
                    <div className="row sub_content">
                        <div className="col-lg-6 mb-md-5 mb-md-0" data-aos="fade-down" data-aos-duration="1000">
                            <div className="dividerHeading mb-3">
                                <h4 className="fs-3"><span>Why Choose me?</span></h4>
                                <div className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                            </div>
                            <p>
                            Programming is my passion. I always look for challenges where I can use my potential at most and always love to work on cutting edge technologies.  
                            </p>
                            <div className="list_style">
                                    <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> Donec convallis, metus nec tempus aliquet</div>
                                    <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="600"><i className="fas fa-check-circle text-light-green"></i> Aenean commodo ligula eget dolor</div>
                                    <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="700"><i className="fas fa-check-circle text-light-green"></i> Lorem ipsum dolor sit amet cons adipiscing</div>
                                    <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="800"><i className="fas fa-check-circle text-light-green"></i> Nunc aliquet tincidunt metus sit amet</div>
                                    <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="900"><i className="fas fa-check-circle text-light-green"></i> Accumsan vulputate faucibus turpis dictum</div>
                                </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-down" data-aos-duration="1000">
                            <div className="dividerHeading mb-4">
                                <h4 className="fs-3"><span>My Skills</span></h4>
                                <div className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                            </div>

                            <div className="progress-bars" style={{maxWidth: '100%'}}>
                                <div className="mb-2">
                                    <div className="row g-0 me-1" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="col-1 progress-lebel text-center">90%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5  text-start ps-3" role="progressbar" style={{width: "90%"}} aria-valuenow="HTML" aria-valuemin="0" aria-valuemax="100">HTML
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="600">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">80%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5  text-start ps-3" role="progressbar" style={{width: "80%"}} aria-valuenow="CSS" aria-valuemin="0" aria-valuemax="100">CSS
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="700">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">73%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5 text-start ps-3" role="progressbar" style={{width: "73%"}} aria-valuenow="JS" aria-valuemin="0" aria-valuemax="100">JS
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="800">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">65%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green text-start ps-3" role="progressbar" style={{width: "65%",fontSize:"18px", fontWeight:'bold'}} aria-valuenow="REACT JS" aria-valuemin="0" aria-valuemax="100">REACT JS
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="900">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">67%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5 text-start ps-3" role="progressbar" style={{width: "67%"}} aria-valuenow="JQUERY" aria-valuemin="0" aria-valuemax="100">JQUERY
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="1000">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">35%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5 text-start ps-3" role="progressbar" style={{width: "35%"}} aria-valuenow="NODE JS" aria-valuemin="0" aria-valuemax="100">NODE JS
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="1100">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">63%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5 text-start ps-3" role="progressbar" style={{width: "63%"}} aria-valuenow="EXPRESS JS" aria-valuemin="0" aria-valuemax="100">EXPRESS JS
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="1200">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">70%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5 text-start ps-3" role="progressbar" style={{width: "70%"}} aria-valuenow="PHP" aria-valuemin="0" aria-valuemax="100">PHP
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="1300">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">45%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5 text-start ps-3" role="progressbar" style={{width: "45%"}} aria-valuenow="MONGO DB" aria-valuemin="0" aria-valuemax="100">MONGO DB
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="1400">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">65%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5 text-start ps-3" role="progressbar" style={{width: "65%"}} aria-valuenow="MYSQL" aria-valuemin="0" aria-valuemax="100">MYSQL
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2" data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="1500">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">75%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5 text-start ps-3" role="progressbar" style={{width: "75%"}} aria-valuenow="WORDPRESS" aria-valuemin="0" aria-valuemax="100">WORDPRESS CUSTOMIZATION
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>  
            </section>

            {/* Contact Form */}
            <section className="fw-monospace my-5" id="contact">
                <div className="container">
                    <div className="row sub_content">
                        <div className="col-lg-6 mb-5">
                            <div className="dividerHeading mb-3">
                                <h4 className="fs-3"><span>GET IN TOUCH</span></h4>
                                <div className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                            </div>
                            
                            <div>
                                <form ref={myForm} onSubmit={sendEmail} id="contactForm" action="">
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-12 mb-2">
                                                <input ref={nameRef} type="text" id="name" name="name" className="form-control" maxLength="100" data-msg-required="Please enter your name."  placeholder="Your Name" required/>
                                            </div>
                                            <div className="col-12 mb-2">
                                                <input  ref={emailRef} type="email" id="email" name="email" className="form-control" maxLength="100" data-msg-email="Please enter a valid email address." data-msg-required="Please enter your email address."placeholder="Your E-mail" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <input ref={subjectRef} type="text" id="subject" name="subject" className="form-control" maxLength="100" data-msg-required="Please enter the subject." placeholder="Subject" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-md-12 mb-3">
                                                <textarea ref={messageRef} id="message" className="form-control" name="message" rows="10" cols="50" data-msg-required="Please enter your message." maxLength="5000" placeholder="Message"></textarea>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            {!isSend && <button className="btn btn-lg bg-light-green rounded-0" type="submit">SEND <i className="fas fa-paper-plane"></i></button>}
                                            {
                                                isSend && <div>
                                                    <div className="spinner-border p-4 text-light-green" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </form>
                                {
                                    
                                    successMessage && <div className="alert alert-success mt-3" role="alert"><i class="far fa-check-circle text-light-green"></i>         Message Send Successfully</div>
                                }
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="dividerHeading mb-3">
                                <h4 className="fs-3"><span>CONTACT INFO</span></h4>
                                <div className="divider mb-3"><div className="color-nowidth"><div className="color-width"></div></div></div>
                                <p>You can contact me in these details. You can also serach by my username. You will find me in google. My username is "raihanuddin2002". </p>
								<div className="widget_info_contact">
									<div><i className="fa fa-map-marker text-light-green"></i> <span><strong>Present Address</strong>: Road-24,Uttara-7,Dhaka,Bangladesh</span></div>
									<div><i className="fa fa-map-marker text-light-green"></i> <span><strong>Parmanent Address</strong>: Kaliganj,Jhenidah,Khulna,Bangladesh</span></div>
									<div><i className="fa fa-user text-light-green"></i> <span><strong>Phone:</strong> +8801998306511,+8801879323625</span></div>
									<div><i className="fa fa-envelope text-light-green"></i> <span><strong>Email</strong>: <a className="text-light-green" href="mailto:raihanuddin2002@gmail.com">raihanuddin2002@gmail.com</a></span></div>
									<div><i className="fa fa-globe text-light-green"></i> <span><strong>Web</strong>: <a className="text-light-green" href="#" data-placement="bottom" data-toggle="tooltip" title="www.raihanuddin2002.xyz">www.raihanuddin2002.xyz</a></span></div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;