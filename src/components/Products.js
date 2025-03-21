import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';



function Products() {
  
  const items = useSelector((store)=>store);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    axios.get('https://679ba4c233d3168463249e52.mockapi.io/api/v1/products')
    .then((res) => dispatch({type: "Fetch", payload: res.data}))
    .catch((error) => console.log(error))
    console.log(dispatch)
  },[]);

  return (
    <div className='flex flex-wrap w-full h-auto pt-5 justify-center items-center'>
        {
          items[0] &&
          items[0].map((item) => {
              return (
                <Product item={item} key={item.id}/>
              )
            })
        }
    </div>
  )
}

export default Products