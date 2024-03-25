import React from 'react';

const Features = () => {
  return (
    <div className='container px-0 py-0 md:py-3 md:px-4 md:block min-w-fit'>
      <div className=' rounded-l-md rounded-r-md grid grid-cols-2 md:grid-cols-4 gap-0 justify-center'>
        {/* single feature */}
        <div className=' md:border-b-0 md:border-r border-gray-300 px-2 py-2 md:px-4 md:py-5 flex justify-center items-center gap-2 md:gap-5 '>
          <span className='text-primary w-8 h-8 md:w-12 md:h-12'>
            <i className='fa-solid fa-truck-fast text-2xl md:text-4xl'></i>
          </span>
          <div>
            <h4 className='font-medium capitalize text-sm md:text-lg'>
              Free shipping
            </h4>
            <p className='text-gray-500  text-xs md:text-sm '>order over $50</p>
          </div>
        </div>
        {/* signle feature end */}
        {/* single feature */}
        <div className='hidden md:flex border-b md:border-b-0 md:border-r border-gray-300 px-2  py-2 md:px-4 md:py-5 justify-center items-center gap-5'>
          <span className='text-primary w-8 h-8 md:w-12 md:h-12'>
            <i className='fa-regular fa-thumbs-up text-2xl md:text-4xl'></i>
          </span>
          <div>
            <h4 className='font-medium capitalize text-sm md:text-lg'>
              99% Positive
            </h4>
            <p className='text-gray-500 text-xs md:text-sm '>Feedbacks</p>
          </div>
        </div>
        {/* signle feature end */}
        {/* single feature */}
        <div className=' md:border-b-0 md:border-r px-2 py-2 md:px-4 md:py-5 flex justify-center items-center  gap-2 md:gap-5'>
          <span className='text-primary w-8 h-8 md:w-12 md:h-12'>
            <i className='fa-solid fa-rotate-left text-2xl md:text-4xl'></i>
          </span>
          <div>
            <h4 className='font-medium capitalize text-sm md:text-lg'>
              365 days
            </h4>
            <p className='text-gray-500 text-xs md:text-sm '>for free return</p>
          </div>
        </div>
        {/* signle feature end */}
        {/* single feature */}
        <div className='hidden md:flex px-2  py-2 md:px-4 md:py-5 justify-center items-center gap-5'>
          <span className='text-primary w-8 h-8 md:w-12 md:h-12'>
            <i className='fa-regular fa-credit-card text-2xl md:text-4xl'></i>
          </span>
          <div>
            <h4 className='font-medium capitalize text-sm md:text-lg'>
              Payment
            </h4>
            <p className='text-gray-500 text-xs md:text-sm  '>Secure System</p>
          </div>
        </div>
        {/* signle feature end */}
      </div>
    </div>
  );
};

export default Features;
