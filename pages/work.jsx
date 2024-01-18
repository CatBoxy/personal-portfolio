import React from 'react';

import { Layout } from '../components/layout';
import Section from '../components/section';
import useTranslation from '../hooks/useTranslation';
import useGlowPointer from '../hooks/useGlowPointer';
import { iconDict } from '../utils/iconDict';

export default function work({ data }) {
  const t = useTranslation();
  const setGlow = useGlowPointer();

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight">
                {t['Work']}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                {t['My work experiences.']}
              </p>
            </div>
            <div className="wrapper">
              <Section>
                {data.map((card, index) => {
                  return (
                    <div key={`${card.company}-${index}`}>
                      <div className="cardContainer">
                        <article
                          className="card article"
                          data-glow
                          style={{
                            '--base': card.base,
                            '--spread': card.spread,
                          }}
                        >
                          {card.outer ? <div data-glow></div> : null}
                          <div className="card__content">
                            <div className="flex flex-row justify-between mb-4 leading-4">
                              <h1 className="font-semibold">{card.company}</h1>
                              <span className="text-gray-600 dark:text-gray-400">
                                {t[card.start]} - {t[card.end]}
                              </span>
                            </div>
                            <span>{t[card.title]}</span>
                            <div className="flex flex-row mt-4 gap-4">
                              {card.techStack.map((tech) => (
                                <div
                                  key={`${card.company}-${tech}`}
                                  className="workIcon"
                                >
                                  {iconDict[tech.toLowerCase()]}
                                </div>
                              ))}
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  );
                })}
              </Section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/work`);
  const data = await res.json();

  return {
    props: { data },
  };
}
