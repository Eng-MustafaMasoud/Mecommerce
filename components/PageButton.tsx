"use client";

import React from "react";
import { MdOutlinePersonPin } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { StateProps } from "@/types";

const PageButton = () => {
  const { productData } = useSelector((state: StateProps) => state.orebi);

  return (
    <div className="fixed right-0 top-[50%] translate-y-[-50%] z-20 flex flex-col rounded-lg  gap-4   ">
      <Link href="/profile" className=" flex flex-col   items-center justify-center ">
        <MdOutlinePersonPin className="text-gray-500 hover:text-black text-5xl bg-white p-2  drop-shadow-lg hover:scale-105 hover:-translate-y-[5px] cursor-pointer overflow-hidden duration-200 rounded-full " />
        <p className="pers text-xs px-2 font-bold backdrop-blur drop-shadow-[0_1.2px_1.2px_rgba(10,100,155,0.8)]  text-white ">Profile</p>
      </Link>

      <Link href="/cart" className="flex  relative  flex-col items-center justify-center   ">
        <GiShoppingCart className=" text-gray-500 hover:text-black text-5xl bg-white p-2  drop-shadow-lg  hover:scale-105 hover:-translate-y-[5px] rounded-full cursor-pointer duration-200 " />
        <p className="buy backdrop-blur text-xs w-full text-white drop-shadow-[0_1.2px_1.2px_rgba(10,100,155,0.8)] rounded-lg px-2 max-w-[max-content] font-bold">Buy Now</p>
        <p className="absolute h-4 w-4 bg-black right-[45%]  top-[15%] translate-y-[-50%] translate-x-[50%]  flex justify-center items-center text-white rounded-full text-xs ">
        {productData ? productData?.length : 0}
        </p>
      </Link>
      
    </div>
  );
};

export default PageButton;
