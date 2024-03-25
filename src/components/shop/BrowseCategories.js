import React from 'react';

const BrowseCategories = () => {
  return (
    <div className='divide-y divide-gray-200 spcae-y-5  text-sm'>
      {/* browse categories start */}
      <span className='w-full border-b border-gray-300 text-secondary'>
        <h3 className=' flex justify-center items-center py-3 capitalize'>
          Browse Categories
        </h3>
      </span>
      <ul className='px-3 text-gray-600 text-sm divide-y divide-gray-200'>
        <li className=' flex items-center py-2 '>
          <span className='text-gray-400 text-xs mr-2'>
            <i className='fa fa-angle-right'></i>
          </span>
          <a href='/' className=' capitalize '>
            computers &amp; accessories
          </a>
        </li>

        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            all in one
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Laptops
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Desktops
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Peripherals
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Monitors
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Servers
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Accessories
          </a>
        </li>
        <li className=' flex items-center py-2 '>
          <span className=' text-gray-400 text-xs mr-2'>
            <i className='fa fa-angle-right'></i>
          </span>
          <a href='/' className=' capitalize whitespace-nowrap'>
            Printers &amp; Ink
          </a>
        </li>
        <li className=' flex items-center py-2 '>
          <span className=' text-gray-400 text-xs mr-2'>
            <i className='fa fa-angle-right'></i>
          </span>
          <a href='/' className=' capitalize '>
            Networking &amp; Internet Devices
          </a>
        </li>
        <li className=' flex items-center py-2 '>
          <span className=' text-gray-400 text-xs mr-2'>
            <i className='fa fa-angle-right'></i>
          </span>
          <a href='/' className=' capitalize '>
            Software
          </a>
        </li>
        <li className=' flex items-center py-2 '>
          <span className=' text-gray-400 text-xs mr-2'>
            <i className='fa fa-angle-right'></i>
          </span>
          <a href='/' className=' capitalize whitespace-nowrap'>
            Mobiles &amp; Tablets
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Smart Phones
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Tablets
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Refurbished Mobiles
          </a>
        </li>
        <li className='px-3 py-2 '>
          <a href='/' className=' capitalize '>
            Cases &amp; Covers
          </a>
        </li>
        <li className=' flex items-center py-2 '>
          <span className=' text-gray-400 text-xs mr-2'>
            <i className='fa fa-angle-right'></i>
          </span>
          <a href='/' className=' capitalize whitespace-nowrap'>
            Accessories
          </a>
        </li>
      </ul>
      {/* browse categories end */}
    </div>
  );
};

export default BrowseCategories;
