import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex justify-center justify-evenly items-center h-14 bg-blue-950'>
        <Link className='text-lg text-white  font-bold' href="\">Home</Link>
       <Link className='text-lg text-white  font-bold' href="\about">About Us</Link>
       <Link className='text-lg text-white  font-bold' href="\contact">Contact  Us</Link>
    </div>
  )
}

export default Header