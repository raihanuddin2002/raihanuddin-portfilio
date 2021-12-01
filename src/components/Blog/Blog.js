import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="fw-monospace">
             <section className="about-hero d-flex align-items-center">
                <div className="container">
                    <h2 className="mb-0"><span  className="bg-dark text-white px-2">BLOG</span></h2>
                    <p className="mt-0"><span className="bg-white text-muted px-2 fs-5">KNOW & SHARE</span></p>
                </div>
            </section>
            <section>
                <div style={{background: "#cdcdcd63"}}>
                    <div id="main-content">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="post-container">
                                        <div className="post-content mb-3">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img className="img-fluid" src="https://i.ibb.co/QNGwN03/3.png" alt=""/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="inner-content clearfix">
                                                        <h3><span className="text-success">Delish Knowledge</span></h3>
                                                        <div className="post-information mb-2">
                                                            <span className="me-3">
                                                                <i className="fa fa-tags me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>MBBS</span>
                                                            </span>
                                                            <span className="me-3">
                                                                <i className="fa fa-user me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>Admin</span>
                                                            </span>
                                                            <span>
                                                                <i className="fa fa-calendar me-1 text-light-green" aria-hidden="true"></i>
                                                                01 Nov, 2019
                                                            </span>
                                                        </div>
                                                        <p className="description">
                                                        <i className="fas fa-check-circle text-light-green"></i> Think of this as healthy vegetarian cooking, made simple. Writer Alex is a registered dietitian, and her ingredient shopping tips and cooking videos — check out the one for vegan paella! — are the next best thing to an office visit. Vegetarians or anybody curious about the lifestyle can consider this blog their starter kit for plant-based recipes that range in ingredients and complexity...
                                                        </p>
                                                        <NavLink className="btn bg-light-green rounded-0 text-uppercase" to="/blog">
                                                            Read More <i class="fas fa-info-circle"></i>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-content mb-2">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img className="img-fluid" src="https://i.ibb.co/QNGwN03/3.png" alt=""/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="inner-content clearfix">
                                                        <h3><span className="text-success">The Real Food Dietitians</span></h3>
                                                        <div className="post-information mb-2">
                                                            <span className="me-3">
                                                                <i className="fa fa-tags me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>MBBS</span>
                                                            </span>
                                                            <span className="me-3">
                                                            <i className="fas fa-user me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>Admin</span>
                                                            </span>
                                                            <span>
                                                                <i className="fa fa-calendar  me-1 text-light-green" aria-hidden="true"></i>
                                                                01 Nov, 2019
                                                            </span>
                                                        </div>
                                                        <p className="description">
                                                        <i className="fas fa-check-circle text-light-green"></i> This blog is for people who love their Instant Pot, slow cooker, and Whole30 plan. It features recipes for each, plus tips for meal prep efficiency. Not only are there tons of dietitian-authored recipes, but you can also opt in for customized meal plans....
                                                        </p>
                                                        <NavLink className="btn bg-light-green rounded-0 text-uppercase" to="/blog">
                                                            Read More <i class="fas fa-info-circle"></i>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-content mb-2">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img className="img-fluid" src="https://i.ibb.co/QNGwN03/3.png" alt=""/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="inner-content clearfix">
                                                        <h3><span className="text-success">The Healthy Maven</span></h3>
                                                        <div className="post-information mb-2">
                                                            <span className="me-3">
                                                                <i className="fa fa-tags me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>MBBS</span>
                                                            </span>
                                                            <span className="me-3">
                                                                <i className="fa fa-user me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>Admin</span>
                                                            </span>
                                                            <span>
                                                                <i className="fa fa-calendar me-1 text-light-green" aria-hidden="true"></i>
                                                                01 Nov, 2019
                                                            </span>
                                                        </div>
                                                        <p className="description">
                                                        <i className="fas fa-check-circle text-light-green"></i> For those who want a 360-degree approach to self-care, with advice for betterment in the workplace, home, gym, and on the go, look no further. The Healthy Maven offers recipes for every type of meal under the sun (salads, sides, soups, and more), DIY tips (you’ll learn how to make your own yoga mat spray), and quick workouts. If you like where all this is going, there’s a supplementary podcast run by blogger Davida with guest wellness experts.
                                                        </p>
                                                        <NavLink className="btn bg-light-green rounded-0 text-uppercase" to="/blog">
                                                            Read More <i class="fas fa-info-circle"></i>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-content mb-2">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img className="img-fluid" src="https://i.ibb.co/QNGwN03/3.png" alt=""/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="inner-content clearfix">
                                                        <h3><span className="text-success">Peanut Butter Fingers</span></h3>
                                                        <div className="post-information mb-2">
                                                            <span className="me-3">
                                                                <i className="fa fa-tags me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>MBBS</span>
                                                            </span>
                                                            <span className="me-3">
                                                                <i className="fa fa-user me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>Admin</span>
                                                            </span>
                                                            <span className="me-3">
                                                                <i className="fa fa-calendar me-1 text-light-green" aria-hidden="true"></i>
                                                                01 Nov, 2019
                                                            </span>
                                                        </div>
                                                        <p className="description">
                                                        <i className="fas fa-check-circle text-light-green"></i> Fit Foodie Finds is a wellness blog tailor-made for serial Instagram scrollers. The gorgeous photos of healthy meals are just as exciting as making them. Who knew oats could look so pretty? Healthy living posts primarily focus on recipes, but they also include workouts (booty, legs, you name it), do-it-yourself (DIY) beauty, mental health, and relationships. Style-conscious readers will love it, too, with its gallery after gallery of fashion articles...
                                                        </p>
                                                        <NavLink className="btn bg-light-green rounded-0 text-uppercase" to="/blog">
                                                            Read More <i class="fas fa-info-circle"></i>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-content mb-2">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img className="img-fluid" src="https://i.ibb.co/QNGwN03/3.png" alt=""/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="inner-content clearfix">
                                                        <h3><span className="text-success">Toby Amidor Nutrition</span></h3>
                                                        <div className="post-information mb-2">
                                                            <span className="me-3">
                                                                <i className="fa fa-tags me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>MBBS</span>
                                                            </span>
                                                            <span className="me-3">
                                                                <i className="fa fa-user me-1 text-light-green" aria-hidden="true"></i>
                                                                <span>Admin</span>
                                                            </span>
                                                            <span className="me-3">
                                                                <i className="fa fa-calendar me-1 text-light-green" aria-hidden="true"></i>
                                                                01 Nov, 2019
                                                            </span>
                                                        </div>
                                                        <p className="description">
                                                        <i className="fas fa-check-circle text-light-green"></i> Blogger Toby is a registered dietitian and author who helps home cooks up their game with the latest in nutrition and food news, including ingredient recalls and safety tips. Toby helps you see your kitchen in an exciting new way and reignite your love of cuisine and cooking. There’s a heavy focus on creative meal prep, along with more serious articles on things like foods to fight depression....
                                                        </p>
                                                        <NavLink className="btn bg-light-green rounded-0 text-uppercase" to="/blog">
                                                            Read More <i class="fas fa-info-circle"></i>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                    {/* Sidebar */}
                           
                                {/*  */}
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;