import type { CmsConfig } from './cms.types';

// ============================================================
// Configuration CMS — MM Securite
// ============================================================

const cmsConfig: CmsConfig = {
  repo: 'mavailable/mm-securite',
  branch: 'dev',
  siteName: 'MM Securite',

  site: {
    ownerName: 'Marc Muller',
    phone: '+33688766648',
    phoneDisplay: '06 88 76 66 48',
    email: 'marc@muller.im',
    siteUrl: 'https://mm-securite.fr',
    previewUrl: 'https://mm-securite.pages.dev',
    clientType: 'entreprise-locale',
    tagline: 'Securite electronique pour commerces a Metz et Grand Est',
    umamiShareUrl: 'https://cloud.umami.is/share/J9EQPfUhxVl9puGB/mm-securite.fr',
    umamiSiteId: '13c56d5e-7dcb-4c57-a8fe-b46e9d359550',
  },

  singletons: {
    'site-info': {
      label: 'Informations generales',
      description: 'Nom, telephone, email, slogan',
      path: 'src/content/site-info/index.json',
      fields: {
        name: { type: 'text', label: 'Nom commercial', required: true },
        tagline: { type: 'text', label: 'Slogan' },
        description: { type: 'text', label: 'Description', multiline: true },
        phone: { type: 'text', label: 'Telephone (affichage)' },
        email: { type: 'text', label: 'Email' },
      },
    },

    hero: {
      label: 'Section Hero',
      description: "Titre, sous-titre, boutons et chiffres cles",
      path: 'src/content/hero/index.json',
      fields: {
        title: { type: 'text', label: 'Titre principal (H1)', required: true },
        subtitle: { type: 'text', label: 'Sous-titre', multiline: true },
        ctaPrimary: { type: 'text', label: 'Bouton principal - texte' },
        ctaPrimaryUrl: { type: 'text', label: 'Bouton principal - lien' },
        ctaSecondary: { type: 'text', label: 'Bouton secondaire - texte' },
        ctaSecondaryUrl: { type: 'text', label: 'Bouton secondaire - lien' },
        stat1Value: { type: 'text', label: 'Chiffre cle 1 - valeur' },
        stat1Label: { type: 'text', label: 'Chiffre cle 1 - label' },
        stat2Value: { type: 'text', label: 'Chiffre cle 2 - valeur' },
        stat2Label: { type: 'text', label: 'Chiffre cle 2 - label' },
        stat3Value: { type: 'text', label: 'Chiffre cle 3 - valeur' },
        stat3Label: { type: 'text', label: 'Chiffre cle 3 - label' },
      },
    },

    about: {
      label: 'A Propos',
      description: 'Presentation du fondateur',
      path: 'src/content/about/index.json',
      fields: {
        title: { type: 'text', label: 'Titre de la section', required: true },
        content: { type: 'richtext', label: 'Texte de presentation' },
      },
    },

    contact: {
      label: 'Section Contact',
      description: 'Titre et sous-titre du formulaire',
      path: 'src/content/contact/index.json',
      fields: {
        title: { type: 'text', label: 'Titre de la section', required: true },
        subtitle: { type: 'text', label: 'Sous-titre' },
        buttonText: { type: 'text', label: 'Texte du bouton' },
        web3formsKey: { type: 'text', label: 'Cle Web3Forms (formulaire)', description: 'Collez votre cle pour recevoir vos formulaires directement. Guide : marcm.fr/aide/web3forms' },
      },
    },
  },

  collections: {
    services: {
      label: 'Services',
      description: 'Prestations de securite',
      path: 'src/content/services',
      slugField: 'name',
      labelField: 'name',
      fields: {
        name: { type: 'text', label: 'Nom du service', required: true },
        shortDescription: { type: 'text', label: 'Description courte', multiline: true },
        tag: { type: 'text', label: 'Badge (ex: Le plus demande)' },
        tagStyle: {
          type: 'select',
          label: 'Style du badge',
          options: [
            { label: 'Bleu', value: 'blue' },
            { label: 'Rouge', value: 'red' },
            { label: 'Aucun', value: 'none' },
          ],
          defaultValue: 'none',
        },
        order: { type: 'number', label: "Ordre d'affichage", defaultValue: 0 },
      },
    },

    testimonials: {
      label: 'Temoignages',
      description: 'Avis clients',
      path: 'src/content/testimonials',
      slugField: 'author',
      labelField: 'author',
      fields: {
        author: { type: 'text', label: 'Prenom / initiales', required: true },
        role: { type: 'text', label: 'Activite et ville' },
        rating: { type: 'number', label: 'Note (1 a 5)', defaultValue: 5 },
        text: { type: 'text', label: 'Temoignage', multiline: true },
      },
    },

    faq: {
      label: 'FAQ',
      description: 'Questions frequentes',
      path: 'src/content/faq',
      slugField: 'question',
      labelField: 'question',
      fields: {
        question: { type: 'text', label: 'Question', required: true },
        answer: { type: 'text', label: 'Reponse', multiline: true },
        order: { type: 'number', label: "Ordre d'affichage", defaultValue: 0 },
      },
    },

    blog: {
      label: 'Articles de blog',
      description: 'Articles securite et reglementation',
      path: 'src/content/blog',
      slugField: 'title',
      labelField: 'title',
      fields: {
        title: { type: 'text', label: "Titre de l'article", required: true },
        description: { type: 'text', label: 'Description (extrait)', multiline: true },
        date: { type: 'date', label: 'Date de publication' },
        category: {
          type: 'select',
          label: 'Categorie',
          options: [
            { label: 'Reglementation ERP', value: 'Réglementation ERP' },
            { label: 'Protection & equipements', value: 'Protection & équipements' },
            { label: 'Conseils pratiques', value: 'Conseils pratiques' },
          ],
          defaultValue: 'Réglementation ERP',
        },
        content: { type: 'richtext', label: "Contenu de l'article" },
      },
    },
  },
};

export default cmsConfig;
