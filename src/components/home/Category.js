import React from 'react';
import Cat1 from '../../assets/cat-1-300x300.png';
import Cat2 from '../../assets/cat-2-300x300.png';
import Cat3 from '../../assets/cat-3-300x300.png';
import Cat4 from '../../assets/cat-4-300x300.png';
import Cat5 from '../../assets/cat-5-300x300.png';
import Cat6 from '../../assets/cat-6-300x300.png';

const Category = () => {
  return (
    <div className='hidden md:block container'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-8  px-2 py-2'>
        {/* single category 1 */}
        <div className='flex items-center h-full'>
          <a
            href='/'
            className='flex items-center bg-gray-100 rounded-sm hover:shadow-lg transition duration-500 h-full'
          >
            <div className=' flex justify-center w-2/5 '>
              <img
                src={Cat1}
                alt='category'
                className=' max-w-full h-auto -rotate-12 pr-5'
              />
            </div>
            <div className=' flex items-center '>
              <p className='text-secondary text-md md:text-xl '>
                Home &amp; Audio Enternteinment
              </p>
            </div>
          </a>
        </div>
        {/* single category end */}
        {/* single category 2 */}
        <div className='flex items-center h-full'>
          <a
            href='/'
            className='flex items-center bg-gray-100 rounded-sm hover:shadow-lg transition duration-500 h-full'
          >
            <div className=' flex justify-center w-2/5'>
              <img
                src={Cat2}
                alt='category'
                className=' max-w-full h-auto -rotate-12 pr-5'
              />
            </div>
            <div className=' flex items-center '>
              <p className='text-secondary text-md md:text-xl '>
                Smatphones &amp; Tablets
              </p>
            </div>
          </a>
        </div>
        {/* single category end */}
        {/* single category 3 */}
        <div className='flex items-center h-full'>
          <a
            href='/'
            className='flex items-center bg-gray-100 rounded-sm hover:shadow-lg transition duration-500'
          >
            <div className=' flex justify-center w-2/5 '>
              <img
                src={Cat3}
                alt='category'
                className=' max-w-full h-auto -rotate-12 pr-5'
              />
            </div>
            <div className=' flex items-center '>
              <p className='text-secondary text-md md:text-xl '>
                Desktop PCs &amp; Laptops
              </p>
            </div>
          </a>
        </div>
        {/* single category end */}
        {/* single category 4 */}
        <div className='flex items-center h-full'>
          <a
            href='/'
            className='flex items-center bg-gray-100 rounded-sm hover:shadow-lg transition duration-500 h-full'
          >
            <div className=' flex justify-center w-2/5 '>
              <img
                src={Cat4}
                alt='category'
                className=' max-w-full h-auto -rotate-12 pr-5'
              />
            </div>
            <div className=' flex items-center '>
              <p className='text-secondary text-md md:text-xl'>
                Video Games &amp; Consoles
              </p>
            </div>
          </a>
        </div>
        {/* single category end */}
        {/* single category 5 */}
        <div className='flex items-center h-full'>
          <a
            href='/'
            className='flex items-center bg-gray-100 rounded-sm hover:shadow-lg transition duration-500 h-full'
          >
            <div className=' flex justify-center w-2/5 '>
              <img
                src={Cat5}
                alt='category'
                className=' max-w-full h-auto -rotate-12 pr-5'
              />
            </div>
            <div className=' flex items-center '>
              <p className='text-secondary text-md md:text-xl '>
                Gadgets &amp; Accesories
              </p>
            </div>
          </a>
        </div>
        {/* single category end */}
        {/* single category 6 */}
        <div className='flex items-center h-full'>
          <a
            href='/'
            className='flex items-center bg-gray-100 rounded-sm hover:shadow-lg transition duration-500 '
          >
            <div className=' flex justify-center w-2/5 '>
              <img
                src={Cat6}
                alt='category'
                className=' max-w-full h-auto -rotate-12 pr-5'
              />
            </div>
            <div className=' flex items-center '>
              <p className='text-secondary text-md md:text-xl '>
                Photo Cameras
              </p>
            </div>
          </a>
        </div>
        {/* single category end */}
      </div>
    </div>
  );
};

export default Category;
