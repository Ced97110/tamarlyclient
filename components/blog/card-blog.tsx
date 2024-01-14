'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardBlogProps {
  title: string;
  summary: string;
  
}

function CardBlog({ id,title, summary, ...props }: CardBlogProps & React.ComponentProps<typeof Image>) {


  return (

      
        <div className="max-w-lg mx-auto rounded-sm grid-row-2 grid-cols-1">
            <div className="bg-white shadow-md  border border-gray-200 max-w-sm mb-5 col-span-1 ">
            
              {props.src ? (
                <Image className='aspect-square object-contain w-full'  {...props} />
              ) : null}
           
              <div className="p-5 col-span-1">
            
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
             
                <p className="font-normal text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: summary }}></p>
                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-3 py-2 text-center inline-flex items-center rounded-sm" href="#">
                  Read more
                </Link>  
            </div>
          </div>
        </div>
      
      
  );
}

export default CardBlog;
