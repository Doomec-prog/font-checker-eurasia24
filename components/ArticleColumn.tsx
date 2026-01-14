import React from 'react';
import { Article } from '../types';
import { Feather } from 'lucide-react';

interface Props {
  article: Article;
}

const ArticleColumn: React.FC<Props> = ({ article }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Decorative Header */}
      <div className="relative bg-gray-100 p-3 rounded-sm mb-2 overflow-hidden border-l-4 border-brand-orange">
        <div className="flex items-center gap-2 text-brand-orange font-extrabold uppercase text-lg italic relative z-10 leading-tight">
          <span>РЕДАКЦИОННАЯ</span>
          <br />
          <span className="ml-8">КОЛОНКА</span>
        </div>
         <Feather className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-900 opacity-20 transform -rotate-12" size={48} />
      </div>

      <div className="group cursor-pointer">
        <div className="aspect-[3/2] overflow-hidden mb-4 relative">
            <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
        </div>
        
        {/* Title with specific font requirements */}
        <h2 
          className="text-gray-900 mb-3 group-hover:text-brand-orange transition-colors"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            fontSize: '19px',
            lineHeight: '25px',
            fontStyle: 'normal'
          }}
        >
            {article.title}
        </h2>
        
        <p className="text-gray-600 text-[14px] leading-relaxed mb-4 line-clamp-[10] font-sans">
            {article.excerpt}
        </p>

        <button className="bg-brand-orange text-white px-5 py-2 text-[13px] font-bold rounded shadow hover:bg-orange-700 transition-colors">
            Читать далее
        </button>
      </div>
    </div>
  );
};

export default ArticleColumn;