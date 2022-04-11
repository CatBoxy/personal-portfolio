import React from 'react';
import { Layout } from '../../components/layout';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import basementImage from '../../public/works/basement1.png';

export default function BasementChallenge() {

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8 w-full">
              <h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight'>
                Basement Challenge
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Noviembre 2021
              </p>
            </div>
            <p className="text-justify mb-8 text-gray-600 dark:text-gray-400">
               Proyecto realizado para el Basement Challenge. Consiste en un marketplace de productos de ropa con carrito de compras.
              El principal objetivo fue familiarizarse con ReactJS, chakra-UI y React hooks.
            </p>
            <ul className=" mb-8 px-4 w-full">
              <li className="mb-2">
                <div className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  <p className='text-sm'>PAGINA WEB</p>
                </div>
                <a href="https://basement-challenge-react.herokuapp.com/" target="_blank" rel="noreferrer" className='text-gray-600 dark:text-gray-400'>
                  https://basement-challenge-react.herokuapp.com/
                </a>
              </li>
              <li className="mb-2">
                <span className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  STACK
                </span>
                <p className="inline-block text-gray-600 dark:text-gray-400"> ReactJS, Vite, chakra-UI</p>
              </li>
              <li className="flex ">

                <div className="font-bold dark:bg-gray-600 bg-gray-200 inline-block p-1 rounded-sm mr-2">
                  <BsGithub/>
                </div>
                <a className="truncate text-gray-600 dark:text-gray-400" href="https://github.com/CatBoxy/basement_challenge_UI" target="_blank" rel="noreferrer">
                   https://github.com/CatBoxy/basement_challenge_UI
                </a>
              </li>
            </ul>
            <div className='w-full flex flex-col items-center'>
              <a href="https://basement-challenge-react.herokuapp.com/" target="_blank" rel="noreferrer">
                <Image className="rounded-xl" src={basementImage} alt="Alkemy challenge"></Image>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}