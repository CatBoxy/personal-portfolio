import { Menu, Transition } from '@headlessui/react';
import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import useTranslation from '../hooks/useTranslation';
import BurgerIcon from './burgerIcon';


export default function HiddenMenu() {
  const t = useTranslation();
  return (
    <>
      <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          <Menu.Button className="visible md:hidden border-0 bg-transparent w-[40px] h-[40px] relative ">
            <BurgerIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="dark:bg-gray-600 bg-gray-200 origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <MyLink href="/" active={active}>
                    {t["Home"]}
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MyLink href="/works" active={active}>
                    {t["Projects"]}
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MyLink href="/blog" active={active}>
                    {t["Blog"]}
                  </MyLink>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

// Integration of headlessui + nextjs Link component

function MyLink(props) {
  const { href, children, active, ...rest } = props;
  return (
    <Link href={href} passHref>
      <button className='flex flex-col w-full'>
        <a className={cn(
          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
          'text-gray-800 dark:text-gray-200 block px-4 py-2 text-sm'
        )} {...rest}>{children}</a>
      </button>
    </Link>
  );
}