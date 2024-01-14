import BestSelling from 'components/best-selling/best-grid';
import GridBlog from 'components/blog/grid-blog';
import { Carousel } from 'components/carousel';
import CarouselHero from 'components/carousel-hero';
import ComingSoon from 'components/coming-soon';
import { ThreeItemGrid } from 'components/grid/three-items';
import Hero from 'components/hero-section';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';


export const runtime = 'edge';

export const metadata = {
  description: 'Welcome to Tamarly store',
  openGraph: {
    type: 'website'
  }
};


 async function HomePage(){

   
  return (
    <>
       <Hero/>
        <Suspense>
          <Carousel title='New release'/>
        </Suspense>
         <GridBlog/>
         <ComingSoon/>
        <BestSelling/>
       
    </>
  );
}


export default HomePage;