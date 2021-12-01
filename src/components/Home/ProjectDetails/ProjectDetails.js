import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AOS from 'aos';

const ProjectDetails = () => {
      // Animation
      useEffect( () => {
        AOS.init();
    });

    const {id} = useParams();
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
    const {count,name, description,site,clientCode,serverCode,code,type,picture,screenshorts,category,technologies} = project;
    const desc = description.split('.');
    const tech = technologies.split(',');

    return (
        <div className="fw-monospace">
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="projects-screenshorts text-center mb-3  p-1 bg-light-green">
                            <a href={picture} target="_blank" rel="noopener noreferrer"><img style={{height: '60vh'}} className="img-fluid w-100" src={picture} alt="screeshort" /></a>
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

            <div className="container">
                <h3 className="mt-4"><b>Screenshorts:</b></h3>
                <div data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500"><i className="fas fa-check-circle text-light-green"></i> Click on photo to see photo properly</div>
            </div>
            <section style={{height:"82vh"}} className="my-5">
                
                <div className="container bg-dark p-4">
                {
                    isLoading && <div style={{height: '80vh'}} className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border p-4 text-light-green" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                    {!isLoading && <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {screenshorts[0] && <div className="carousel-item active text-center">
                                <a href={screenshorts[0]} target="_blank" rel="noopener noreferrer"><img style={{maxHeight: '80vh'}} src={screenshorts[0]} className="d-block mx-auto" alt="..."/></a>
                            </div>}
                            {screenshorts[1] && <div className="carousel-item">
                                <a href={screenshorts[1]} target="_blank" rel="noopener noreferrer"><img style={{maxHeight: '80vh'}} src={screenshorts[1]} className="d-block mx-auto" alt="..."/></a>
                            </div>}
                            {screenshorts[2] && <div className="carousel-item">
                                <a href={screenshorts[2]} target="_blank" rel="noopener noreferrer"><img style={{maxHeight: '80vh'}} src={screenshorts[2]} className="d-block mx-auto" alt="..."/></a>
                            </div>}
                            {screenshorts[3] && <div className="carousel-item">
                                <a href={screenshorts[3]} target="_blank" rel="noopener noreferrer"><img style={{maxHeight: '80vh'}} src={screenshorts[3]} className="d-block mx-auto" alt="..."/></a>
                            </div>}
                            {picture && <div className="carousel-item">
                                <a href={picture} target="_blank" rel="noopener noreferrer"><img style={{maxHeight: '80vh'}} src={picture} className="d-block mx-auto" alt="..."/></a>
                            </div>}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-light-green" aria-hidden="true"><i class="fas fa-arrow-circle-left mt-2"></i></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-light-green" aria-hidden="true"><i class="fas fa-arrow-circle-right mt-2"></i></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>}
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;