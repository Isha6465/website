import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Contact.jpg"
          alt="About Background Image"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
      </div>
      <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg text-center z-10 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-4 sm:mx-auto bg-black bg-opacity-50">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-300 mb-4">
          About Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-pink-200 mb-4">
          We are a dedicated team committed to delivering exceptional products and services.
          Our mission is to innovate and exceed expectations with each project we undertake.
        </p>
        <div className="text-sm sm:text-base md:text-lg text-white mt-6">
          <p className="mb-2">
            <span className="text-pink-200">Email: newyork@gmail.com</span>
          </p>
          <p>
            <span className="text-pink-200">Contact Number: +90786564534</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
