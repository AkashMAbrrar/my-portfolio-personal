import React from 'react';
import doctor1 from '../../images/screenDr-3.jpg';
import doctor2 from '../../images/screenDr-2.jpg';
import doctor3 from '../../images/screenDr-1.JPG';

const Modal = () => {
    return (
        <div>
            <label for="my-modal-5" className="btn btn-accent">See More</label>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-9/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-center py-2">This Is My Medication Service Website</h3>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-4'>
                        <div class="card card w-4/5 mx-auto bg-base-100 shadow-transparent ">
                            <figure><img src={doctor1} alt="" /></figure>
                            <div class="card-body">
                            </div>
                        </div>
                        <div class="card card w-4/5 mx-auto bg-base-100 shadow-transparent ">
                            <figure><img src={doctor2} alt="" /></figure>
                            <div class="card-body">
                            </div>
                        </div>
                        <div class="card w-4/5 mx-auto bg-base-100 shadow-transparent ">
                            <figure><img src={doctor3} alt="" /></figure>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 py-2 '>
                        <div className='py-2'>
                            <li>This is an user friendly website for medication services</li>
                            <li>Login authentication system is implemented.</li>
                            <li>Online medication service according to time slots.</li>
                            <li>Backend database connected by mongoDB</li>
                            <li>Using dashboard for clients who are take appointment</li>
                        </div>
                        <div className='py-2 mx-2'>
                            <a className='btn btn-outline btn-accent' href="https://doctors-portal-208da.web.app/?fbclid=IwAR3s0-sJH3_QXN6fCmfxkQq4xbc8EhA3ylJ8WzSWWswxrI_uQVwAAwxjqoc" target="_blank" rel="noreferrer">Live Website Link</a>
                            <a className='btn btn-outline btn-accent' href="https://github.com/AkashMAbrrar/doctor-portal-clients" target="_blank" rel="noreferrer">Github Client Side Code Link</a><br />
                            <a className='btn btn-outline btn-accent' href="https://github.com/AkashMAbrrar/doctors-portal-server" target="_blank" rel="noreferrer">Github Server Side Code Link</a>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label for="my-modal-5" className="btn btn-error">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;