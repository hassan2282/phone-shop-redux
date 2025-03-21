import React from 'react'

function Header() {
  return (
    <div className='w-full h-[40rem] overflow-clip flex flex-row justify-center items-center sticky top-0'>
        <img src={require('../pics/header.jpg')} alt='header' className='bg-blend-screen'/>
        <h1 className='text-[80px] text-rose-600 z-40 absolute'>به سایت تخته خوش اومدید</h1>
    </div>
  )
}

export default Header