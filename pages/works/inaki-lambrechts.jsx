import React from 'react';
import { Layout } from '../../components/layout';
import Image from 'next/image';
import inakiLambrechts from '../../public/works/inakilambrechts.png';
import inakiLambrechts2 from '../../public/works/inakilambrechts2.png';

export default function AlkemyChallenge() {

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8 w-full">
              <h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight'>
                InakiLambrechts.com
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Agosto 2022
              </p>
            </div>
            <p className="text-justify mb-8 text-gray-600 dark:text-gray-400">
              Proyecto freelance para mi hermano Iñaki Lambrechts, fotógrafo y director de cine.
              Consiste de una página web con un formulario de contacto, galeria de imágenes y videos y
              una página de "sobre mi".
              Realizada con Next.js, Sanity como CMS y deploy en Vercel.com.
            </p>
            <ul className="mt-8 mb-8 px-4 w-full">
              <li className="mb-2">
                <div className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  <p>PAGINA WEB</p>
                </div>
                <a href="https://inakilambrechts.com/" target="_blank" rel="noreferrer" className='text-gray-600 dark:text-gray-400'>
                  https://inakilambrechts.com/
                </a>
              </li>
              <li className="mb-2">
                <span className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  STACK
                </span>
                <p className="inline-block text-gray-600 dark:text-gray-400"> React.js, Styled-components, Next.js, Sanity</p>
              </li>
            </ul>
            <div className='w-full flex flex-col items-center'>
              <a href="https://inakilambrechts.com/" target="_blank" rel="noreferrer">
                <Image className="rounded-xl" src={inakiLambrechts} alt="inaki lambrechts"></Image>
              </a>
            </div>
            <div className='w-full flex flex-col items-center mt-4'>
              <a href="https://inakilambrechts.com/" target="_blank" rel="noreferrer">
                <Image className="rounded-xl" src={inakiLambrechts2} alt="inaki lambrechts"></Image>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
