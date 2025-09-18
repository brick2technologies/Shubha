export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  material?: string;
  deity?: string;
  purpose?: string;
  bestseller?: boolean;
}

export const products: Product[] = [
  // Diyas
  {
    id: '1',
    name: 'Traditional Brass Diya',
    price: 45,
    image: 'https://images.pexels.com/photos/6342520/pexels-photo-6342520.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Diyas',
    description: 'Handcrafted brass diya perfect for daily prayers and festivals',
    material: 'Brass',
    purpose: 'Daily Prayer',
    bestseller: true
  },
  {
    id: '2',
    name: 'Clay Diya Set (12 pcs)',
    price: 120,
    image: 'https://images.pexels.com/photos/8313187/pexels-photo-8313187.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Diyas',
    description: 'Set of 12 traditional clay diyas for Diwali celebrations',
    material: 'Clay',
    purpose: 'Festival',
    bestseller: true
  },
  {
    id: '3',
    name: 'Silver Plated Diya',
    price: 180,
    image: 'https://images.pexels.com/photos/6342520/pexels-photo-6342520.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Diyas',
    description: 'Elegant silver plated diya for special occasions',
    material: 'Silver Plated',
    purpose: 'Special Occasion'
  },
  
  // Idols
  {
    id: '4',
    name: 'Ganesha Marble Idol',
    price: 850,
    image: 'https://images.pexels.com/photos/6342529/pexels-photo-6342529.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Idols',
    description: 'Beautiful white marble Ganesha idol for home temple',
    material: 'Marble',
    deity: 'Ganesha',
    purpose: 'Home Temple',
    bestseller: true
  },
  {
    id: '5',
    name: 'Krishna Brass Idol',
    price: 650,
    image: 'https://images.pexels.com/photos/8629816/pexels-photo-8629816.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Idols',
    description: 'Handcrafted brass Krishna idol with intricate details',
    material: 'Brass',
    deity: 'Krishna',
    purpose: 'Home Temple'
  },
  {
    id: '6',
    name: 'Lakshmi Silver Idol',
    price: 1200,
    image: 'https://images.pexels.com/photos/6342529/pexels-photo-6342529.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Idols',
    description: 'Pure silver Lakshmi idol for prosperity and wealth',
    material: 'Silver',
    deity: 'Lakshmi',
    purpose: 'Prosperity'
  },
  
  // Pooja Thalis
  {
    id: '7',
    name: 'Complete Brass Pooja Thali',
    price: 350,
    image: 'https://images.pexels.com/photos/8629820/pexels-photo-8629820.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pooja Thalis',
    description: 'Complete brass thali set with all pooja essentials',
    material: 'Brass',
    purpose: 'Daily Prayer',
    bestseller: true
  },
  {
    id: '8',
    name: 'Designer Silver Thali',
    price: 750,
    image: 'https://images.pexels.com/photos/8629820/pexels-photo-8629820.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pooja Thalis',
    description: 'Elegant silver plated designer thali for special prayers',
    material: 'Silver Plated',
    purpose: 'Special Prayer'
  },
  {
    id: '9',
    name: 'Wooden Pooja Thali',
    price: 180,
    image: 'https://images.pexels.com/photos/8629820/pexels-photo-8629820.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pooja Thalis',
    description: 'Eco-friendly wooden thali with brass accents',
    material: 'Wood',
    purpose: 'Eco-friendly Prayer'
  },
  
  // Incense
  {
    id: '10',
    name: 'Sandalwood Incense Sticks',
    price: 85,
    image: 'https://images.pexels.com/photos/6342517/pexels-photo-6342517.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Incense',
    description: 'Premium sandalwood incense sticks (100 sticks)',
    material: 'Sandalwood',
    purpose: 'Daily Prayer',
    bestseller: true
  },
  {
    id: '11',
    name: 'Rose Incense Cones',
    price: 65,
    image: 'https://images.pexels.com/photos/6342517/pexels-photo-6342517.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Incense',
    description: 'Aromatic rose incense cones for meditation',
    material: 'Rose',
    purpose: 'Meditation'
  },
  {
    id: '12',
    name: 'Jasmine Dhoop Sticks',
    price: 45,
    image: 'https://images.pexels.com/photos/6342517/pexels-photo-6342517.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Incense',
    description: 'Natural jasmine dhoop sticks for evening prayers',
    material: 'Jasmine',
    purpose: 'Evening Prayer'
  },
  
  // Festive Kits
  {
    id: '13',
    name: 'Diwali Celebration Kit',
    price: 450,
    image: 'https://images.pexels.com/photos/8313187/pexels-photo-8313187.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Festive Kits',
    description: 'Complete Diwali kit with diyas, rangoli, and sweets',
    purpose: 'Diwali',
    bestseller: true
  },
  {
    id: '14',
    name: 'Ganesh Chaturthi Special Kit',
    price: 680,
    image: 'https://images.pexels.com/photos/6342529/pexels-photo-6342529.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Festive Kits',
    description: 'Special Ganesh Chaturthi kit with idol and decorations',
    deity: 'Ganesha',
    purpose: 'Ganesh Chaturthi'
  },
  {
    id: '15',
    name: 'Navratri Pooja Kit',
    price: 320,
    image: 'https://images.pexels.com/photos/8629820/pexels-photo-8629820.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Festive Kits',
    description: 'Complete Navratri pooja kit with all essentials',
    purpose: 'Navratri'
  },
  {
    id: '16',
    name: 'Lotus Brass Diya',
    price: 220,
    image: 'https://images.pexels.com/photos/18312356/pexels-photo-18312356.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Diyas',
    description: 'Beautiful lotus-shaped diya crafted in pure brass',
    material: 'Brass',
    purpose: 'Decor & Prayer',
    bestseller: false
  },
  {
    id: '17',
    name: 'Hanging Brass Lamp',
    price: 480,
    image: 'https://images.pexels.com/photos/13948665/pexels-photo-13948665.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Diyas',
    description: 'Traditional hanging lamp with chains for temples',
    material: 'Brass',
    purpose: 'Temple',
    bestseller: true
  },

  // Idols
  {
    id: '18',
    name: 'Shiva Lingam Idol',
    price: 900,
    image: 'https://images.pexels.com/photos/20720143/pexels-photo-20720143.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Idols',
    description: 'Black stone Shiva Lingam with brass yoni base',
    material: 'Stone & Brass',
    deity: 'Shiva',
    purpose: 'Temple',
    bestseller: true
  },
  {
    id: '19',
    name: 'Hanuman Idol',
    price: 550,
    image: 'https://images.pexels.com/photos/17534152/pexels-photo-17534152.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Idols',
    description: 'Brass Hanuman idol in blessing pose',
    material: 'Brass',
    deity: 'Hanuman',
    purpose: 'Strength & Devotion'
  },

  // Pooja Thalis
  {
    id: '20',
    name: 'Meenakari Pooja Thali',
    price: 400,
    image: 'https://images.pexels.com/photos/17589576/pexels-photo-17589576.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pooja Thalis',
    description: 'Colorful Meenakari work thali with bowls & diya',
    material: 'Brass + Enamel',
    purpose: 'Festivals'
  },
  {
    id: '21',
    name: 'Copper Pooja Thali',
    price: 280,
    image: 'https://images.pexels.com/photos/14688735/pexels-photo-14688735.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pooja Thalis',
    description: 'Simple copper pooja thali for daily rituals',
    material: 'Copper',
    purpose: 'Daily Prayer'
  },

  // Incense
  {
    id: '22',
    name: 'Lavender Dhoop Cones',
    price: 75,
    image: 'https://images.pexels.com/photos/6543561/pexels-photo-6543561.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Incense',
    description: 'Calming lavender incense cones (50 pcs)',
    material: 'Lavender',
    purpose: 'Relaxation'
  },
  {
    id: '23',
    name: 'Herbal Incense Mix',
    price: 150,
    image: 'https://images.pexels.com/photos/6543564/pexels-photo-6543564.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Incense',
    description: 'Blend of natural herbs & resins for spiritual vibes',
    material: 'Mixed Herbs',
    purpose: 'Meditation',
    bestseller: true
  },

  // Festive Kits
  {
    id: '24',
    name: 'Karva Chauth Kit',
    price: 550,
    image: 'https://images.pexels.com/photos/13769984/pexels-photo-13769984.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Festive Kits',
    description: 'Special kit with sieve, thali, and accessories',
    purpose: 'Karva Chauth',
    bestseller: true
  },
  {
    id: '25',
    name: 'Raksha Bandhan Kit',
    price: 260,
    image: 'https://images.pexels.com/photos/17645834/pexels-photo-17645834.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Festive Kits',
    description: 'Kit with rakhi, roli-chawal, sweets, and diya',
    purpose: 'Raksha Bandhan'
  }
];

export const categories = [
  { name: 'Diyas', count: products.filter(p => p.category === 'Diyas').length },
  { name: 'Idols', count: products.filter(p => p.category === 'Idols').length },
  { name: 'Pooja Thalis', count: products.filter(p => p.category === 'Pooja Thalis').length },
  { name: 'Incense', count: products.filter(p => p.category === 'Incense').length },
  { name: 'Festive Kits', count: products.filter(p => p.category === 'Festive Kits').length }
];