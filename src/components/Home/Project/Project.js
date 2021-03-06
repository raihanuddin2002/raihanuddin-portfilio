import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const {count,name, description,site,clientCode,serverCode,code,type,picture,category,technologies}= props.data;
    const tech = technologies.split(',');
    // const key = Math.random() * Math.random() * Math.random();

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
                                    <Link to={`/projectDetails/${count}`}><button className="btn bg-light-green me-1 mb-1"><i className="fas fa-info-circle"></i> Details </button></Link>
                                    {site && <a href={site} target="_blank"><button className="btn bg-light-green me-1 mb-1"><i className="fas fa-podcast"></i> Live site</button></a>}
                                    {clientCode && <a href={clientCode} target="_blank" rel="noreferrer"><button className="btn bg-light-green me-1 mb-1"><i className="fab fa-github"></i> Client Code</button></a>}
                                    {serverCode && <a href={serverCode} target="_blank" rel="noreferrer"><button className="btn bg-light-green me-1 mb-1"><i className="fab fa-github"></i> Server Code</button></a>}
                                    {code && <a href={code} target="_blank" rel="noreferrer"><button className="btn bg-light-green me-1 mb-1"><i className="fab fa-github"></i> Code</button></a>}
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