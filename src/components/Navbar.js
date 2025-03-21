import React from 'react'
import Icon from 'react-icons-kit'
import { home } from 'react-icons-kit/feather'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-row relative z-30 opacity-60 justify-between items-center text-white h-20 bg-zinc-900 w-full px-4' dir='rtl'>
        <span className='text-2xl rounded-md bg-zinc-700 text-white cursor-pointer hover:scale-95 duration-200'>◘</span>
        <ul className='flex flex-row gap-6 hover:*:scale-110 hover:*:text-rose-600 *:cursor-pointer hover:*:duration-150'>
            <li>خانه</li>
            <li>محصولات</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>ورود / ثبت نام</li>
        </ul>

        <Link to={'/home'}>
            <img src={require('../pics/1.png')} alt='logo' className='rotate-90 w-14 rounded-md hover:rotate-45 hover:scale-75 duration-300'/>
        </Link>
    </div>
  )
}

export default Navbar