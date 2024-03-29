import { allPosts } from 'contentlayer/generated';
import React from 'react';

import { pick } from 'utils/pick';
import BlogPost from '../components/blogPost';
import { Layout } from '../components/layout';
import Section from '../components/section';
import useTranslation from '../hooks/useTranslation';

export default function Blog({ posts }) {
  const t = useTranslation();
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight">
                Blog
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                {
                  t[
                    'Welcome to my blog. Feel free to browse through my learnings, experiences and random interesting stuff.'
                  ]
                }
              </p>
            </div>
            <div className="flex flex-col w-full">
              {posts.map(
                ({
                  slug,
                  publishedAt,
                  title,
                  readingTime,
                  author,
                  category,
                  description,
                  language,
                }) => (
                  <Section key={slug}>
                    <BlogPost
                      slug={slug}
                      title={title}
                      readingTime={readingTime}
                      publishedAt={publishedAt}
                      author={author}
                      category={category}
                      description={description}
                      language={language}
                    />
                  </Section>
                )
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = allPosts
    .map((post) =>
      pick(post, [
        'slug',
        'title',
        'publishedAt',
        'readingTime',
        'author',
        'category',
        'description',
        'language',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}
