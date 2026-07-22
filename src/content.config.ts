import { defineCollection, z } from 'astro:content';

const siteInfo = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    phone: z.string(),
    email: z.string(),
  }),
});

const hero = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    ctaPrimary: z.string(),
    ctaPrimaryUrl: z.string(),
    ctaSecondary: z.string(),
    ctaSecondaryUrl: z.string(),
    stat1Value: z.string(),
    stat1Label: z.string(),
    stat2Value: z.string(),
    stat2Label: z.string(),
    stat3Value: z.string(),
    stat3Label: z.string(),
  }),
});

const about = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

const contact = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    buttonText: z.string(),
  }),
});

const services = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    shortDescription: z.string(),
    tag: z.string().optional(),
    tagStyle: z.enum(['blue', 'red', 'none']).default('none'),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    author: z.string(),
    role: z.string(),
    rating: z.number().min(1).max(5).default(5),
    text: z.string(),
  }),
});

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().default('Réglementation ERP'),
    content: z.string(),
  }),
});

// NB : le singleton `seo` (src/content/seo/index.json, ecran « SEO » du /admin)
// n'est VOLONTAIREMENT pas declare ici. Ce projet utilise les collections
// legacy `type: 'data'` : y ajouter une collection change l'ordre de sortie de
// getCollection() sur les autres (constate sur les temoignages de l'accueil).
// src/data/seo.ts lit le fichier directement sur le disque, la declaration est
// donc inutile au rendu. Cf. wf-00-cms §7bis.
export const collections = {
  'site-info': siteInfo,
  hero,
  about,
  contact,
  services,
  testimonials,
  faq,
  blog,
};
