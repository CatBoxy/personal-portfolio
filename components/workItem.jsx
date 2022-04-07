import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mainAvatar from '../public/MainAvatar.jpg';

export default function WorkItem({ title, image, href, children }) {
  return (
    <>
      <div className='w-full '>
        <Link href={'href'} >
          <a>
            <div className='flex flex-col items-center w-full'>
              <div className='w-full rounded-lg block'>
                <Image src={mainAvatar} alt="image" layout='responsive' className='rounded-lg'/>
              </div>
              <h2>{title}</h2>
              <p>{children}</p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
