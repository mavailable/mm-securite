/**
 * Données métier centralisées — MM Sécurité
 * Source unique de vérité pour toutes les pages du site.
 */

export const business = {
  name: 'MM Sécurité',
  legalName: 'Marc Muller EI',
  owner: 'Marc Muller',
  ownerRole: 'Technicien en systèmes de sécurité',
  siret: '505 045 450 00069',
  siretRaw: '50504545000069',
  taxID: '505045450',
  url: 'https://mm-securite.fr',
  email: 'marc@muller.im',
  phone: '+33688766648',
  phoneDisplay: '06 88 76 66 48',

  address: {
    street: '',
    city: 'Metz',
    postalCode: '57000',
    region: 'Grand Est',
    regionCode: 'FR-GES',
    country: 'FR',
    countryName: 'France',
  },

  geo: {
    latitude: 49.1193,
    longitude: 6.1757,
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
    "Technicien en systèmes de sécurité pour commerces à Metz et Grand Est. Alarme incendie, intrusion, vidéosurveillance, contrôle d'accès, plans d'évacuation et mise en conformité ERP.",

  services: [
    {
      name: 'Alarme intrusion',
      slug: '/alarme-intrusion-commerce',
      schemaName: 'Alarme intrusion pour commerce',
      schemaDesc: "Installation et maintenance de systèmes d'alarme anti-intrusion pour boutiques et commerces",
      short: "Protégez votre boutique contre les cambriolages. Détection volumétrique, sirène, alerte sur smartphone, levée de doute vidéo. Centrales certifiées NF\u00A0A2P.",
      tag: 'Le plus demandé',
      tagStyle: 'blue',
    },
    {
      name: 'Alarme incendie',
      slug: '/alarme-incendie-erp',
      schemaName: 'Alarme incendie ERP',
      schemaDesc: 'Système de sécurité incendie conforme aux normes ERP pour commerces',
      short: "Détection incendie conforme aux obligations ERP. Détecteurs, déclencheurs manuels, centrale SSI, vérification annuelle et tenue du registre de sécurité.",
      tag: 'Obligatoire ERP',
      tagStyle: 'red',
    },
    {
      name: 'Vidéosurveillance',
      slug: '/videosurveillance-commerce',
      schemaName: 'Vidéosurveillance',
      schemaDesc: 'Installation de caméras IP pour commerces, conforme RGPD',
      short: "Caméras IP haute définition, vision nocturne, accès en direct sur votre téléphone. Installation conforme RGPD avec affichage légal et déclaration préfecture.",
    },
    {
      name: "Contrôle d'accès",
      slug: '/controle-acces-commerce',
      schemaName: "Contrôle d'accès",
      schemaDesc: "Badges, digicodes et contrôle d'accès pour commerces et bureaux",
      short: "Badges, digicodes, lecteurs biométriques. Gérez qui entre et quand — idéal pour les réserves, bureaux ou zones à accès restreint.",
    },
    {
      name: "Plans d'évacuation",
      slug: '/plan-evacuation-erp',
      schemaName: "Plans d'évacuation",
      schemaDesc: "Conception de plans d'évacuation conformes NF X 08-070",
      short: "Plans conformes NF\u00A0X\u00A008-070, balisage de sécurité, signalétique. Indispensable pour passer la commission de sécurité en toute tranquillité.",
    },
    {
      name: 'Mise en conformité ERP',
      slug: '/mise-en-conformite-erp',
      schemaName: 'Mise en conformité ERP',
      schemaDesc: 'Audit et mise en conformité sécurité pour petits ERP',
      short: "Audit complet et mise en conformité sécurité pour les petits établissements recevant du public (catégories 4 et 5).",
    },
  ],

  areaServed: {
    cities: ['Metz', 'Thionville', 'Nancy', 'Forbach', 'Sarreguemines', 'Épinal', 'Pont-à-Mousson', 'Hagondange'],
    departments: ['Moselle (57)', 'Meurthe-et-Moselle (54)'],
    region: 'Grand Est',
    international: ['Luxembourg'],
  },

  reviews: [
    {
      author: 'Sophie L.',
      initial: 'S',
      role: 'Boulangerie — Metz Centre',
      rating: 5,
      text: "Marc a installé notre système d'alarme et les caméras en une journée. Tout fonctionne parfaitement, l'application sur le téléphone est très pratique. Je recommande à tous les commerçants du quartier.",
      schemaText: "Marc a sécurisé ma boulangerie en une journée. Alarme, caméras, tout fonctionne parfaitement. Très professionnel et réactif.",
    },
    {
      author: 'Philippe D.',
      initial: 'P',
      role: 'Restaurant — Thionville',
      rating: 5,
      text: "On avait la commission de sécurité en urgence. Marc a fait l'audit, installé la détection incendie et préparé tous les documents en 10 jours. Commission passée sans remarque. Sérieux et efficace.",
      schemaText: "Mise en conformité incendie impeccable pour mon restaurant. La commission de sécurité est passée sans aucun souci.",
    },
    {
      author: 'Nadia K.',
      initial: 'N',
      role: 'Salon de coiffure — Nancy',
      rating: 5,
      text: "Très bon contact, Marc prend le temps d'expliquer le fonctionnement de chaque équipement. Le suivi après installation est top. Mon salon est maintenant bien protégé et je gère tout depuis mon téléphone.",
      schemaText: "Excellent rapport qualité-prix. Marc a pris le temps d'expliquer chaque installation. Je recommande sans hésiter.",
    },
  ],

  faq: [
    {
      question: 'Quelles sont les obligations de sécurité pour un petit commerce ?',
      answer: "Tout commerce recevant du public (ERP) doit disposer d'un système de détection incendie, de plans d'évacuation conformes à la norme NF X 08-070, d'un balisage de sécurité et d'un registre de sécurité à jour. Les obligations précises varient selon la catégorie de l'ERP (de 1 à 5, déterminée par la capacité d'accueil) et le type d'activité (M pour magasin, N pour restaurant, O pour hôtel, etc.). Un commerce de catégorie 5 (moins de 200 personnes) a des obligations allégées mais reste soumis aux règles de base en matière de sécurité incendie.",
      schemaAnswer: "Tout commerce recevant du public (ERP) doit disposer d'un système de détection incendie, de plans d'évacuation, d'un balisage de sécurité et d'un registre de sécurité à jour. Les obligations varient selon la catégorie et le type d'ERP.",
    },
    {
      question: "Combien coûte une installation d'alarme pour un commerce à Metz ?",
      answer: "Le coût dépend de la surface de vos locaux, du nombre de points de détection nécessaires et du type de système choisi (filaire ou sans fil). En tant que technicien indépendant basé à Metz, mes tarifs sont adaptés aux petits commerces — vous payez l'expertise technique sans les surcoûts de structure d'un grand groupe. Contactez-moi pour recevoir un devis gratuit et personnalisé sous 48 heures.",
      schemaAnswer: "Le coût dépend de la surface, du nombre de points de détection et du type de système choisi. En tant que technicien indépendant, mes tarifs sont adaptés aux petits commerces sans surcoût de structure. Contactez-moi pour un devis gratuit sous 48h.",
    },
    {
      question: "Quelle est la différence entre une alarme intrusion et une alarme incendie ?",
      answer: "L'alarme intrusion protège votre commerce contre les cambriolages et effractions. Elle utilise des détecteurs de mouvement, des contacts d'ouverture de portes et de fenêtres, et peut déclencher une sirène ou une alerte sur votre smartphone. L'alarme incendie (ou SSI — Système de Sécurité Incendie) détecte les départs de feu grâce à des détecteurs de fumée et de chaleur. Pour un ERP, l'alarme incendie est une obligation légale. L'alarme intrusion est fortement recommandée mais pas obligatoire.",
      schemaAnswer: "L'alarme intrusion protège contre les cambriolages et effractions avec des détecteurs de mouvement et d'ouverture. L'alarme incendie (SSI) détecte les départs de feu avec des détecteurs de fumée et de chaleur. Pour un ERP, l'alarme incendie est une obligation légale, tandis que l'alarme intrusion est recommandée mais non obligatoire.",
    },
    {
      question: "Qu'est-ce qu'un ERP et mon commerce est-il concerné ?",
      answer: "Un ERP (Établissement Recevant du Public) est tout bâtiment, local ou enceinte accueillant des personnes extérieures à l'entreprise. Si vous avez une boulangerie, un restaurant, un salon de coiffure, un cabinet médical ou tout commerce ouvert au public, vous êtes un ERP. Vos obligations de sécurité dépendent de votre catégorie (1 à 5) et de votre type d'activité. La grande majorité des petits commerces sont classés en catégorie 5 (capacité inférieure à 200 personnes).",
      schemaAnswer: "Un ERP (Établissement Recevant du Public) est tout bâtiment ou local accueillant des personnes extérieures. Si vous avez un commerce, un restaurant, un cabinet médical ou tout lieu ouvert au public, vous êtes un ERP. Les obligations de sécurité dépendent de votre catégorie (déterminée par la capacité d'accueil) et de votre type d'activité.",
    },
    {
      question: 'La vidéosurveillance dans mon commerce est-elle conforme au RGPD ?',
      answer: "Oui, à condition de respecter un cadre précis : un panneau d'information visible doit être affiché à l'entrée, une déclaration en préfecture est nécessaire pour les lieux ouverts au public, la durée de conservation des images est limitée (généralement 30 jours maximum), et l'accès aux enregistrements doit être restreint. MM Sécurité installe des systèmes 100% conformes et vous accompagne dans toutes les démarches administratives (déclaration préfecture, affichage, documentation RGPD).",
      schemaAnswer: "Oui, à condition de respecter certaines règles : affichage d'un panneau d'information visible, déclaration en préfecture pour les lieux ouverts au public, durée de conservation des images limitée (généralement 30 jours), et accès restreint aux images. MM Sécurité installe des systèmes conformes et accompagne ses clients dans les démarches administratives.",
    },
    {
      question: 'Intervenez-vous en dehors de Metz ?',
      answer: "Oui, MM Sécurité intervient dans toute la Moselle (Metz, Thionville, Forbach, Sarreguemines, Hagondange), en Meurthe-et-Moselle (Nancy, Pont-à-Mousson, Lunéville), et plus largement dans l'ensemble de la région Grand Est. J'interviens également au Luxembourg pour les entreprises frontalières. Mon ancrage local à Metz me permet d'assurer une grande réactivité sur l'ensemble de cette zone.",
      schemaAnswer: "Oui, j'interviens dans toute la Moselle (Thionville, Forbach, Sarreguemines, Hagondange), en Meurthe-et-Moselle (Nancy, Pont-à-Mousson) et plus largement dans le Grand Est, y compris au Luxembourg.",
    },
  ],

  web3formsKey: '5c0597af-80a9-48ba-b856-5c436e39ea74',

  analytics: {
    umamiId: '13c56d5e-7dcb-4c57-a8fe-b46e9d359550',
    umamiUrl: 'https://cloud.umami.is/script.js',
  },

  seo: {
    defaultTitle: 'MM Sécurité | Alarme & Vidéosurveillance commerces Metz',
    defaultDescription: "Marc Muller, technicien en sécurité pour commerces à Metz. Alarme intrusion, incendie, vidéosurveillance, contrôle d'accès et mise en conformité ERP. Devis gratuit sous 48h.",
    keywords: "alarme Metz, vidéosurveillance Metz, sécurité commerce Metz, alarme incendie ERP, contrôle accès Grand Est, plan évacuation, technicien sécurité Moselle, alarme boutique, caméra surveillance magasin",
    ogImage: 'https://mm-securite.fr/og-image.png',
    ogImageAlt: 'MM Sécurité — Alarme & Vidéosurveillance pour commerces à Metz',
  },

  commerceTypes: [
    'Boulangeries', 'Restaurants', 'Salons de coiffure', 'Hôtels',
    'Cabinets médicaux', 'Boutiques', 'Salles de sport', 'Pharmacies', 'Crèches',
  ],

  credit: {
    text: 'Site réalisé par Marc M. · Spécialiste sites web pour techniciens sécurité',
    url: 'https://marcm.fr/100-sites-artisans/',
  },
} as const;

export type Business = typeof business;
