
export interface MenuItemType {
  id: number;
  category: 'appetizers' | 'mains' | 'desserts' | 'drinks';
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  price: string;
  imageUrl: string;
}

export interface ReservationDetails {
  name: string;
  phone: string;
  partySize: string;
  date: string;
  time: string;
}
