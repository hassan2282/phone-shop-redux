import React from 'react'
import { FiXOctagon  } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='flex flex-col fixed top-0 z-40 bg-slate-900 bg-opacity-90 items-center justify-center w-screen h-screen '>
            <form className='flex flex-col w-[60%] relative bg-[url(https://img1.wallspic.com/crops/4/2/8/8/7/178824/178824-sunflower-honor-xiaomi-xiaomi_community-smartphone-1920x1080.jpg)] border gap-5 rounded-[100px] h-[70%] p-2 items-center before:-z-10 before:content-[""] before:inset-0 before:h-full before:w-full before:scale-105 before:rounded-full  before:border-2 before:absolute'>
                <Link to={'/'}>
                  <FiXOctagon  size={24} className='absolute left-10 top-10 m-3 text-red-600' />
                </Link>
                <h2 className='text-[40px] mt-10'>فرم ثبت نام</h2>
                <div className='flex flex-col w-full h-full items-center justify-center *:bg-slate-900 *:p-3 *:border *:rounded-md gap-3 *:w-[70%]' dir='rtl'>
                    <input type='email' placeholder='ایمیل خود را وارد کنید' className='text-white'/>
                    <input type='password' placeholder='پسورد خود را وارد کنید' className='text-white' />
                    <button className='text-white hover:bg-slate-950 duration-300'>ثبت نام</button>
                </div>
            </form>
    </div>
  )
}

export default Register