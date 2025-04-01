import React from 'react'
import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";

function ShoppingCard({item}) {
  return (
    <div>
        <div className='flex flex-row gap-3 rounded-md items-center justify-between w-full p-1' dir='rtl'>
          <div className='bg-zinc-900 rounded-md w-[30%] h-20 flex justify-center items-center overflow-clip'>
            <img src={item.item.image} className=''/>
          </div>
            <div className='flex flex-col gap-1'>
              <h2>{item.item.title}</h2>
                <span className='text-[10px]'>تعداد : {item.count}</span>
              <div className='flex flex-row gap-4 *:cursor-pointer hover:*:scale-110'>
                <FaCirclePlus className="text-yellow-500"/>
                <FaCircleMinus className="text-rose-500"/>
              </div>
            </div>
            <p>{item.item.price} ریال</p>
        </div>
    </div>
  )
}

export default ShoppingCard