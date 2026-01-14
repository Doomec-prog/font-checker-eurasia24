import React, { useState } from 'react';
import { Type, X } from 'lucide-react';
import { FONT_OPTIONS } from '../constants';
import { FontOption } from '../types';

interface FontSwitcherProps {
  currentFont: string;
  onFontChange: (font: string) => void;
}

const FontSwitcher: React.FC<FontSwitcherProps> = ({ currentFont, onFontChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 w-64 mb-2 animate-in slide-in-from-bottom-5 fade-in duration-200">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
            <h3 className="text-sm font-bold text-gray-500 uppercase">Выберите шрифт</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {FONT_OPTIONS.map((font) => (
              <button
                key={font.name}
                onClick={() => onFontChange(font.value)}
                className={`text-left px-3 py-2 rounded-md transition-all text-sm flex justify-between items-center group
                  ${currentFont === font.value 
                    ? 'bg-brand-orange text-white' 
                    : 'hover:bg-gray-100 text-gray-800'
                  }`}
                style={{ fontFamily: font.value }}
              >
                <span>{font.name}</span>
                <span className={`text-[10px] uppercase opacity-60 ${currentFont === font.value ? 'text-white' : 'text-gray-400'}`}>
                    {font.type}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-brand-orange text-white rounded-full shadow-lg hover:bg-orange-700 hover:scale-105 transition-all flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-200"
        title="Change Font"
      >
        {isOpen ? <X size={28} /> : <Type size={28} />}
      </button>
    </div>
  );
};

export default FontSwitcher;