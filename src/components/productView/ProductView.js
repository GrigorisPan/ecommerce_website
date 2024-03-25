import React from 'react';

const ProductView = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <div className='col-span-full md:col-span-3'>
      {/* product view start */}
      <div className='container grid grid-cols-3 gap-5'>
        {/* product image */}
        <div className='sm:col-span-1 col-span-full sm:container'>
          <img src={image} className='w-full' alt='Bag' />
          <div className='grid grid-cols-4 gap-4 mt-4'>
            <img
              src={image}
              className='w-full cursor-pointer border border-primary'
              alt='Bag'
            />
            <img
              src={image}
              className='w-full cursor-pointer border border-primary'
              alt='Bag'
            />
            <img
              src={image}
              className='w-full cursor-pointer border border-primary'
              alt='Bag'
            />
            <img
              src={image}
              className='w-full cursor-pointer border border-primary'
              alt='Bag'
            />
          </div>
        </div>
        {/* product image end */}
        {/* pruduct right section */}
        <div className='sm:col-span-2 col-span-full space-y-2'>
          <h2 className='text-2xl font-medium uppercase mb-2'>{title}</h2>
          {/* pruduct review */}
          <div className='flex gap-1 items-center'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i} className='h-5 text-sm text-primary'>
                  <i className='fas fa-star' />
                </span>
              ))}
            <p className='text-md text-gray-400 ml-3'>(150)</p>
          </div>
          {/* pruduct info */}
          <p className='font-semibold space-x-3'>
            <span>Avalability:</span>
            <span className='text-md text-green-600 font-semibold'>
              In Stock
            </span>
          </p>
          <p className='font-semibold space-x-3'>
            <span>Category:</span>
            <span className='text-md text-gray-500'>{category}</span>
          </p>
          <p className='font-semibold space-x-3'>
            <span>SKU:</span>
            <span className='text-md text-gray-500'>{id}</span>
          </p>
          <div className='flex items-center space-x-3'>
            <p className='text-gray-500 text-md line line-through'>
              &euro; 29.99
            </p>
            <p className='text-xl line text-bold'>&euro; {price} </p>
          </div>
          {/* Single size filter */}
          <div>
            <h3 className='text-lg font-semibold uppercase mb-1'>Size</h3>
            <div className='flex items-center gap-2 pb-4'>
              {/* Single size filter */}
              <div className='size-selector '>
                <input
                  type='radio'
                  name='size'
                  id='size-s'
                  class='hidden peer'
                />
                <label
                  for='size-s'
                  className='border border-gray-200 rounded-md p-4 h-7 w-7 flex items-center justify-center cursor-pointer shadow text-gray-600 peer-checked:bg-primary'
                >
                  s
                </label>
              </div>
              {/* Single size filter */}
              <div className='size-selector '>
                <input
                  type='radio'
                  name='size'
                  id='size-m'
                  class='hidden peer'
                />
                <label
                  for='size-m'
                  className='border border-gray-200 rounded-md p-4 h-7 w-7 flex items-center justify-center cursor-pointer shadow text-gray-600 peer-checked:bg-primary'
                >
                  M
                </label>
              </div>
              {/* Single size filter */}
              <div className='size-selector '>
                <input
                  type='radio'
                  name='size'
                  id='size-l'
                  class='hidden peer'
                />
                <label
                  for='size-l'
                  className='border border-gray-200 rounded-md p-4 h-7 w-7 flex items-center justify-center cursor-pointer shadow text-gray-600 peer-checked:bg-primary'
                >
                  L
                </label>
              </div>
              {/* Single size filter */}
              <div className='size-selector '>
                <input
                  type='radio'
                  name='size'
                  id='size-xl'
                  class='hidden peer'
                />
                <label
                  for='size-xl'
                  className='border border-gray-200 rounded-md p-4 h-7 w-7 flex items-center justify-center cursor-pointer shadow text-gray-600 peer-checked:bg-primary'
                >
                  XL
                </label>
              </div>
            </div>
            {/* Single size end */}
            {/* Quantity */}
            <div className='flex items-center border border-gray-300 tetx-gray-500 divide-x divide-gray-300 w-max'>
              <div className='h-8 w-8 text-lg flex items-center justify-center cursor-pointer select-none'>
                -
              </div>
              <div className='h-8 w-8 text-lg flex items-center justify-center cursor-pointer select-none'>
                4
              </div>
              <div className='h-8 w-8 text-lg flex items-center justify-center cursor-pointer select-none'>
                +
              </div>
            </div>
          </div>
          {/* Description */}
          <div>
            <h2 className='font-bold text-lg'>Description:</h2>
            <p className='mt-2 text-md text-gray-600'>{description}</p>
          </div>
          {/* product info */}
          <div className='flex gap-3 items-center justify-center border-y border-gray-200 pb-5 pt-4'>
            <a
              href='#'
              className='bg-primary border border-primary text-secondary px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition'
            >
              Add to cart
              <i className='fas fa-shopping-bag'></i>
            </a>
            <a
              href='#'
              className=' border border-primary text-secondary px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent transition hover:text-primary'
            >
              Wishlist
              <i className='fas fa-heart'></i>
            </a>
          </div>
        </div>
      </div>
      {/*  product view end  */}

      {/*  product details start  */}
      <div className='mt-5'>
        <h1 className='border-b border-gray-200 text-xl'>Product Details</h1>
        <div className='w-full pt-6 text-gray-600 space-y-2'>
          <p>{description}.</p>
          <p>{description}.</p>
          <p>{description}.</p>
        </div>
        <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6'>
          <tr>
            <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
              Color
            </th>
            <td className='py-2 px-4 border border-gray-300 w-40 font-medium'>
              Black, Brown, Red
            </td>
          </tr>
          <tr>
            <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
              Material
            </th>
            <td className='py-2 px-4 border border-gray-300 w-40 font-medium'>
              Synthetic
            </td>
          </tr>
          <tr>
            <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
              Weight
            </th>
            <td className='py-2 px-4 border border-gray-300 w-40 font-medium'>
              800gr
            </td>
          </tr>
        </table>
      </div>
      {/*  product details start  */}
      <div className='flex gap-3 mt-5'>
        <a
          href='#'
          className='text-gray-500 hover:text-gray-700 h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center hover:border-gray-600'
        >
          <i className='fab fa-facebook-f'></i>
        </a>
        <a
          href='#'
          className='text-gray-500 hover:text-gray-700 h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center hover:border-gray-600'
        >
          <i className='fab fa-instagram'></i>
        </a>
        <a
          href='#'
          className='text-gray-500 hover:text-gray-700 h-8 w-8 border border-gray-500 rounded-full flex items-center justify-center hover:border-gray-600'
        >
          <i className='fab fa-twitter'></i>
        </a>
      </div>
    </div>
  );
};

export default ProductView;
