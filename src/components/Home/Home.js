import React from 'react';
import Typewriter from "typewriter-effect";
import appleImage from "../../images/apple-devices-2.png";
const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                
                    <div className="typed-div d-flex justify-content-center align-items-center">
                            <div>
                                <h3 className="typed">
                                <Typewriter
                                    options={{
                                        strings: ['Welcome to my website', 'I am Raihan', 'I am a Jr. Web Developer (MERN & PHP)'],
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
                                <p>Click 'Download Now' button. It will redirect into google drive. You can read & download resume there. </p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="pb_action">
                                <a className="btn btn-lg bg-light-green" href="https://drive.google.com/file/d/1_8kC8PaCvuBD7s-CMhKGFZBERTtslEb6/view?usp=sharing" target="_blank">
                                    Download Now
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
                        <div className="col-lg-6 col-md-6 col-sm-6 wow bounceInLeft" data-wow-offset="200">
                            <div className="dividerHeading mb-3">
                                <h4 className="fs-3"><span>About Me</span></h4>
                                <div className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                            </div>
                            <p>
                                Cras mattis consectetur purus sit amet fermen. Lorem ipsum dolor sit amet, consec adipiscing elit. Maecenas sed diam eget risus varius bland sit amet non fringilla ullamcorper magna. Nulla eu mi magna. Etiam suscipit commodo ad gravida.
                                Cras mattis consectetur purus sit amet fermen. Lorem ipsum dolor sit amet, consec adipiscing elit. Maecenas sed diam eget risus varius bland sit amet non fringilla ullamcorper magna. Nulla eu mi magna. Etiam suscipit commodo ad gravida.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={appleImage} className="img-responsive about-image img-fluid" alt="raihanuddin2002 -web developer - sleeping-sagacity" />
                        </div>
                    </div>
                </div>
                
            </section>

            {/* Why chooses us & skill section */}
            <section className="fw-monospace my-5">
                <div className="container">
                    <div className="row sub_content">
                        <div className="col-lg-6 col-md-6 col-sm-6 wow bounceInLeft" data-wow-offset="200">
                            <div className="dividerHeading mb-3">
                                <h4 className="fs-3"><span>Why Choose me?</span></h4>
                                <div className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                            </div>
                            <p>
                                Cras mattis consectetur purus sit amet fermen. Lorem ipsum dolor sit amet, consec adipiscing elit. Maecenas sed diam eget risus varius bland sit amet non fringilla ullamcorper magna. Nulla eu mi magna. Etiam suscipit commodo ad gravida.  
                            </p>
                            <ul className="list_style square">
                                    <li>Donec convallis, metus nec tempus aliquet</li>
                                    <li>Aenean commodo ligula eget dolor</li>
                                    <li>Lorem ipsum dolor sit amet cons adipiscing</li>
                                    <li>Nunc aliquet tincidunt metus sit amet</li>
                                    <li>Accumsan vulputate faucibus turpis dictum</li>
                                </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="dividerHeading mb-4">
                                <h4 className="fs-3"><span>My Skills</span></h4>
                                <div className="divider"><div className="color-nowidth"><div className="color-width"></div></div></div>
                            </div>

                            <div className="progress-bars">
                                <div className="mb-2">
                                    <div className="row g-0 me-1">
                                        <div className="col-1 progress-lebel text-center">90%</div>

                                        <div className="col-11">
                                            <div className="progress">
                                                    <div className="progress-bar bg-light-green fs-5  text-start ps-3" role="progressbar" style={{width: "90%"}} aria-valuenow="HTML" aria-valuemin="0" aria-valuemax="100">HTML
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2">
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
                                <div className="mb-2">
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
                                <div className="mb-2">
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
                                <div className="mb-2">
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
                                <div className="mb-2">
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
                                <div className="mb-2">
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
                                <div className="mb-2">
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
                                <div className="mb-2">
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
                                <div className="mb-2">
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
                                <div className="mb-2">
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
                                
                            </div>{/* Progress bars */}
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default Home;