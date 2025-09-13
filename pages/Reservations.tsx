import React, { useState } from 'react';
import type { ReservationDetails } from '../types';
import { useLanguage } from '../context/LanguageContext';

const SuccessIcon = () => (
  <svg className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Reservations: React.FC = () => {
  const { t } = useLanguage();
  const initialFormState = {
    name: '',
    phone: '',
    partySize: '1',
    date: '',
    time: ''
  };
  const [formData, setFormData] = useState<ReservationDetails>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.date && formData.time) {
      setLoading(true);
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoading(false);
      setSubmitted(true);
    } else {
      alert('Please fill out all required fields.');
    }
  };
  
  const handleNewReservation = () => {
    setFormData(initialFormState);
    setSubmitted(false);
  }

  if (submitted) {
    return (
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl text-center">
            <SuccessIcon />
            <h1 className="text-3xl font-bold font-serif text-center text-brand-dark mt-4 mb-2">{t('reservationSuccessTitle')}</h1>
            <p className="text-gray-600 mb-8">
                {t('reservationSuccessMessage')
                    .replace('{name}', formData.name)
                    .replace('{partySize}', formData.partySize)
                    .replace('{date}', new Date(formData.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }))
                    .replace('{time}', formData.time)}
            </p>
            <button
                onClick={handleNewReservation}
                className="bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-accent transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
                {/* FIX: The `t` function only accepts one argument, the key. The second argument was removed. */}
                {t('makeAnotherReservation')}
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold font-serif text-center text-brand-dark mb-4">{t('bookYourTable')}</h1>
        <p className="text-center text-gray-600 mb-8">{t('reservationIntro')}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('name')}</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('phone')}</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="partySize" className="block text-sm font-medium text-gray-700">{t('partySize')}</label>
              <select
                name="partySize"
                id="partySize"
                value={formData.partySize}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              >
                {[...Array(10).keys()].map(n => <option key={n + 1} value={n + 1}>{n + 1}</option>)}
              </select>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">{t('date')}</label>
              <input
                type="date"
                name="date"
                id="date"
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">{t('time')}</label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-accent transition-all duration-300 shadow-lg disabled:bg-opacity-75 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : t('submitReservation')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservations;