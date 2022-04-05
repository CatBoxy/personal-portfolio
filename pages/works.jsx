import React from 'react';
import { Layout } from '../components/Layout';

export default function works(props) {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-start w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          This is works page
        </div>
      </Layout>
    </>
  );
}
