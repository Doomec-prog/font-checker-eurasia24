import React from 'react';
import { Article } from '../types';

interface Props {
  article: Article;
}

const MainStory: React.FC<Props> = ({ article }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden mb-5 group cursor-pointer">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight hover:text-brand-orange cursor-pointer transition-colors">
        {article.title}
      </h1>

      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-sans uppercase tracking-wide">
        {article.author && <span className="font-bold text-gray-500">{article.author}</span>}
        {article.date && <span>{article.date}</span>}
      </div>

      <div className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-6">
        {article.excerpt}
      </div>

      <div className="mt-auto">
        <button className="bg-brand-orange text-white px-8 py-3 text-sm font-bold rounded shadow hover:bg-orange-700 transition-colors uppercase tracking-wide">
            Читать далее
        </button>
      </div>
    </div>
  );
};

export default MainStory;