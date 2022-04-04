import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { navItems } from '../../data/navData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
const [isOpen,setIsOpen] = useState(false);
  return (
    <header className=' duration-300'>
      <nav className='w-full py-3 shadow-sm  flex items-center  duration-300'>
        <div className='w-10/12 mx-auto flex  lg:items-center flex-col lg:flex-row justify-between duration-500 '>
          <div>
            <h4 className='text-2xl font-medium text-slate-900'>
              Watch review & analytics
            </h4>
          </div>
          <div
            className={`lg:flex  ${isOpen ? 'block' : 'hidden'}  duration-300`}
          >
            {navItems.map((item) => (
              <li className='list-none mx-4 my-4 lg:my-0 ' key={item.id}>
                <CustomLink to={item.path}>{item.navName}</CustomLink>{' '}
              </li>
            ))}
          </div>
        </div>
        <button
          className={`absolute top-5  right-10 lg:hidden `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

export default Header