import React from 'react'

function Product({item}) {

  const num = Math.floor(Math.random(0,1) * 9);

  return (
    <div className='flex flex-col overflow-clip relative text-white m-1 items-center justify-start gap-3 rounded-md border border-zinc-500 w-[20%]'>
        <div className='flex justify-center w-full overflow-clip relative z-0 hover:after:opacity-100 after:duration-500 after:opacity-0 after:content-[" "] after:z-20 after:inset-0 after:absolute after:w-40 after:h-40 after:rounded-br-full after:-top-10 after:-left-10 after:bg-zinc-800 before:content-[""] before:z-10 before:inset-0 before:absolute before:w-44 before:h-44 before:bg-zinc-900 before:rounded-full before:-left-10 before:-top-10 before:opacity-0 hover:before:opacity-80 before:duration-500'>
            <img src={require(`../pics/${num != 0 ? num : '2'}.png`)} className='rounded-xl hover:scale-110 duration-500 cursor-pointer' />
        </div>
        <div className='flex flex-col p-2 gap-4'>
          <h2 className='text-xl text-rose-50'>{item.title}</h2>
          <p className='text-sm'>{item.title}</p>
          <span className='text-red-500'>قیمت : {item.price} تومان</span>
          <button className='w-full bg-zinc-50 rounded-md hover:bg-yellow-600 hover:text-white duration-150 text-black p-4 h-10 flex flex-row justify-center items-center'>افزودن به سبد خرید</button>
        </div>
    </div>
  )
}

export default Product