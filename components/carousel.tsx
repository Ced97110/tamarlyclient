import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel({title}:{title?:string}) {
  // Collections that start with `hidden-*` are hidden from the search page.

  const products = await getCollectionProducts({ collection: 'home' });


  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products, ...products];

  return (
    <>
     <div>
        <h2 className='text-3xl text-center py-4 pb-4  font-semibold'>
          {title}
        </h2>
      </div>
    <div className=" w-full overflow-x-auto pb-6 pt-4">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-1/3 max-w-[400px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                src={product.featuredImage?.url}
                 label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
