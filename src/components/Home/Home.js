import React, { useState } from 'react';
import '../Home/Home.css';
import logo from '../../images/logo.png';


const Home = () => {
    // fixed header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 0);
    });
    // toggle menu
    const [show, setShow] = useState(true);


    return (
        <div className='home' id='Home'>
            <div className="home-bg">
                <div className="header d__flex align__items__center pxy__30">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navigation pxy__30">
                        <ul className="navbar  d__flex">
                            <a href="#Home"><li className='nav__items mx__15'>Home</li></a>
                            <a href="#About"><li className='nav__items mx__15'>About</li></a>
                            <a href="#Projects"><li className='nav__items mx__15'>Projects</li></a>
                            <a href="#Service"><li className='nav__items mx__15'>Services</li></a>
                            <a href="#Blogs"><li className='nav__items mx__15'>Blogs</li></a>
                            <a href="#Contact"><li className='nav__items mx__15'>Contact</li></a>
                        </ul>
                    </div>
                    {/* toggle maenu */}
                    <div className="toggle__menu">
                        <svg
                            onClick={() => setShow(!show)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-justify white pointer"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    {show ? (
                        <div className="sideNavbar">
                            <ul className="sidebar d__flex">
                                <li className="sideNavbar">
                                    <a href="#Home">Home</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#About">About</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Projects">Projects</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Service">Service</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Blogs">Blogs</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
                {/* Home COntent */}
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <h1 className='home__text pz-10'>Wellcome To My Universe</h1>
                            <h2 className='home__text pz-10'>Hi, I'm Akash Muhammad Abrar</h2>
                            <h3 className='home__text sweet pz-10'>React Js Developer</h3>
                            <h4 className='home__text pz-10'>Full-Stack Web Developer</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;