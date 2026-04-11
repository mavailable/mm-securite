/**
 * Schema.org helpers — doctrine C1 wf-00-cms §7 + schemas centralises.
 *
 * Specifique mm-alarmes (MM Sécurité) :
 *  - Type Schema.org array : ['LocalBusiness', 'ElectricalContractor']
 *  - Identifier SIRET unique via PropertyValue (richesse française)
 *  - hasOfferCatalog construit dynamiquement depuis business.services
 *  - areaServed combine cities + region + international
 *
 * Pattern : SchemaOrg.astro (composant injecteur) + FAQ.astro + ServicePage.astro
 * (breadcrumbs par page service) + blog/[slug].astro (BlogPosting — hors scope
 * de cette migration C1 initiale).
 *
 * aggregateRating OMIS : 3 testimonials sans rating/source structures.
 * Doctrine stricte. Reinjectable plus tard via business.rating.platform.
 */

import { getCollection } from 'astro:content';
import { business, legal, geo, schemaData } from '@data/business';

export interface Breadcrumb {
  name: string;
  url: string;
}

interface FAQData {
  question: string;
  answer: string;
  order?: number;
}

// ============================================================
// getLocalBusinessSchema — LocalBusiness + ElectricalContractor (array)
// ============================================================

export function getLocalBusinessSchema(): object {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': business.schemaType,
    name: business.name,
    legalName: business.legalName,
    image: `${business.siteUrl}/og-image.png`,
    description: business.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    telephone: business.phone,
    email: business.email,
    url: business.siteUrl,
    founder: {
      '@type': 'Person',
      name: business.owner,
      jobTitle: business.ownerRole,
    },
    openingHoursSpecification: business.hours.structured.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: schemaData.priceRange,
    currenciesAccepted: schemaData.currenciesAccepted,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.lat,
      longitude: geo.lon,
    },
    areaServed: [
      ...business.areaServed.cities.map((c) => ({ '@type': 'City', name: c })),
      { '@type': 'AdministrativeArea', name: business.areaServed.region },
      ...business.areaServed.international.map((c) => ({ '@type': 'Country', name: c })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: schemaData.hasOfferCatalogName,
      itemListElement: business.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: `${business.siteUrl}${s.slug}`,
        },
      })),
    },
    identifier: {
      '@type': 'PropertyValue',
      name: 'SIRET',
      value: legal.registrationNumberRaw,
    },
  };

  if (schemaData.paymentAccepted.length > 0) {
    schema.paymentAccepted = schemaData.paymentAccepted;
  }
  if (schemaData.sameAs.length > 0) {
    schema.sameAs = schemaData.sameAs;
  } else {
    schema.sameAs = [];
  }

  // aggregateRating OMIS (doctrine C1 — pas de source verifiable)

  return schema;
}

// ============================================================
// getWebsiteSchema — WebSite
// ============================================================

export function getWebsiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: business.siteUrl,
    description: business.seo.defaultDescription,
    inLanguage: 'fr-FR',
  };
}

// ============================================================
// getFAQPageSchema — FAQPage (async, lit getCollection('faq'))
// ============================================================

export async function getFAQPageSchema(): Promise<object | null> {
  try {
    const faqs = await getCollection('faq');
    if (faqs.length === 0) return null;
    const sorted = [...faqs].sort(
      (a: any, b: any) => (a.data.order ?? 0) - (b.data.order ?? 0)
    );
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: sorted.map((faq: any) => ({
        '@type': 'Question',
        name: faq.data.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.data.answer,
        },
      })),
    };
  } catch {
    return null;
  }
}

// ============================================================
// getBreadcrumbSchema — BreadcrumbList (pur)
// Utilise aussi par ServicePage.astro pour les pages services et villes.
// ============================================================

export function getBreadcrumbSchema(items: Breadcrumb[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${business.siteUrl}${item.url}`,
    })),
  };
}

// ============================================================
// getSpeakableSchema — Speakable WebPage (pur)
// ============================================================

export function getSpeakableSchema(
  title: string,
  description: string,
  url: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    inLanguage: 'fr-FR',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.intro-text', '.faq-answer'],
    },
  };
}
