import React from 'react';

const Register = () => {
  return (
    <div className='container py-16'>
      <div className='max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden'>
        <h2 className='text-2xl uppercase font-medium mb-1'>
          Create an account
        </h2>
        <p className='text-gray-600 mb-6 text-sm'>
          {' '}
          Register here if you dont't have account
        </p>
        <form action=''>
          <div className='space-y-4'>
            <div>
              <label for='username' className='text-gray-600 mb-2 block'>
                Full Name
              </label>
              <input
                type='username'
                className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
                placeholder='Enter your name'
              ></input>
            </div>
            <div>
              <label for='email' className='text-gray-600 mb-2 block'>
                Email Address
              </label>
              <input
                type='email'
                className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
                placeholder='Enter your email address'
              ></input>
            </div>
            <div>
              <label for='password' className='text-gray-600 mb-2 block'>
                Password
              </label>
              <input
                type='password'
                className='w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
                placeholder='Enter your password'
              ></input>
            </div>
            <div>
              <label for='password' className='text-gray-600 mb-2 block'>
                Confirm Password
              </label>
              <input
                type='password'
                className='w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
                placeholder='Confirm your password'
              ></input>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='agreement'
                  className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                ></input>
                <label
                  for='agreement'
                  className='text-gray-600 ml-3 cursor-pointer'
                >
                  I have read and agree to the
                </label>
                <a href='#' className='text-primary pl-2 hover:text-secondary'>
                  terms & conditions
                </a>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <button
              type='submit'
              className='block w-full py-2 text-center text-secondary font-semibold text-xl rounded hover:bg-transparent hover:text-primary bg-primary border border-primary'
            >
              Create Account
            </button>
          </div>
        </form>
        {/* Login with */}
        <div className='mt-6 flex justify-center relative'>
          <div className='text-gray-600 uppercase px-3 bg-white z-10 relative'>
            Or Sign in with
          </div>
          <div className='absolute left-0 top-3 border-b-2 border-gray-200 w-full'></div>
        </div>
        <div className='mt-5'>
          <a
            href='#'
            className='block w-full py-2 text-center text-blue-600 font-semibold text-xl rounded hover:bg-transparent hover:text-white border border-blue-600 hover:bg-blue-600'
          >
            Facebook
          </a>
        </div>
        <div>
          <p className='mt-4 text-gray-600 text-center'>
            Already have an account?
            <a href='#' className='text-primary pl-2'>
              Login Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
