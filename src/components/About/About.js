import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from "../../images/Untitled design (5).png";

const About = () => {
    // Animation
    useEffect( () => {
        AOS.init();
    });

    return (
        <div className="fw-monospace">
            <section className="about-hero d-flex align-items-center">
                <div className="container">
                    <h2 className="mb-0"><span  className="bg-dark text-white px-2">ABOUT ME</span></h2>
                    <p><span className="bg-white text-muted px-2 fs-5">WEB DEVELOPER (MERN & PHP)</span></p>
                </div>
            </section>

            <section>
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6" data-wow-offset="200" data-aos="fade-right" data-aos-duration="1000">
                                <div className="dividerHeading mb-3">
                                    <h4 className="fs-3"><span>About Me</span></h4>
                                    <div className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                                </div>
                                <p>
                                    I am a Jr Web Developer. I am a fresher in MERN stack. Recently I have finished MERN stack Course at Programming Hero. I am in web sector since 2018. I started my journey as a WordPress developer. Then I started learning PHP. After finishing PHP course then I got admission at Programming Hero and started learning MERN stack. I worked 3 small professional projects, 2 of projects in local marketplace and 1 project in Fiverr.
                                </p>
                                <p>
                                    I am a self-motivated IT professional with strong proficiency in ReactJS, JavaScript, PHP, WordPress,Tailwind, Bootstrap, CSS, HTML, NodeJS, Express, MongoDB and especially mobile responsive web development alongside the ability in writing DRY and efficient code. Programming is my passion. I love to play cricket. I am a foodies also. I can do my best what i love to do.
                                </p>
                                <p>
                                Please check my projects, so you can get a proper concept about my work. I hope i will be able to earn your trust upon me.
                                </p>

            
                        </div>
                        <div className="col-12 col-lg-6 text-center" data-aos="fade-down" data-aos-duration="1000"  data-aos-duration="1000" >
                            <img src={aboutImg} className="about-image img-fluid" alt="raihanuddin2002 -web developer - sleeping-sagacity" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mb-5">
                    <div className="row">
                        <div className="dividerHeading mb-3">
                            <h4 className="fs-3"><span>PROFESSIONAL COURSES</span></h4>
                            <div style={{background:'none'}} className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2" data-aos="fade-down" data-aos-duration="1000">
                            <div className="col mb-3">
                                <h4 className="text-success mb-0">FULL STACK WEB DEVELOMENT (MERN)</h4>
                                <h6 className="fw-bold mb-0">at Programming Hero</h6>
                                <h6 className="mb-0"><small>Online Platform</small></h6>
                                <h6 className="mt-0"><small>Jul 2021 - Current</small></h6>
                                <h5>TECHNOLOGIES:</h5>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> HTML 5</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> CSS 3</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> BOOTSTRAP 5</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> TAILWIND CSS</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> API</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> JS (ES6)</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> REACT JS, HOOK, CONTEXT API</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> NODE JS</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> EXPRESS JS</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> MONGO DB</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> FIREBASE</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> AUTHENTICATION</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> NETLIFY</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> HEROKU</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> FIGMA</div>
                            </div>

                            <div className="col mb-3">
                                <h4 className="text-success mb-0">WEB DESIGN & DEVELOPMENT (PHP)</h4>
                                <h6 className="fw-bold mb-0">at Programming Point</h6>
                                <h6 className="mb-0"><small>Online Platform</small></h6>
                                <h6 className="mt-0"><small>Jun 2020 - Apr 2021 (11 month)</small></h6>
                                <h5>TECHNOLOGIES:</h5>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> HTML 5</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> CSS 3</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> BOOTSTRAP 4</div>
                                
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> JS</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> JQUERY</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> PSD TO HTML</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> PHP</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> MYSQL</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> C PANEL</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> AUTHENTICATION</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> AJAX</div>
                            </div>
                            <div className="col mb-3">
                                <h4 className="text-success mb-0">WORDPRESS CUSTOMIZATION</h4>
                                <h6 className="fw-bold mb-0">at Coders Bit</h6>
                                <h6 className="mb-0"><small>Local Platform</small></h6>
                                <h6 className="mt-0"><small>Sep 2018 - Feb 2019 (6 month)</small></h6>
                                <h5>TECHNOLOGIES:</h5>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> HTML</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> CSS</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> WP FUNCTIONALITY</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> THEME CUSTOMIZATION</div>
                                
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> PLUGIN CUSTOMIZATION</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> AVADA</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> ELEMENTOR</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> YOAST SEO</div>
                                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> FIVERR TIPS & TRICKS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{background:"#E9ECEF"}}>
                <div className="container py-5">
                    <div className="row">
                        <div className="dividerHeading mb-3">
                            <h4 className="fs-3"><span>EDUCATIONAL BACKGROUND</span></h4>
                            <div style={{background:'none'}} className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                        </div>

                        <div>
                        <table class="table table-bordered border-success">
                            <thead>
                                <tr>
                                    <th scope="col">DEGREE</th>
                                    <th scope="col">INSTITUTE</th>
                                    <th scope="col">GPA</th>
                                    <th scope="col">PASSING YEAR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">PSC</th>
                                    <td>K.G Academy</td>
                                    <td>5.00</td>
                                    <td>2012</td>
                                </tr>
                                <tr>
                                <th scope="row">JSC</th>
                                    <td>M.K.S.M High School</td>
                                    <td>5.00</td>
                                    <td>2015</td>
                                </tr>
                                <tr>
                                    <th scope="row">SSC</th>
                                    <td>M.K.S.M High School</td>
                                    <td>4.78</td>
                                    <td>2018</td>
                                </tr>
                                <tr>
                                    <th scope="row">HSC</th>
                                    <td>Govt. M.U College</td>
                                    <td>4.67</td>
                                    <td>2020</td>
                                </tr>
                                <tr>
                                    <th scope="row">B.A</th>
                                    <td>Uttara University</td>
                                    <td> - </td>
                                    <td>Jun 2021-Current</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;