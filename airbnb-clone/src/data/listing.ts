/**
 * Single source of truth for the listing.
 * Content mirrors the reference page structure at
 * https://airbnb-clone-umber-two.vercel.app
 */

export type Photo = { id: string; src: string; alt: string; caption?: string };
export type Review = {
  id: string;
  name: string;
  avatar: string;
  location?: string;
  timeOnAirbnb: string;
  date: string;
  rating: number;
  body: string;
};
export type AmenityIcon =
  | 'kitchen' | 'wifi' | 'pool' | 'hottub' | 'workspace' | 'parking'
  | 'cameras' | 'petsAllowed' | 'carbonAlarm' | 'smokeAlarm';

export type Amenity = { icon: AmenityIcon; label: string; unavailable?: boolean };


// ← ADD THESE TWO TYPES HERE
export type TourPhoto = { src: string; alt: string; size?: 'wide' };
export type TourSection = {
  id: string;
  label: string;
  amenities: string;
  phtos: TourPhoto[];
};


// -----------------------------------------------------------------------------
// PHOTOS — 20 photos. Replace src with reference UUIDs on the pixel-matching pass.
// -----------------------------------------------------------------------------
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos: Photo[] = [
  { id: 'p01', src: u('1613490493576-7fde63acd811'), alt: 'Bedroom with warm ambient lighting', caption: 'Bedroom' },
  { id: 'p02', src: u('1600585154340-be6161a56a0c'), alt: 'Living room with sofa and chairs', caption: 'Living room' },
  { id: 'p03', src: u('1600607687939-ce8a6c25118c'), alt: 'Dining area with pendant lights', caption: 'Dining' },
  { id: 'p04', src: u('1600566753190-17f0baa2a6c3'), alt: 'Modern bathroom with rain shower', caption: 'Bathroom' },
  { id: 'p05', src: u('1600210492486-724fe5c67fb0'), alt: 'Exterior view of the building', caption: 'Exterior' },
  { id: 'p06', src: u('1560448204-e02f11c3d0e2'), alt: 'Terrace with sunset view', caption: 'Terrace' },
  { id: 'p07', src: u('1580587771525-78b9dba3b914'), alt: 'Cozy reading nook', caption: 'Reading nook' },
  { id: 'p08', src: u('1600607687644-c7171b42498b'), alt: 'Guest bedroom with garden view', caption: 'Guest bedroom' },
  { id: 'p09', src: u('1600585152220-90363fe7e115'), alt: 'Full dining table set for 6', caption: 'Dining table' },
  { id: 'p10', src: u('1502672260266-1c1ef2d93688'), alt: 'Private jacuzzi at night', caption: 'Jacuzzi' },
  { id: 'p11', src: u('1615529182904-14819c35db37'), alt: 'Fireplace lounge with soft seating', caption: 'Lounge' },
  { id: 'p12', src: u('1616047006789-b7af5afb8c20'), alt: 'Home office with bookshelves', caption: 'Office' },
  { id: 'p13', src: u('1616486338812-3dadae4b4ace'), alt: 'Sauna and wellness room', caption: 'Wellness' },
  { id: 'p14', src: u('1618221195710-dd6b41faaea6'), alt: 'Garden path at golden hour', caption: 'Garden' },
  { id: 'p15', src: u('1600607687920-4e2a09cf159d'), alt: 'Rooftop terrace with lounge chairs', caption: 'Rooftop' },
  { id: 'p16', src: u('1600566753051-6057c37fdf95'), alt: 'Second bathroom with rain shower', caption: 'Bathroom 2' },
  { id: 'p17', src: u('1512918728675-ed5a9ecdebfd'), alt: 'View from the balcony', caption: 'Balcony view' },
  { id: 'p18', src: u('1493809842364-78817add7ffb'), alt: 'Kids playroom', caption: 'Playroom' },
  { id: 'p19', src: u('1517840901100-8179e982acb7'), alt: 'Coffee corner with espresso machine', caption: 'Coffee bar' },
  { id: 'p20', src: u('1444201983204-c43cbd584d93'), alt: 'Aerial view of the property', caption: 'Aerial' },
];

