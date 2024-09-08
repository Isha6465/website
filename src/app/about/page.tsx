import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/about.jpg"
          alt="About Background Image"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
      </div>
      <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 bg-black bg-opacity-50 rounded-lg text-center z-10 max-w-3xl mx-4 sm:mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
          About Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white mb-4">
          We are a dedicated team committed to delivering exceptional products and services.
          Our mission is to innovate and exceed expectations with each project we undertake.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-white mb-4">
          With years of experience in our field, we pride ourselves on our ability to provide
          top-notch solutions that meet the needs of our clients and partners. Our team
          continuously strives for excellence and is passionate about making a positive
          impact in our industry.
        </p>
      </div>
    </div>
  );
};

export default Page;
