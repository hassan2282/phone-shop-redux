import React from "react";
import { Link } from "react-router-dom";
import {
  FaAward,
  FaCartShopping,
  FaMagnifyingGlass,
  FaCircleMinus,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCard from "./ShoppingCard";

function Navbar() {
  const { toggle, addData } = useSelector((store) => store);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  return (
    <>
      <nav
        className="flex flex-row sticky top-0 justify-between items-center backdrop-blur-sm text-white h-20 z-20 bg-zinc-800 bg-opacity-90 w-full px-4"
        dir="rtl"
      >
        <ul className="flex flex-row gap-6 hover:*:scale-110 mr-10 hover:*:text-yellow-400 *:cursor-pointer hover:*:duration-150">
          <li><Link to="/">خانه</Link></li>
          <li><Link to="/products">محصولات</Link></li>
          <li><Link to="/about">درباره ما</Link></li>
          <li><Link to="/contact">تماس با ما</Link></li>
          <li><Link to="/register">ورود / ثبت نام</Link></li>
        </ul>

        <div className="flex flex-row gap-6 h-full items-center hover:*:scale-95 hover:*:text-yellow-400 *:cursor-pointer *:duration-300">
          <FaMagnifyingGlass size={28} />
          <FaAward size={28} />
          <div className="relative flex flex-row justify-center items-center">
            <FaCartShopping size={28} onClick={toggleCart} />
            {addData?.length > 0 && (
              <span onClick={toggleCart} className="absolute text-xs w-5 h-5 -top-1 -left-1 flex items-center justify-center bg-yellow-400 text-black rounded-full">
                {addData.length}
              </span>
            )}
          </div>
          <Link to="/">
            {/* <img
              src={require("../pics/1.png")}
              alt="logo"
              className="rotate-90 w-14 rounded-md hover:rotate-45 hover:scale-75 duration-300"
            /> */}
          </Link>
        </div>
      </nav>

      {toggle && (
        <div className="flex flex-col fixed z-30 left-0 h-screen w-full md:w-[25%] backdrop-blur-sm bg-opacity-90 text-white bg-zinc-900">
          <div className="flex flex-row justify-between items-center p-3" dir="rtl">
            <h1 className="pr-2 text-xl">سبد خرید</h1>
            <FaCircleMinus
              size={22}
              className="cursor-pointer hover:scale-75 text-red-500"
              onClick={toggleCart}
            />
          </div>
          <hr />
          <div className="flex flex-col justify-start shadow-md p-4 items-start gap-2 h-[70%] w-full overflow-y-auto">
            {addData.length > 0 ? (
              addData.map((item) => (
                <ShoppingCard item={item} key={item.id} />
              ))
            ) : (
              <p className="w-full text-center py-10">سبد خرید شما خالی است</p>
            )}
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div dir="rtl" className="p-2 flex flex-row justify-between items-center">
              <p>مجموع قیمت :</p>
              <span>
                100.000 ریال
              </span>
            </div>
            <button 
              className="p-2 bg-zinc-800 border-white border-2 rounded-md hover:scale-95 duration-200 disabled:opacity-50"
              disabled={addData.length === 0}
            >
              رفتن به سبد خرید
            </button>
            <button 
              className="p-2 bg-red-600 rounded-md hover:scale-95 duration-200"
              onClick={toggleCart}
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;