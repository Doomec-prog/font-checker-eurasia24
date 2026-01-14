import React from 'react';
import { Facebook, Instagram, Send, Youtube, Video, Menu, Search, CloudSun } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <div className="w-full bg-white pt-3 pb-5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative">
        
        {/* Left: Socials & Menu */}
        <div className="flex items-center gap-8 w-full md:w-1/3 justify-center md:justify-start">
          <div className="flex gap-2">
            {[Facebook, Instagram, Send, 'TikTok', Youtube, Video].map((Icon, idx) => (
               <button key={idx} className="w-[30px] h-[30px] flex items-center justify-center border border-gray-200 rounded-[4px] hover:bg-gray-50 transition-colors text-gray-600">
                {typeof Icon === 'string' ? (
                   <span className="text-[8px] font-bold">tik</span>
                ) : (
                  <Icon size={14} strokeWidth={2} />
                )}
              </button>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center gap-2 cursor-pointer text-brand-dark group">
            <span className="font-bold tracking-widest text-[13px] group-hover:text-brand-orange transition-colors">МЕНЮ</span>
            <Menu size={20} className="text-gray-800 group-hover:text-brand-orange transition-colors" />
          </div>
        </div>

        {/* Center: Logo */}
        {/* The screenshot shows 'ЕВРАЗИЯ' in a heavy condensed font, '24' somewhat overlapping or stylistic */}
        <div className="w-full md:w-1/3 flex justify-center mt-2 md:mt-0">
            <div className="flex items-baseline select-none">
                <span className="text-5xl font-black tracking-tighter text-black" style={{fontFamily: 'Arial, sans-serif', transform: 'scaleY(1.1)'}}>
                    ЕВРАЗИЯ
                </span>
                <span className="text-5xl font-black italic text-brand-orange -ml-1" style={{fontFamily: 'Arial, sans-serif', transform: 'scaleY(1.1)'}}>
                    24
                </span>
            </div>
        </div>

        {/* Right: Tools */}
        <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end gap-6 text-sm font-bold text-brand-dark">
            <div className="flex items-center gap-2 cursor-pointer hover:text-brand-orange transition-colors">
                <span className="uppercase text-[13px] tracking-wide">ПОИСК</span>
                <Search size={16} strokeWidth={2.5} />
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[15px]">-3°C</span>
                <CloudSun size={20} className="text-blue-300 fill-current" />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#D35400] flex items-center justify-center text-white font-bold text-[11px] border-2 border-[#A04000] shadow-sm cursor-pointer hover:bg-[#A04000] transition-colors">
                QAZ
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;