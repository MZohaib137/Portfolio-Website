import React from 'react'

const Home = () => {
  return (
    <>
   <section className="text-gray-600 body-font home">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div className="hom2 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Grow Your Skill With <span >Google</span></h1>
      <p className="ml-6 mb-8 leading-relaxed">My name is <span className='zohaib'>Zohaib</span> As a <span className='zohaib'>Web&Apps </span>Developer</p>
    </div>
    <div className="imghom">
      <img  
      alt="hero" src="https://www.getinnotized.com/wp-content/uploads/2021/09/Untitled4.png"/>
    </div>
  </div>
</section>
     
    </>
  )
}

export default Home
