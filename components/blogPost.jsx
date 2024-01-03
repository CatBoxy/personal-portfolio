import React from 'react';
import Link from 'next/link';

import useTranslation from '../hooks/useTranslation';

export default function BlogPost({
  title,
  slug,
  category,
  // publishedAt,
  readingTime,
  description,
  language
}) {
  const t = useTranslation();
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a className='w-full'>
          <div className="w-full mb-8">
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                {title}
              </h4>
              <p className="w-36 mb-4 text-left text-gray-500 md:text-right md:mb-0">
                {`${Math.round(readingTime.minutes)} ${t["min read time"]}`}
              </p>
            </div>
            <p>{category} - {t[language]}</p>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </a>
      </Link>
    </>
  );
}
