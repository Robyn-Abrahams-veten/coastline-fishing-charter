export interface FishingPackage {
  id: string;
  name: string;
  duration: string;
  hours: string;
  description: string;
  features: string[];
  boatName: string;
  guestRange: string;
  image: string;
  included: string[];
  notIncluded: string[];
  targetSpecies: FishSpecies[];
  price?: number;
}

export interface FishSpecies {
  id: string;
  name: string;
  image: string;
  location: string;
}

export interface Boat {
  id: string;
  name: string;
  image: string;
  capacity: number;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: string;
}

export interface BookingDetails {
  packageId: string;
  date: Date;
  adults: number;
  children: number;
  guestName?: string;
  email?: string;
  phone?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}
