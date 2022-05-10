import React from 'react';
import { Layout } from '../../components/layout';
import Image from 'next/image';
import denverSanJuan from '../../public/works/DenverSanJuan.jpg';

export default function AlkemyChallenge() {

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8 w-full">
              <h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight'>
                Denver San Juan
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Abril 2022
              </p>
            </div>
            <p className="text-justify mb-8 text-gray-600 dark:text-gray-400">
              Proyecto freelance para un cliente local. Consiste en una interfaz que muestra precios de compra y venta
              de varias divisas y la hora en que fueron actualizados los datos. Posee un login para el cliente, el cual redirecciona
              a un dashboard de administrador, donde es posible cambiar los datos. La autenticación de usuario y base de datos son manejados con Firebase.
              Deploy en Vercel.
            </p>
            <ul className="mt-8 mb-8 px-4 w-full">
              <li className="mb-2">
                <div className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  <p className='text-sm'>PAGINA WEB</p>
                </div>
                <a href="https://denversanjuan.com/" target="_blank" rel="noreferrer" className='text-gray-600 dark:text-gray-400'>
                  https://denversanjuan.com/
                </a>
              </li>
              <li className="mb-2">
                <span className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  STACK
                </span>
                <p className="inline-block text-gray-600 dark:text-gray-400"> ReactJS, CSS, Firebase, Vite, React-router</p>
              </li>
            </ul>
            <div className='w-full flex flex-col items-center'>
              <a href="https://denversanjuan.com/" target="_blank" rel="noreferrer">
                <Image className="rounded-xl" src={denverSanJuan} alt="Alkemy challenge"></Image>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
