import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div>
            <img className="w-100" src={banner} alt="BannerImg" />
        </div>
    );
};

export default Banner;