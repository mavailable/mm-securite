import { defineCollection, z } from 'astro:content';

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

export const collections = { services, testimonials, faq, blog };
