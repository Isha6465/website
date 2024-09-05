import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
    
    <div className="absolute inset-0">
        <Image
          src="/home.jpg" 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="object-center"
         
        />
      </div>
    <div className="relative p-6 bg-black bg-opacity-50 rounded-lg text-center">
      <h1 className="text-4xl font-bold text-white mb-4">
        Welcome to My <span className='text-yellow-500'>Home Page</span>
        <h1 className='text-4xl font-bold text-white mb-4 pt-10'>Our Website Helps You To Find a <span className='text-yellow-600'>Best Home</span></h1>
      </h1>

    </div>
  </div>
  )
}

export default page