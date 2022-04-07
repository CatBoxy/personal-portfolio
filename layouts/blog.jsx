import React from 'react';
import { Layout } from '../components/Layout';
import Date from '../components/Date';

export default function BlogLayout({ children, post }) {
  return (
    <>
      <Layout>
        <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            {post.title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full mt-2 mb-2 md:flex-row md:items-center">
            <div className="flex items-center ">
              <p className=" text-sm text-gray-600 dark:text-gray-400">
                {'Author | '}
                <Date dateString={post.publishedAt} />
              </p>
            </div>
            <p className=" text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
              {post.readingTime.text}
            </p>
          </div>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
        </article>
      </Layout>
    </>
  );
}
