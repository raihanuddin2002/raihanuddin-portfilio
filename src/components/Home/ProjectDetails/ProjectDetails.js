import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectDetails = () => {
      // Animation
      useEffect( () => {
        AOS.init();
    });
    const {id} = useParams();
    console.log(typeof(id));
    const [projects,setProjects] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect( () => {
        fetch("/fakedata.json")
            .then(res => res.json())
            .then(data => {
                setIsLoading(true);
                if(data){
                    setProjects(data)
                    setIsLoading(false);
                }
            })
    },[id]);
    
    if(isLoading){
        return <div style={{height: '100vh'}} className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border p-4 text-light-green" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
    }
    
    const project = projects.find(p => p.count === id);
    const {count,name, description,site,clientCode,serverCode,code,type,picture,category,technologies} = project;
    const desc = description.split('.');
    const tech = technologies.split(',');
    return (
        <div className="fw-monospace">
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="projects-screenshorts text-center mb-3">
                            <img style={{height: '60vh'}} className="img-fluid w-100" src={picture} alt="screeshort" />
                        </div>

                        <div className="project-desc mt-4">
                            <h1 className="text-success mb-3">{count}.{name}</h1>
                            <h4>Project type: <b>{type}</b></h4>
                            <h4>Project Category: <b>{category}</b></h4>
                            <h3><b>Description</b>:</h3>
                            <div>
                                {desc.map(d=> <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> {d}</div>)}
                            </div>
                            <h3 className="mt-4"><b>Technologies</b>:</h3>
                            <div className="mb-3">
                                {tech.map(t => <button className="btn bg-light-green me-1 mb-1">{t}</button>)}
                            </div>
                            <div className="">
                                <div className="site-info-buttons position-absoulte bottom-0">
                                    {site && <a href={site} target="_blank"><button className="btn bg-light-green me-1 mb-1"><i className="fas fa-podcast"></i> Live site</button></a>}
                                    {clientCode && <a href={clientCode} target="_blank" rel="noreferrer"><button className="btn bg-light-green me-1 mb-1"><i className="fab fa-github"></i> Client Code</button></a>}
                                    {serverCode && <a href={serverCode} target="_blank" rel="noreferrer"><button className="btn bg-light-green me-1 mb-1"><i className="fab fa-github"></i> Server Code</button></a>}
                                    {code && <a href={code} target="_blank" rel="noreferrer"><button className="btn bg-light-green me-1 mb-1"><i className="fab fa-github"></i> Code</button></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;