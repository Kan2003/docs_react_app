import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


const Cards = ({data , reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>        <FaRegFileLines/>
        <p className='text-sm  font-semibold leading-tight mt-5 text-zinc-300'>{data.desc}</p>
        <div className='footer absolute w-full  bottom-0 left-0'>
            <div className='flex items-center justify-between mb-2 px-8 py-4 '>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 rounded-full flex items-center justify-center bg-zinc-500'>
                {data.close ? <IoIosClose/> : <MdDownload size="0.8em" color='#000'/>}
                
                </span>
            </div>
            {
              data.tag.isOpen && (
                <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                  <h4 className='text-sm font-thin'>{data.tag.tagtitle}</h4>
                </div>
              )
            } 
            
        </div>
    </motion.div>
  )
}

export default Cards
