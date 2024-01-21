"use client";

import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import Link from "next/link";
import { LinksList } from "@/utils/data";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const pathname = usePathname();
  return (
    <header className=" w-full sticky bg-gray-100 top-0 z-50 backdrop-blur	border-b border-gray-200 ">
      <nav className="  flex justify-between max-w-[1440px] mx-auto items-center gap-2 2xl:px-4 p-6 max-sm:px-2">
        <div className="">
          <span className="md:text-4xl text-xl max-sm:text-lg font-extrabold">
            <Link href="/">Mcommerce</Link>
          </span>
        </div>
        <div className=" flex-1 flex border bg-white border-gray-300 max-w-[350px] rounded-md items-center pr-2 max-md:w-1/2">
          <input
            type="text"
            placeholder="search your products..."
            className="  outline-none p-2 rounded-md items-center justify-center flex caret-gray-300 placeholder:text-gray-200 w-full "
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <span
              onClick={() => setSearchQuery("")}
              className="hover:cursor-pointer"
            >
              <IoMdClose className="cursor-pointer"/>
            </span>
          ) : (
            <CiSearch className="rotate-[90deg] cursor-pointer"/>
          )}
        </div>
        <ul className=" gap-4 hidden md:inline-flex">
          {LinksList?.map((item) => (
            <li key={item.title} className="">
              <Link
                href={item.navigation}
                className={
                  pathname === item.navigation
                    ? "underline text-gray-950 transition-all duration-100 "
                    : "text-gray-400 hover:text-gray-950 hover:underline underline-offset-4 decoration-[1px]"
                }
              >
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
