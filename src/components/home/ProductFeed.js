import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import Product from '../ui/Product';
import HomeAdv1 from '../../assets/home-adv.png';
import HomeAdv3 from '../../assets/home-adv3.jpg';
import HomeAdv4 from '../../assets/home-adv4.jpg';
import HomeAdv5 from '../../assets/home-adv5.jpg';
import HomeAdv6 from '../../assets/home-adv6.jpg';

const ProductFeed = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='container py-1 '>
      {/* product category start */}
      <div className='flex items-center justify-between py-2 border-b border-gray-30 relative '>
        <p className='text-secondary text-lg font-medium py-1 border-b-[1px] border-primary w-fit -mb-[9px]'>
          Deals of The Day
        </p>
        <a
          className=' flex items-center text-sm text-gray-500 space-x-2 md:space-x-4 sm:block'
          href='/'
        >
          <span className='hidden md:inline-flex'>
            Go to Daily Deals Section
          </span>
          <span>
            <i className='fa-solid fa-angle-right'></i>
          </span>
        </a>
      </div>
      <div className='grid grid-flow-dense grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {!loading &&
          products
            .slice(0, 5)
            .map(({ id, title, price, description, category, image }) => {
              return (
                <Product
                  key={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                />
              );
            })}
        <img loading='lazy' className=' my-3 col-span-full' src={HomeAdv1} />
      </div>
      {/* product category end */}
      {/* product category start */}
      <div className='flex items-center justify-between py-2 border-b border-gray-30 relative '>
        <p className='text-secondary text-lg font-medium py-1 border-b-[1px] border-primary w-fit -mb-[9px]'>
          Smartphones &amp; Tablets
        </p>
        <a
          className=' flex items-center text-sm text-gray-500 space-x-2 md:space-x-4 sm:block'
          href='/'
        >
          <span className='hidden md:inline-flex'>
            View All Smartphones &amp; Tablets
          </span>
          <span>
            <i className='fa-solid fa-angle-right'></i>
          </span>
        </a>
      </div>
      <div className='grid grid-flow-dense grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        <a href='/' className='px-4 py-2 max-w-[200px]'>
          <img loading='lazy' src={HomeAdv4} />
        </a>

        {!loading &&
          products
            .slice(0, 5)
            .map(({ id, title, price, description, category, image }) => {
              return (
                <Product
                  key={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                />
              );
            })}
      </div>
      {/* product category end */}
      {/* product category start */}
      <div className='flex items-center justify-between py-2 border-b border-gray-30 relative '>
        <p className='text-secondary text-lg font-medium py-1 border-b-[1px] border-primary w-fit -mb-[9px]'>
          Headphones
        </p>
        <a
          className=' flex items-center text-sm text-gray-500 space-x-2 md:space-x-4 sm:block'
          href='/'
        >
          <span className='hidden md:inline-flex'>View All Headphones</span>
          <span>
            <i className='fa-solid fa-angle-right'></i>
          </span>
        </a>
      </div>
      <div className='grid grid-flow-dense grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        <a href='/' className='px-4 py-2 max-w-[200px]'>
          <img loading='lazy' src={HomeAdv3} />
        </a>
        {!loading &&
          products
            .slice(0, 5)
            .map(({ id, title, price, description, category, image }) => {
              return (
                <Product
                  key={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                />
              );
            })}
      </div>
      <div className='flex flex-nowrap  overflow-auto my-7'>
        <a className='flex px-5 gap-3 items-center md:max-w-[50%]' href='/'>
          <img loading='lazy' className='max-w-full h-auto ' src={HomeAdv5} />
          <img loading='lazy' className='max-w-full h-auto' src={HomeAdv6} />
        </a>
      </div>
      {/* product category end */}
      {/* product category start */}
      <div className='flex items-center justify-between py-2 border-b border-gray-30 relative '>
        <p className='text-secondary text-lg font-medium py-1 border-b-[1px] border-primary w-fit -mb-[9px]'>
          Recommendation For You
        </p>
        <a
          className=' flex items-center text-sm text-gray-500 space-x-2 md:space-x-4 sm:block'
          href='/'
        >
          <span className='hidden md:inline-flex'>
            View All Recommendations
          </span>
          <span>
            <i className='fa-solid fa-angle-right'></i>
          </span>
        </a>
      </div>
      <div className='grid grid-flow-dense grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {!loading &&
          products
            .slice(0, 5)
            .map(({ id, title, price, description, category, image }) => {
              return (
                <Product
                  key={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                />
              );
            })}
      </div>
      {/* product category end */}
    </div>
  );
};

export default ProductFeed;
