import React from 'react';
import '../Projects/Projects.css';
import projectMed1 from '../../images/project-2.jpg';
import projectWar2 from '../../images/project-3.jpg';
import projectInd3 from '../../images/projectInd.jpg';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Modal_2 from '../Modal/Modal_2';
import Modal_3 from '../Modal/Modal_3';


const Projects = () => {
    return (
        <div className='project component__space'>
            <div className="heading">
                <h1 className="heading">My Latest Projects</h1>
                <p className="heading p__color">I Making All Of My Projects By Modern Technologies And Hardwork</p>
                <p className="heading p__color">There Are My Projects For Examples</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="porject__img__box">
                                    <img src={projectMed1} alt="" className='project__img' />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className='project__text'>Medical Service</h5>
                                <h4 className='project__text'>Medication service for all pepole and take appointment from online</h4>
                                {/* <a className='project__btn' href="" target="_blank" rel="noreferrer">Visit Me</a> */}
                                <Modal></Modal>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="porject__img__box">
                                    <img src={projectWar2} alt="" className='project__img' />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className='project__text'>Products Contribution</h5>
                                <h4 className='project__text'>Warehouse Manangements and contribution</h4>
                                {/* <a className='project__btn' href="https://warehouse-full-stack.web.app/" target="_blank" rel="noreferrer">Visit Me</a> */}
                                <Modal_2></Modal_2>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="porject__img__box">
                                    <img src={projectInd3} alt="" className='project__img' />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className='project__text'>Parts Carnival</h5>
                                <h4 className='project__text'>There are very uniqe and qualified parts for automobile and all kind of cars.</h4>
                                {/* <a className='project__btn' href="https://carparts-carnival.web.app/?fbclid=IwAR1TjvZjkI3z3eKHe-N92jgAtPXN9B0OfiKY9UKArLq8Uyq31wG48M9utzI" target="_balnk">Visit Me</a> */}
                                <Modal_3></Modal_3>
                            </div>
                        </div>
                    </div>
                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <button className='view__more pointer btn'>See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;