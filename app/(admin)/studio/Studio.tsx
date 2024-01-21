
"use client";
import sanityConfig from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";
const Studio = () => {
  return (
    <NextStudio config={sanityConfig}/>
  )
}

export default Studio