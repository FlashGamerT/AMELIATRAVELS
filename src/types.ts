export interface Enquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  pickupLocation: string;
  destination: string;
  travelDate: string;
  passengers: number;
  serviceType: string;
  message?: string;
  status: 'Pending' | 'Contacted' | 'Cancelled';
  timestamp: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: 'Hatchback' | 'Sedan' | 'SUV' | 'Innova' | 'Innova Crysta' | 'Tempo Traveller';
  capacity: string;
  luggage: string;
  features: string[];
  imageUrl: string;
  baseRateEstimate?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Tailwind icon mapping
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  distanceFromAirport: string; // e.g. "85 km from Kochi Airport"
  attractions: string[];
  imageUrl: string;
}
