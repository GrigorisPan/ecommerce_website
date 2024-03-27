import React from 'react';
import userLogo from '../assets/user.png';

import Breadcrums from '../components/ui/Breadcrums';

const ProfileInfo = () => {
  return (
    <div className='px-2 min-w-[270px]'>
      <Breadcrums
        page='account'
        mainCategory={'Manage Account'}
        subCategory={'Profile Info'}
      />
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
                className='relative text-primary  block font-medium hover:text-primary  capitalize'
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

        {/* Profile Info form */}
        <div className='sm:col-span-8 col-span-full border border-primaryLight p-4 rounded'>
          <h3 className='text-lg font-medium capitalize mb-4'>Profile Info</h3>
          <div className='space-y-3'>
            <div className='grid sm:grid-cols-2 gap-2'>
              <div>
                <label for='' className='text-gray-600 mb-2 block'>
                  First name
                </label>
                <input
                  type='text'
                  className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
                  placeholder='First Name'
                ></input>
              </div>
              <div>
                <label for='' className='text-gray-600 mb-2 block'>
                  Last name
                </label>
                <input
                  type='text'
                  className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
                  placeholder='Last Name'
                ></input>
              </div>
              <div>
                <label for='' className='text-gray-600 mb-2 block'>
                  Birthday
                </label>
                <input
                  type='date'
                  className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
                  placeholder='dd/mm/yyyy'
                ></input>
              </div>
              <div>
                <label for='' className='text-gray-600 mb-2 block'>
                  Gender
                </label>
                <select className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label for='' className='text-gray-600 mb-2 block'>
                  Email Address
                </label>
                <input
                  type='text'
                  className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
                  placeholder='Email'
                ></input>
              </div>
              <div>
                <label for='' className='text-gray-600 mb-2 block'>
                  Phone Number
                </label>
                <input
                  type='text'
                  className='block w-full border border-gray-300 px-2 py-2 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0'
                  placeholder='Phone number'
                ></input>
              </div>
            </div>
            <div className='mt-4'>
              <button
                type='submit'
                className='text-center bg-primary text-gray-600 px-3 py-3 w-[50%] font-medium rounded-md uppercase'
              >
                Save Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
