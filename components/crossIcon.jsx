import React from 'react';
import cn from 'classnames';

export default function CrossIcon(props) {
  const hidden = props.hidden;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          hidden
            ? 'hidden'
            : 'visible',
          'h-5 w-5 absolute text-gray-900 dark:text-gray-100 top-[21%] left-[21%]')}
        fill="none" viewBox="0 0 20 20"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </>
  );
}