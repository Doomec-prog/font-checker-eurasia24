import React, { useState } from 'react';
import TopHeader from './components/TopHeader';
import NavBar from './components/NavBar';
import FontSwitcher from './components/FontSwitcher';
import ArticleColumn from './components/ArticleColumn';
import MainStory from './components/MainStory';
import Sidebar from './components/Sidebar';
import { FONT_OPTIONS, MAIN_ARTICLE, EDITORIAL_ARTICLE, SIDEBAR_NEWS } from './constants';

const App: React.FC = () => {
  // Default font: Source Serif 4 as seen in headings usually, or Inter for body.
  const [currentFont, setCurrentFont] = useState(FONT_OPTIONS[1].value);

  return (
    <div 
      className="min-h-screen bg-white transition-all duration-300 ease-in-out"
      style={{ fontFamily: currentFont }}
    >
      <TopHeader />
      <NavBar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Editorial */}
          <div className="lg:col-span-3 order-2 lg:order-1 h-full">
            <ArticleColumn article={EDITORIAL_ARTICLE} />
          </div>

          {/* Center Column: Main Story */}
          <div className="lg:col-span-6 order-1 lg:order-2 border-r-0 lg:border-r border-gray-100 pr-0 lg:pr-8 h-full">
            <MainStory article={MAIN_ARTICLE} />
          </div>

          {/* Right Column: News Feed */}
          <div className="lg:col-span-3 order-3 border-l-0 lg:border-l border-gray-100 pl-0 lg:pl-8 h-full">
            <Sidebar news={SIDEBAR_NEWS} />
          </div>

        </div>
      </main>

      {/* Footer Decoration (Simple) */}
      <div className="mt-12 py-8 bg-brand-gray border-t border-gray-200 text-center text-gray-400 text-sm">
        <p>&copy; 2026 ЕВРАЗИЯ24. Все права защищены.</p>
      </div>

      {/* Floating Font Switcher */}
      <FontSwitcher currentFont={currentFont} onFontChange={setCurrentFont} />
    </div>
  );
};

export default App;