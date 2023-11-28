import React from 'react'
import { List } from './List';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Logo from "../images/logo.svg"

const list1 = ["Product","Download","Nitro","Status","App Directory"];
const list2 = ["Company","About","Jobs","Brand","Newsroom","Fall Release"];
const list3 = ["Resources","College","Support","Safety","Blog","Feedback","Developers","StreamKit","Creators","Community","Official 3rd Party Merch"];
const list4 = ["Policies","Terms","Privacy","Cookie Settings","Guidelines","Acknowledgements","Licenses","Company Information"];
export const Footer = () => {
  return (
    <div className='bg-[#23272a]'>
        <div className='text-[#5865f2] max-w-[1200px] mx-auto pt-24 flex flex-row justify-between'>
            <div className='flex flex-row gap-4 text-2xl text-white mt-10'>
                <FaTwitter />
                <FaInstagram />
                <FaSquareFacebook />
                <FaYoutube />
                <FaTiktok />

            </div>
            <div className='flex flex-row justify-around md:w-[75%] flex-wrap'>
                <List listitems={list1}/>
                <List listitems={list2}/>
                <List listitems={list3}/>
                <List listitems={list4}/>
            </div>
        </div>

        <div className='flex border-t-2 border-[#5865f2] max-w-[1200px] mx-auto pt-7 justify-between mt-11'>
            <div className='text-white'>
                <img src={Logo} alt="" />
            </div>

            <button className='text-white bg-[#5865f2] px-[16px] py-[7px] rounded-full leading-[24px] text-[14px] font-[500] hover:bg-[#5865f2]'>
                Sign Up
            </button>
        </div>

        <div className='h-11'></div>
    </div>
  )
}
