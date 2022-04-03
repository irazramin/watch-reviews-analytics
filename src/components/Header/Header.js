import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { navItems } from '../../data/navData';

const Header = () => {

  return (
    <header className=''>
      <nav className='w-full h-[70px] shadow-sm flex items-center justify-end '>
        <div className='flex'>
          {navItems.map((item) => (
            <li className='list-none mx-5 ' key={item.id}>
              <CustomLink to={item.path}>{item.navName}</CustomLink>{' '}
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header