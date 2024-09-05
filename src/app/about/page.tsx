import React from 'react'
import Image from 'next/image'
const page = () => {
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
      <div className="relative p-6 bg-black bg-opacity-50 rounded-lg text-center z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          About Us
        </h1>
        <p className="text-sm text-white mb-4">
          We are a dedicated team committed to delivering exceptional products and services.
          Our mission is to innovate and exceed expectations with each project we undertake.
        </p>
        <p className="text-sm text-white mb-4">
          With years of experience in our field, we pride ourselves on our ability to provide
          top-notch solutions that meet the needs of our clients and partners. Our team
          continuously strives for excellence and is passionate about making a positive
          impact in our industry.
        </p>
    </div>
    </div>
  )
}

export default page