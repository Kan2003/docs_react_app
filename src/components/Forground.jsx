import React, {useRef , useState } from 'react'
import Cards from './Cards'


const Forground = () => {
  const ref = useRef(null);
  const data = [
    {desc : "The data that display on the Cards.",
     filesize: ".9mb" ,
    close: true ,
    tag : {isOpen : true , tagtitle: "Download Now" , tagColor: "green"},
    },
    {desc : "The data that display on the Cards.",
     filesize: ".9mb" ,
    close: true ,
    tag : {isOpen : true , tagtitle: "Download Now" , tagColor: "blue"},
    },
    {desc : "The data that display on the Cards.",
     filesize: ".9mb" ,
    close: true ,
    tag : {isOpen : false , tagtitle: "Download Now" , tagColor: "green"},
    },
  ];
  
  return (
    <div ref={ref} className='fixed l-0 t-0 w-full h-screen bg-transparent z-[3] flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
          <Cards data={item} reference = {ref}/>
        ))}
    </div>
  )
}

export default Forground
