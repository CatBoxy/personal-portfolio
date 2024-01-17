import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkItem({ title, image, slug, children }) {
  return (
    <>
      <div className="w-full ">
        <Link href={`/projects/${slug}`}>
          <a>
            <div className="flex flex-col items-center w-full">
              <div className="w-full rounded-2xl block">
                <Image
                  src={image}
                  alt="image"
                  layout="responsive"
                  className="rounded-2xl"
                />
              </div>
              <h2 className="text-xl my-2">{title}</h2>
              <p className="text-center text-gray-600 dark:text-gray-400">
                {children}
              </p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
