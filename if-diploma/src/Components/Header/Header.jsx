import React from 'react';
import Logo from './Logo';

import './index.css';

import NavLeft from '../Navigation/NavLeft';
import NavRight from '../Navigation/NavRight';

export default function Header() {
  return (
    <>
      <header className='header'>
        <NavLeft />
        <Logo />
        <NavRight />
      </header>
    </>
  );
}
