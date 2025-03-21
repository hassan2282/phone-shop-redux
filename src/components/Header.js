import React from 'react'

function Header() {
  return (
    <div className='w-full h-[40rem] overflow-clip flex flex-row justify-center items-center top-0'>
        <img src={require('../pics/header.jpg')} alt='header' className='bg-blend-screen'/>
        {/* <h1 className='text-[80px] z-20 absolute mb-40'>خوش آمدید</h1> */}
        <h1 className='text-[53px] text-white z-10 absolute mt-20 animate-bounce'>آماده تخفیف های هیجانی ما هستید ؟؟؟</h1>
    </div>
  )
}

export default Header