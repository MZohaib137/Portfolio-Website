import React from 'react'
import Card from './Card'
import data from './Data'
const Service = () => {


  return (
    <>
    <div className='hdr'>Services</div>
    <div className='crd'>
     {data.map((val,index)=>{
        return(
          <>
            <Card 
              key={val.id}
              src={val.src}
              tit={val.tit}
              disc={val.disc}
            />
          </>
        )
      })}</div>
    </>
  )
}

export default Service
