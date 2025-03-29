import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function Products() {
  const items = useSelector((store)=>store);
  console.log(items)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    axios.get('https://679ba4c233d3168463249e52.mockapi.io/api/v1/products')
    .then((res) => dispatch({type: "Fetch", payload: res.data}))
    .catch((error) => console.log(error))
  },[]);

  return (
    <div className='flex flex-wrap w-full h-auto pt-5 justify-center items-center'>
        {
          items.fetchData[0] &&
          items.fetchData[0].map((item) => {
              return (
                <Product item={item} key={item.id}/>
              )
            })
        }
    </div>
  )
}

export default Products