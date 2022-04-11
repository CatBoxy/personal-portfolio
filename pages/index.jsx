import { Layout } from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';


export default function Home() {
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
                Desarrollador Full-stack | Ingeniero
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Building and learning web stuff that makes me happy.
              </p>
            </div>
            <div className="w-[80px] sm:w-[120px] relative mb-8 sm:mb-0 ">
              <Image src="/MainAvatar.jpg" alt='Juan Lambrechts' height={176} width={176} className="rounded-full bg-white -z-50"/>
            </div>
          </div>
          <div>
            <h3 className='mb-6 font-bold text-2xl md:text-3xl text-black dark:text-white mb-1 tracking-tight decoration-4 dark:decoration-gray-400 decoration-gray-600 underline underline-offset-[6px]'>
              Sobre mi
            </h3>
            <p className='mb-6 text-justify text-gray-600 dark:text-gray-400 '>
              Soy un desarrollador Full-stack orientado al Frontend. Vivo en San Juan, Argentina y me apasiona elaborar soluciones y servicios digitales.
              Amo entender cada parte de todo proyecto en el que me enfoco, como planeamiento, diseño, desarrollo y deploy.
              Cuando no estoy conectado me gusta leer, el arte y pasar tiempo con mi familia y amigos.
              En este momento me encuentro trabajando en mejorar mis habilidades y activamente buscando nuevos proyectos.
            </p>
          </div>
          <div className="flex flex-col justify-center w-full items-center">
            <Link href="/works" passHref>
              <button className="px-4 py-2 dark:bg-gray-600 bg-gray-200 rounded-lg hover:ring-2 ring-gray-300 transition-all">
                <a className="flex flex-row items-center font-semibold">
                  Mi Portfolio {<FaAngleRight className="ml-1"/>}
                </a>
              </button>
            </Link>
          </div>
          <div>
            <h3 className='mb-6 font-bold text-2xl md:text-3xl text-black dark:text-white mb-1 tracking-tight decoration-4 dark:decoration-gray-400 decoration-gray-600 underline underline-offset-[6px]'>
               Yo ♥
            </h3>
            <p className='mb-6 text-justify text-gray-600 dark:text-gray-400 '>
              Leer, Musica, Entrenar, Blockchain y mi mascota Limon &#128008;.
            </p>
          </div>
          <div>
            <h3 className='mb-6 font-bold text-2xl md:text-3xl text-black dark:text-white mb-1 tracking-tight decoration-4 dark:decoration-gray-400 decoration-gray-600 underline underline-offset-[6px]'>
              En la Web
            </h3>
            <ul>
              <li>
                <Link href='https://github.com/CatBoxy'>
                  <a className='text-gray-600 dark:text-gray-400 flex flex-row ml-[-0.75rem] py-6 px-3 h-8 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all' target="_blank">
                    <BsGithub className="mr-4"/>
                    @CatBoxy
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://www.linkedin.com/in/jclambrechts/'>
                  <a className='text-gray-600 dark:text-gray-400 flex flex-row ml-[-0.75rem] py-6 px-3 h-8 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all' target="_blank">
                    <BsLinkedin className="mr-4"/>
                    @jclambrechts
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://twitter.com/Esporadix1'>
                  <a className='text-gray-600 dark:text-gray-400 flex flex-row ml-[-0.75rem] py-6 px-3 h-8 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all' target="_blank">
                    <BsTwitter className="mr-4"/>
                    @Esporadix1
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
