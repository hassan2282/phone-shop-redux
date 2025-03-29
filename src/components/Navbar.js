import React from 'react'
import { Link } from 'react-router-dom'
import { FaAward,FaCartShopping,FaMagnifyingGlass } from "react-icons/fa6";
import { useSelector } from 'react-redux';


function Navbar() {
  const initialState = useSelector((store)=>store);

  return (
    <div className='flex flex-row sticky top-0 justify-between items-center text-white h-20 z-20 bg-zinc-800 opacity-90  w-full px-4' dir='rtl'>
        <ul className='flex flex-row gap-6 hover:*:scale-110 mr-10 hover:*:text-yellow-400 *:cursor-pointer hover:*:duration-150'>
            <li>خانه</li>
            <li>محصولات</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <Link to={'/register'}>
              <li>ورود / ثبت نام</li>
            </Link>
        </ul>

        <div className='flex flex-row gap-6 h-full items-center hover:*:scale-95 hover:*:text-yellow-400 *:cursor-pointer *:duration-300'>
          <FaMagnifyingGlass  size={28}/>
          <FaAward size={28}/>
          <div className='relative flex flex-row justify-center items-center'>
            <FaCartShopping  size={28}/>
            {
              initialState.addData &&
              <span className='absolute text-[12px] w-[40px] -top-3 -left-1 text-center flex items-center justify-center bg-yellow-400 text-black rounded-full'>
                {
                  initialState.addData.length
                }
              </span>
            }
          </div>
          <Link to={'/'}>
              <img src={require('../pics/1.png')} alt='logo' className='rotate-90 w-14 rounded-md hover:rotate-45 hover:scale-75 duration-300'/>
          </Link>
        </div>
    </div>
  )
}

export default Navbar