import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = (props) => {
    const {name, description,site,clientCode,serverCode,type,picture,category,technologies}= props.data;
    const tech = technologies.split(',');
    // const key = Math.random();

    useEffect( () => {
        AOS.init();
    });
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="p-container">
                <img className="img-fluid project-img" src={picture} alt="" />
                <div className="p-absolute">
                    <div className="projects-container">
                        <div className="project-heading d-flex justify-content-center align-items-center">
                            <h2 className="text-uppercase">{name}</h2>
                        </div>
                    </div>
                </div>
                <div className="p-hover-absolute">
                    <div className="projects-hover-container">
                        <div className="project-heading bg-none">
                            <h2 className="text-uppercase text-center mb-4 pt-3">technologies</h2>
                            <div className="text-center mb-4">
                                {
                                    tech.map(e => <button className="btn bg-light-green me-1 mb-1">{e}</button> )
                                }
                            </div>
                            <div className="site-info text-center">
                                <div className="site-info-buttons position-absoulte bottom-0">
                                    <a href="#" target="_blank" rel="noreferrer"><button className="btn bg-light-green me-1 mb-1">Details</button></a>
                                    {site && <a href={site} target="_blank"><button className="btn bg-light-green me-1 mb-1">Live site</button></a>}
                                    {clientCode && <a href={clientCode} target="_blank" rel="noreferrer"><button className="btn bg-light-green me-1 mb-1">Client Code</button></a>}
                                    {serverCode && <a href={serverCode} target="_blank" rel="noreferrer"><button className="btn bg-light-green me-1 mb-1">Server Code</button></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;

{/* <div className="projects-container">
                        <img className="img-fluid project-img" src={picture} alt="" />
                        <div className="project-heading d-flex justify-content-center align-items-center">
                            <h2 className="text-uppercase">{name}</h2>
                        </div>
                    </div> */}
                    // <div className="project-heading d-flex justify-content-center align-items-center">
                    //         <h2 className="text-uppercase">HEY</h2>
                    //     </div>