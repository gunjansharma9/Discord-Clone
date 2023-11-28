import React from 'react'
import Img from "../images/section4Image.svg"
import Img2 from "../images/section5Image.svg"
import { MdOutlineFileDownload } from "react-icons/md";


export const Section2 = () => {
  return (
    <div className='bg-[#f6f6f6]'>
        <div className='flex lg:flex-col max-w-[1200px] mx-auto items-center py-14 md:py-32 px-5'>
            <h1 className='font-[800] font-GintoNord text-[20px] leading-[19px] md:leading-[32px] text-left md:text-center md:text-[40px]'>RELIABLE TECH FOR STAYING CLOSE</h1>
            <p className='md:text-center md:w-[83%] md:text-[20px] md:leading-[32.5px] text-[16px] leading-[26px] mt-[24px]'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            <img src={Img} alt="" className='w-[100%]' />

            <div className='text-[32px] font-ggSans font-[700] relative w-[100%] flex flex-col items-center gap-[40px]'>
                <img src={Img2} alt="" className='md:block hidden absolute top-0' />
                <div className='md:text-center pt-[30px] leading-[38px]'>Ready to start your journey?</div>
                <p className='bg-[#404EED]  w-fit text-white text-[20px] font-[500] font-ggSans px-[32px] py-[16px] rounded-full flex flex-row items-center gap-2'>
                <MdOutlineFileDownload className='text-2xl'/>
                Download for Windows</p>
            </div>
        </div>
    </div>
  )
}
