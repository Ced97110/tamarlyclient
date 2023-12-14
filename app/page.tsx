import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import HeroSection from 'components/hero';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'Welcome to Tamarly store',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <HeroSection/>
      <ThreeItemGrid />
      <Suspense>
        <Carousel title='New release'/>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
