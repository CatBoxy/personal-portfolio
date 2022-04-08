import React from 'react';
import { Layout } from '../../components/layout';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import alkemyImage from '../../public/works/Alkemy.jpg';

export default function AlkemyChallenge() {

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8 w-full">
              <h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight'>
                Alkemy Challenge
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Diciembre 2021
              </p>
            </div>
            <p className="text-justify mb-8 indent-8">
              Proyecto realizado para el Alkemy Challenge. Consiste en una carta de platos para el armado de un menú
              personalizado. Cada plato y menú final muestra diferentes atributos al usuario. La app posee un Login
              obligatorio para acceder al contenido, además la autenticación se realiza con una API provista por Alkemy.
              La app está integrada con la API de <a className='font-semibold' href='https://spoonacular.com/food-api'>Spoonacular.</a>
            </p>
            <p className="text-justify">
              <span className='font-bold'>Importante:</span> Es necesario habilitar el contenido no seguro en el navegador para permitir la petición
              HTTP de la API de Alkemy.
            </p>
            <ul className="mt-8 mb-8 px-4 w-full">
              <li className="mb-2">
                <div className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  <p className='text-sm'>PAGINA WEB</p>
                </div>
                <a href="https://alkemy-react-js-challenge.vercel.app/">
                  https://alkemy-react-js-challenge.vercel.app/
                </a>
              </li>
              <li className="mb-2">
                <span className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm text-sm mr-2">
                  USUARIO
                </span>
                <p className="inline-block ">challenge@alkemy.org</p>
              </li>
              <li className="mb-2">
                <span className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm text-sm mr-2">
                  CONTRASEÑA
                </span>
                <p className="inline-block ">react</p>
              </li>
              <li className="mb-2">
                <span className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  STACK
                </span>
                <p className="inline-block"> ReactJS, Vite, Bootstrap, Styled-components, React-router</p>
              </li>
              <li className="flex ">

                <div className="font-bold dark:bg-gray-600 bg-gray-200 inline-block p-1 rounded-sm mr-2">
                  <BsGithub/>
                </div>
                <a className="truncate" href="https://github.com/CatBoxy/Alkemy_ReactJS_Challenge">
                   https://github.com/CatBoxy/Alkemy_ReactJS_Challenge
                </a>
              </li>
            </ul>
            <div className='w-full flex flex-col items-center'>
              <Image className="rounded-xl" src={alkemyImage} alt="Alkemy challenge"></Image>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
