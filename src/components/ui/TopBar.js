import React from 'react';

const TopBar = () => {
  return (
    <div className='hidden md:block border-b border-gray-200'>
      <div className='container flex items-center justify-between text-xs text-gray-500 whitespace-nowrap'>
        <div className='flex py-2 space-x-2'>
          <p>+060 (800) 801-858</p>
          <p>info@electro.com</p>
        </div>
        <div className='flex space-x-2 items-center justify-center'>
          <a className='flex py-2 space-x-2 ' href='/'>
            <i className='fa-solid fa-location-dot '></i>
            <p>Store Locator</p>
          </a>
          <a className='flex py-2 space-x-2' href='/'>
            <i className='fa-solid fa-truck-fast'></i>
            <p>Track Your Order</p>
          </a>
          <a className='flex py-2 space-x-2' href='/'>
            <i className='fa-solid fa-bag-shopping'></i>
            <p>Shop</p>
          </a>
          <a className='flex py-2 space-x-2' href='/'>
            <i className='fa-solid fa-user'></i>
            <p>My Account</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
