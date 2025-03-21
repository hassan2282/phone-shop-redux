import React from 'react'
import { FiXOctagon  } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='flex flex-col fixed text-white top-0 z-40 bg-zinc-900 opacity-[97%] items-center justify-center w-screen h-screen'>
            <form className='flex flex-col w-[40%] bg-[url("https://api2.zoomit.ir/media/dark-sky-674c706fb01581f55a9ac35a?w=1920&q=80")] border bg-zinc-800 backdrop-blur-sm filter border-white gap-5 rounded-md h-96 p-2 items-center'>
                <Link to={'/home'}>
                  <FiXOctagon  size={24} className='absolute left-0 top-0 m-3 text-yellow-500' />
                </Link>
                <h2 className='text-[20px] mt-10'>فرم ثبت نام</h2>
                <div className='flex flex-col w-full h-full items-center justify-center *:bg-transparent *:p-3 *:border *:rounded-md gap-3 *:w-[70%]' dir='rtl'>
                    <input type='email' placeholder='ایمیل خود را وارد کنید' className='text-white'/>
                    <input type='password' placeholder='پسورد خود را وارد کنید' />
                    <button className='hover:bg-yellow-600 duration-300 hover:text-black'>ثبت نام</button>
                </div>
            </form>
    </div>
  )
}

export default Register