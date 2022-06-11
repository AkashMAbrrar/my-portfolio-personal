import React from 'react';
import '../Home/Home.css';
import logo from '../../images/logo.png';

const Home = () => {
    // fixed header

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 0);
    });

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
                            <a href="#Portfolio"><li className='nav__items mx__15'>Portfolio</li></a>
                            <a href="#Service"><li className='nav__items mx__15'>Services</li></a>
                            <a href="#Blogs"><li className='nav__items mx__15'>Blogs</li></a>
                            <a href="#Contact"><li className='nav__items mx__15'>Contact</li></a>
                        </ul>
                    </div>
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