import React from 'react';
import '../Service/Service.css';
import { FaBuffer } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

const Service = () => {
    return (
        <div className='service component__space' id='Service'>
            <div className="heading">
                <h1 className="heading">My Services Which I Provide</h1>
                <p className="heading p__color">I Making All Of My Services By Modern Technologies And Hardwork</p>
                <p className="heading p__color">There Are My Services For Examples</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <FaBuffer></FaBuffer>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">
                                    Web Developments
                                </h1>
                                <p className='p service__text p__color'>The Web Development Is Very</p>
                                <p className='p service__text p__color'>Important For Our Social Comunity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <FaReact></FaReact>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">
                                    React Js Developer
                                </h1>
                                <p className='p service__text p__color'>The Modern Websites Components</p>
                                <p className='p service__text p__color'>Are Made By React js.This Is A javascript Librabrary</p>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                                <FaServer></FaServer>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">
                                    Full Stack Development
                                </h1>
                                <p className='p service__text p__color'>Client Side And Server Side</p>
                                <p className='p service__text p__color'>I Can Develop Both Side Of Website.And Put My Code Into The Github</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;