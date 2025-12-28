import React from 'react';
import { Landmark, TimelineEvent, Stat, DetailedSection } from './types';
import { GraduationCap, Stethoscope, Truck, Leaf } from 'lucide-react';

export const HERO_IMAGE = "https://picsum.photos/seed/western-ghats-fog/1920/1080"; 

export const LANDMARKS: Landmark[] = [
  {
    id: 'gandhi-market',
    name: 'Gandhi Vegetable Market',
    category: 'Commerce',
    description: 'One of the largest vegetable markets in Tamil Nadu.',
    imageUrl: 'https://picsum.photos/seed/market-vegetables/800/600',
    details: 'The economic engine of the town. It supplies vegetables to Kerala, Mumbai, and exports Drumsticks (Moringa) and Gloriosa Superba seeds globally. It operates 24/7 with an annual turnover in crores.'
  },
  {
    id: 'scudder-hospital',
    name: 'Scudder Memorial Hospital',
    category: 'Health',
    description: 'A historic medical institution founded in 1955.',
    imageUrl: 'https://picsum.photos/seed/hospital-building/800/600',
    details: 'Founded by Dr. Galen F. Scudder, this hospital is a landmark in healthcare for the Dindigul district, serving thousands of rural patients with advanced medical facilities.'
  },
  {
    id: 'parappalaru-dam',
    name: 'Parappalaru Dam',
    category: 'Nature',
    description: 'Scenic reservoir and waterfall source.',
    imageUrl: 'https://picsum.photos/seed/waterfall-dam/800/600',
    details: 'Located in the Pachamalai hills nearby, it stores water for irrigation and Oddanchatram\'s drinking needs. The overflow creates a spectacular waterfall during monsoons.'
  },
  {
    id: 'kashi-viswanathar',
    name: 'Kashi Viswanathar Temple',
    category: 'Spirituality',
    description: 'The spiritual anchor of the town.',
    imageUrl: 'https://picsum.photos/seed/hindu-temple/800/600',
    details: 'An ancient temple dedicated to Lord Shiva. The town also hosts the famous Arulmigu Kuzhanthai Velappar Temple in nearby Poombarai.'
  },
];

export const DETAILED_INFO: DetailedSection[] = [
  {
    id: 'economy',
    title: 'Agri-Economy',
    icon: Leaf,
    content: "Oddanchatram is synonymous with agriculture. Beyond the Gandhi Market, the region is the world's largest exporter of 'Gloriosa Superba' (Glory Lily) seeds, used in the pharmaceutical industry for Colchicine extraction. The town is also a major hub for cattle farms and produces significant volumes of curd and dairy products.",
    stats: ['#1 Exporter of Glory Lily', '100+ Commission Mandis', 'Major Curd Supplier']
  },
  {
    id: 'transport',
    title: 'Transport Hub',
    icon: Truck,
    content: "Strategically located at the intersection of NH-83 (Coimbatore to Nagapattinam) and SH-134. It acts as the primary gateway for all traffic heading to the hill stations of Kodaikanal and Palani from the north. The Oddanchatram Railway Station falls on the Pollachi-Dindigul line.",
    stats: ['NH-83 Highway', 'Rail Connectivity', 'Gateway to Ooty/Kodai']
  },
  {
    id: 'health',
    title: 'Healthcare',
    icon: Stethoscope,
    content: "The town is a medical hub for the surrounding 50+ villages. The Scudder Memorial Hospital is a cornerstone of this, established by American missionaries. It has evolved into a multi-specialty center, supported by numerous private clinics and government health centers.",
    stats: ['Scudder Memorial Est. 1955', 'Trauma Care Center', 'Rural Health Hub']
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    content: "Oddanchatram boasts a high literacy rate with institutions like the Christian College of Engineering & Technology (CCET) and Sakthi College of Nursing. Several matriculation and government schools serve the growing population.",
    stats: ['Engineering College', 'Nursing Institutes', 'High Literacy Rate']
  }
];

export const HISTORY: TimelineEvent[] = [
  {
    year: 'Ancient Era',
    title: 'Kongu Nadu Frontier',
    description: 'Served as a trade route connecting the ancient Kongu region with the Pandya kingdom in Madurai.'
  },
  {
    year: '1955',
    title: 'Healthcare Revolution',
    description: 'Establishment of Scudder Memorial Hospital by Dr. Galen F. Scudder, transforming rural health.'
  },
  {
    year: '1976',
    title: 'The Market Era',
    description: 'Formal organization of the Vegetable Market, which would grow to supply the entirety of Kerala and Tamil Nadu.'
  },
  {
    year: '2010s',
    title: 'Global Pharma Hub',
    description: 'Explosion in cultivation of Gloriosa Superba (Kanvali Kilangu), putting Oddanchatram on the global pharmaceutical map.'
  }
];

export const STATS: Stat[] = [
  { label: 'Market Volume', value: '1000+', subtext: 'Tons Daily' },
  { label: 'Elevation', value: '300m', subtext: 'Foothills of Ghats' },
  { label: 'Key Crop', value: 'Gloriosa', subtext: 'Medicinal Export' },
];

export const SYSTEM_INSTRUCTION = `You are an expert, super-detailed local guide for Oddanchatram (ODC), Dindigul District, Tamil Nadu.
You have access to Google Search to find current prices, weather, and news.

CORE KNOWLEDGE BASE:
1.  **Agriculture:** 
    *   Famous for **Gandhi Vegetable Market** (one of Asia's largest).
    *   **Gloriosa Superba (Glory Lily/Kanvali Kilangu):** ODC is a world hub for this medicinal seed containing Colchicine.
    *   **Drumsticks (Moringa):** Massive export to Europe/Middle East.
    *   **Dairy:** Famous for thick curd and butter beans.

2.  **Infrastructure:**
    *   **Scudder Memorial Hospital:** A historic mission hospital founded in 1955.
    *   **Transport:** Gateway to Kodaikanal via NH-83. Railway station on Dindigul-Pollachi line.
    *   **Education:** Christian College of Engineering & Technology.

3.  **Geography:**
    *   Located at the foothills of the Western Ghats (Palani Hills).
    *   Water source: Parappalaru Dam.

BEHAVIOR:
*   If asked about prices (tomato, drumstick), USE THE SEARCH TOOL to find today's market rates if possible.
*   Be proud of the town's "Vegetable City" status.
*   Mention the "Gateway to Kodaikanal" aspect for travelers.
`;