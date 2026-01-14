import React from 'react';
import { Article } from '../types';
import { Feather } from 'lucide-react';

interface Props {
  article: Article;
}

const ArticleColumn: React.FC<Props> = ({ article }) => {
  return (
    <div className="flex flex-col h-full group cursor-pointer">
      {/* Decorative Header */}
      <div className="relative mb-4 pt-1 flex-shrink-0">
        <div className="flex flex-col text-brand-orange font-extrabold uppercase italic leading-none relative z-10" style={{ fontFamily: 'Arial, sans-serif' }}>
          <span className="text-[19px] tracking-wide">РЕДАКЦИОННАЯ</span>
          <span className="text-[19px] tracking-wide ml-12">КОЛОНКА</span>
        </div>
        <div className="absolute top-0 right-0 text-blue-900 opacity-80 transform -rotate-12">
             <Feather size={42} strokeWidth={1.5} />
        </div>
        <div className="w-full h-2 mt-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA0cTEwLTQgMjAgMHQyMCAwaDIwIiBzdHJva2U9IiNEMzU0MDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      <div className="aspect-[3/2] overflow-hidden mb-4 relative flex-shrink-0">
        <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      
      {/* Title */}
      <h2 
        className="text-gray-900 mb-3 group-hover:text-brand-orange transition-colors flex-shrink-0"
        style={{
          fontWeight: 600,
          fontSize: '19px',
          lineHeight: '25px',
          fontStyle: 'normal'
        }}
      >
          {article.title}
      </h2>
      
      {/* Content grows to push button down */}
      <p className="text-gray-600 leading-relaxed mb-6 flex-grow" style={{ fontSize: '17px' }}>
          {article.excerpt}
      </p>

      <div className="mt-auto flex-shrink-0">
        <button className="bg-brand-orange text-white px-5 py-2 text-[13px] font-bold rounded shadow hover:bg-orange-700 transition-colors">
            Читать далее
        </button>
      </div>
    </div>
  );
};

export default ArticleColumn;