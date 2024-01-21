import Link from 'next/link'
import React from 'react'
import { IoReturnDownBack } from "react-icons/io5";

const StudioHeader = (props:any) => {
    return (
        <>
        
        <div className='bg-[#222331] flex justify-between items-center h-[50px] px-4 text-white'>
           <Link href="/" className='flex items-center gap-3 hover:text-blue-400 '> <IoReturnDownBack/>Go to Website</Link>
                <span className="text-xl font-bold inset-2 text-[#6c71ad]">Mcommerce</span>
        <p className='text-xs capitalize'>Admin studio for Mcommerce Online Shopping</p>
            
        </div>
          {props.renderDefault(props)}
        </>
  )
}

export default StudioHeader