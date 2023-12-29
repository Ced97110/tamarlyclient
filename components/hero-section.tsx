import React from 'react'
import CarouselHero from './carousel-hero'




export const Hero = () => {


  const images = ['logo.jpg','logo.jpg','logo.jpg']

  return (
     <>
      <section className='max-w-screen-2xl pb-4 max-h-screen'>
         <CarouselHero/>
      </section>
         
     </>
  )
}

export default Hero