import React from 'react';
import house1 from '../../images/screenWar-1.JPG';
import house2 from '../../images/screenWar-2.jpg';
import house3 from '../../images/screenWar-3.jpg';

const Modal_2 = () => {
    return (
        <div>
            <label for="my-modal-6" class="btn btn-accent">See More</label>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg text-center py-2">This Specialy Made For Warehouse Contribution</h3>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-4'>
                        <div class="card card w-4/5 mx-auto bg-base-100 shadow-transparent ">
                            <figure><img src={house1} alt="" /></figure>
                            <div class="card-body">
                            </div>
                        </div>
                        <div class="card card w-4/5 mx-auto bg-base-100 shadow-transparent ">
                            <figure><img src={house2} alt="" /></figure>
                            <div class="card-body">
                            </div>
                        </div>
                        <div class="card w-4/5 mx-auto bg-base-100 shadow-transparent ">
                            <figure><img src={house3} alt="" /></figure>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 py-2 '>
                        <div className='py-2'>
                            <li>World widely product contribution website</li>
                            <li>Login authentication system is implemented.</li>
                            <li>Responsive for all devices and authenticated by firebase</li>
                            <li>Backend database connected by mongoDB</li>
                            <li>Protected routes using for take purchase</li>
                        </div>
                        <div className='py-2 mx-2'>
                            <a className='btn btn-outline btn-accent' href="https://warehouse-full-stack.web.app/" target="_blank" rel="noreferrer">Live Website Link</a>
                            <a className='btn btn-outline btn-accent' href="https://github.com/AkashMAbrrar/warehouse-management-client-site" target="_blank" rel="noreferrer">Github Client Side Code Link</a><br />
                            <a className='btn btn-outline btn-accent' href="https://github.com/AkashMAbrrar/warehouse-management-server-side" target="_blank" rel="noreferrer">Github Server Side Code Link</a>
                        </div>
                    </div>
                    <div class="modal-action">
                        <label for="my-modal-6" className="btn btn-error">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal_2;