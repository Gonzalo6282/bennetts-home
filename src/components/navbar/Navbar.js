import React from 'react';
import Logo from '../../img/LogoT.png';
import './Navbar.css';
import Script from './Script.js';


const Navbar = () => {
  return (
    <nav className ='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <img className="logo" src={Logo} width={50} height={50} alt='logo' />
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href="/#" className='hover:text-darkGrayishBlue'>Home</a>
          <a href="/#" className='hover:text-darkGrayishBlue'>Sportswear</a>
          <a href="/#" className='hover:text-darkGrayishBlue'>Footwear</a>
          <a href="/#" className='hover:text-darkGrayishBlue'>Outfits</a>
        </div>
        <a className='hidden md:block hover:text-darkGrayishBlue p-2 px-6 pt-2 text-black border-2 border-gray-200
         hover:drop-shadow-md transition ease-in-out delay-100 bg-white hover:-translate-y-1 hover:scale-110
          hover:bg-white duration-200
        rounded-full baseline'>
          Log In
        </a>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        </div>


      <div className="md:hidden">
        <div
          id="menu"
          className="z-50 rounded-xl absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="/#" className='hover:text-darkGrayishBlue'>Home</a>
          <a href="/#" className='hover:text-darkGrayishBlue'>Sportswear</a>
          <a href="/#" className='hover:text-darkGrayishBlue'>Footwear</a>
          <a href="/#" className='hover:text-darkGrayishBlue'>Outfits</a>
      </div>
      </div> 

      <script src={Script}></script>
      
    </nav>
  )
  
}

export default Navbar