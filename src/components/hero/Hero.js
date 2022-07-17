import React from 'react';
import Carousel from '../carousel/Carousel';
import NewReleases from  '../newReleases/NewReleases';
import ScrollButton from '../scrollbutton/ScrollButton';


const Hero = () => {
  return (
    <div>
        <Carousel />
        <h2 className='text-xl font-bold pt-6 sm:pl-4 lg:pl-64'>MOST POPULAR</h2>
        <NewReleases />
        <h2 className='text-xl font-bold pt-6 sm:pl-4 lg:pl-64'>PRICE DROPS</h2>
        <NewReleases />
        <h2 className='text-xl font-bold pt-6 sm:pl-4 lg:pl-64'>NEW ARRIVALS</h2>
        <NewReleases /> 
        <ScrollButton />
    </div>
  )
}

export default Hero