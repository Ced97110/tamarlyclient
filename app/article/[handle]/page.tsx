import { getArticle } from 'lib/shopify';
import { notFound } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import { Html } from 'next/document';

  const ArticlePage = async ({ params }: { params: { handle: string } }) => {

    const article = await getArticle(params.handle);

    if (!article) return notFound();

    console.log(article)

  return (
    <div className="max-w-screen-lg mx-auto">
 
    <header className="flex items-center justify-between py-2">
      <a href="#" className="px-2 lg:px-0 font-bold">
        Tamaly Blog
      </a>
      <button className="block md:hidden px-2 text-3xl">
        <i className='bx bx-menu'></i>
      </button>
    </header>
   

    <main className="mt-10">

      <div className="mb-4 md:mb-0 w-full mx-auto overflow-hidden">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                {article.title}
            </h2>
            <a 
             href="#"
             className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
            {article.tags}
            </a>
          </div>
          <div className='relative h-72'>
             <Image src={article.image && article.image.src ? article.image.src : ''}  alt={article.title}  className="absolute aspect-square lg:rounded" fill  objectFit='contain' sizes="(min-width:768px) 22vw 50vw (min-width:1024px) 55vw 100vw "/>
          </div>

       
       </div>
      

      <div className="flex flex-col lg:flex-row lg:space-x-12">

        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p className="font-semibold text-gray-700 text-sm"> {article.author} </p>
                <p className="font-semibold text-gray-600 text-xs">Tamarly Publishing</p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
              Ced writes about technology
            </p>
            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow 
              <i className='bx bx-user-plus ml-2' ></i>
            </button>
          </div>
        </div>

      </div>
    </main>
  
  </div>
  )
}

export default ArticlePage