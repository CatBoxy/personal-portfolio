import Head from 'next/head';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import BlogLayout from '../../layouts/blog';

const mdxComponents = {};

export default function Post({ post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <MDXContent components={mdxComponents} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}
