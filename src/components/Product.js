import React from 'react';
import { useDispatch } from 'react-redux';
import {toast } from 'react-toastify';

function Product({ item }) {
  const dispatch = useDispatch();
  
  const getRandomImageNumber = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

  const imageNumber = getRandomImageNumber();

  const handleAddToCart = () => {
    dispatch({ type: "ADD", payload: item });
    toast('🦄 محصول به سبد خرید اضافه شد', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <div className='flex flex-col relative text-white m-1 items-center justify-center gap-3 rounded-md border border-zinc-500 w-full sm:w-[48%] md:w-[30%] lg:w-[23%]'>
      <div className='relative w-full overflow-hidden group'>
        <img 
          src={require(`../pics/${imageNumber}.png`)} 
          alt={item.title}
          className='rounded-xl w-full h-auto transition-transform duration-500 group-hover:scale-110 cursor-pointer' 
        />
        <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500 rounded-xl' />
      </div>
      
      <div className='flex flex-col p-2 gap-2 w-full'>
        <h2 className='text-xl text-rose-50 font-medium'>{item.title}</h2>
        <p className='text-sm text-gray-300 line-clamp-2'>{item.description || item.title}</p>
        <span className='text-red-400 font-semibold'>قیمت : {item.price.toLocaleString()} تومان</span>
        <button 
          onClick={handleAddToCart}
          className='w-full bg-zinc-50 rounded-md hover:bg-yellow-600 hover:text-white transition-colors duration-150 text-black h-10 flex justify-center items-center px-4 font-medium'
          aria-label={`افزودن ${item.title} به سبد خرید`}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default Product;