import React from 'react';
import userLogo from '../assets/user.png';
import product from '../assets/bag_product.png';
import Breadcrums from '../components/ui/Breadcrums';

const Whishlist = () => {
  return (
    <div className='px-2 min-w-[270px]'>
      <Breadcrums page='account' mainCategory={'Wishlist'} />
      {/* Account wrapper */}
      <div className='lg:container grid sm:grid-cols-12 gap-6 pt-6 pb-16 items-start'>
        {/* sidebar */}
        <div className='sm:col-span-4 col-span-full m-2 '>
          {/* Account Profile */}
          <div className='flex items-center gap-4 px-4 py-3'>
            <div className='flex-shrink-0 sm:hidden'>
              <img src={userLogo} className='w-14 h-14 object-cover' />
            </div>
            <div className='flex-grow '>
              <p className='text-gray-600 '>Hello,</p>
              <h4 className='text-gray-800 font-medium'>
                Gregory Panagiotopoulos
              </h4>
            </div>
          </div>

          {/* Profile links */}
          <div className='mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600'>
            {/* Single link */}
            <div className='space-y-1 pl-8'>
              <a
                href='#'
                className='relative text-gray-600 block font-medium capitalize'
              >
                <span className='absolute -left-8 top-0 text-base'>
                  <i className='far fa-address-card'></i>
                </span>
                Manage account
              </a>
              <a
                href='#'
                className='relative text-gray-600 block font-medium hover:text-primary  capitalize'
              >
                Profile Info
              </a>
              <a
                href='#'
                className='relative text-gray-600 block hover:text-primary  capitalize'
              >
                Address
              </a>
              <a
                href='#'
                className='relative text-gray-600 hover:text-primary  block  capitalize'
              >
                Change Password
              </a>
            </div>
            <div className='space-y-1 pl-8 pt-4'>
              <a
                href='#'
                className='relative text-gray-600 block font-medium capitalize hover:text-primary'
              >
                <span className='absolute -left-8 top-0 text-base'>
                  <i className='fas fa-gift'></i>
                </span>
                My Order History
              </a>
              <a
                href='#'
                className='relative text-gray-600 block hover:text-primary  capitalize'
              >
                My Returns
              </a>
              <a
                href='#'
                className='relative text-gray-600 block hover:text-primary  capitalize'
              >
                My Cancellations
              </a>
              <a
                href='#'
                className='relative text-gray-600 hover:text-primary  block  capitalize'
              >
                My Reviews
              </a>
            </div>
            <div className='space-y-1 pl-8 pt-4'>
              <a
                href='#'
                className='relative text-gray-600 block font-medium capitalize hover:text-primary'
              >
                <span className='absolute -left-8 top-0 text-base'>
                  <i className='fa fa-credit-card'></i>
                </span>
                Payment Methods
              </a>
              <a
                href='#'
                className='relative text-gray-600 block hover:text-primary  capitalize'
              >
                Voucher
              </a>
            </div>
            <div className='space-y-1 pl-8 pt-4'>
              <a
                href='#'
                className='relative text-primary  block font-medium capitalize hover:text-primary'
              >
                <span className='absolute -left-8 top-0 text-base'>
                  <i className='fa fa-heart'></i>
                </span>
                My Wishlist
              </a>
            </div>
            <div className='space-y-1 pl-8 pt-4'>
              <a
                href='#'
                className='relative text-gray-600 block font-medium capitalize hover:text-primary'
              >
                <span className='absolute -left-8 top-0 text-base'>
                  <i className='fa fa-sign-out'></i>
                </span>
                Logout
              </a>
            </div>
          </div>
        </div>

        {/* Wishlist */}
        <div className='sm:col-span-8 col-span-full rounded space-y-2'>
          <div className='flex items-center justify-between gap-6 border border-primaryLight   p-4'>
            <div className='w-10 flex-shrink-0 md:block hidden '>
              <img src={product} alt='bag_product' className='w-full '></img>
            </div>
            <div className='1/3'>
              <h2 className='text-gray-800 text-lg font-medium uppercase'>
                Fjallraven - Foldsack No. 1
              </h2>
              <p className='text-sm'>
                Availability:<span className='text-green-600'> In Stock</span>
              </p>
            </div>
            <div className='text-primary text-lg font-semibold '>$320.00 </div>
            <a
              href='#'
              className='cursor-pointer px-6 py-2 text-center text-sm text-secondary bg-primary rounded uppercase font-semibold'
            >
              Add to cart
            </a>
            <div className='text-gray-600 cursor-pointer hover:text-primary'>
              <i className='fas fa-trash'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whishlist;
