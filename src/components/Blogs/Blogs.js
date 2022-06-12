import React from 'react';
import '../Blogs/Blogs.css';
import blogA from '../../images/blog-1.jpg';
import blogB from '../../images/blog-2.jpg';
import blogC from '../../images/blog-3.jpg';

const Blogs = () => {
    return (
        <div className='blog component__space' id='Blogs'>
            <div className="heading">
                <h1 className="heading">Latest Blogs And News</h1>
                <p className="heading p__color">Every day and every moments we are changing the world is changing</p>
                <p className="heading p__color">Modern technologies and media will be more important than before</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="porject__img__box">
                                    <img src={blogA} alt="" className='project__img' />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="Blog__meta absolute">
                                <h5 className='project__text'>Software Engineering</h5>
                                <h4 className='project__text'>Comming Soon!</h4>
                                <a className='blog project__btn btn' href="" target="_blank" rel="noreferrer">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="porject__img__box">
                                    <img src={blogB} alt="" className='project__img' />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="Blog__meta absolute">
                                <h5 className='project__text'>Software Engineering</h5>
                                <h4 className='project__text'>Comming Soon!</h4>
                                <a className='blog project__btn btn' href="" target="_blank" rel="noreferrer">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="porject__img__box">
                                    <img src={blogC} alt="" className='project__img' />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="Blog__meta absolute">
                                <h5 className='project__text'>Software Engineering</h5>
                                <h4 className='project__text'>Comming Soon!</h4>
                                <a className='blog project__btn btn' href="" target="_blank" rel="noreferrer">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;