import { Layout } from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

import { allPosts } from 'contentlayer/generated';
import { pick } from 'utils/pick';

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start w-full justify-between">
            <div className="flex flex-col pr-8">
              <h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight'>Juan Lambrechts</h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">Full-stack Developer</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">Building and learning web stuff that makes me happy.</p>
            </div>
            <div className="w-[80px] sm:w-[120px] relative mb-8 sm:mb-0 ">
              <Image src="/MainAvatar.jpg" alt='Juan Lambrechts' height={176} width={176} className="rounded-full bg-white -z-50"/>
            </div>
          </div>
          <div>
            <h3 className='mb-6 font-bold text-2xl md:text-3xl text-black dark:text-white mb-1 tracking-tight decoration-4 dark:decoration-gray-400 decoration-gray-600 underline underline-offset-[6px]'>About Me</h3>
            <p className='mb-6 text-justify text-gray-600 dark:text-gray-400 indent-8'>I am a full-stack developer based in San Juan, Argentina with a passion for building digital services and stuff I like.
              I love understanding each part of every project I work on, like planning, designing and launching apps.
              When I'm not online I read, craft pottery and spend time with my family.
              Currently I'm working on developing my dev skills and looking for a job.
            </p>
          </div>
          <div>
            <h3 className='mb-6 font-bold text-2xl md:text-3xl text-black dark:text-white mb-1 tracking-tight decoration-4 dark:decoration-gray-400 decoration-gray-600 underline underline-offset-[6px]'> I love</h3>
            <p className='mb-6 text-justify text-gray-600 dark:text-gray-400 indent-8'>
              Reading, Music, Excercising, Blockchain, and my pet cat Limon &#128008;.
            </p>
          </div>
          <div>
            <h3 className='mb-6 font-bold text-2xl md:text-3xl text-black dark:text-white mb-1 tracking-tight decoration-4 dark:decoration-gray-400 decoration-gray-600 underline underline-offset-[6px]'>On the Web</h3>
            <ul>
              <li><Link href='https://github.com/CatBoxy'><a className='flex flex-row h-8'><BsGithub/>@CatBoxy</a></Link></li>
              <li><Link href='https://www.linkedin.com/in/jclambrechts/'><a><BsLinkedin/>@jclambrechts</a></Link></li>
              <li><Link href='https://twitter.com/Esporadix1'><a><BsTwitter/>@Esporadix1</a></Link></li>
            </ul>
          </div>
        </div>
        {/* <div>
          {posts.map(
            ({
              slug,
              publishedAt,
              title,
              readingTime,
              author,
              category,
              image,
              description,
            }) => (
              <div className="col" key={slug}>
                <PostCard
                  slug={slug}
                  title={title}
                  readingTime={readingTime}
                  publishedAt={publishedAt}
                  author={author}
                  category={category}
                  image={image}
                  description={description}
                />
              </div>
            )
          )}
        </div> */}
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
        'image',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}
