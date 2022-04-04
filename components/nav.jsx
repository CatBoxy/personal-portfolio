import React from 'react';
import HiddenMenu from './hiddenMenu';
import NavItem from './navItem';
import ThemeButton from './themeButton';

export const Nav = () => (
  <>
    <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16 ">
      <div>
        <HiddenMenu/>
        <NavItem href="/" text="Home"/>
        <NavItem href="/works" text="Works"/>
        <NavItem href="/blog" text="Blog"/>
      </div>

      <ThemeButton/>
    </nav>
  </>
);
