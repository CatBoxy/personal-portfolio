import React from 'react';

import { Layout } from '../components/layout';
import Section from '../components/section';
import WorkItem from '../components/workItem';
import useTranslation from '../hooks/useTranslation';
import alkemyImage from '../public/works/Alkemy.jpg';
import botacuraImage from '../public/works/Botacura.jpg';
import denverSanJuan from '../public/works/DenverSanJuan.jpg';
import basementImage from '../public/works/basement1.png';
import inakiLambrechts2 from '../public/works/inakilambrechts2.png';

export default function works() {
  const t = useTranslation();
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8">
              <h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight'>
                {t["Projects"]}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                {t["In this space I share my projects."]}
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
              <Section>
                <WorkItem image={inakiLambrechts2} title={'Inakilambrechts.com'} slug={'inaki-lambrechts'}>
                  {t["Personal portfolio developed for Iñaki Lambrechts, film director and photographer."]}
                </WorkItem>
              </Section>
              <Section>
                <WorkItem image={denverSanJuan} title={'Denver San Juan'} slug={'denver-sanjuan'}>
                  {t["Freelance project for local client. Lets the user log in and update currency values manually."]}
                </WorkItem>
              </Section>
              {/* <Section>
                <WorkItem image={basementImage} title={'Basement Challenge'} slug={'basement-challenge'}>
                Una marketplace UI que almacena el carrito de compras en local storage. Creado con React.js, chakra-ui y vite.
                </WorkItem>
              </Section>
              <Section>
                <WorkItem image={alkemyImage} title={'Alkemy Challenge'} slug={'alkemy-challenge'}>
                Una carta de opciones gastronómicas online y armado de menu personal. Creado con React.js, Bootstrap y Styled-components.
                </WorkItem>
              </Section>
              <Section delay={0.1}>
                <WorkItem image={botacuraImage} title={'Botacura - Digital House'} slug={'botacura'}>
                App e-commerce de productos de escalada. Proyecto creado dentro del marco del curso Programación Web FullStack de Digital House.
                </WorkItem>
              </Section> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
