import React from 'react';
import { Layout } from '../../components/layout';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import botacuraImage from '../../public/projects/Botacura.jpg';

export default function Botacura() {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8 w-full">
              <h1 className="font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight">
                Botacura
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Febrero 2021 - Agosto 2021
              </p>
            </div>
            <p className="text-justify mb-8 text-gray-600 dark:text-gray-400">
              Proyecto grupal realizado como entrega final para el curso de
              Programador Web Fullstack de Digital house. Consiste en un
              e-commerce de productos de escalada. La aplicación fue diseñada
              siguiendo el patrón MVC.
            </p>
            <p className="text-justify mb-8 text-gray-600 dark:text-gray-400">
              Mi principal foco fue el desarrollo de la página principal y la
              integración y armado del backend en su totalidad. Desarrollé
              middlewares de autenticación de usuarios, sesiones y cookies.
              Diseñe y monté una base de datos SQL con el ORM Sequelize, y armé
              los controladores para administrarla. También desarrollé el
              sistema de ruteo. Por último hice el deploy en Heroku.
            </p>
            <ul className="mb-8 px-4 w-full">
              <li className="mb-2">
                <div className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  <p>PAGINA WEB</p>
                </div>
                <a
                  href="https://botacuradb.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400"
                >
                  https://botacuradb.herokuapp.com/
                </a>
              </li>
              <li className="mb-2">
                <span className="font-bold dark:bg-gray-600 bg-gray-200 inline-block px-1 rounded-sm mr-2">
                  STACK
                </span>
                <p className="inline-block text-gray-600 dark:text-gray-400">
                  {' '}
                  JavaScript, HTML, CSS, NodeJS, Express, Sequelize, MySQL
                </p>
              </li>
              <li className="flex ">
                <div className="font-bold dark:bg-gray-600 bg-gray-200 inline-block p-1 rounded-sm mr-2">
                  <BsGithub />
                </div>
                <a
                  className="truncate text-gray-600 dark:text-gray-400"
                  href="https://github.com/CatBoxy/Botacura"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/CatBoxy/Botacura
                </a>
              </li>
            </ul>
            <div className="w-full flex flex-col items-center">
              <a
                href="https://botacuradb.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-xl"
                  src={botacuraImage}
                  alt="Alkemy challenge"
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
