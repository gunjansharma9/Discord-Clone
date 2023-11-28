import React from 'react'
import Img1 from "../images/Image0.svg"
import Img2 from "../images/Image1.svg"
import Img3 from "../images/Image2.svg"
import { MdOutlineFileDownload } from "react-icons/md";

export const Section1 = () => {
  return (
    <div className="bg-[#404EED] relative w-full overflow-x-hidden min-h-[550px]">
        <img src={Img1} alt="" className="absolute bottom-0 z-10"/>
        <img src={Img3} alt="" className="absolute z-10 hidden xl:block bottom-0 -left-[15%]" />
        <img src={Img2} alt="" className='absolute z-10 hidden xl:block bottom-0 -right-[14%]'/>

        <div className='text-[#fff] flex flex-col gap-5 text-center mx-auto xl:pt-[120px] pt-[50px] xl:max-w-[900px]'>
            <h2 className='font-[800] xl:text-center text-left text-[34px] md:text-[56px] font-GintoNord z-20 leading-4 mb-2'>IMAGINE A PLACE....</h2>
            <p className='font-[400] z-20 text-left xl:text-center text-[16px] md:text-[20px] leading-[26px] md:leading-[32.5px] font-ggSans w-[90%] md:w-[70%] xl:w-[90%] xl:self-center'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can 
            spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div className='hidden xl:flex flex-row items-center gap-10 font-[500] z-20 justify-center mt-6'>
                <button className='flex items-center gap-2 rounded-full hover:text-[#404EED] text-black bg-white p-3 px-8 text-xl'>
                <MdOutlineFileDownload className='text-2xl'/>
                    Download for Windows
                </button>

                <button className='rounded-full bg-[#23272a] text-[#fff] p-3 px-8 text-xl flex items-center'>Open Discord in your browser</button>
            </div>
        </div>
    </div>
  )
}
