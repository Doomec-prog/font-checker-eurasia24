import React from 'react';
import { NewsItem } from '../types';

interface Props {
  news: NewsItem[];
}

const Sidebar: React.FC<Props> = ({ news }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-black text-white px-4 py-2 text-[13px] font-bold uppercase w-fit mb-[2px]">
        Новости
      </div>

      <div className="border-t-[3px] border-black mb-4 w-full"></div>

      <div className="flex flex-col gap-0">
        {news.map((item) => (
          <div key={item.id} className="py-3 border-b border-gray-100 group cursor-pointer flex gap-3 items-start">
            <div className="mt-[6px] w-[6px] h-[6px] rounded-full bg-gray-300 flex-shrink-0 group-hover:bg-brand-orange transition-colors"></div>
            <h3 className="text-[15px] font-medium leading-[1.35] text-gray-900 group-hover:text-brand-orange transition-colors font-serif">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <button className="w-full border border-gray-300 text-gray-500 hover:text-brand-orange hover:border-brand-orange py-2 px-4 text-[13px] transition-colors bg-white">
          Загрузить больше &gt;
        </button>
      </div>
    </div>
  );
};

export default Sidebar;