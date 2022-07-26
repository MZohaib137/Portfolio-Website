import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap 
      pt-5 pl-16 pr-16 flex-col md:flex-row items-center">
    <NavLink to='' className="flex title-font font-medium items-center
             text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">SAIFI-Blocks</span>
    </NavLink>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <NavLink exact activeClassName='mai' to='/'  className="mr-5 hover:text-gray-900">Home</NavLink>
      <NavLink exact activeClassName='mai' to='/about' className="mr-5 hover:text-gray-900">About</NavLink>
      <NavLink exact activeClassName='mai'  to='/service' className="mr-5 hover:text-gray-900">Service</NavLink>
      <NavLink exact activeClassName='mai'   to='/contact' className="mr-5 hover:text-gray-900">Contact</NavLink>
    </nav>
    
  </div>
</header> 

    </>
  )
}

export default Navbar
