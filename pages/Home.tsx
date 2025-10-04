import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  { src: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/529774590_1324815312981013_4857808208854531616_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=P0r9yU94apIQ7kNvwH5C1X2&_nc_oc=AdmGFINN3QMubDVJ9gRQecD-v8hocWLlpXaPpvwa2N5phl7ESceKRyl8Rd7WfyiOF2Ax7bpY4QxDBccZ7-Bw8O5x&nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=5BefTdhK-giqvl62jnoeOw&oh=00_AfewR_9Rt7dpvWRbUF3nDENI1THmBJIaEFB9nNIVFOTi2A&oe=68E6504A', alt: 'A delicious-looking dish at Donde Nando Grill' },
  { src: 'https://scontent-mia5-2.xx.fbcdn.net/v/t39.30808-6/556836732_1372056404923570_3662288675131580090_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=714c7a&_nc_ohc=NDKK8FY3wuEQ7kNvwEvlcpP&_nc_oc=Adnbl5uVUZmYFDLD6xxH37Uen2M7l6D8rjTAGzz5jIq915889w3UvBvA-csahWY-nMC0iqRqIAgPiTVKfCrzT-ko&_nc_zt=23&_nc_ht=scontent-mia5-2.xx&_nc_gid=TFluKyLLnOOwqnEjtJG0hw&oh=00_AfeyJqnQsxIPdUnisKyKa8lUqm6LU_M8_Pd2xf5FNdyVGQ&oe=68E65E16', alt: 'A close-up of a grilled meal' },
  { src: 'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/511074636_1280982524030959_7348723620140976164_n.jpg?stp=c0.89.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=vbwH2GziNKsQ7kNvwEhBArW&_nc_oc=Adm_A52cS0yuSfzuSUM9fYbH7y2tYZzMdqduQ6oKhSQH4S3Zei9saX5AGe-uVoyQ5ot_6mjvXuVTadt_SiXGDgsa&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=VJctrIh6W6jGTSrH9MDScA&oh=00_AfcjD6Yi2J65rBZ9EHg4mPbK0iAAP-1pF1DDHomXMeQH9g&oe=68E65E79', alt: 'A gourmet plate served at the restaurant' },
  { src: 'https://scontent-mia3-3.xx.fbcdn.net/v/t39.30808-6/494658380_1265925575536654_2913468142541064937_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BRzBmQttgQgQ7kNvwE_n3bN&_nc_oc=AdnIjjysR_xNAy96LE0fGxbQR8ISCB14hKjWAtlfUnlO9K_7nb-cbzTAfaG0gkNkLLKw62faiUAAzLk1YawGpuDu&_nc_zt=23&_nc_ht=scontent-mia3-3.xx&_nc_gid=wZfrtHPvAe2MmNAkpplNpg&oh=00_AffcMWH1aLXUn2V5HYm8xeQH0p1Mf-JznY1elH4nzN8L2g&oe=68E64118', alt: 'Vibrant food presentation' },
  { src: 'https://scontent-mia3-3.xx.fbcdn.net/v/t39.30808-6/511197255_1280174600778418_754837102922167988_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=1bM84bdIBv0Q7kNvwFx6YaF&_nc_oc=AdkpsazxzYzPCqFKzAZ5NSgldVZb7nTGGPppey-zAYE23Db5-h_kFxnNMMR2Wvl-LCxuvzysx-cCrXIQzKx4MYV-&_nc_zt=23&_nc_ht=scontent-mia3-3.xx&_nc_gid=XVmUp5masMdvqVMTNjmCdg&oh=00_Afd5wgZEfDPR3-YUiyuzGqVMEC8FvqwKZMiOI8NPWk93Xw&oe=68E643FB', alt: 'Another well-prepared dish from the menu' },
  { src: 'https://scontent-mia3-3.xx.fbcdn.net/v/t39.30808-6/509133483_1280198724109339_1985987598013113345_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Kpqn0bhVqhMQ7kNvwEYDiNQ&_nc_oc=Adn65Wa6KZPXnsfozYsk4XPGX8Tj4Fwoke5CY2tO9-8ktYKakx8O1FNCEU_W_plSh4AAb4U3aJpIT3RaA-Sn7X2G&_nc_zt=23&_nc_ht=scontent-mia3-3.xx&_nc_gid=VJctrIh6W6jGTSrH9MDScA&oh=00_AffgviiDdQKJytAYLtpXSxQxzcPzX43lIaxYwx6ubtAocA&oe=68E65DF0', alt: 'A specialty dish from Donde Nando Grill' },
];

const Home: React.FC = () => {
  const { t } = useLanguage();
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const gallerySectionRef = useRef<HTMLDivElement>(null);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  useEffect(() => {
    const experienceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          experienceObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentExperienceRef = experienceSectionRef.current;
    if (currentExperienceRef) {
      experienceObserver.observe(currentExperienceRef);
    }
    
    const galleryObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGalleryVisible(true);
          galleryObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentGalleryRef = gallerySectionRef.current;
    if (currentGalleryRef) {
      galleryObserver.observe(currentGalleryRef);
    }

    return () => {
      if (currentExperienceRef) {
        experienceObserver.unobserve(currentExperienceRef);
      }
      if (currentGalleryRef) {
        galleryObserver.unobserve(currentGalleryRef);
      }
    };
  }, []);


  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-[80vh] bg-cover flex justify-center text-white pt-32 md:pt-40"
        style={{ 
          backgroundImage: "url('https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/494633305_1238804534915425_3821503681427306523_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=yVo0ObQo0CIQ7kNvwFrSTIw&_nc_oc=AdkQV_-Sz5qMzlWPztv2CTiJooqnkBJ1SfF9GxcDRbns4Z9mK0JtLyHtTm4tkRBFKnST2vmTqGbEpjvEljR_82VC&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=8u9XNeGQ6JBb9xa_t9FVpQ&oh=00_AfdDktLxIpxS3jaLFrfL97NT-rum9Ao1KyaqubH1NFcHAg&oe=68E66256')",
          backgroundPosition: 'center center'
        }}
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
      
      {/* Gallery Section */}
      <section 
        ref={gallerySectionRef}
        className={`py-16 md:py-24 bg-brand-secondary transition-opacity duration-1000 ${isGalleryVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center ${isGalleryVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark mb-4">{t('galleryTitle')}</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">{t('gallerySubtitle')}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-square group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;