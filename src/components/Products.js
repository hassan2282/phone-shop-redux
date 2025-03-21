import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';



function Products() {
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://679ba4c233d3168463249e52.mockapi.io/api/v1/products')
         .then((res) => setData(res.data))
  },[]);

  return (
    <div className='flex flex-wrap w-full h-auto pt-5 justify-center items-center'>
        {
          data &&
            data.map((item) => {
              return (
                <Product item={item} key={item.id}/>
              )
            })
        }
    </div>
  )
}

export default Products