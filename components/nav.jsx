import React from 'react';
import HiddenMenu from './hiddenMenu';
import NavItem from './navItem';
import ThemeButton from './themeButton';
import { BsGithub } from 'react-icons/bs';

export const Nav = () => (
  <>
    <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16 ">
      <div className="ml-[-0.60rem]">
        <HiddenMenu/>
        <NavItem href="/" text="Inicio" className="pl-0"/>
        <NavItem href="/works" text="Proyectos"/>
        <NavItem href="/blog" text="Blog"/>
      </div>
      <div className="flex flex-row items-center">
        <a href="https://github.com/CatBoxy/personal-portfolio" target="_blank" rel="noreferrer">
          <button className="mr-6 w-9 h-9 dark:bg-gray-600 bg-gray-200 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
            <BsGithub/>
          </button>
        </a>
        <ThemeButton/>
      </div>
    </nav>
  </>
);
