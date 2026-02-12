import React from 'react';
import { Landmark, TimelineEvent, Stat, DetailedSection } from './types';
import { GraduationCap, Stethoscope, Truck, Leaf } from 'lucide-react';

export const HERO_IMAGE = "https://picsum.photos/seed/western-ghats-fog/1920/1080"; 

export const LANDMARKS: Landmark[] = [
  {
    id: 'gandhi-market',
    name: 'Gandhi Vegetable Market Oddanchatram',
    category: 'Commerce',
    description: 'One of the largest vegetable markets in Tamil Nadu and South India.',
    imageUrl: 'https://picsum.photos/seed/market-vegetables/800/600',
    details: 'The primary economic driver of Oddanchatram. This market is a global export hub for Moringa (Drumsticks) and medicinal Gloriosa Superba seeds. It operates 24 hours a day, serving Kerala and various states across India.'
  },
  {
    id: 'scudder-hospital',
    name: 'Scudder Memorial Hospital ODC',
    category: 'Health',
    description: 'Historic healthcare institution serving the Dindigul district since 1955.',
    imageUrl: 'https://picsum.photos/seed/hospital-building/800/600',
    details: 'Established by Dr. Galen F. Scudder, this hospital provides essential medical care to over 50 surrounding villages. It is a landmark of charitable medical service in Tamil Nadu.'
  },
  {
    id: 'parappalaru-dam',
    name: 'Parappalaru Dam & Waterfalls',
    category: 'Nature',
    description: 'A serene reservoir located in the foothills of the Western Ghats.',
    imageUrl: 'https://picsum.photos/seed/waterfall-dam/800/600',
    details: 'A vital source of irrigation and drinking water for the region. The dam is a popular local tourist attraction, especially during the monsoon season when the waterfall is in full flow.'
  },
  {
    id: 'kashi-viswanathar',
    name: 'Kashi Viswanathar Temple',
    category: 'Spirituality',
    description: 'Ancient Shiva temple, a spiritual center of the town.',
    imageUrl: 'https://picsum.photos/seed/hindu-temple/800/600',
    details: 'Dedicated to Lord Shiva, this temple represents the rich cultural and spiritual heritage of the Kongu Nadu region surrounding Oddanchatram.'
  },
];

export const DETAILED_INFO: DetailedSection[] = [
  {
    id: 'economy',
    title: 'Agri-Business & Economy',
    icon: Leaf,
    content: "Oddanchatram's economy is powered by agricultural exports. It is the world's leading exporter of 'Gloriosa Superba' (Glory Lily) seeds, vital for the pharmaceutical industry. The town also handles massive volumes of vegetables like tomatoes, drumsticks, and shallots daily.",
    stats: ['World Leader in Glory Lily', '₹200Cr+ Annual Turnover', 'Export to 10+ Countries']
  },
  {
    id: 'transport',
    title: 'Transport & Connectivity',
    icon: Truck,
    content: "Located on NH-83, Oddanchatram is the strategic gateway to the Palani Hills and Kodaikanal. It has excellent bus and rail connectivity, making it a major transit point for travelers moving between Coimbatore, Dindigul, and the hill stations.",
    stats: ['NH-83 Highway Hub', 'Dindigul-Pollachi Rail Line', '100+ Bus Services Daily']
  },
  {
    id: 'health',
    title: 'Medical Tourism & Care',
    icon: Stethoscope,
    content: "With the Scudder Memorial Hospital as its cornerstone, Oddanchatram has grown into a regional medical hub. It offers advanced surgical facilities and rural health initiatives that draw patients from across the Dindigul and Tirupur districts.",
    stats: ['Founded by Dr. Scudder', 'Multi-Specialty Care', 'Rural Outreach Centers']
  },
  {
    id: 'education',
    title: 'Education & Literacy',
    icon: GraduationCap,
    content: "Home to the Christian College of Engineering & Technology (CCET), the town is an educational beacon for rural youth. The high literacy rate is supported by numerous public and private schools offering quality education in Tamil and English.",
    stats: ['Engineering Excellence', 'Nursing Colleges', '90%+ Literacy Rate']
  }
];

export const HISTORY: TimelineEvent[] = [
  {
    year: 'Ancient Era',
    title: 'Historical Trade Route',
    description: 'Oddanchatram served as a vital frontier between the Kongu Nadu and Pandya kingdoms, facilitating spice and grain trade.'
  },
  {
    year: '1955',
    title: 'Modern Healthcare Begins',
    description: 'The inauguration of Scudder Memorial Hospital transformed the medical landscape of the Dindigul district.'
  },
  {
    year: '1976',
    title: 'Market Formalization',
    description: 'The Gandhi Vegetable Market was officially organized, leading to Oddanchatram becoming the "Vegetable City" of India.'
  },
  {
    year: '2010s',
    title: 'Pharma Export Boom',
    description: 'Recognition as a global leader in the cultivation and export of Gloriosa Superba medicinal seeds.'
  }
];

export const STATS: Stat[] = [
  { label: 'Market Volume', value: '1,500 Tons', subtext: 'Peak Daily Trade' },
  { label: 'Elevation', value: '300m', subtext: 'Palani Hill Foothills' },
  { label: 'Key Export', value: 'Medicinal Seeds', subtext: 'Global Hub' },
];

export const SYSTEM_INSTRUCTION = `You are the Official Digital Guide for Oddanchatram (ODC), Dindigul District, Tamil Nadu.
You provide real-time information with a focus on agriculture, tourism, and history.

CORE KNOWLEDGE BASE:
1.  **Vegetable Hub:** Gandhi Vegetable Market is the town's pride. 
2.  **Specialty Crops:** Gloriosa Superba (medicinal lily) and Moringa (drumsticks).
3.  **Landmarks:** Scudder Hospital (historic), Parappalaru Dam (scenic), NH-83 (transport).
4.  **Local Pride:** Mention the town's contribution to the pharmaceutical and food supply chain of South India.

BEHAVIOR:
*   Always use Google Search to fetch "Oddanchatram vegetable prices today" or "Current weather in Oddanchatram" when asked.
*   Be polite, helpful, and informative.
*   Link to external sources when providing market data.
`;