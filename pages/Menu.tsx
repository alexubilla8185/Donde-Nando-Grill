import React, { useState } from 'react';
import { menuItems } from '../constants';
import type { MenuItemType } from '../types';
import { useLanguage } from '../context/LanguageContext';

const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => {
  const { language } = useLanguage();
  let imageUrl = item.imageUrl;

  if (imageUrl === 'COMING_SOON') {
    const text = language === 'es' ? 'Próximamente' : 'Coming+Soon';
    imageUrl = `https://placehold.co/400x300/E5E7EB/1F2937/png?text=${text}`;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <img src={imageUrl} alt={item.name[language]} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-serif text-brand-dark mb-2">{item.name[language]}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{item.description[language]}</p>
        <p className="text-lg font-bold text-brand-primary mt-auto">{item.price}</p>
      </div>
    </div>
  );
};

const Menu: React.FC = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<'all' | MenuItemType['category']>('all');

  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

  const categories: ('all' | MenuItemType['category'])[] = ['all', 'appetizers', 'mains', 'desserts', 'drinks'];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold font-serif text-center text-brand-dark mb-12">
        {t('ourMenu')}
      </h1>
      
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              filter === category 
                ? 'bg-brand-primary text-white shadow-md' 
                : 'bg-white text-brand-dark hover:bg-brand-secondary'
            }`}
          >
            {t(category)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;