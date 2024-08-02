// NavLinks.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  CircleStackIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';
// ... (Icons and other imports)
import ThemeIcon from './themeIcon';

interface NavLinksProps {
  theme: string;
  toggleTheme: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ theme, toggleTheme }) => {
  
  const pathname = useLocation().pathname;
  
  const links = [
    { name: 'Home', href: '/home', icon: HomeIcon },
    { name: 'Decks', href: '/decks/1', icon: PresentationChartLineIcon },
    { name: 'Analytics', href: '/analytics', icon: CircleStackIcon },
    
  ];
  
  

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            to={link.href}
            className={`mb-4 flex h-[48px] grow items-center justify-center gap-2 rounded-md  text-sm font-medium hover:bg-gray-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}`}
            key={link.name}
          >
            <LinkIcon className="w-6 md:w-8" />
            <p className="hidden md:block md:text-md">{link.name}</p>
          </Link>
        );
      })}
      <div className='h-[48px] md:hidden mt-1.5'>
        <ThemeIcon theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </>
  );
};

export default NavLinks;
