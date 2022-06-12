import React from 'react';
import CarImg1 from '../../images/screenCar-1.jpg';
import CarImg2 from '../../images/screenCar-2.JPG';
import CarImg3 from '../../images/screenCar-3.jpg';

const Modal_3 = () => {
    return (
        <div>
            <label for="my-modal-7" class="btn btn-accent">See More</label>

            <input type="checkbox" id="my-modal-7" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg text-center py-2">This Is Automobile Car Parst Website</h3>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-4'>
                        <div class="card card w-4/5 mx-auto bg-base-100 shadow-transparent ">
                            <figure><img src={CarImg1} alt="" /></figure>
                            <div class="card-body">
                            </div>
                        </div>
                        <div class="card card w-4/5 mx-auto bg-base-100 shadow-transparent ">
                            <figure><img src={CarImg2} alt="" /></figure>
                            <div class="card-body">
                            </div>
                        </div>
                        <div class="card w-4/5 mx-auto bg-base-100 shadow-transparent ">
                            <figure><img src={CarImg3} alt="" /></figure>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 py-2 '>
                        <div className='py-2 text-justify'>
                            <li>This Website Is A Automobile Parts Related Sites</li>
                            <li>There Is Some Parts Items And If Anybody Buy These Things They Have To Puchase</li>
                            <li>And Before Purchase They Need To Email And User Information</li>
                            <li>There Is A Dashboard For User Info And User Account Setting</li>
                            <li>We Made An Admin System Method And Data Add Or Remove Method</li>
                        </div>
                        <div className='py-2 mx-2'>
                            <a className='btn btn-outline btn-accent' href="https://carparts-carnival.web.app/dashboard/users" target="_blank" rel="noreferrer">Live Website Link</a>
                            <a className='btn btn-outline btn-accent' href="https://github.com/AkashMAbrrar/car-manufacture-websites-client-side" target="_blank" rel="noreferrer">Github Client Side Code Link</a><br />
                            <a className='btn btn-outline btn-accent' href="https://github.com/AkashMAbrrar/car-manufacturer-website-server-side" target="_blank" rel="noreferrer">Github Server Side Code Link</a>
                        </div>
                    </div>

                    <div class="modal-action">
                        <label for="my-modal-7" className="btn btn-error">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal_3;