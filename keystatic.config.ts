import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'cloud' },
  cloud: { project: 'web-factory/mm-securite' },

  singletons: {
    'site-info': singleton({
      label: 'Infos du site',
      path: 'src/content/site-info/index',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Nom commercial' }),
        tagline: fields.text({ label: 'Tagline' }),
        description: fields.text({ label: 'Description', multiline: true }),
        phone: fields.text({ label: 'Téléphone' }),
        email: fields.text({ label: 'Email' }),
      },
    }),
    hero: singleton({
      label: 'Hero',
      path: 'src/content/hero/index',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Titre H1' }),
        subtitle: fields.text({ label: 'Sous-titre', multiline: true }),
        ctaPrimary: fields.text({ label: 'CTA principal' }),
        ctaPrimaryUrl: fields.text({ label: 'URL CTA principal' }),
        ctaSecondary: fields.text({ label: 'CTA secondaire' }),
        ctaSecondaryUrl: fields.text({ label: 'URL CTA secondaire' }),
        stat1Value: fields.text({ label: 'Stat 1 — valeur' }),
        stat1Label: fields.text({ label: 'Stat 1 — label' }),
        stat2Value: fields.text({ label: 'Stat 2 — valeur' }),
        stat2Label: fields.text({ label: 'Stat 2 — label' }),
        stat3Value: fields.text({ label: 'Stat 3 — valeur' }),
        stat3Label: fields.text({ label: 'Stat 3 — label' }),
      },
    }),
    about: singleton({
      label: 'À propos',
      path: 'src/content/about/index',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Titre' }),
        content: fields.text({ label: 'Contenu', multiline: true }),
      },
    }),
    contact: singleton({
      label: 'Contact',
      path: 'src/content/contact/index',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Titre section' }),
        subtitle: fields.text({ label: 'Sous-titre' }),
        buttonText: fields.text({ label: 'Texte du bouton' }),
      },
    }),
  },

  collections: {
    services: collection({
      label: 'Services',
      path: 'src/content/services/*',
      slugField: 'name',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Nom du service' } }),
        shortDescription: fields.text({ label: 'Description courte', multiline: true }),
        tag: fields.text({ label: 'Tag (optionnel)' }),
        tagStyle: fields.select({
          label: 'Style du tag',
          options: [
            { label: 'Bleu', value: 'blue' },
            { label: 'Rouge', value: 'red' },
            { label: 'Aucun', value: 'none' },
          ],
          defaultValue: 'none',
        }),
        order: fields.integer({ label: 'Ordre d\'affichage', defaultValue: 0 }),
      },
    }),
    testimonials: collection({
      label: 'Témoignages',
      path: 'src/content/testimonials/*',
      slugField: 'author',
      format: { data: 'json' },
      schema: {
        author: fields.slug({ name: { label: 'Auteur' } }),
        role: fields.text({ label: 'Métier / Lieu' }),
        rating: fields.integer({ label: 'Note (1-5)', defaultValue: 5 }),
        text: fields.text({ label: 'Témoignage', multiline: true }),
      },
    }),
    faq: collection({
      label: 'FAQ',
      path: 'src/content/faq/*',
      slugField: 'question',
      format: { data: 'json' },
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        answer: fields.text({ label: 'Réponse', multiline: true }),
        order: fields.integer({ label: 'Ordre', defaultValue: 0 }),
      },
    }),
    blog: collection({
      label: 'Articles de blog',
      path: 'src/content/blog/*',
      slugField: 'title',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Date de publication' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        content: fields.text({ label: 'Contenu', multiline: true }),
      },
    }),
  },
});
