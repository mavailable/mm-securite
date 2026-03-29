/**
 * Données métier centralisées — MM Sécurité V2
 * Source unique de vérité pour les données techniques (non-éditables via CMS).
 */

export const legal = {
  registrationNumber: '505 045 450 00069',
  registrationNumberRaw: '50504545000069',
  taxID: '505045450',
} as const;

export const geo = {
  lat: 49.1193,
  lon: 6.1757,
} as const;

export const business = {
  name: 'MM Sécurité',
  legalName: 'Marc Muller EI',
  owner: 'Marc Muller',
  ownerRole: 'Technicien en systèmes de sécurité',
  email: 'marc@muller.im',
  phone: '+33688766648',
  phoneDisplay: '06 88 76 66 48',
  siteUrl: 'https://mm-securite.fr',

  address: {
    city: 'Metz',
    postalCode: '57000',
    region: 'Grand Est',
    regionCode: 'FR-GES',
    country: 'FR',
    countryName: 'France',
  },

  hours: {
    weekdays: '8h – 18h',
    saturday: 'Sur RDV',
    sunday: 'Fermé',
    structured: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
      { days: ['Saturday'], opens: '09:00', closes: '12:00' },
    ],
  },

  description:
    "Technicien indépendant en sécurité électronique pour commerces à Metz et Grand Est. Alarme intrusion, incendie, vidéosurveillance, contrôle d'accès et mise en conformité ERP.",

  services: [
    { name: 'Alarme intrusion', slug: '/alarme-intrusion-commerce', tag: 'Le plus demandé', tagStyle: 'blue' as const },
    { name: 'Alarme incendie', slug: '/alarme-incendie-erp', tag: 'Obligatoire ERP', tagStyle: 'red' as const },
    { name: 'Vidéosurveillance', slug: '/videosurveillance-commerce' },
    { name: "Contrôle d'accès", slug: '/controle-acces-commerce' },
    { name: "Plans d'évacuation", slug: '/plan-evacuation-erp' },
    { name: 'Mise en conformité ERP', slug: '/mise-en-conformite-erp' },
  ],

  areaServed: {
    cities: ['Metz', 'Thionville', 'Nancy', 'Forbach', 'Sarreguemines', 'Épinal', 'Pont-à-Mousson', 'Hagondange'],
    departments: ['Moselle (57)', 'Meurthe-et-Moselle (54)'],
    region: 'Grand Est',
    international: [],
  },

  commerceTypes: [
    'Boulangeries', 'Restaurants', 'Salons de coiffure', 'Hôtels',
    'Cabinets médicaux', 'Boutiques', 'Salles de sport', 'Pharmacies', 'Crèches',
  ],

  web3formsKey: '5c0597af-80a9-48ba-b856-5c436e39ea74',

  analytics: {
    umamiId: '13c56d5e-7dcb-4c57-a8fe-b46e9d359550',
    umamiUrl: 'https://cloud.umami.is/script.js',
  },

  seo: {
    defaultTitle: 'MM Sécurité · Alarme & Vidéosurveillance commerces Metz',
    defaultDescription: "Marc Muller, technicien sécurité pour commerces à Metz. Alarme intrusion, incendie, vidéosurveillance, contrôle d'accès, conformité ERP. Devis gratuit sous 48h.",
    ogImage: '/og-image.png',
    ogImageAlt: 'MM Sécurité — Alarme & Vidéosurveillance pour commerces à Metz',
  },

  credit: {
    text: 'Site réalisé par Marc M. · Spécialiste sites web pour artisans et commerces',
    url: 'https://marcm.fr/',
  },
} as const;

export type Business = typeof business;
