import type { FishingPackage, FishSpecies, GalleryImage } from '@/types';

export const fishSpecies: FishSpecies[] = [
  {
    id: 'yellowfin-tuna',
    name: 'Yellowfin Tuna',
    image: '/fish-yellowfin-tuna.png',
    location: 'Offshore'
  },
  {
    id: 'skipjack-tuna',
    name: 'Skipjack Tuna',
    image: '/fish-skipjack-tuna.png',
    location: 'Offshore'
  },
  {
    id: 'dorado',
    name: 'Dorado',
    image: '/fish-dorado.png',
    location: 'Offshore'
  },
  {
    id: 'broadbill',
    name: 'Broadbill',
    image: '/fish-broadbill.png',
    location: 'Offshore'
  },
  {
    id: 'yellowtail',
    name: 'Yellowtail',
    image: '/fish-yellowtail.png',
    location: 'Offshore'
  },
  {
    id: 'snoek',
    name: 'Snoek',
    image: '/fish-snoek.png',
    location: 'Offshore'
  },
  {
    id: 'bonito',
    name: 'Bonito',
    image: '/fish-bonito.png',
    location: 'Offshore'
  }
];

export const fishingPackages: FishingPackage[] = [
  {
    id: 'half-day',
    name: 'Half Day Fishing',
    duration: '5 hours',
    hours: '5 hours',
    description: 'Quick offshore escape',
    features: [
      'Seasonal offshore species',
      'Ideal for first timers & visitors'
    ],
    boatName: 'Naema',
    guestRange: '1-3 guests',
    image: '/package-halfday.jpg',
    included: [
      'Rods, reels, tackle',
      'Skipper + crew',
      'Safety equipment'
    ],
    notIncluded: [
      'Transport to harbour',
      'Food & drinks',
      'Fishing permits'
    ],
    targetSpecies: [
      fishSpecies[4], // Yellowtail
      fishSpecies[5], // Snoek
      fishSpecies[6]  // Bonito
    ],
    price: 4500
  },
  {
    id: 'full-day',
    name: 'Full Day Fishing',
    duration: '8-9 hours',
    hours: '8-9 hours',
    description: 'The complete Cape Town experience',
    features: [
      'Tuna, billfish & more',
      'Best balance of time & action'
    ],
    boatName: 'Pikkewyn',
    guestRange: '3-6 guests',
    image: '/package-fullday.jpg',
    included: [
      'Rods, reels, tackle',
      'Skipper + crew',
      'Safety equipment'
    ],
    notIncluded: [
      'Transport to harbour',
      'Food & drinks',
      'Fishing permits'
    ],
    targetSpecies: [
      fishSpecies[0], // Yellowfin Tuna
      fishSpecies[1], // Skipjack Tuna
      fishSpecies[2]  // Dorado
    ],
    price: 9500
  },
  {
    id: 'overnight',
    name: 'Overnight Fishing',
    duration: '24 hours',
    hours: '24 hours',
    description: 'Fish under the stars',
    features: [
      'Sleep onboard',
      'Big game focus'
    ],
    boatName: 'Collie',
    guestRange: '7+ guests',
    image: '/package-overnight.jpg',
    included: [
      'Rods, reels, tackle',
      'Skipper + crew',
      'Safety equipment'
    ],
    notIncluded: [
      'Transport to harbour',
      'Food & drinks',
      'Fishing permits'
    ],
    targetSpecies: [
      fishSpecies[0], // Yellowfin Tuna
      fishSpecies[3], // Broadbill
      fishSpecies[2]  // Dorado
    ],
    price: 18500
  }
];

export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/gallery/gallery_1.jpg', alt: 'Fishing catch', span: 'col-span-1 row-span-1' },
  { id: '2', src: '/gallery/gallery_2.jpg', alt: 'Happy fisherman', span: 'col-span-1 row-span-1' },
  { id: '3', src: '/gallery/gallery_3.jpg', alt: 'Red fish catch', span: 'col-span-1 row-span-1' },
  { id: '4', src: '/gallery/gallery_4.jpg', alt: 'Big catch', span: 'col-span-1 row-span-2' },
  { id: '5', src: '/gallery/gallery_5.jpg', alt: 'Group fishing', span: 'col-span-1 row-span-1' },
  { id: '6', src: '/gallery/gallery_6.jpg', alt: 'Two fishermen', span: 'col-span-1 row-span-1' },
  { id: '7', src: '/gallery/gallery_7.jpg', alt: 'Red fish', span: 'col-span-1 row-span-1' },
  { id: '8', src: '/gallery/gallery_8.jpg', alt: 'Yellowtail catch', span: 'col-span-1 row-span-1' },
  { id: '9', src: '/gallery/gallery_9.jpg', alt: 'Big fish', span: 'col-span-1 row-span-2' },
  { id: '10', src: '/gallery/gallery_10.jpg', alt: 'Team fishing', span: 'col-span-1 row-span-1' },
  { id: '11', src: '/gallery/gallery_11.jpg', alt: 'Red snapper', span: 'col-span-1 row-span-1' },
  { id: '12', src: '/gallery/gallery_12.jpg', alt: 'Marlin catch', span: 'col-span-2 row-span-1' },
];
