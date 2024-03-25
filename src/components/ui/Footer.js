import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/electro_logo.svg';
import PaymentIcon from '../../assets/patment-methods-icons.png';

const Footer = () => {
  const [accordion, setAccordion] = useState(-1);

  const toggleAccordion = (index) => {
    if (index === accordion) {
      setAccordion(-1);
    } else {
      setAccordion(index);
    }
  };
  return (
    <>
      {/* newsletter footer*/}
      <div className='bg-primary py-2 px-0 md:px-2 min-w-fit'>
        <div className='container flex flex-col md:flex-row items-center justify-center md:justify-between px-1 md:px-2'>
          <div className='whitespace-nowrap mr-1'>
            <div className='flex items-center space-x-6 text-md md:text-2xl text-secondary'>
              <i className='fa-regular fa-paper-plane'></i>
              <p>Sign up to Newsletter</p>
            </div>
            <p className='text-secondary text-xs'>
              ...and receive $20 coupon for first shopping
            </p>
          </div>
          <div className=' flex w-full max-w-lg flex-grow relative'>
            <span className='absolute left-4 top-2 text-lg text-gray-400'>
              <i className='fas fa-search' />
            </span>
            <input
              type='text'
              className='w-6 flex-grow flex-shrink  pl-10 pr-2 py-2 rounded-l-full focus:outline-none text-[#6b6b6b] focus:border-secondary focus:ring-0'
              placeholder='Enter your email address'
            />
            <button className=' bg-secondary  text-white px-5 rounded-r-md hover:bg-secondary transition cursor-pointer'>
              SignUp
            </button>
          </div>
        </div>
      </div>
      {/* main footer */}
      <footer className='hidden md:block pt-10 pb-12 bg-gray-50 min-w-[270px]'>
        <div className='container grid grid-cols-3 gap-8'>
          {/* footer text */}
          <div className='col-span-1 space-y-5'>
            <Logo className='max-w-[100px] max-h-[100px] md:max-w-[200px] md:max-h-[200px]' />
            <div className='flex'>
              <span className='text-primary text-5xl pr-4'>
                <i className='fa-solid fa-headset'></i>
              </span>
              <div>
                <span className='text-sm text-gray-700'>
                  Got Questions ? Call us 24/7!
                </span>
                <br />
                <span className='text-lg text-secondary'>
                  (800) 8001-8576, (0600) 854 568
                </span>
              </div>
            </div>
            <div>
              <p className='text-secondary font-semibold'>Contact Info</p>
              <p className='text-gray-700 text-sm'>
                Dimitriou Proiou 20, Alexandreia, Greece, GR
              </p>
            </div>
            {/* footer social icons */}
            <div className='flex space-x-6 text-xl'>
              <a href='/' className='text-gray-400 hover:text-blue-500'>
                <i className='fa-brands fa-facebook'></i>
              </a>
              <a href='/' className='text-gray-400 hover:text-purple-500'>
                <i className='fa-brands fa-viber'></i>
              </a>
              <a href='/' className='text-gray-400 hover:text-pink-500	'>
                <i className='fa-brands fa-instagram'></i>
              </a>
              <a href='/' className='text-gray-400 hover:text-amber-500	'>
                <i className='fa-solid fa-rss'></i>
              </a>
            </div>
            {/* footer social icons */}
          </div>
          {/* footer text end */}
          {/* footer links */}
          <div className='col-span-2 grid grid-cols-3 gap-4'>
            <div>
              <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider '>
                Find It Fast
              </h3>
              <div className=' mt-4 space-y-3'>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Laptops &amp; Computers
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Cameras &amp; Photography
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Smart Phones &amp; Tablets
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Video Games &amp; Consoles
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  TV &amp; Audio
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider '>
                information
              </h3>
              <div className=' mt-4 space-y-3'>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  About Us
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Return Policy
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Terms &amp; Condition
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Manage Account
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Privacy Policy
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider '>
                my account
              </h3>
              <div className=' mt-4 space-y-3'>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Orders
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Wishlist
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Track Order
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Manage Account
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Return Order
                </a>
              </div>
            </div>
          </div>
          {/* footer links end */}
        </div>
      </footer>

      {/* mobile footer */}
      <footer className='md:hidden pt-5 pb-6 bg-gray-50 min-w-[270px]'>
        <div className='flex flex-col items-center justify-center space-y-3'>
          <Logo className='max-w-[150px] max-h-[150px]' />
          <div className='flex'>
            <span className='text-primary text-3xl pr-4'>
              <i className='fa-solid fa-headset'></i>
            </span>
            <div>
              <span className='text-sm text-gray-700'>
                Got Questions ? Call us 24/7!
              </span>
              <br />
              <span className='text-md text-secondary'>
                (800) 8001-8576, (0600) 854 568
              </span>
            </div>
          </div>
          {/* accordion start 1 */}
          <div className='max-w-[80%] w-full px-2'>
            <div
              onClick={() => {
                toggleAccordion(1);
              }}
            >
              <button
                type='button'
                className={
                  accordion === 1
                    ? 'flex items-center justify-between w-full py-1 text-xl font-bold text-left border-b-[1px] border-gray-300  bg-transparent text-gray-400 '
                    : 'flex items-center justify-between w-full py-2 text-xl font-bold text-left text-gray-400 border-b-[1px] border-gray-300 '
                }
              >
                {/* accordion Title */}
                <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider '>
                  Find It Fast
                </h3>
                <span
                  className={
                    accordion === 1
                      ? 'w-6 h-6 rotate-180 shrink-0'
                      : 'w-6 h-6 shrink-0'
                  }
                >
                  <i class='fa-solid fa-angle-down'></i>
                </span>
              </button>
            </div>
            {/* accordion Content */}
            <div className={accordion === 1 ? 'block' : 'hidden'}>
              <div className=' text-sm mt-2 space-y-3 py-2 px-2 border-b border-gray-200'>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Laptops &amp; Computers
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Cameras &amp; Photography
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Smart Phones &amp; Tablets
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Video Games &amp; Consoles
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  TV &amp; Audio
                </a>
              </div>
            </div>
          </div>
          {/* accordion end 1 */}
          {/* accordion start 2 */}
          <div className='max-w-[80%] w-full px-2'>
            <div
              onClick={() => {
                toggleAccordion(2);
              }}
            >
              <button
                type='button'
                className={
                  accordion === 2
                    ? 'flex items-center justify-between w-full py-1 text-xl font-bold text-left border-b-[1px] border-gray-300  bg-transparent text-gray-400'
                    : 'flex items-center justify-between w-full py-2 text-xl font-bold  text-left text-gray-400 border-b-[1px] border-gray-300 '
                }
              >
                {/* accordion Title */}
                <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider '>
                  information
                </h3>
                <span
                  className={
                    accordion === 2
                      ? 'w-6 h-6 rotate-180 shrink-0'
                      : 'w-6 h-6 shrink-0'
                  }
                >
                  {' '}
                  <i class='fa-solid fa-angle-down'></i>
                </span>
              </button>
            </div>
            {/* accordion Content */}
            <div className={accordion === 2 ? 'block' : 'hidden'}>
              <div className=' text-sm mt-2 space-y-3 py-2 px-2 border-b border-gray-200'>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  About Us
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Return Policy
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Terms &amp; Condition
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Manage Account
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          {/* accordion end 2 */}
          {/* accordion start 3 */}
          <div className='max-w-[80%] w-full px-2'>
            <div
              onClick={() => {
                toggleAccordion(3);
              }}
            >
              <button
                type='button'
                className={
                  accordion === 3
                    ? 'flex items-center justify-between w-full py-1 text-xl font-bold text-left border-b-[1px] border-gray-300  bg-transparent text-gray-400 '
                    : 'flex items-center justify-between w-full py-2 text-xl font-bold  text-left text-gray-400 border-b-[1px] border-gray-300 '
                }
              >
                {/* accordion Title */}
                <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider '>
                  my account
                </h3>
                <span
                  className={
                    accordion === 3
                      ? 'w-6 h-6 rotate-180 shrink-0'
                      : 'w-6 h-6 shrink-0'
                  }
                >
                  {' '}
                  <i class='fa-solid fa-angle-down'></i>
                </span>
              </button>
            </div>
            {/* accordion Content */}
            <div className={accordion === 3 ? 'block' : 'hidden'}>
              <div className=' text-sm mt-2 space-y-3 py-2 px-2 border-b border-gray-200'>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Orders
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Wishlist
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Track Order
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Manage Account
                </a>
                <a href='/' className='text-gray-400 hover:text-primary	block'>
                  Return Order
                </a>
              </div>
            </div>
          </div>
          {/* accordion end 3 */}
        </div>
      </footer>
      {/* copyright */}
      <div className=' bg-gray-200 py-1 min-w-[270px]'>
        <div className='container flex items-center justify-between'>
          <p className='text-secondary'>© Electro - All Rights Reserved </p>
          <img
            className='hidden md:block'
            src={PaymentIcon}
            alt='payment methods'
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
