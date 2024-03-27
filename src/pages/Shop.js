import React from 'react';
import BrowseCategories from '../components/shop/BrowseCategories';
import Filters from '../components/shop/Filters';
import ShopProducts from '../components/shop/ShopProducts';
import Breadcrums from '../components/ui/Breadcrums';

const Shop = () => {
  return (
    <div className='px-2 min-w-[270px]'>
      <Breadcrums
        page={'shop'}
        mainCategory={'Computers & Accessories'}
        subCategory={'All In One'}
      />
      <div className='lg:container grid grid-cols-4 gap-5 pb-16 items-start'>
        {/* sidebar start */}
        <div className=' hidden md:block col-span-1'>
          <div className='bg-white pb-6 shadow rounded '>
            <BrowseCategories />
          </div>
          <Filters />
        </div>
        {/* sidebar end */}
        <ShopProducts />
      </div>
    </div>
  );
};

export default Shop;
