import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Juan Cruz Lambrechts" />
        <meta 
          property="og:description"
          content="FullStack web developer. I build my projects with React.js, Node.js, Styled-components, Redux, MySQL. Loving the craft." />
        <meta property="og:type" content="Website" />
        <meta property="og:url" content="https://personal-portfolio-catboxy.vercel.app/" />
        <meta name="author" content="Juan Cruz Lambrechts"></meta>
        <meta name="image" property="og:image" content="https://personal-portfolio-catboxy.vercel.app/linkedInThumbnail.jpg"></meta>
        <title>Juan Cruz Lambrechts</title>
      </Head>
      <ThemeProvider attribute="class">
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
