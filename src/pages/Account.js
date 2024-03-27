import React from 'react';
import userLogo from '../assets/user.png';

import Breadcrums from '../components/ui/Breadcrums';

const Account = () => {
  return (
    <div className='px-2 min-w-[270px]'>
      <Breadcrums mainCategory={'Account'} />
      {/* Account wrapper */}
      <div className='lg:container grid sm:grid-cols-12 gap-6 pt-6 pb-16 items-start'>
        {/* sidebar */}
        <div className='sm:col-span-4 col-span-full m-2 '>
          {/* Account Profile */}
          <div className='flex items-center gap-4 px-4 py-3'>
            <div className='md:flex-shrink-0 sm:hidden'>
              <img src={userLogo} className='w-14 h-14 object-cover' />
            </div>
            <div className='flex-grow '>
              <p className='text-gray-600 '>Hello</p>
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
                className='relative text-primary block font-medium capitalize'
              >
                <span className='absolute -left-8 top-0 text-base'>
                  <i className='far fa-address-card'></i>
                </span>
                Manage account
              </a>
              <a
                href='#'
                className='relative text-gray-600 block hover:text-primary  capitalize'
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
                className='relative text-gray-600 block font-medium capitalize hover:text-primary'
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

        <div className='sm:col-span-8 space-y-4'>
          {/* Single Card */}
          <div className='shadow rounded bg-white px-6 pt-6 pb-8'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-semibold text-gray-700 tetx-lg'>
                Personal Profile
              </h3>
              <a href='#' className='text-xl text-primary'>
                Edit
              </a>
            </div>
            <div className='space-y-2'>
              <h4 className='text-gray-700 font-medium'>
                Grigoris Panagiotopoulos
              </h4>
              <p className='text-gray-800'>greg@gmail.com</p>
              <p className='text-gray-800'>+30-6983262525</p>
            </div>
          </div>
          {/* Single Card */}
          <div className='shadow rounded bg-white px-6 pt-6 pb-8'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-semibold text-gray-700 tetx-lg'>
                Shipping Address
              </h3>
              <a href='#' className='text-xl text-primary'>
                Edit
              </a>
            </div>
            <div className='space-y-2'>
              <h4 className='text-gray-700 font-medium'>
                Grigoris Panagiotopoulos
              </h4>
              <p className='text-gray-800'>Proiou 10, 35100</p>
              <p className='text-gray-800'>Florina, Greece</p>
              <p className='text-gray-800'>+30-6983262525</p>
            </div>
          </div>
          {/* Single Card */}
          <div className='shadow rounded bg-white px-6 pt-6 pb-8'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-semibold text-gray-700 tetx-lg'>
                Billing Address
              </h3>
              <a href='#' className='text-xl text-primary'>
                Edit
              </a>
            </div>
            <div className='space-y-2'>
              <h4 className='text-gray-700 font-medium'>
                Grigoris Panagiotopoulos
              </h4>
              <p className='text-gray-800'>Proiou 10, 35100</p>
              <p className='text-gray-800'>Florina, Greece</p>
              <p className='text-gray-800'>+30-6983262525</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
