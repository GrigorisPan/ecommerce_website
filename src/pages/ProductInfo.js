import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BrowseCategories from '../components/shop/BrowseCategories';
import ProductView from '../components/productView/ProductView';
import Breadcrums from '../components/ui/Breadcrums';
import { getProduct } from '../actions/productActions';

const ProductInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct('1'));
  }, [dispatch]);

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading } = productDetails;

  return (
    <div className='px-2 min-w-[270px]'>
      <Breadcrums
        mainCategory={'Computers & Accessories'}
        subCategory={'All In One'}
      />
      <div className='lg:container grid grid-cols-4 gap-5 pb-16 items-start'>
        {/* sidebar start */}
        <div className=' hidden md:block col-span-1'>
          <div className='bg-white pb-6 shadow rounded '>
            <BrowseCategories />
          </div>
        </div>
        {/* sidebar end */}
        {!loading && <ProductView product={product} />}
      </div>
    </div>
  );
};

export default ProductInfo;
