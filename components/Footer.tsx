import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FacebookIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.002 6.363a4.053 4.053 0 100 8.106 4.053 4.053 0 000-8.106zM12 15.864a3.053 3.053 0 110-6.106 3.053 3.053 0 010 6.106zM16.95 6.518a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" />
  </svg>
);


const Footer: React.FC = () => {
    const { t } = useLanguage();
    const phone = t('phoneDetail');
    const email = t('emailDetail');

    return (
        <footer className="bg-brand-dark text-brand-light mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold font-serif mb-4 text-brand-secondary">Donde Nando Grill</h3>
                        <p className="text-gray-300">{t('addressDetail')}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-serif mb-4 text-brand-secondary">{t('contact')}</h3>
                        <p className="text-gray-300">
                            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-brand-secondary transition-colors">{phone}</a>
                        </p>
                        <p className="text-gray-300">
                            <a href={`mailto:${email}`} className="hover:text-brand-secondary transition-colors">{email}</a>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-serif mb-4 text-brand-secondary">{t('followUs')}</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://www.facebook.com/dondenandogrill" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-secondary transition-colors">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.instagram.com/dondenandogrill" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-secondary transition-colors">
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Donde Nando Grill. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;