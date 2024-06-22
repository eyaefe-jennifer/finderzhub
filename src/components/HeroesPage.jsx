"use client"

import Image from "next/image"
import imagg1 from "./images/image8.jpeg"
import image2 from "./images/image5.jpeg"
import image3 from "./images/image3.jpeg"
import image4 from "./images/image7.jpeg"
import {BiChevronLeft}  from "react-icons/bi"
import {BiChevronRight}  from "react-icons/bi"
import { useState } from "react"


export const HeroesPage = () => {
const [currentSlide, setCurrentSlide] = useState(0)

const data =[
          imagg1,
          image2,
          image3,
          image4
]
const prevSlide =()=>{
    setCurrentSlide(currentSlide === 0 ? 3:(prev) => prev -1)
}

const nextSlide =()=>{
     setCurrentSlide(currentSlide === 3 ? 0:(prev) => prev +1)
}
console.log(currentSlide)
  return (
    <div className="w-full h-auto overflow-x-hidden">
        <div className=" w-screen h-[650px] relative  ">
            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className=" w-[400vw] h-full flex transition-transform duration-1000">
            <Image src={data[0]} alt="" width={0} height={0} sizes="100vw" style={{width: "50%", height: "auto"}} priority ={true} quality={80} />
               <Image src={data[1]} alt="" width={0} height={0} sizes="100vw" style={{width: "50%", height: "auto"}}  />
               <Image src={data[2]} alt="" width={0} height={0} sizes="100vw" style={{width: "50%", height: "auto"}}  />
               <Image src={data[3]} alt="" width={0} height={0} sizes="100vw" style={{width: "50%", height: "auto"}}  />
            </div>
            <div className="absolute  flex justify-between bottom-72 ">
                <div className=" w-10 h-10 border-2 border-purple-800 flex items-center text-center rounded-md  hover:bg-purple-800 hover:text-white cursor-pointer ml-2" onClick={prevSlide} >
                    <BiChevronLeft className="text-[30px]" />
                </div>
                <div className=" w-10 h-10 border-2 border-purple-800 flex items-center text-center rounded-md   hover:bg-purple-800 hover:text-white cursor-pointer left-[1300px] absolute" onClick={nextSlide}>
                    <BiChevronRight className="text-[30px]" />
                </div>
            </div>
        </div>
    </div>
  )
}
