import React from 'react';
import '../Contact/Contact.css';
import contactMe from '../../images/contact.jpg';

const Contact = () => {
    return (
        <div className='contact component__space' id='Contact'>
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            <p className='hire__text white'>I am available for work.Connect with me via Phone:</p>
                            <p className='hire__text white'><strong>+8801758472952</strong>or E-mail <strong>mabrrar9@gmail.com</strong></p>
                        </div>
                        <form action="https://formspree.io/f/xwkyznqr" method="POST" className='input__box'>
                            <input type="text" className='contact name' placeholder='Your Name' name="name" required />
                            <input type="text" className='contact email' placeholder='Your Email' name="email" required />
                            <input type="text" className='contact phone' name="phone" placeholder='Your Phone No:' id="" required />
                            <textarea name="message" id="message" placeholder='Write Your Messages Here'></textarea>
                            <input id='btnIn' className='contact pointer' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div className="col__2">
                    <img className='contact__img' src={contactMe} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;