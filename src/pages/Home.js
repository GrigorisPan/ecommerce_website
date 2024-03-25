import React from 'react';

import HomeAdv5 from '../assets/home-adv5.jpg';
import HomeAdv6 from '../assets/home-adv6.jpg';

import Banner from '../components/home/Banner';
import ProductFeed from '../components/home/ProductFeed';
import Category from '../components/home/Category';
import Features from '../components/home/Features';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

const Home = () => {
  return (
    <div className='min-w-[270px]'>
      <Banner />
      <Features />
      <ProductFeed />
      <Category />
      <div className='flex flex-nowrap overflow-auto my-7 justify-center'>
        <a
          className='flex flex-col md:flex-row px-4 gap-3 items-center justify-center md:max-w-[50%]'
          href='/'
        >
          <img loading='lazy' className='max-w-full h-auto ' src={HomeAdv5} />
          <img loading='lazy' className='max-w-full h-auto' src={HomeAdv6} />
        </a>
      </div>
    </div>
  );
};

export default Home;
