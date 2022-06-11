import React from 'react';
import '../Footer/Footer.css';
import FooterImg from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='footer d__flex align__items__center justify__content__space__between pz__10' style={{ "padding": "10px 20px", "zIndex": "100" }}>
            <img src={FooterImg} className="footer__img pointer" alt="" />
            <span className='copyright'>copyright &copy; 2022 programmer Akash Muhammad Abrrar.ALl Rights Reserved</span>
        </div>
    );
};

export default Footer;