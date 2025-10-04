import type { MenuItemType } from './types';

export const menuItems: MenuItemType[] = [
  {
    id: 1,
    category: 'appetizers',
    name: { es: 'Tostones con Queso Frito', en: 'Tostones with Fried Cheese' },
    description: { es: 'Plátanos verdes fritos servidos con queso frito y ensalada de repollo.', en: 'Fried green plantains served with fried cheese and cabbage salad.' },
    price: 'C$120',
    imageUrl: 'https://picsum.photos/seed/tostones/400/300'
  },
  {
    id: 2,
    category: 'appetizers',
    name: { es: 'Chorizo Criollo a la Parrilla', en: 'Grilled Creole Chorizo' },
    description: { es: 'Chorizo casero a la parrilla con tortilla y pico de gallo.', en: 'Grilled homemade chorizo with tortilla and pico de gallo.' },
    price: 'C$150',
    imageUrl: 'https://picsum.photos/seed/chorizo/400/300'
  },
  {
    id: 3,
    category: 'mains',
    name: { es: 'Churrasco Nando', en: 'Nando\'s Churrasco Steak' },
    description: { es: 'Tierno corte de res a la parrilla, acompañado de gallo pinto, plátano frito y ensalada.', en: 'Tender grilled beef cut, served with gallo pinto, fried plantain, and salad.' },
    price: 'C$350',
    imageUrl: 'https://picsum.photos/seed/churrasco/400/300'
  },
  {
    id: 4,
    category: 'mains',
    name: { es: 'Pollo a la Plancha', en: 'Grilled Chicken Breast' },
    description: { es: 'Pechuga de pollo marinada y asada a la perfección, servida con vegetales salteados.', en: 'Marinated and perfectly grilled chicken breast, served with sautéed vegetables.' },
    price: 'C$280',
    imageUrl: 'https://picsum.photos/seed/pollo/400/300'
  },
   {
    id: 5,
    category: 'mains',
    name: { es: 'Pescado Frito Entero', en: 'Whole Fried Fish' },
    description: { es: 'Pargo rojo frito al estilo local, con tostones y ensalada fresca.', en: 'Local style fried red snapper, with tostones and fresh salad.' },
    price: 'C$320',
    imageUrl: 'https://picsum.photos/seed/pescado/400/300'
  },
  {
    id: 6,
    category: 'desserts',
    name: { es: 'Tres Leches', en: 'Tres Leches Cake' },
    description: { es: 'Pastel esponjoso bañado en tres tipos de leche, cubierto con merengue.', en: 'Spongy cake soaked in three types of milk, topped with meringue.' },
    price: 'C$90',
    imageUrl: 'https://picsum.photos/seed/tresleches/400/300'
  },
  {
    id: 7,
    category: 'drinks',
    name: { es: 'Limonada con Hierbabuena', en: 'Lemonade with Mint' },
    description: { es: 'Refrescante limonada natural con un toque de hierbabuena fresca.', en: 'Refreshing natural lemonade with a touch of fresh mint.' },
    price: 'C$60',
    imageUrl: 'https://picsum.photos/seed/limonada/400/300'
  },
  {
    id: 8,
    category: 'drinks',
    name: { es: 'Cerveza Nacional Toña', en: 'Toña National Beer' },
    description: { es: 'La cerveza lager más popular de Nicaragua.', en: 'The most popular lager beer from Nicaragua.' },
    price: 'C$50',
    imageUrl: 'https://picsum.photos/seed/tona/400/300'
  }
];

