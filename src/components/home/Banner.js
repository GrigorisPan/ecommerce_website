import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImgBanner1 from '../../assets/banner-1.jpg';
import ImgBanner2 from '../../assets/banner-2.jpg';

const Banner = () => {
  return (
    <div className='relative md:py-1 min-w-fit'>
      <div className='absolute w-full h-32 md:bg-gradient-to-t md:from-gray-100 md:to-transparent md:bottom-0 md:z-20' />{' '}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        dynamicHeight={true}
      >
        <div>
          <img src={ImgBanner1} alt='phones banner' />
        </div>
        <div>
          <img src={ImgBanner2} alt='computers banner' />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
