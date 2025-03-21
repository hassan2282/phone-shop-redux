import React from 'react'

function Register() {
  return (
    <div className='flex flex-col fixed text-white top-0 z-40 bg-zinc-900 backdrop-blur-xl opacity-95 items-center justify-center w-screen h-screen'>
            <form className='flex flex-col w-[40%] border bg-zinc-800 border-white gap-5 rounded-md h-96 p-2 items-center '>
                <h2 className='text-[20px] mt-10'>فرم ثبت نام</h2>
                <div className='flex flex-col w-full h-full items-center justify-center *:bg-transparent *:p-3 *:border *:rounded-md gap-3 *:w-[70%]' dir='rtl'>
                    <input type='email' placeholder='ایمیل خود را وارد کنید' />
                    <input type='password' placeholder='پسورد خود را وارد کنید' />
                    <button className='hover:bg-yellow-600 duration-300 hover:text-black'>ثبت نام</button>
                </div>
            </form>
    </div>
  )
}

export default Register