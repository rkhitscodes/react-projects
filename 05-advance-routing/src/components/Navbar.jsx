import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 bg-blue-400 justify-between'>
      <h2 className='text-2xl font-bold'>CseTitans</h2>
      <div className='flex gap-10 underline'>
       
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar