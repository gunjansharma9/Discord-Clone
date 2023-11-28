import React from 'react';

export const Common = ({ image, heading, para, flag }) => {
  return (
    <div className='flex md:flex-row flex-col max-w-[1200px] mx-auto items-center py-14 md:py-36 px-7 md:px-0'>
        <img src={image} alt="" className={`md:w-[50%] ${flag === "left" ? 'order-1' : 'order-2'}`} />

        <div className={`xl:w-[60%] mx-auto lg:max-w-[35%] md:w-[50%] ${flag === "left" ? 'order-2' : 'order-1'}`}>
            <h1 className='font-[700] text-[20px] sm:text-[28px] md:text-[48px] font-ggSans leading-[24px] md:leading-[57.6px] mt-5 md:mt-0'>{heading}</h1>
            <p className='font-ggSans text-[16px] sm:text-[20px] font-[400] mt-[24px]'>{para}</p>
        </div>
    </div>
  );
};
