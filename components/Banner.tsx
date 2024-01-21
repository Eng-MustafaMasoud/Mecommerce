"use client";
import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";

const Banner = ({ banners }: any) => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
     <div  style={{ width:"50px",height:"75vh",zIndex:"5",backdropFilter: "blur(20px)",top:"0" }}>

         <ul style={{ gap: "1rem",display:"flex",flexDirection:"column",position: "absolute",
           top: "50%",
           left: "0%",maxWidth:"fit-content",maxHeight:"max-content",transform:"translateY(-50%)" }}> {dots} </ul>
     </div>
    
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        <p
          style={
            i === dotActive
              ? { color: "black", fontWeight: "600" }
              : { color: "white", fontWeight: "600" }
          }
        >
          {" "}
          0{i + 1}
        </p>
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots: any) => (
            <div  style={{ width:"50px",height:"80vh",top:"0",zIndex:"5",backdropFilter: "blur(20px)" }}>

            <ul style={{ gap: "1rem",display:"flex",flexDirection:"column",position: "absolute",
              top: "50%",
              left: "0%",maxWidth:"fit-content",maxHeight:"max-content",transform:"translateY(-50%)" }}> {dots} </ul>
        </div>
          ),
          customPaging: (i: any) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {banners?.map((item: any) => (
          <Link href={"/shop"} className="relative w-full h-full" key={item?._id}>
            <Image
              width={1000}
              height={600}
              src={urlFor(item.image).url()}
              alt="banner image"
              className="w-[100%] h-[80vh] object-cover"
            />
            <p className="absolute top-[50%] left-[50%] text-center z-10 drop-shadow-[0_1.2px_1.2px_rgba(210,0,0,0.8)] backdrop-blur-[20px] px-16 max-w-[max-content] py-16 font-extrabold trackind-wider uppercase text-white rounded-lg text-4xl translate-x-[-50%] translate-y-[-50%]">Super Sale 50% Off</p>
            <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20" />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;