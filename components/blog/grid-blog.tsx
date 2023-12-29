import React from 'react';
import { getArticles } from 'lib/shopify';
import CardBlog from './card-blog';
import Link from 'next/link';

async function GridBlog() {
  const article = await getArticles();

  if (!article?.length) return null;

  console.log('les articles', article);

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-32 px-10">
        <div>
          <h2 className="text-3xl text-center py-4 font-semibold">
            Latest Articles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl:grid-cols-3 gap-y-10 gap-x-1">
          {article.map((article) => (
            <Link href={`/article/${article.id}`} key={article.id} className="relative h-full w-full">
              <CardBlog
                alt={article.title}
                title={article.title}
                summary={article && article.summary_html ? article.summary_html : ''}
                src={article.image && article.image.src ? article.image.src : ''}
                width={150}
                height={160}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default GridBlog;
