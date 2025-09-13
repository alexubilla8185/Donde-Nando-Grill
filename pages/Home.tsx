import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = experienceSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://picsum.photos/seed/restaurant/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/menu" 
              className="bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              {t('viewMenu')}
            </Link>
            <Link 
              to="/reservations" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg"
            >
              {t('makeReservation')}
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        ref={experienceSectionRef}
        className={`py-16 md:py-24 bg-white transition-opacity duration-1000 ${isSectionVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isSectionVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark mb-6">{t('ourExperience')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('experienceText')}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://picsum.photos/seed/cozyplace/600/400" 
                alt="Cozy restaurant atmosphere" 
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;