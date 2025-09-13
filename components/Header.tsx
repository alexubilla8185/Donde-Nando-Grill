
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-lg transition-colors duration-300 text-lg ${
      isActive
        ? 'bg-brand-primary text-white'
        : 'text-brand-dark hover:bg-brand-secondary hover:text-brand-dark'
    }`;
    
  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 text-lg rounded-md transition-colors duration-300 ${
      isActive 
        ? 'bg-brand-primary text-white' 
        : 'text-brand-dark hover:bg-brand-secondary'
    }`;

  return (
    <header className="bg-brand-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-bold font-serif text-brand-primary">
            Donde Nando Grill
          </NavLink>
          
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={navLinkClass}>{t('home')}</NavLink>
            <NavLink to="/menu" className={navLinkClass}>{t('menu')}</NavLink>
            <NavLink to="/reservations" className={navLinkClass}>{t('reservations')}</NavLink>
            <NavLink to="/contact" className={navLinkClass}>{t('contact')}</NavLink>
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleLanguage}
              className="py-2 px-4 rounded-lg bg-brand-accent text-white font-bold hover:bg-opacity-80 transition-all"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-dark focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-brand-light pb-4 px-4 space-y-2">
          <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('home')}</NavLink>
          <NavLink to="/menu" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('menu')}</NavLink>
          <NavLink to="/reservations" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('reservations')}</NavLink>
          <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('contact')}</NavLink>
           <button
              onClick={() => {toggleLanguage(); setIsMenuOpen(false);}}
              className="w-full text-left py-2 px-4 rounded-md bg-brand-accent text-white font-bold hover:bg-opacity-80 transition-all"
            >
              {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            </button>
        </div>
      )}
    </header>
  );
};

export default Header;
