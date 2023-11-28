import React from 'react'

export const List = ({listitems}) => {
  return (
    <div className='flex flex-col gap-2 text-white'>
        {
            listitems.map((element,index) => {
                return(
                    <div className={index === 0 ? "text-[#5865f2]":"white"}>{element}</div>
                )
            })
        }
    </div>
  )
}