export const translations = {
  // Header
  home: { es: 'Inicio', en: 'Home' },
  menu: { es: 'Menú', en: 'Menu' },
  reservations: { es: 'Reservaciones', en: 'Reservations' },
  contact: { es: 'Contacto', en: 'Contact' },
  // Home Page
  heroTitle: { es: 'Sabor Auténtico, Ambiente Único', en: 'Authentic Flavor, Unique Atmosphere' },
  heroSubtitle: { es: 'Descubre la joya culinaria de Chinandega. Donde cada plato cuenta una historia.', en: 'Discover the culinary gem of Chinandega. Where every dish tells a story.' },
  viewMenu: { es: 'Ver Menú', en: 'View Menu' },
  makeReservation: { es: 'Hacer una Reservación', en: 'Make a Reservation' },
  ourExperience: { es: 'Nuestra Experiencia', en: 'Our Experience' },
  experienceText: { 
    es: 'Donde Nando Grill es el destino perfecto en Chinandega. Disfruta de nuestro ambiente acogedor, moderno y casual, perfecto para grupos y turistas, con música en vivo. Ofrecemos servicio para brunch, almuerzo y cena. Nuestro menú incluye una barra de ensaladas, platos pequeños y opciones veganas/vegetarianas. Para tu comodidad, tenemos asientos al aire libre, un bar completo, accesibilidad para sillas de ruedas (entrada, parqueo, asientos), sillas altas para niños y parqueo gratuito. ¡Ven a disfrutar con nosotros, pide para llevar o a domicilio!', 
    en: 'Donde Nando Grill is the perfect destination in Chinandega. Enjoy our cozy, trendy, and casual atmosphere, perfect for groups and tourists, with live music. We offer service for brunch, lunch, and dinner. Our menu features a salad bar, small plates, and vegan/vegetarian options. For your convenience, we have outdoor seating, a full bar on-site, complete wheelchair accessibility (entrance, parking, seating), high chairs for kids, and free parking. Join us for dine-in, takeout, or delivery!' 
  },
  // Menu Page
  ourMenu: { es: 'Nuestro Menú', en: 'Our Menu' },
  all: { es: 'Todos', en: 'All' },
  appetizers: { es: 'Entradas', en: 'Appetizers' },
  mains: { es: 'Platos Fuertes', en: 'Mains' },
  desserts: { es: 'Postres', en: 'Desserts' },
  drinks: { es: 'Bebidas', en: 'Drinks' },
  // Reservations Page
  bookYourTable: { es: 'Reserva Tu Mesa', en: 'Book Your Table' },
  reservationIntro: { es: 'Asegura tu lugar para una experiencia inolvidable. Completa el formulario a continuación.', en: 'Secure your spot for an unforgettable experience. Fill out the form below.' },
  name: { es: 'Nombre', en: 'Name' },
  phone: { es: 'Teléfono', en: 'Phone' },
  partySize: { es: 'Número de Personas', en: 'Party Size' },
  date: { es: 'Fecha', en: 'Date' },
  time: { es: 'Hora', en: 'Time' },
  submitReservation: { es: 'Enviar Reservación', en: 'Submit Reservation' },
  reservationSuccessTitle: { es: '¡Reservación Enviada!', en: 'Reservation Submitted!' },
  reservationSuccessMessage: { es: 'Gracias, {name}. Hemos recibido tu solicitud para {partySize} persona(s) el {date} a las {time}. Te contactaremos pronto para confirmar.', en: 'Thank you, {name}. We have received your request for {partySize} person(s) on {date} at {time}. We will contact you shortly to confirm.' },
  // FIX: Added 'makeAnotherReservation' translation key. This key was being used in pages/Reservations.tsx without being defined.
  makeAnotherReservation: { es: 'Hacer Otra Reservación', en: 'Make Another Reservation' },
  // Contact Page
  getInTouch: { es: 'Ponte en Contacto', en: 'Get in Touch' },
  visitUs: { es: 'Visítanos', en: 'Visit Us' },
  address: { es: 'Dirección:', en: 'Address:' },
  addressDetail: { es: 'A 700 metros al norte de la Rotonda Los Encuentros, Chinandega, Nicaragua', en: 'A 700 metros al norte de la Rotonda Los Encuentros, Chinandega, Nicaragua' },
  callUs: { es: 'Llámanos', en: 'Call Us' },
  phoneDetail: { es: '+505 8470 9484', en: '+505 8470 9484' },
  emailUs: { es: 'Escríbenos', en: 'Email Us' },
  emailDetail: { es: 'dondenando@gmail.com', en: 'dondenando@gmail.com' },
  openingHours: { es: 'Horario', en: 'Opening Hours' },
  hoursDetail: { es: 'Todos los días desde las 12:00 p.m.', en: 'Every day from 12:00 p.m.' },
  // Gallery
  galleryTitle: { es: 'Un Vistazo a Nando\'s', en: 'A Glimpse of Nando\'s' },
  gallerySubtitle: { es: 'Momentos y sabores capturados en nuestro grill.', en: 'Moments and flavors captured at our grill.' },
  // Footer
  followUs: { es: 'Síguenos', en: 'Follow Us' },
};