import React from 'react'

function ShoppingCard({item}) {
  return (
    <div>
        <div className='flex gap-3 rounded-md items-center justify-between w-full p-1' dir='rtl'>
            <img src={item.image} className='w-[25%] rounded-md '/>
            <h2>{item.title}</h2>
            <p>{item.price} ریال</p>
        </div>
    </div>
  )
}

export default ShoppingCard