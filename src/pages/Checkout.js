import React from 'react';
import Breadcrums from '../components/ui/Breadcrums';

const Checkout = () => {
  return (
    <div className='px-2 min-w-[270px]'>
      <Breadcrums page={'checkout'} />
      {/* Checkout wrapper  */}
      <div className='lg:container grid sm:grid-cols-12 pb-16 pt-4 items-start gap-1'>
        {/* Checkout form */}
        <div className='sm:col-span-8 col-span-full border border-primaryLight p-4 rounded'>
          <h3 className='text-lg font-medium capitalize mb-4'>Checkout</h3>
          <div className='space-y-2'>
            <div className='grid sm:grid-cols-2 gap-2'>
              <div>
                <label className='text-gray-600 mb-2 block'>
                  First name<span className='text-gray-800'>*</span>
                </label>
                <input
                  type='text'
                  className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
                ></input>
              </div>
              <div>
                <label className='text-gray-600 mb-2 block'>
                  Last name<span className='text-gray-800'>*</span>
                </label>
                <input
                  type='text'
                  className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
                ></input>
              </div>
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>Company name</label>
              <input
                type='text'
                className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
              ></input>
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>
                Country/Region<span className='text-gray-800'>*</span>
              </label>
              <input
                type='text'
                className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
              ></input>
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>
                Street Address<span className='text-gray-800'>*</span>
              </label>
              <input
                type='text'
                className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
              ></input>
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>
                Town/City<span className='text-gray-800'>*</span>
              </label>
              <input
                type='text'
                className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
              ></input>
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>
                Zip Code<span className='text-gray-800'>*</span>
              </label>
              <input
                type='text'
                className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
              ></input>
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>
                Phone Number<span className='text-gray-800'>*</span>
              </label>
              <input
                type='text'
                className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
              ></input>
            </div>
            <div>
              <label className='text-gray-600 mb-2 block'>
                Email Address<span className='text-gray-800'>*</span>
              </label>
              <input
                type='text'
                className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
              ></input>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className='sm:col-span-4 col-span-full  p-3 rounded border'>
          <h4 className='text-gray-800 text-lg mb-4 font-medium uppercase'>
            order summary
          </h4>
          <div className='mb-4'>
            <h5>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops </h5>
            <p>Size: M</p>
            <div className='flex justify-between'>
              <p className='text-gray-600'>x1</p>
              <p className='text-gray-800 font-medium'>$100</p>
            </div>
          </div>
          <div className='mb-4'>
            <h5>Mens Cotton Jacket </h5>
            <p>Size: M</p>
            <div className='flex justify-between'>
              <p className='text-gray-600'>x1</p>
              <p className='text-gray-800 font-medium'>$55</p>
            </div>
          </div>
          <div className='flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase'>
            <p>Subtotal</p>
            <p>$155</p>
          </div>
          <div className='flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase'>
            <p>Shipping</p>
            <p>FREE</p>
          </div>
          <div className='flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase'>
            <p>Total</p>
            <p>$155</p>
          </div>
          <div className='flex items-center mb-4 mt-2'>
            <input
              type='checkbox'
              className='text-primary focus:ring-0 rounded-md cursor-pointer w-3 h-3'
            ></input>
            <label
              for='agrerment'
              className='text-gray-600 ml-3 cursor-pointer text-sm'
            >
              Agree to our{' '}
              <a href='#' className='text-primary'>
                terms & conditions
              </a>
            </label>
          </div>
          <a
            href='#'
            className='w-full block text-center bg-primary text-gray-600 px-3 py-3 font-medium rounded-md uppercase'
          >
            Place order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
