import React from 'react';

import { Layout } from '../components/layout';
import Section from '../components/section';
import ProjectItem from '../components/projectItem';
import useTranslation from '../hooks/useTranslation';
import denverSanJuan from '../public/projects/DenverSanJuan.jpg';
import inakiLambrechts2 from '../public/projects/inakilambrechts2.png';

export default function Projects() {
  const t = useTranslation();
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight">
                {t['Projects']}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                {t['In this space I share my projects.']}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <Section>
                <ProjectItem
                  image={inakiLambrechts2}
                  title={'Inakilambrechts.com'}
                  slug={'inaki-lambrechts'}
                >
                  {
                    t[
                      'Personal portfolio developed for Iñaki Lambrechts, film director and photographer.'
                    ]
                  }
                </ProjectItem>
              </Section>
              <Section>
                <ProjectItem
                  image={denverSanJuan}
                  title={'Denver San Juan'}
                  slug={'denver-sanjuan'}
                >
                  {
                    t[
                      'Freelance project for local client. Lets the user log in and update currency values manually.'
                    ]
                  }
                </ProjectItem>
              </Section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
