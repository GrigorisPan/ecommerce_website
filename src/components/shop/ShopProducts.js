import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import Product from '../ui/Product';

const ShopProducts = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='col-span-full md:col-span-3'>
      <div className='flex items-center justify-between mb-4'>
        {/* sorting start*/}
        <select className=' w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary '>
          <option>Default sorting</option>
          <option>Price low-hight</option>
          <option>Price hight-low</option>
          <option>Latest product</option>
        </select>
        <div className=' hidden md:flex gap-2 ml-auto '>
          <div className='border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer'>
            <i className='fas fa-table'></i>
          </div>
          <div className='border border-gray-600 w-10 h-9 flex items-center justify-center text-gray-600  rounded cursor-pointer'>
            <i className='fas fa-list'></i>
          </div>
        </div>
        <div className='md:hidden  border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer'>
          <i class='fa-solid fa-filter'></i>
        </div>
        {/* sorting end */}
      </div>
      {/* product grid start */}
      <div className='grid grid-flow-dense grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {!loading &&
          products.map(({ id, title, price, description, category, image }) => {
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
      {/* product grid end */}
    </div>
  );
};

export default ShopProducts;
