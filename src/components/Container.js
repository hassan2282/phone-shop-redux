import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Header from './Header'

function Container() {
  return (
    <div className='flex flex-col items-center justify-start w-full min-h-screen bg-zinc-950'>
        <Navbar />
        <Header />
        <Products />
    </div>
  )
}

export default Container