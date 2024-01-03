import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import { HiDownload, HiMail } from 'react-icons/hi';

import { Layout } from '../components/layout';
import Section from '../components/section';
import useTranslation from '../hooks/useTranslation';
import Avatar from '../public/foto.jpg';


export default function Home() {
  const t = useTranslation();
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start w-full justify-between">
            <div className="flex flex-col pr-8">
              <h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight'>
                Juan Lambrechts
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                {t["index heading"]}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                {t["index description"]}
              </p>
            </div>
            <div className="w-[120px] h-[120px] sm:w-[120px] relative mb-8 sm:mb-0 ">
              <Image src={Avatar} alt='Juan Lambrechts' layout='fill' objectFit='cover' className="rounded-full -z-50" />
            </div>
          </div>
          <Section delay={0.1}>
            <h3 className='mb-6 font-bold text-2xl md:text-3xl text-black dark:text-white mb-1 tracking-tight decoration-4 dark:decoration-gray-400 decoration-gray-600 underline underline-offset-[6px]'>
              {t["about me"]}
            </h3>
            <p className='mb-6 text-justify text-gray-600 dark:text-gray-400 '>
              {t["description"]}
            </p>
            <div className="flex flex-row justify-evenly w-full items-center mb-6 sm:mb-0">
              <Link href="/works" passHref>
                <button className="px-4 py-2 dark:bg-gray-600 bg-gray-200 rounded-lg hover:ring-2 ring-gray-300 transition-all">
                  <a className="flex flex-row items-center font-semibold">
                    {t["my portfolio"]} {<FaAngleRight className="ml-1" />}
                  </a>
                </button>
              </Link>
              <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1gR1kg6vcAj68_f7PvIKamX22erip8Pbz/view?usp=sharing" >
                <button className="flex items-center font-semibold px-4 py-2 dark:bg-gray-600 bg-gray-200 rounded-lg hover:ring-2 ring-gray-300 transition-all">
                  <p>{t["my cv"]}</p> {<HiDownload className="ml-1" />}
                </button>
              </a>
            </div>
          </Section>
          <Section delay={0.2}>
            <h3 className='mb-6 font-bold text-2xl md:text-3xl text-black dark:text-white mb-1 tracking-tight decoration-4 dark:decoration-gray-400 decoration-gray-600 underline underline-offset-[6px]'>
              {t["me"]} ♥
            </h3>
            <p className='mb-6 text-justify text-gray-600 dark:text-gray-400 '>
              {t["Front End development, UI design, React.js, Vue.js, Python, Web Scraping, DDD."]}
            </p>
          </Section>
          <Section delay={0.3}>
            <h3 className='mb-6 font-bold text-2xl md:text-3xl text-black dark:text-white mb-1 tracking-tight decoration-4 dark:decoration-gray-400 decoration-gray-600 underline underline-offset-[6px]'>
              {t["In the web"]}
            </h3>
            <ul className='flex flex-col items-start'>
              <li>
                <Link href='https://github.com/CatBoxy'>
                  <a className='text-gray-600 dark:text-gray-400 flex flex-row ml-[-0.75rem] py-6 px-3 h-8 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all' target="_blank">
                    <BsGithub className="mr-4" />
                    @CatBoxy
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://www.linkedin.com/in/jclambrechts/'>
                  <a className='text-gray-600 dark:text-gray-400 flex flex-row ml-[-0.75rem] py-6 px-3 h-8 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all' target="_blank">
                    <BsLinkedin className="mr-4" />
                    @jclambrechts
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://twitter.com/Esporadix1'>
                  <a className='text-gray-600 dark:text-gray-400 flex flex-row ml-[-0.75rem] py-6 px-3 h-8 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all' target="_blank">
                    <BsTwitter className="mr-4" />
                    @Esporadix1
                  </a>
                </Link>
              </li>
              <li>
                <div className='text-gray-600 dark:text-gray-400 flex flex-row ml-[-0.75rem] py-6 px-3 h-8 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all' target="_blank">
                  <HiMail className="mr-4" />
                  juancruzlambrechts@gmail.com
                </div>
              </li>
            </ul>
          </Section>
        </div>
      </Layout>
    </>
  );
}
