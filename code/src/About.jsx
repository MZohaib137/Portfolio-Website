import React from 'react'
import { useHistory } from 'react-router-dom'
import z from '../src/image/z.jpg'

const About = () => {
  const chis=useHistory()
 
  return (
    <><br />
        <div className='hdr'>About</div>

      <section className="text-gray-600 body-font wid">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="img lg:w-1/4 md:w-2/5 w-2/3 mb-10 object-cover object-center " alt="hero" 
    src={z}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><span className='zohaib'>Muhammad Zohaib </span></h1>
      <p className="mb-8 leading-relaxed"> Dakho yar apun ko chaya koi tandi si cheez apun ka diimagh garam ha boht zda sara</p>
      <div className="flex justify-center">
        <button onClick={()=>{
          chis.push('/service')
        }} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Services</button>
       
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About
