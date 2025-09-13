import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-brand-secondary rounded-full text-brand-dark">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-brand-dark">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const phone = t('phoneDetail');
    const email = t('emailDetail');

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-center text-brand-dark mb-12">
                {t('getInTouch')}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold font-serif text-brand-dark mb-6">{t('visitUs')}</h2>
                    <div className="space-y-6">
                        <ContactInfoItem icon={<LocationIcon />} title={t('address')}>
                            <p>{t('addressDetail')}</p>
                        </ContactInfoItem>
                        <ContactInfoItem icon={<PhoneIcon />} title={t('callUs')}>
                            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-brand-primary transition-colors">{phone}</a>
                        </ContactInfoItem>
                        <ContactInfoItem icon={<MailIcon />} title={t('emailUs')}>
                            <a href={`mailto:${email}`} className="hover:text-brand-primary transition-colors">{email}</a>
                        </ContactInfoItem>
                        <ContactInfoItem icon={<ClockIcon />} title={t('openingHours')}>
                            <p>{t('hoursDetail')}</p>
                        </ContactInfoItem>
                    </div>
                </div>

                <div className="rounded-lg shadow-xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.444795292418!2d-87.12159772494911!3d12.630124991100318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f70f13666fdfb2d%3A0x1fb73700e6e01f28!2sDonde%20Nando%20Grill!5e0!3m2!1sen!2sus!4v1718826620138!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Donde Nando Grill Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;