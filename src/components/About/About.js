import React from 'react';
import '../About/About.css';
import about from '../../images/about.png';
import { FaArrowUp } from "react-icons/fa";

const About = () => {
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0);
    });
    return (
        <div className='about component__space' id='About'>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={about} alt="" className='about__img' />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">About Me</h1>
                        <div className="about__meta">
                            <p className="__about__text p__color">
                                Hello, I am Akash Muhammad Abrrar. I have no professional experience yet. But I have learned basic and fundamental topics of programming. There are HTML5, CSS3, Javascript, MongoDB, Express Js, React Js, Node Js,
                                google firebase,heroku,figma,git & github and other things for complete web development. I would like to learn any technology for programming if needed.
                            </p>
                            <p className="__about__text p__color">
                                Building user-friendly websites and applications is truly a passion of mine and I am confident that I would be an excellent addition to your organization. In addition to my knowledge base, I actively seek out new technologies and advancements. I have attached three projects in my resume detailing my work, along with links to websites including GitHub codes and applications.
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href="https://drive.google.com/file/d/1s_6uCSClGlAC876K8EMNXdH0-gbl2Rqb/view" target="_blank" rel="noreferrer"><button className="about btn pointer">Download Resume</button></a>
                                <a href="#"><button className="about btn pointer">Hire Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* up to top btn */}
            <div className='up__to__top__btn'>
                <a className='bottom__to__top' href="#">
                    <FaArrowUp className='white'></FaArrowUp>
                </a>
            </div>
        </div>
    );
};

export default About;