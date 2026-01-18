import React from 'react';

import bannerImg from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
        <div className="md:w-1/2 w-full flex items-center md:justify-end">
            <img src={bannerImg} alt="Banner Image" />
        </div>
        <div className="md:w-1/2 w-full">
            <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
            <p className="mb-10">Deserunt excepteur consequat culpa dolor sit. Exercitation commodo eiusmod aliquip ex amet eu occaecat. Reprehenderit est in nulla tempor dolor sint. Lorem mollit sint fugiat quis sunt. Mollit quis ullamco ea consectetur exercitation id mollit eiusmod id eiusmod. Voluptate commodo occaecat enim proident id ad velit duis mollit est nostrud nulla.</p>

            <button className="btn-primary">Suscribe</button>
        </div>
    </div>
  )
}

export default Banner;
