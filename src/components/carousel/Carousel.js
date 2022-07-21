import React from 'react';
import 'tw-elements';
import Nike from '../../img/Nike_Dunk.png';
import KD9 from '../../img/Nike_KD9.png';
import Flyknit from '../../img/Nike_Flyknit.png';


const Carousel = () => {
  return (
    
    <div
    id="carouselDarkVariant"
    className="carousel slide carousel-fade carousel-dark relative bg-slate-100"
    data-bs-ride="carousel"
  >
   
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
        data-bs-target="#carouselDarkVariant"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        data-bs-target="#carouselDarkVariant"
        data-bs-slide-to="1"
        aria-label="Slide 1"
      ></button>
      <button
        data-bs-target="#carouselDarkVariant"
        data-bs-slide-to="2"
        aria-label="Slide 1"
      ></button>
       <button
        data-bs-target="#carouselDarkVariant"
        data-bs-slide-to="3"
        aria-label="Slide 1"
      ></button>
    </div>
  
  
    <div className="carousel-inner relative w-full overflow-hidden">
      
      <div className="carousel-item active relative float-left w-full">
        <img
          src={Flyknit}
          className="block w-60 md:w-1/3 h-1/3 m-auto"
          alt="Nike-Vapormax"
        />
        <div className="carousel-caption hidden md:block absolute text-start">
        <h5 className="text-3xl font-bold">NIKE VAPORMAX FLYKNIT</h5>
          <p>'WHITE PLATINUM'</p>
          <button className="text-white bg-black rounded-md p-2 px-8 pt-2 hover:scale-x-105 hover:scale-y-105 mb-64 mt-5">SHOP NOW</button>
        </div>
      </div>
  
      
      <div className="carousel-item relative float-left w-full">
        <img
          src={Nike}
          className="block w-60 md:w-1/3 h-1/3 m-auto"
          alt="Nike-Dunk"
        />
        <div className="carousel-caption hidden md:block absolute text-end">
          <h5 className="text-3xl font-bold">Nike Dunk</h5>
          <p>'PANDA'</p>
          <button className="text-white bg-black rounded-md p-2 px-8 pt-2 hover:scale-x-105 hover:scale-y-105 mb-64 mt-5">SHOP NOW</button>
        </div>
      </div>
  
      
      <div className="carousel-item relative float-left w-full">
        <img
          src={KD9}
          className="block w-60 md:w-1/3 h-1/3 m-auto"
          alt="Nike-KD9"
        />
        <div className="carousel-caption hidden md:block absolute text-start">
          <h5 className="text-3xl font-bold">Nike KD 9</h5>
          <p>'BIRDS OF PARADISE'</p>
          <button className="text-white bg-black rounded-md p-2 px-8 pt-2 hover:scale-x-105 hover:scale-y-105 mb-64 mt-5">SHOP NOW</button>
        </div>
      </div>

      <div className="carousel-item relative float-left w-full">
        <img
          src={Nike}
          className="block w-60 md:w-1/3 h-1/3 m-auto"
          alt="Nike-Dunk"
        />
        <div className="carousel-caption hidden md:block absolute text-end">
          <h5 className="text-3xl font-bold">Nike Dunk</h5>
          <p>'PANDA'</p>
          <button className="text-white bg-black rounded-md p-2 px-8 pt-2 hover:scale-x-105 hover:scale-y-105 mb-64 mt-5">SHOP NOW</button>
        </div>
      </div>
    </div>
    
  
   
    <button
      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none
       hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none
       hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselDarkVariant"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}

export default Carousel