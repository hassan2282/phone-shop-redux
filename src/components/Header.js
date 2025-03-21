import React from 'react'

function Header() {
  return (
    <div className='w-full h-[40rem] overflow-clip flex flex-row justify-center items-center top-0'>
        <img src={require('../pics/header.jpg')} alt='header' className='bg-blend-screen absolute top-0'/>
        <div className='flex flex-row w-full items-center justify-center ml-64'>
          <div className='flex flex-col w-[60rem] border border-white backdrop-blur-xl filter rounded-md p-10 gap-3 z-10 text-white'>
              <h3 className='animate-pulse text-xl mb-3'>بروزترین محصولات دنیا اینجاست</h3>
              <hr />
              <p className='text-gray-400'>
              شاورزی یکی از ارکان اصلی اقتصاد هر کشور است که با تأمین نیازهای غذایی و مواد اولیه مورد نیاز صنایع مختلف، نقش مهمی در توسعه پایدار ایفا می‌کند.انواع دسته بندی محصولات کشاورزی با تنوع و گستردگی خود، علاوه بر تأمین غذای انسان،به عنوان مواد اولیه برای صنایع مختلفی مانند صنایع غذایی،دارویی،نساجی و حتی تولید انرژی مورد استفاده قرار می‌گیرند.
مایارشد تولید کننده برتر هیومیک اسید و کلات اهن،روی مس و منگنز،در این مقاله،به بررسی دسته‌بندی‌های مختلف محصولات کشاورزی و کاربردهای آن‌ها در صنایع مختلف پرداخته و همچنین مهم‌ترین محصولات کشاورزی ایران را معرفی می‌کند.
              </p>
          </div>
        </div>
    </div>
  )
}

export default Header