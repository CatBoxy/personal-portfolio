import React from 'react';
import { Layout } from '../components/layout';
import { allPosts } from 'contentlayer/generated';
import { pick } from 'utils/pick';
import BlogPost from '../components/blogPost';
import Section from '../components/section';


export default function blog({ posts }) {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8">
              <h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight'>
                Blog
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Bienvenido/a a mi pequeño rincon de la web. En este espacio estaré compartiendo mis aprendizajes, experiencias y cosas interesantes
                que encuentro.
              </p>
            </div>
            <div className='flex flex-col w-full'>
              {/* {posts.map(
                ({
                  slug,
                  publishedAt,
                  title,
                  readingTime,
                  author,
                  category,
                  description,
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
                    />
                  </Section>
                )
              )} */}
              <Section className="w-full mb-8">
                <div className="flex flex-col justify-between md:flex-row">
                  <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                    Work In Progress
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400"> Todavia no existen posts en esta seccion</p>
              </Section>
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
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}