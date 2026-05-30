import { Vehicle, Service, Testimonial, Destination } from "./types";

export const SERVICES: Service[] = [
  {
    id: "airport-transfers",
    title: "Airport Pickup & Drop",
    description: "Punctual, worry-free premium taxi service with meet-and-greet to/from Kochi, Kozhikode, and Trivandrum Airports.",
    iconName: "PlaneTakeoff",
    badge: "24/7 Service"
  },
  {
    id: "local-taxi",
    title: "Local Taxi Service",
    description: "Hourly and day cab hires for errands, shopping, local visits, and events inside Kozhikode and nearby cities.",
    iconName: "Navigation",
  },
  {
    id: "outstation-taxi",
    title: "Outstation Taxi",
    description: "Inter-state & regional sightseeing travels with highly expert professional drivers familiar with national highways.",
    iconName: "Compass",
    badge: "Popular"
  },
  {
    id: "kerala-tours",
    title: "Kerala Tour Packages",
    description: "Fully customized honeymoon, budget, and family holiday tour packages highlighting Munnar, Alleppey, and Thekkady.",
    iconName: "Map",
    badge: "Best Seller"
  },
  {
    id: "family-trips",
    title: "Family Vacation Travel",
    description: "Extremely safe, secure, and spacious multi-passenger vehicle options custom curated for family groups with children.",
    iconName: "Users",
  },
  {
    id: "railway-transfers",
    title: "Railway Station Transfers",
    description: "Quick, dependable transfers to and from key regional rail stations like Kozhikode, Shoranur, and Ernakulam.",
    iconName: "Train",
  },
  {
    id: "corporate-travel",
    title: "Corporate & Business Travel",
    description: "Executive cab fleets and monthly corporate arrangements, complete with proper GST invoices and credit billing.",
    iconName: "Briefcase",
  },
  {
    id: "hotel-transfers",
    title: "Hotel Transfers",
    description: "Seamless, pleasant point-to-point transfers between local homestays, luxury resorts, and boutique stays across Kerala.",
    iconName: "Building2",
  },
  {
    id: "one-way-taxi",
    title: "One Way Taxi",
    description: "Economical, pure one-way transfers to any destination in South India – pay only for the distance you actually travel.",
    iconName: "ArrowRight",
  },
  {
    id: "round-trip-taxi",
    title: "Round Trip Taxi",
    description: "Full-day or multi-day return rentals with generous mileage allowances and zero hidden driver beta surcharges.",
    iconName: "Shuffle",
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: "hatchback",
    name: "Luxury Hatchback (WagonR / Tiago)",
    category: "Hatchback",
    capacity: "4 Passengers",
    luggage: "2 Small Bags",
    features: ["Fully Air Conditioned", "Affordable Hourly Rates", "Highly Compact for City Traffic", "Music System USB/Bluetooth"],
    imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80",
    baseRateEstimate: "₹12/km"
  },
  {
    id: "sedan",
    name: "Premium Sedan (Swift Dzire / Etios)",
    category: "Sedan",
    capacity: "4 Passengers",
    luggage: "2 Large Bags + 1 Small",
    features: ["Spacious Boot Space", "High Comfort Suspension", "Air Conditioning", "USB Charger & Mobile Mount"],
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
    baseRateEstimate: "₹14/km"
  },
  {
    id: "suv",
    name: "Family SUV (Ertiga / Bolero Neo)",
    category: "SUV",
    capacity: "6 Passengers",
    luggage: "3 Medium Bags",
    features: ["Ample Dual AC Vents", "Flexible Foldable Cargo Seats", "Great Elevated Highway Vision", "Bottle Holders & Reading Lamps"],
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    baseRateEstimate: "₹17/km"
  },
  {
    id: "innova",
    name: "Standard Innova",
    category: "Innova",
    capacity: "7 Passengers",
    luggage: "4 Large Bags",
    features: ["Plush Captain Seating", "Roof Mounted Rear AC Control", "Excellent Long-Distance Ride Comfort", "Charging Sockets in Cabin"],
    imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80",
    baseRateEstimate: "₹19/km"
  },
  {
    id: "innova_crysta",
    name: "Royal Innova Crysta",
    category: "Innova Crysta",
    capacity: "7 Passengers",
    luggage: "5 Large Bags",
    features: ["Ultimate Luxury Legroom", "Whisper-Quiet Premium NVH Cabin", "Multi-Zone Automatic AC", "Advanced Safety Airbags", "Experienced VIP Driver Desk"],
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
    baseRateEstimate: "₹22/km"
  },
  {
    id: "tempo_traveller",
    name: "Tempo Traveller (12/17 Seater)",
    category: "Tempo Traveller",
    capacity: "12 - 17 Passengers",
    luggage: "Dedicated Huge Roof Carrier",
    features: ["High-Roof Standing Cabin Space", "Individual Luxury Push-Back Seats", "LED TV & Premium Music Audio System", "Perfect for Sightseeing/Wedding Groups", "Strong Dual High-Power AC Plant"],
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    baseRateEstimate: "₹26/km"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev1",
    name: "Abida Sayeed",
    rating: 5,
    comment: "Sijju was very helpful and engaging guide cum driver. Very patient and knowledgeable about local places. Car was clean and comfortable. Highly recommended.",
    date: "2 weeks ago"
  },
  {
    id: "rev2",
    name: "Praveen Kumar",
    rating: 5,
    comment: "Very friendly driver Shiju. Showed us many beautiful places beyond our expectations. Excellent hotel recommendations too.",
    date: "1 month ago"
  },
  {
    id: "rev3",
    name: "Monika Rajpal",
    rating: 5,
    comment: "Travel experience was very good. Driver was punctual and explained everything about the destinations. Car was neat and clean.",
    date: "1 month ago"
  },
  {
    id: "rev4",
    name: "Anjali K",
    rating: 5,
    comment: "Very good service and neat clean cab. Friendly and kind driver Mr. Shiju.",
    date: "3 months ago"
  },
  {
    id: "rev5",
    name: "Muhammed Shaan",
    rating: 5,
    comment: "Well maintained vehicles. Drivers were friendly and knowledgeable. Great tourist guidance.",
    date: "4 months ago"
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "munnar",
    name: "Munnar",
    tagline: "The Tea Garden Oasis",
    description: "Explore rolling emerald tea estates, mist-enveloped valleys, beautiful waterfalls, and dense forests in Kerala's iconic hill station.",
    distanceFromAirport: "110 km from Kochi Airport (COK)",
    attractions: ["Eravikulam National Park", "Mattupetty Dam", "Anamudi Peak", "Tea Museum"],
    imageUrl: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wayanad",
    name: "Wayanad",
    tagline: "The Tribal Hills & Mist Trails",
    description: "A gorgeous green paradise of cloud-kissed peaks, spice plantations, waterfalls, wildlife sanctuaries, and ancient pre-historic caves.",
    distanceFromAirport: "85 km from Kozhikode Airport (CCJ)",
    attractions: ["Banasura Sagar Dam", "Edakkal Caves", "Chembra Peak", "Pookode Lake"],
    imageUrl: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "vagamon",
    name: "Vagamon",
    tagline: "Pine Valleys & Peaceful Meadows",
    description: "An untouched, serene hill station filled with pine forests, rolling lush green meadows, refreshing tea orchards, and cool refreshing winds.",
    distanceFromAirport: "95 km from Kochi Airport (COK)",
    attractions: ["Kurisumala Ashram", "Vagamon Pine Forest", "Barren Hills", "Vagamon Lake"],
    imageUrl: "https://images.unsplash.com/photo-1627041793310-9154a4f8ccd7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "thekkady",
    name: "Thekkady",
    tagline: "The Spice & Wildlife Sanctuary",
    description: "Surrounded by a majestic lake, Periyar National Park is home to wild herds of mountain elephants, tigers, beautiful birds, and rich spice forests.",
    distanceFromAirport: "140 km from Madurai Airport / 145 km from COK",
    attractions: ["Periyar Boating", "Elephant Junction", "Spice Plantation Tour", "Kathakali Theater"],
    imageUrl: "https://images.unsplash.com/photo-1588591873279-db5928d18471?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "alleppey",
    name: "Alleppey",
    tagline: "The Venice of the East",
    description: "Glide through the vast golden backwaters of Alappuzha on a premium, private luxury houseboat and watch native rural Kerala life drift slow.",
    distanceFromAirport: "78 km from Kochi Airport (COK)",
    attractions: ["Vembanad Lake houseboat cruise", "Alappuzha Beach", "Pathiramanal Island", "Ambalappuzha Temple"],
    imageUrl: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kochi",
    name: "Kochi",
    tagline: "The Queen of the Arabian Sea",
    description: "A historical coastal city where high-tech modern Kerala blends with ancient Portuguese ports, Dutch palaces, and iconic giant Chinese fishing nets.",
    distanceFromAirport: "30 km from Kochi Airport (COK)",
    attractions: ["Fort Kochi Promenade", "Mattancherry Palace", "Marine Drive", "Jewish Synagogue"],
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kozhikode",
    name: "Kozhikode",
    tagline: "The Historic City of Spices",
    description: "The home of legendary Malabar cuisine, stunning beaches like Kozhikode beach, historical ship-building docks, and unparalleled hospitality.",
    distanceFromAirport: "26 km from Kozhikode Airport (CCJ)",
    attractions: ["Kozhikode Beach Sunset Pier", "S.M. Street Halwa Market", "Kappad Beach (Vasco Da Gama Landed)", "Beypore Uru Yard"],
    imageUrl: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "athirappilly",
    name: "Athirappilly",
    tagline: "The Niagara of South India",
    description: "Marvel at Kerala's greatest natural waterfall rushing furiously down rocks inside lush Sholayar tropical rainforest reserves.",
    distanceFromAirport: "35 km from Kochi Airport (COK)",
    attractions: ["Athirappilly Falls Viewpoint", "Vazhachal Waterfalls", "Charpa water drops", "EZhattumugham Nature Village"],
    imageUrl: "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kovalam",
    name: "Kovalam",
    tagline: "The Golden Lighthouse Beach",
    description: "Unwind on gorgeous crescent-shaped sandy beaches backed by dense coconut groves and dominated by an iconic red-and-white striped lighthouse.",
    distanceFromAirport: "15 km from Trivandrum Airport (TRV)",
    attractions: ["Lighthouse Beach", "Hawa Beach", "Samudra Beach", "Halcyon Castle"],
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kumarakom",
    name: "Kumarakom",
    tagline: "The Bird Sanctuary Haven",
    description: "A tranquil paradise of islands on Lake Vembanad, famous for scenic water canals, bird flocks, luxury spa resorts, and extreme quietude.",
    distanceFromAirport: "80 km from Kochi Airport (COK)",
    attractions: ["Kumarakom Bird Sanctuary", "Bay Island Driftwood Museum", "Pathiramanal Island", "Aymanam Village Tours"],
    imageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
  }
];
