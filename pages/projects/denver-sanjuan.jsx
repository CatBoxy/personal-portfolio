import Image from 'next/image';
import React from 'react';

import { Layout } from '../../components/layout';
import denverSanJuan from '../../public/projects/DenverSanJuan.jpg';
import useTranslation from '../../hooks/useTranslation';

export default function DenverSanJuan() {
  const t = useTranslation();
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8 w-full">
              <h1 className="font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight">
                Denver San Juan
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {t['April']} 2022
              </p>
            </div>
            <p className="text-justify mb-8 text-gray-600 dark:text-gray-400">
              {t['denver description']}
            </p>
            <ul className="mt-8 mb-8 px-4 w-full">
              <li className="mb-2">
                <div className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  <p>{t['WEB SITE']}</p>
                </div>
                <a
                  href="https://denversanjuan.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400"
                >
                  https://denversanjuan.com/
                </a>
              </li>
              <li className="mb-2">
                <span className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  STACK
                </span>
                <p className="inline-block text-gray-600 dark:text-gray-400">
                  {' '}
                  React.js, CSS, Firebase, Vite, React-router, Vercel
                </p>
              </li>
            </ul>
            <div className="w-full flex flex-col items-center">
              <a
                href="https://denversanjuan.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-xl"
                  src={denverSanJuan}
                  alt="Denver San Juan"
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
