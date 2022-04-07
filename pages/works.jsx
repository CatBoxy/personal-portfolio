import React from 'react';
import { Layout } from '../components/Layout';
import WorkItem from '../components/workItem';

export default function works(props) {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col items-start w-full justify-between">
            <div className="flex flex-col pr-8">
              <h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white mb-1 tracking-tight'>
                Works
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Feel free to browse through my projects.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
              <WorkItem/>
              <WorkItem/>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
