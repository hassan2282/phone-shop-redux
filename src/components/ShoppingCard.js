import React from 'react'
import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";

function ShoppingCard({item}) {
  return (
    <div>
        <div className='flex gap-3 rounded-md items-center justify-between w-full p-1' dir='rtl'>
            <img src={item.image} className='w-[25%] rounded-md '/>
            <div className='flex flex-col gap-1'>
              <h2>{item.title}</h2>
              <div className='flex flex-row gap-4 *:cursor-pointer hover:*:scale-110'>
                <FaCirclePlus className="text-yellow-500"/>
                <FaCircleMinus className="text-rose-500"/>
              </div>
            </div>
            <p>{item.price} ریال</p>
        </div>
    </div>
  )
}

export default ShoppingCard