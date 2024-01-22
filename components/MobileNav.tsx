"use client"
import { LinksList } from '@/utils/data'
import Link from 'next/link'
import { IoMdClose } from "react-icons/io";

const MobileNav = ({setToggle}:any) => {
  return (
  
        <ul className=" absolute top-0 flex flex-col transition-all duration-200 items-center justify-center gap-8 font-bold text-2xl  bg-gray-400 w-full h-screen z-[100] overflow-hidden">
          <IoMdClose className="absolute top-5 right-5" onClick={()=>setToggle(false)}/>

          {LinksList?.map((item) => (
            <li key={item.title} className="">
              <Link
                href={item.navigation}
                className={
                 
                    
                     "text-gray-900 hover:text-gray-950 hover:underline underline-offset-4 decoration-[1px]"
                }
              >
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
  
  )
}

export default MobileNav