export const listing = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  location: { city: 'Candolim', region: 'Goa', country: 'India' },

  // Property type headline (renders where "Entire villa hosted by…" used to)
  propertyType: 'Entire serviced apartment in Candolim, India',
  stats: { guests: 3, bedrooms: 1, beds: 1, baths: 1 },

  rating: {
    overall: 4.95,
    reviewsCount: 19,
    breakdown: {
      Cleanliness: 5.0,
      Accuracy: 5.0,
      'Check-in': 5.0,
      Communication: 5.0,
      Location: 4.8,
      Value: 4.8,
    },
    isGuestFavorite: true,
    percentile: 'Top 5%',
    // NEW: review category pills shown between rating breakdown and reviews grid
    categories: [
      { label: 'Comfort', count: 4 },
      { label: 'Accuracy', count: 4 },
      { label: 'Hot tub', count: 4 },
      { label: 'Condition', count: 3 },
      { label: 'Hospitality', count: 3 },
      { label: 'Cleanliness', count: 3 },
      { label: 'Amenities', count: 3 },
    ],
  },

  host: {
    name: 'Mirashya Homes',
    avatar: 'https://i.pravatar.cc/160?img=32',
    isSuperhost: true,
    yearsHosting: 2,
    rating: 4.68,
    reviewsCount: 1463,
    // NEW: co-hosts
    coHosts: [
      { name: 'Vinesh', avatar: 'https://i.pravatar.cc/80?img=12' },
      { name: 'Aroor De-Gao Rahwe', avatar: 'https://i.pravatar.cc/80?img=15' },
      { name: 'Manasham Priyanka', avatar: 'https://i.pravatar.cc/80?img=20' },
      { name: 'Doraan', avatar: 'https://i.pravatar.cc/80?img=17' },
      { name: 'Rafeel', avatar: 'https://i.pravatar.cc/80?img=19' },
      { name: 'Sangeeta', avatar: 'https://i.pravatar.cc/80?img=44' },
      { name: 'Amrit', avatar: 'https://i.pravatar.cc/80?img=27' },
    ],
    // NEW: response info
    responseRate: 100,
    responseTime: 'within an hour',
    livesIn: 'the 90s',
    schoolAttended: 'NICMAR GOA',
  },

  // NEW: promo above the booking card
  promo: {
    title: 'Get 10% off your next stay',
    subtitle: 'Terms apply',
    cta: 'Claim',
  },

  highlights: [
    {
      icon: 'outdoor', title: 'Outdoor entertainment',
      subtitle: 'The pool and alfresco dining are great for summer trips.'
    },
    {
      icon: 'staycool', title: 'Designed for staying cool',
      subtitle: 'Beat the heat with the A/C and ceiling fan.'
    },
    {
      icon: 'selfcheckin', title: 'Self check-in',
      subtitle: 'You can check in with the building staff.'
    },
  ],

  description: [
    'Plan Your Relaxing Holiday at Amor De-Gao by Mirashya Homes! 🌴 Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind.',
    'Enjoy high-speed WiFi 🛜, smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim beach 🏖️, popular cafes, restaurants, and nightlife. 🌙',
  ],

  sleeping: [
    { room: 'Bedroom', bed: '1 double bed', image: photos[0].src },
    { room: 'Living room', bed: '1 sofa', image: photos[1].src },
  ],

  amenities: [
    { icon: 'kitchen', label: 'Kitchen' },
    { icon: 'wifi', label: 'Wifi' },
    { icon: 'workspace', label: 'Dedicated workspace' },
    { icon: 'parking', label: 'Free parking on premises' },
    { icon: 'pool', label: 'Pool' },
    { icon: 'hottub', label: 'Hot tub' },
    { icon: 'petsAllowed', label: 'Pets allowed' },
    { icon: 'cameras', label: 'Exterior security cameras on property' },
    { icon: 'carbonAlarm', label: 'Carbon monoxide alarm', unavailable: true },
    { icon: 'smokeAlarm', label: 'Smoke alarm' },
  ] as Amenity[],

  totalAmenities: 30,

  // NEW: calendar section
  calendarNights: 5,
  calendarRange: 'Oct 19, 2026 – Oct 23, 2026',

  reviews: [
    {
      id: 'r1', name: 'Amit', location: '4 years on Airbnb', avatar: 'https://i.pravatar.cc/80?img=47', timeOnAirbnb: '4 years on Airbnb', date: '1 week ago', rating: 5,
      body: 'Very helpful and responsive team. Safe and peaceful stay, loved every thing about this property.'
    },
    {
      id: 'r2', name: 'Ahoosh', location: '2 years on Airbnb', avatar: 'https://i.pravatar.cc/80?img=13', timeOnAirbnb: '2 years on Airbnb', date: '1 week ago', rating: 5,
      body: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.'
    },
    {
      id: 'r3', name: 'Sanksha', location: '3 months on Airbnb', avatar: 'https://i.pravatar.cc/80?img=41', timeOnAirbnb: '3 months on Airbnb', date: 'May 2026', rating: 5,
      body: 'The host Ashish was really great help.'
    },
    {
      id: 'r4', name: 'Vedant', location: '4 years on Airbnb', avatar: 'https://i.pravatar.cc/80?img=8', timeOnAirbnb: '4 years on Airbnb', date: 'May 2026', rating: 5,
      body: 'We had an amazing stay at this property in Goa! The entire home was spotless and access to fully well maintained, mid space had comfortable furniture — from the moment we arrived. The cleanliness standard were truly impressive, with every corner of the house looking fresh and pristine.'
    },
    {
      id: 'r5', name: 'Vaibhav S', location: '2 years on Airbnb', avatar: 'https://i.pravatar.cc/80?img=44', timeOnAirbnb: '2 years on Airbnb', date: 'May 2026', rating: 5,
      body: 'Great overall experience Very cool. Owner, can\'t expect more, will always look for it in the future and will recommend my friends too.'
    },
    {
      id: 'r6', name: 'Manai', location: '1 year on Airbnb', avatar: 'https://i.pravatar.cc/80?img=17', timeOnAirbnb: '1 year on Airbnb', date: 'May 2026', rating: 5,
      body: 'Great place. Exactly as described in the listing.'
    },
  ] as Review[],

  // NEW: Booking card matches reference — total price up-front, no breakdown
  price: {
    total: 28499,
    currency: '₹',
    nights: 5,
  },

  policies: {
    cancellation: {
      title: 'Cancellation policy',
      body: [
        'Free cancellation before 15 October.',
        'Review the host\'s full policy for details.',
      ],
    },
    houseRules: {
      title: 'House rules',
      body: [
        'Check-in after 2:00 pm',
        'Checkout before 11:00 am',
        '2 guests maximum',
      ],
    },
    safety: {
      title: 'Safety & property',
      body: [
        'Carbon monoxide alarm not reported',
        'Smoke alarm not reported',
        'Exterior security cameras on property',
      ],
    },
    checkIn: '2:00 PM',
    checkOut: '11:00 AM',
    freeCancellationDate: 'Free cancellation before 15 October',
  },

  // NEW: Map section
  location_details: {
    heading: 'Candolim, Goa, India',
    // Static image placeholder for the map. Swap in a real Mapbox / Google
    // static image URL keyed on lat/lng in production.
    mapImage:
      'https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-l+FF385C(73.75,15.51)/73.75,15.51,12,0/900x400?access_token=pk.demo',
    neighborhoodHighlights:
      'Located in the heart of Candolim, Amor de-Gao offers a peaceful stay with easy access to beaches, cafes, and popular attractions.',
  },

  // NEW: More stays nearby
  nearbyStays: [
    { id: 'n1', title: 'Beautiful 1 studio with a view to die for', price: 4620, rating: 4.85, image: photos[6].src },
    { id: 'n2', title: 'NAGAR — 1BHK with private pool', price: 4120, rating: 4.90, image: photos[9].src },
    { id: 'n3', title: 'Onestop Luxury Flat with plunge pool, Calangute', price: 5500, rating: 4.87, image: photos[1].src },
    { id: 'n4', title: 'The Tropical Studios: 5 mins to beach', price: 3900, rating: 4.92, image: photos[5].src },
    { id: 'n5', title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', price: 4780, rating: 4.88, image: photos[10].src },
  ],

  // NEW: photo tour grouped by category
  photoTour: [
    {
      id: 'living1',
      label: 'Living room 1',
      amenities: 'Sofa · Air conditioning · Ceiling fan · TV',
      photos: [
        { src: photos[1].src, alt: 'Living room 1 wide shot', size: 'wide' },
        { src: photos[2].src, alt: 'Living room 1 detail' },
        { src: photos[10].src, alt: 'Living room 1 corner' },
      ],
    },
    {
      id: 'living2',
      label: 'Living room 2',
      amenities: 'Ceiling fan · Hot tub',
      photos: [
        { src: photos[11].src, alt: 'Living room 2 wide' },
        { src: photos[6].src, alt: 'Living room 2 alt' },
        { src: photos[7].src, alt: 'Living room 2 lounge', size: 'wide' },
        { src: photos[13].src, alt: 'Living room 2 lounge b' },
        { src: photos[14].src, alt: 'Living room 2 lounge c' },
        { src: photos[8].src, alt: 'Living room 2 lounge d', size: 'wide' },
      ],
    },
    {
      id: 'kitchen',
      label: 'Full kitchen',
      amenities: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
      photos: [
        { src: photos[2].src, alt: 'Kitchen wide' },
        { src: photos[18].src, alt: 'Kitchen detail' },
      ],
    },
    {
      id: 'bedroom',
      label: 'Bedroom',
      amenities: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
      photos: [
        { src: photos[0].src, alt: 'Bedroom wide', size: 'wide' },
        { src: photos[7].src, alt: 'Bedroom detail' },
        { src: photos[3].src, alt: 'Bedroom side' },
        { src: photos[15].src, alt: 'Bedroom wide 2', size: 'wide' },
        { src: photos[16].src, alt: 'Bedroom side 2' },
        { src: photos[17].src, alt: 'Bedroom detail 2' },
      ],
    },
    {
      id: 'bathroom',
      label: 'Full bathroom',
      amenities: 'Hairdryer · Hot water · Shampoo · Shower gel',
      photos: [
        { src: photos[3].src, alt: 'Bathroom wide', size: 'wide' },
      ],
    },
    {
      id: 'gym',
      label: 'Gym',
      amenities: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
      photos: [
        { src: photos[12].src, alt: 'Gym wide', size: 'wide' },
        { src: photos[13].src, alt: 'Gym detail' },
        { src: photos[6].src, alt: 'Gym alt' },
        { src: photos[14].src, alt: 'Gym alt 2' },
        { src: photos[11].src, alt: 'Gym alt 3' },
      ],
    },
    {
      id: 'exterior',
      label: 'Exterior',
      amenities: '',
      photos: [
        { src: photos[4].src, alt: 'Exterior wide', size: 'wide' },
        { src: photos[19].src, alt: 'Exterior alt' },
        { src: photos[5].src, alt: 'Exterior alt 2' },
        { src: photos[4].src, alt: 'Exterior wide 2', size: 'wide' },
        { src: photos[19].src, alt: 'Exterior alt 3' },
        { src: photos[5].src, alt: 'Exterior alt 4' },
      ],
    },
    {
      id: 'pool',
      label: 'Pool',
      amenities: 'Pool',
      photos: [
        { src: photos[9].src, alt: 'Pool wide', size: 'wide' },
        { src: photos[9].src, alt: 'Pool detail' },
        { src: photos[10].src, alt: 'Pool alt' },
      ],
    },
    {
      id: 'additional',
      label: 'Additional photos',
      amenities: '',
      photos: [
        { src: photos[10].src, alt: 'Additional 1', size: 'wide' },
        { src: photos[18].src, alt: 'Additional 2' },
      ],
    },
  ],
};

export type Listing = typeof listing;
