import React from 'react';
export default function Login() {
  return (
    <div
      className={`relative flex items-center min-h-screen flex-col items-center justify-between p-24 `}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center filter-blur"
        style={{
          backgroundImage: "url('/background (1).jpg')",
          filter: 'blur(100px)',
          zIndex: -1,
        }}
      ></div>
      <form className='mt-36'>
        <div className='bg-white bg-opacity-5 p-4 rounded-lg  '>
          <div className='text-center'>
            <h1 className='font-bold text-lg'>PIUS DAS</h1>
            <p className='italic font-sm text-sm text-yellow-500 mb-4'>Beauty Eternal</p>
            <p className="typewriter-text">What should we call you?</p>
          </div>

          <input
            className="bg-white bg-opacity-5 w-full px-4 py-2 my-2 text-sm text-white rounded-md focus:outline-none focus:ring-none"
            type="text"
            placeholder="Your User Name"
          />

          <button type='submit' className='w-full bg-yellow-500 rounded-lg p-2 font-bold hover:bg-yellow-600'>Save</button>
        </div>
      </form>
    </div>
  );
}
