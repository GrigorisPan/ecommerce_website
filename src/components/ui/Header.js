import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/electro_logo.svg';
import ImgMegaMenu1 from '../../assets/megamenu-1.png';
import ImgMegaMenu2 from '../../assets/megamenu-2.png';
import TopBar from './TopBar';

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    };
  };
  return (
    <>
      <TopBar />
      <header className='font-poppins bg-primary md:bg-transparent transition min-w-[270px] px-2'>
        {/* Top Header Desktop start */}
        <div className='lg:container flex items-center justify-between w-full py-2 md:py-8 md:space-x-4'>
          {/* Logo */}
          <div className='flex items-center justify-center space-x-3'>
            <div className='md:hidden pt-1'>
              <span className='text-secondary text-xl'>
                <i className='fas fa-bars ' />
              </span>
            </div>
            <a href='/'>
              <Logo className='max-w-[100px] max-h-[100px] md:max-w-[200px] md:max-h-[200px]' />
            </a>
          </div>

          {/* Searchbar Desktop */}
          <div className=' hidden md:flex w-full max-w-xl flex-grow relative '>
            <span className='absolute left-4 top-2 text-lg text-gray-400'>
              <i className='fas fa-search' />
            </span>
            <input
              type='text'
              className='w-6 flex-grow flex-shrink border border-primary border-r-0 pl-12 pr-3 py-2 rounded-l-full focus:outline-none text-[#6b6b6b] focus:ring-0 focus:border-primary'
              placeholder='Search for Products'
            />
            <button className='bg-primary border border-primary text-secodary px-7 rounded-r-md  md:hover:bg-primaryLight transition cursor-pointer'>
              Search
            </button>
          </div>

          {/* Icons */}
          <div className='flex items-center space-x-6 md:space-x-4 font-extrabold'>
            <div>
              <a
                href='/'
                className='text-center text-secondary md:hover:text-primary transition relative'
              >
                <div className='text-2xl '>
                  <i className='far fa-heart color-secodary' />
                </div>
                <div className='hidden md:block text-xs leading-3 whitespace-nowrap	'>
                  Wish List
                </div>
                <span className='absolute w-4 h-4 -top-0 -right-2  md:-top-1  md:-right-0 md:left-8  md:w-5  md:h-5 bg-secondary md:bg-primary text-white text-xs flex items-center justify-center rounded-full'>
                  8
                </span>
              </a>
            </div>
            <div>
              <a
                href='/'
                className='text-center text-secondary md:hover:text-primary transition relative'
              >
                <div className='text-2xl '>
                  <i className='fas fa-shopping-bag color-secodary' />
                </div>
                <div className='hidden md:block text-xs leading-3'>Cart</div>
                <span className='absolute w-4 h-4 -top-0 -right-2 md:-top-1  md:-right-3 md:left-2 md:w-5  md:h-5  bg-secondary md:bg-primary text-white text-xs flex items-center justify-center rounded-full'>
                  3
                </span>
              </a>
            </div>
            <div>
              <a
                href='/'
                className='text-center text-secondary md:hover:text-primary transition relative'
              >
                <div className='text-2xl '>
                  <i className='far fa-user color-secodary' />
                </div>
                <div className='hidden md:block text-xs leading-3'>Account</div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <nav className='hidden md:block'>
          <div className='lg:container flex items-center w-full  '>
            {/* Categories */}
            <div className='bg-primary flex items-center px-8 py-4 border border-none rounded-md relative min-w-[270px] max-w-[300px] group'>
              <span className='text-secondary cursor-pointer '>
                <i className='fas fa-bars ' />
              </span>
              <span className='cursor-pointer capitalize text-secondary ml-2 whitespace-nowrap'>
                all categories
              </span>

              {/* Dropdown menu */}
              <div className='absolute w-full left-0 top-full bg-white shadow-sm py-3 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-50'>
                <ul className='divide-y divide-gray-300 divide-solid '>
                  <li className='w-full h-full text-secondary  group-computers'>
                    <a
                      href='/'
                      className='flex items-center justify-between text-sm px-2 py-2 hover:font-semibold hover:bg-gray-100 transition capitalize whitespace-nowrap'
                    >
                      computers &amp; accessories
                      <span className='text-xs'>
                        <i className='fa-solid fa-chevron-right'></i>
                      </span>
                    </a>
                    {/* Left dropdown menu 1 */}
                    <div className='absolute w-[520px] h-[440px] left-full top-0 shadow-md  py-3 px-3 opacity-0 group-computers-hover:opacity-100 transition duration-300 invisible group-computers-hover:visible hover:block border-t-2 border-primary'>
                      <div className='absolute h-full w-full top-0 left-0 right-0 bottom-0 -z-10'>
                        <img
                          className='h-auto max-w-[520px] bg-white'
                          src={ImgMegaMenu1}
                          alt=''
                        />
                      </div>
                      <div className='flex flex-col-2 text-sm space-x-8 '>
                        {/*   <div className='flex w-ful h-full'> */}
                        <ul className='px-2 capitalize border-b-2 w-[50%]'>
                          <p className='flex items-center py-2 font-semibold whitespace-nowrap text-secondary'>
                            all computers &amp; accessories
                          </p>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              all computers &amp; accessories
                            </a>
                          </li>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              Laptops, Desktops &amp; Monitors
                            </a>
                          </li>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              Printers &amp; Ink
                            </a>
                          </li>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              Networking &amp; Internet Devices
                            </a>
                          </li>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              Computer Accessories
                            </a>
                          </li>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              Software
                            </a>
                          </li>
                        </ul>
                        {/*    </div> */}
                        <ul className='px-2 capitalize w-[50%]'>
                          <p className='flex items-center py-2 font-semibold whitespace-nowrap text-secondary'>
                            office &amp; stationery
                          </p>
                          <li className='flex items-center '>
                            <a
                              className='text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              Laptops, Desktops &amp; Monitors
                            </a>
                          </li>
                        </ul>
                      </div>
                      <ul className='flex items-center w-full mt-5 '>
                        <li className='w-[50%] text-secondary hover:font-semibold '>
                          <a
                            className='flex items-center justify-between text-sm px-2 py-2 hover:bg-gray-100 transition whitespace-nowrap'
                            href='/'
                          >
                            <div className='flex flex-col'>
                              <span className='text-sm'>All Electronics</span>
                              <span className='text-xs text-gray-600'>
                                Discover more products
                              </span>
                            </div>
                            <div>
                              <span className='text-xs'>
                                <i className='fa-solid fa-chevron-right'></i>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className='w-full h-full text-secondary group-mobiles'>
                    <a
                      href='/'
                      className='flex items-center justify-between text-sm px-2 py-2 hover:font-semibold  hover:bg-gray-100 transition whitespace-nowrap'
                    >
                      Mobiles &amp; Tablets
                      <span className='text-xs'>
                        <i className='fa-solid fa-chevron-right'></i>
                      </span>
                    </a>
                    {/* Left dropdown menu 2 */}
                    <div className='absolute w-[520px] h-[440px] left-full top-0 shadow-md py-3 px-3 border-t-2 border-primary opacity-0 group-mobiles-hover:opacity-100 transition duration-300 invisible group-mobiles-hover:visible hover:block '>
                      <div className='absolute h-full w-full top-0 left-0 right-0 bottom-0 -z-10'>
                        <img
                          className='h-auto max-w-[520px] bg-white'
                          src={ImgMegaMenu2}
                          alt=''
                        />
                      </div>
                      <div className='flex flex-col-2 text-sm space-x-8 '>
                        <ul className='px-2 capitalize border-b-2 w-[50%]'>
                          <p className='flex items-center py-2 font-semibold whitespace-nowrap text-secondary'>
                            mobiles &amp; tablets
                          </p>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              all mobile phones
                            </a>
                          </li>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              smartphones
                            </a>
                          </li>
                          <li className='flex items-center border-b-2'>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              refurbished mobiles
                            </a>
                          </li>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              all mobile accessories
                            </a>
                          </li>
                          <li className='flex items-center '>
                            <a
                              className='flex items-center text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              cases &amp; covers
                            </a>
                          </li>
                        </ul>

                        <ul className='px-2 capitalize w-[50%]'>
                          <p className='flex items-center py-2 font-semibold whitespace-nowrap text-secondary'>
                            smart phones
                          </p>
                          <li className='flex items-center '>
                            <a
                              className='text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              all tablets
                            </a>
                          </li>
                          <li className='flex items-center '>
                            <a
                              className='text-sm py-2 hover:underline transition text-secondary whitespace-nowrap'
                              href='/'
                            >
                              tablet accessories
                            </a>
                          </li>
                        </ul>
                      </div>
                      <ul className='flex items-center w-full '>
                        <li className='w-[50%] text-secondary hover:font-semibold'>
                          <a
                            className='flex items-center justify-between text-sm px-2 py-2 hover:bg-gray-100 transition whitespace-nowrap'
                            href='/'
                          >
                            <div className='flex flex-col'>
                              <span className='text-sm'>All Electronics</span>
                              <span className='text-xs text-gray-600'>
                                Discover more products
                              </span>
                            </div>
                            <div>
                              <span className='text-xs'>
                                <i className='fa-solid fa-chevron-right'></i>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className='w-full h-full text-secondary  group-example'>
                    <a
                      href='/'
                      className='flex items-center justify-between hover:font-semibold text-sm px-2 py-2 hover:bg-gray-100 transition whitespace-nowrap'
                    >
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pages */}
            <div className='flex items-center justify-between flex-grow pl-5'>
              <div className='flex items-center space-x-6 capitalize whitespace-nowrap'>
                <NavLink
                  to='/'
                  className='text-secondary hover:font-extrabold  transistion'
                  style={navLinkStyles}
                >
                  Home
                </NavLink>
                <NavLink
                  to='/shop'
                  className='text-secondary  hover:font-extrabold transistion'
                  style={navLinkStyles}
                >
                  Shop
                </NavLink>
                <NavLink
                  to='/about'
                  className='text-secondary  hover:font-extrabold transistion'
                  style={navLinkStyles}
                >
                  About
                </NavLink>
                <NavLink
                  to='/contact'
                  className='text-secondary  hover:font-extrabold transistion '
                  style={navLinkStyles}
                >
                  Contact as
                </NavLink>
              </div>

              {/* Login / Register */}
              <div>
                <NavLink
                  to='/auth'
                  className='text-secondary  hover:font-extrabold transistion'
                  style={navLinkStyles}
                >
                  Login/Register
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/*Bottom mobile nav */}
        <nav className='md:hidden flex w-full justify-center'>
          {/* Mobile searchbar */}
          <div className=' flex w-full max-w-xl flex-grow relative pb-1'>
            <span className='absolute left-4 top-2 text-lg text-gray-400'>
              <i className='fas fa-search' />
            </span>
            <input
              type='text'
              className='w-6 flex-grow flex-shrink border border-primary border-r-0 pl-10 pr-2 py-2 rounded-l-full focus:outline-none text-[#6b6b6b]'
              placeholder='Search'
            />
            <button className=' bg-secondary md:bg-primary border border-primary text-primary md:text-secodary px-5 rounded-r-md hover:bg-secondary md:hover:bg-primaryLight transition cursor-pointer'>
              Search
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
