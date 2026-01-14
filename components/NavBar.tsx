import React from 'react';
import { MENU_ITEMS } from '../constants';

const NavBar: React.FC = () => {
  return (
    <div className="w-full bg-[#f8f9fa] border-b border-gray-200 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Using justify-between to match the spread in typical news headers, or justify-start/center depending on exact width need */}
        <nav className="flex items-center justify-between lg:justify-between overflow-x-auto no-scrollbar gap-6">
          {MENU_ITEMS.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="whitespace-nowrap text-brand-dark hover:text-brand-orange transition-colors"
              style={{
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '42px',
                fontStyle: 'normal'
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;