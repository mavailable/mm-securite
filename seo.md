# SEO & GEO — MM Sécurité

**Date** : 2026-03-29
**Domaine prévu** : https://mm-securite.fr
**Type de client** : `entreprise-locale`
**Langue** : `fr` | **Pays** : `FR`
**Basé sur** : brief.md + contenu.md
**Score** : 93/100

---

## Schema.org — Schéma principal (ElectricalContractor)

```json
{
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "name": "MM Sécurité",
  "legalName": "Marc Muller EI",
  "image": "${siteUrl}/og-image.png",
  "description": "Technicien indépendant en sécurité électronique pour commerces à Metz et Grand Est. Alarme intrusion, incendie, vidéosurveillance, contrôle d'accès et mise en conformité ERP.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Metz",
    "postalCode": "57000",
    "addressRegion": "Grand Est",
    "addressCountry": "FR"
  },
  "telephone": "+33688766648",
  "email": "marc@muller.im",
  "url": "${siteUrl}",
  "founder": {
    "@type": "Person",
    "name": "Marc Muller",
    "jobTitle": "Technicien en systèmes de sécurité"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "12:00"
    }
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Virement, Chèque, Espèces",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.1193,
    "longitude": 6.1757
  },
  "areaServed": [
    { "@type": "City", "name": "Metz" },
    { "@type": "City", "name": "Thionville" },
    { "@type": "City", "name": "Nancy" },
    { "@type": "City", "name": "Forbach" },
    { "@type": "City", "name": "Sarreguemines" },
    { "@type": "AdministrativeArea", "name": "Grand Est" },
    { "@type": "Country", "name": "Luxembourg" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de sécurité électronique",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Alarme intrusion pour commerce",
          "description": "Installation et maintenance de systèmes d'alarme anti-intrusion pour boutiques et commerces. Centrales certifiées NF A2P.",
          "url": "${siteUrl}/alarme-intrusion-commerce"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Alarme incendie ERP",
          "description": "Système de sécurité incendie conforme aux normes ERP. Détection automatique, SSI, vérification annuelle.",
          "url": "${siteUrl}/alarme-incendie-erp"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vidéosurveillance",
          "description": "Installation de caméras IP pour commerces, conforme RGPD. Surveillance à distance, enregistrement NVR.",
          "url": "${siteUrl}/videosurveillance-commerce"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Contrôle d'accès",
          "description": "Badges, digicodes et contrôle d'accès pour commerces et bureaux.",
          "url": "${siteUrl}/controle-acces-commerce"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plans d'évacuation",
          "description": "Conception de plans d'évacuation conformes NF X 08-070. Balisage et signalétique.",
          "url": "${siteUrl}/plan-evacuation-erp"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mise en conformité ERP",
          "description": "Audit et mise en conformité sécurité pour petits ERP catégories 4 et 5.",
          "url": "${siteUrl}/mise-en-conformite-erp"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "3",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sophie L." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Marc a sécurisé ma boulangerie en une journée. Alarme, caméras, tout fonctionne parfaitement. Très professionnel et réactif."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Philippe D." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Mise en conformité incendie impeccable pour mon restaurant. La commission de sécurité est passée sans aucun souci."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Nadia K." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Excellent rapport qualité-prix. Marc a pris le temps d'expliquer chaque installation. Je recommande sans hésiter."
    }
  ],
  "sameAs": [],
  "taxID": "505045450",
  "identifier": {
    "@type": "PropertyValue",
    "name": "SIRET",
    "value": "50504545000069"
  }
}
```

**Note implémentation** : `${siteUrl}` sera remplacé par `import.meta.env.SITE` ou `business.url` dans le code. Ne jamais hardcoder l'URL.

---

## Schema.org — Speakable

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "MM Sécurité — Alarme & Vidéosurveillance commerces Metz",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      "h1",
      ".hero-subtitle",
      ".faq-answer"
    ]
  },
  "url": "${siteUrl}"
}
```

**Sélecteurs CSS** :
- `h1` : titre principal de chaque page (citationnable, factuel)
- `.hero-subtitle` : introduction du hero (qui + quoi + où)
- `.faq-answer` : réponses FAQ (factuelles, autonomes)

À appliquer sur : homepage + page FAQ (si page dédiée) + pages services.

---

## Schema.org — FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quelles sont les obligations de sécurité pour un petit commerce ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tout commerce recevant du public (ERP) doit disposer d'un système de détection incendie, de plans d'évacuation conformes à la norme NF X 08-070, d'un balisage de sécurité et d'un registre de sécurité à jour. Les obligations varient selon la catégorie ERP (1 à 5) et le type d'activité. La plupart des petits commerces sont en catégorie 5 (moins de 200 personnes)."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte une installation d'alarme pour un commerce ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le coût dépend de la surface, du nombre de points de détection et du type de système (filaire ou sans fil). En tant qu'artisan indépendant basé à Metz, les tarifs sont adaptés aux petits commerces sans surcoûts de structure. Devis gratuit et personnalisé sous 48 heures."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre alarme intrusion et alarme incendie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'alarme intrusion protège contre les cambriolages : détecteurs de mouvement, contacts d'ouverture, sirène, alerte smartphone. L'alarme incendie (SSI) détecte les départs de feu : détecteurs de fumée et de chaleur, déclencheurs manuels. Pour un ERP, l'alarme incendie est une obligation légale. L'alarme intrusion est recommandée mais pas obligatoire."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un ERP et mon commerce est-il concerné ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un ERP (Établissement Recevant du Public) est tout bâtiment accueillant des personnes extérieures à l'entreprise. Si vous avez une boulangerie, un restaurant, un salon de coiffure, un cabinet médical ou toute activité ouverte au public : vous êtes un ERP. La grande majorité des petits commerces sont en catégorie 5."
      }
    },
    {
      "@type": "Question",
      "name": "La vidéosurveillance est-elle conforme au RGPD ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, à condition de respecter le cadre légal : panneau d'information visible à l'entrée, déclaration en préfecture, durée de conservation des images limitée à 30 jours maximum, accès restreint aux enregistrements. MM Sécurité installe des systèmes 100% conformes et gère toutes les démarches administratives."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous en dehors de Metz ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, MM Sécurité intervient dans toute la Moselle (Thionville, Forbach, Sarreguemines, Hagondange), en Meurthe-et-Moselle (Nancy, Pont-à-Mousson) et dans l'ensemble du Grand Est, y compris au Luxembourg pour les entreprises frontalières."
      }
    },
    {
      "@type": "Question",
      "name": "Comment se passe une intervention ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Premier contact par téléphone ou formulaire. Déplacement gratuit pour évaluer les locaux. Devis détaillé sous 48 heures. Installation planifiée selon les disponibilités du client, souvent en une journée pour les petits commerces. Formation à l'utilisation du système sur place. Maintenance annuelle proposée."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous un contrat de maintenance ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. La maintenance annuelle est recommandée et obligatoire pour l'alarme incendie (vérification SSI). Elle comprend le test de tous les équipements, le remplacement des piles et consommables, la mise à jour du registre de sécurité et un rapport de vérification."
      }
    }
  ]
}
```

---

## Schema.org — BreadcrumbList (template)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "${siteUrl}" },
    { "@type": "ListItem", "position": 2, "name": "[Nom page]", "item": "${siteUrl}/[slug]" }
  ]
}
```

**Pages avec breadcrumbs** :
- /a-propos → Accueil > À propos
- /devis-gratuit → Accueil > Devis gratuit
- /alarme-intrusion-commerce → Accueil > Alarme intrusion
- /alarme-incendie-erp → Accueil > Alarme incendie
- /videosurveillance-commerce → Accueil > Vidéosurveillance
- /controle-acces-commerce → Accueil > Contrôle d'accès
- /plan-evacuation-erp → Accueil > Plans d'évacuation
- /mise-en-conformite-erp → Accueil > Mise en conformité
- /securite-commerce-metz → Accueil > Sécurité Metz
- /securite-commerce-thionville → Accueil > Sécurité Thionville
- /securite-commerce-nancy → Accueil > Sécurité Nancy
- /securite-commerce-forbach → Accueil > Sécurité Forbach
- /securite-commerce-sarreguemines → Accueil > Sécurité Sarreguemines
- /blog → Accueil > Blog
- /blog/[slug] → Accueil > Blog > [Titre article]
- /mentions-legales → Accueil > Mentions légales
- /politique-de-confidentialite → Accueil > Politique de confidentialité

---

## Schema.org — WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MM Sécurité",
  "url": "${siteUrl}",
  "description": "Marc Muller, technicien en sécurité électronique pour commerces à Metz. Alarme intrusion, incendie, vidéosurveillance, contrôle d'accès et mise en conformité ERP. Devis gratuit sous 48h.",
  "inLanguage": "fr-FR"
}
```

---

## Open Graph — par page

### Homepage
```html
<meta property="og:title" content="MM Sécurité · Alarme & Vidéosurveillance commerces Metz">
<meta property="og:description" content="Marc Muller, technicien sécurité pour commerces à Metz. Alarme intrusion, incendie, vidéosurveillance, contrôle d'accès, conformité ERP. Devis gratuit sous 48h.">
<meta property="og:image" content="${siteUrl}/og-image.png">
<meta property="og:url" content="${siteUrl}">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="MM Sécurité">
```

### À propos
```html
<meta property="og:title" content="Marc Muller · Technicien sécurité à Metz">
<meta property="og:description" content="Technicien indépendant en sécurité électronique pour commerces à Metz et Grand Est. Un seul interlocuteur du devis à la maintenance.">
<meta property="og:image" content="${siteUrl}/og-image.png">
<meta property="og:url" content="${siteUrl}/a-propos">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="MM Sécurité">
```

### Devis gratuit
```html
<meta property="og:title" content="Devis gratuit sécurité commerce · MM Sécurité Metz">
<meta property="og:description" content="Demandez votre devis gratuit pour alarme, vidéosurveillance ou mise en conformité ERP. Réponse personnalisée sous 48h. Metz et Grand Est.">
<meta property="og:image" content="${siteUrl}/og-image.png">
<meta property="og:url" content="${siteUrl}/devis-gratuit">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="MM Sécurité">
```

### Pages services (template — adapter title/description/url par service)
```html
<meta property="og:title" content="[Service] · MM Sécurité Metz">
<meta property="og:description" content="[Description service depuis contenu.md meta]">
<meta property="og:image" content="${siteUrl}/og-image.png">
<meta property="og:url" content="${siteUrl}/[slug-service]">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="MM Sécurité">
```

### Pages locales (template)
```html
<meta property="og:title" content="Sécurité commerces [Ville] · MM Sécurité">
<meta property="og:description" content="[Description locale depuis contenu.md meta]">
<meta property="og:image" content="${siteUrl}/og-image.png">
<meta property="og:url" content="${siteUrl}/securite-commerce-[ville]">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="MM Sécurité">
```

### Blog
```html
<meta property="og:title" content="Blog sécurité commerces · MM Sécurité Metz">
<meta property="og:description" content="Conseils et obligations de sécurité pour commerces : normes ERP, RGPD vidéosurveillance, alarme intrusion, commission de sécurité.">
<meta property="og:image" content="${siteUrl}/og-image.png">
<meta property="og:url" content="${siteUrl}/blog">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="MM Sécurité">
```

### Twitter Card (toutes pages)
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[og:title]">
<meta name="twitter:description" content="[og:description]">
<meta name="twitter:image" content="${siteUrl}/og-image.png">
```

---

## Image OG — Spécifications

- **Dimensions** : 1200 x 630 px
- **Format** : PNG ou JPG, max 300 Ko
- **Contenu** : Logo MM Sécurité + "Alarme & Vidéosurveillance pour commerces" + "Metz & Grand Est"
- **Fond** : Primary-900 (bleu foncé selon thème)
- **Texte** : blanc, lisible en miniature (min 40px)
- **Marge** : rien dans les 50px de bordure
- **Fichier** : `public/og-image.png`

---

## robots.txt

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Gemini
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

Sitemap: https://mm-securite.fr/sitemap-index.xml
```

---

## llms.txt

```markdown
# MM Sécurité — Metz, France

> Technicien indépendant en sécurité électronique pour commerces à Metz et Grand Est.
> Alarme intrusion, incendie, vidéosurveillance, contrôle d'accès, mise en conformité ERP.
> Interlocuteur unique du devis à la maintenance. Devis gratuit sous 48h.
> Lundi – Vendredi : 8h – 18h · Samedi : Sur RDV.

## Pages principales

- [Accueil](https://mm-securite.fr): Présentation des services de sécurité pour commerces
- [À propos](https://mm-securite.fr/a-propos): Parcours et spécialisation de Marc Muller
- [Devis gratuit](https://mm-securite.fr/devis-gratuit): Formulaire de demande de devis
- [Alarme intrusion](https://mm-securite.fr/alarme-intrusion-commerce): Systèmes anti-intrusion NF A2P
- [Alarme incendie](https://mm-securite.fr/alarme-incendie-erp): SSI conforme ERP
- [Vidéosurveillance](https://mm-securite.fr/videosurveillance-commerce): Caméras IP conformes RGPD
- [Contrôle d'accès](https://mm-securite.fr/controle-acces-commerce): Badges, digicodes, biométrie
- [Plans d'évacuation](https://mm-securite.fr/plan-evacuation-erp): Plans NF X 08-070
- [Mise en conformité](https://mm-securite.fr/mise-en-conformite-erp): Audit et mise aux normes ERP
- [Blog](https://mm-securite.fr/blog): Articles sur la sécurité des commerces
- [Contenu complet pour LLM](https://mm-securite.fr/llms-full.txt): Version étendue

## Informations clés

- Téléphone : 06 88 76 66 48
- Email : marc@muller.im
- Zone : Metz, Thionville, Nancy, Forbach, Sarreguemines, Grand Est, Luxembourg
- Horaires : Lun-Ven 8h-18h, Sam sur RDV
- SIRET : 505 045 450 00069
```

---

## llms-full.txt

```markdown
# MM Sécurité — Metz, France

> Marc Muller, technicien indépendant en sécurité électronique pour commerces à Metz et dans le Grand Est. Installation, maintenance et mise en conformité de systèmes d'alarme, vidéosurveillance, contrôle d'accès et sécurité incendie. Interlocuteur unique du devis à la maintenance.

## Informations générales

- **Nom commercial** : MM Sécurité
- **Raison sociale** : Marc Muller EI
- **SIRET** : 505 045 450 00069
- **Dirigeant** : Marc Muller
- **Métier** : Technicien en systèmes de sécurité électronique
- **Ville** : Metz, 57000, France
- **Région** : Grand Est
- **Téléphone** : 06 88 76 66 48
- **Email** : marc@muller.im
- **Site web** : https://mm-securite.fr

## Horaires d'ouverture

- Lundi : 8h – 18h
- Mardi : 8h – 18h
- Mercredi : 8h – 18h
- Jeudi : 8h – 18h
- Vendredi : 8h – 18h
- Samedi : Sur rendez-vous
- Dimanche : Fermé

## Services

### Alarme intrusion
Détection volumétrique, contacts d'ouverture, sirène, alerte sur smartphone avec levée de doute vidéo. Centrales certifiées NF A2P. Systèmes filaires ou sans fil selon la configuration des locaux.

### Alarme incendie ERP
Détection automatique (fumée, chaleur), déclencheurs manuels, centrale SSI, diffuseurs sonores. Vérification annuelle obligatoire et tenue du registre de sécurité incluses.

### Vidéosurveillance
Caméras IP haute définition, vision nocturne infrarouge, enregistrement NVR, accès en direct sur smartphone. Installation conforme RGPD : panneau d'information, déclaration préfecture, conservation limitée à 30 jours.

### Contrôle d'accès
Badges, digicodes, lecteurs biométriques. Gestion des accès aux réserves, bureaux et zones restreintes. Historique des passages consultable.

### Plans d'évacuation
Plans conformes à la norme NF X 08-070, balisage de sécurité, signalétique photoluminescente. Préparation du dossier complet pour la commission de sécurité.

### Mise en conformité ERP
Audit complet de l'établissement, identification des manques, plan d'action et mise aux normes. Pour les petits ERP catégories 4 et 5.

### Sous-traitance professionnelle
Réalisation de chantiers sécurité en sous-traitance pour installateurs et intégrateurs sur Metz et le Grand Est.

## Clientèle cible

Petits commerces et ERP catégories 4-5 : boulangeries, restaurants, salons de coiffure, hôtels, cabinets médicaux, boutiques, salles de sport, pharmacies, crèches.

## Zone d'intervention

- **Villes principales** : Metz, Thionville, Nancy, Forbach, Sarreguemines, Épinal, Pont-à-Mousson, Hagondange
- **Départements** : Moselle (57), Meurthe-et-Moselle (54)
- **Région** : Grand Est
- **International** : Luxembourg (entreprises frontalières)

## À propos

Marc Muller est technicien indépendant en sécurité électronique, basé à Metz (57000). Spécialisé dans la sécurité des petits commerces et ERP, il installe et maintient lui-même tous les systèmes. Pas de sous-traitant, pas de standard téléphonique — un interlocuteur unique du devis à la maintenance.

Sa spécialisation : les petits commerces qui doivent respecter les mêmes normes que les grandes enseignes, mais avec des budgets serrés. Connaissance des obligations par catégorie ERP, des attentes des commissions de sécurité, et des normes applicables : NF A2P (intrusion), NF X 08-070 (plans d'évacuation), RGPD (vidéosurveillance).

Déplacement gratuit pour évaluation. Devis détaillé sous 48 heures. Installation planifiée selon les horaires du commerce, souvent en une journée. Conformité administrative incluse.

## FAQ

### Quelles sont les obligations de sécurité pour un petit commerce ?
Tout commerce recevant du public (ERP) doit disposer d'un système de détection incendie, de plans d'évacuation conformes à la norme NF X 08-070, d'un balisage de sécurité et d'un registre de sécurité à jour. Les obligations varient selon la catégorie ERP (1 à 5) et le type d'activité (M pour magasin, N pour restaurant, O pour hôtel). La plupart des petits commerces sont en catégorie 5 (moins de 200 personnes).

### Combien coûte une installation d'alarme pour un commerce ?
Le coût dépend de la surface, du nombre de points de détection et du type de système (filaire ou sans fil). En tant qu'artisan indépendant basé à Metz, les tarifs sont adaptés aux petits commerces — pas de surcoûts de structure. Devis gratuit et personnalisé sous 48 heures.

### Quelle différence entre alarme intrusion et alarme incendie ?
L'alarme intrusion protège contre les cambriolages : détecteurs de mouvement, contacts d'ouverture, sirène, alerte smartphone. L'alarme incendie (SSI) détecte les départs de feu : détecteurs de fumée et de chaleur, déclencheurs manuels. Pour un ERP, l'alarme incendie est une obligation légale. L'alarme intrusion est recommandée mais pas obligatoire.

### Qu'est-ce qu'un ERP et mon commerce est-il concerné ?
Un ERP (Établissement Recevant du Public) est tout bâtiment accueillant des personnes extérieures à l'entreprise. Boulangerie, restaurant, salon de coiffure, cabinet médical ou toute activité ouverte au public : c'est un ERP. La catégorie dépend de la capacité d'accueil. La grande majorité des petits commerces sont en catégorie 5.

### La vidéosurveillance est-elle conforme au RGPD ?
Oui, à condition de respecter le cadre légal : panneau d'information visible à l'entrée, déclaration en préfecture pour les lieux ouverts au public, durée de conservation des images limitée à 30 jours maximum, accès restreint aux enregistrements. MM Sécurité installe des systèmes conformes et gère toutes les démarches administratives.

### Intervenez-vous en dehors de Metz ?
Oui. Interventions dans toute la Moselle (Thionville, Forbach, Sarreguemines, Hagondange), en Meurthe-et-Moselle (Nancy, Pont-à-Mousson) et dans l'ensemble du Grand Est, y compris au Luxembourg pour les entreprises frontalières.

### Comment se passe une intervention ?
Premier contact par téléphone ou formulaire. Déplacement gratuit pour évaluer les locaux. Devis détaillé sous 48 heures. Installation planifiée selon les disponibilités du client, souvent en une journée. Formation à l'utilisation du système sur place. Maintenance annuelle proposée.

### Proposez-vous un contrat de maintenance ?
Oui. La maintenance annuelle est recommandée et obligatoire pour l'alarme incendie (vérification SSI). Elle comprend le test de tous les équipements, le remplacement des piles et consommables, la mise à jour du registre de sécurité et un rapport de vérification.

## Avis clients

- Sophie L. (Boulangerie, Metz Centre) — 5/5 : "Marc a sécurisé ma boulangerie en une journée. Alarme, caméras, tout fonctionne parfaitement."
- Philippe D. (Restaurant, Thionville) — 5/5 : "Mise en conformité incendie impeccable. La commission de sécurité est passée sans aucun souci."
- Nadia K. (Salon de coiffure, Nancy) — 5/5 : "Excellent rapport qualité-prix. Marc a pris le temps d'expliquer chaque installation."
```

---

## Sitemap — Configuration

```js
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mm-securite.fr',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci') && !page.includes('/404'),
    }),
  ],
});
```

Pages indexées (≈ 22) :
- / (accueil)
- /a-propos
- /devis-gratuit
- /alarme-intrusion-commerce
- /alarme-incendie-erp
- /videosurveillance-commerce
- /controle-acces-commerce
- /plan-evacuation-erp
- /mise-en-conformite-erp
- /securite-commerce-metz
- /securite-commerce-thionville
- /securite-commerce-nancy
- /securite-commerce-forbach
- /securite-commerce-sarreguemines
- /blog
- /blog/[11 articles]
- /mentions-legales
- /politique-de-confidentialite

Pages exclues : /merci, /404

---

## Meta tags — Récapitulatif

*(Tableau complet défini dans contenu.md section 13 — repris ici pour référence croisée)*

| Page | Title | Description |
|------|-------|-------------|
| Accueil | MM Sécurité · Alarme & Vidéosurveillance commerces Metz | Marc Muller, technicien sécurité pour commerces à Metz. Alarme intrusion, incendie, vidéosurveillance, contrôle d'accès, conformité ERP. Devis gratuit sous 48h. |
| À propos | Marc Muller · Technicien sécurité à Metz | Technicien indépendant en sécurité électronique pour commerces à Metz et Grand Est. Un seul interlocuteur du devis à la maintenance. |
| Devis | Devis gratuit sécurité commerce · MM Sécurité Metz | Demandez votre devis gratuit pour alarme, vidéosurveillance ou mise en conformité ERP. Réponse personnalisée sous 48h. Metz et Grand Est. |
| Alarme intrusion | Alarme intrusion commerce · MM Sécurité Metz | Installation alarme anti-intrusion pour commerces à Metz. Centrales NF A2P, alerte smartphone, levée de doute vidéo. Devis gratuit. |
| Alarme incendie | Alarme incendie ERP · MM Sécurité Metz | Système sécurité incendie conforme ERP pour commerces à Metz. Détection, SSI, vérification annuelle. Technicien certifié. |
| Vidéosurveillance | Vidéosurveillance commerce · MM Sécurité Metz | Caméras IP pour commerces à Metz, installation conforme RGPD. Vision nocturne, accès distant smartphone. Devis gratuit. |
| Contrôle d'accès | Contrôle d'accès commerce · MM Sécurité Metz | Badges, digicodes, biométrie pour commerces à Metz. Sécurisez vos réserves et zones restreintes. Devis gratuit. |
| Plans d'évacuation | Plans évacuation ERP NF X 08-070 · MM Sécurité | Plans d'évacuation conformes NF X 08-070 pour commerces. Balisage, signalétique, préparation commission de sécurité. |
| Mise en conformité | Mise en conformité ERP · MM Sécurité Metz | Audit et mise aux normes sécurité pour petits ERP (cat. 4-5) à Metz. Boulangeries, restaurants, salons. Devis gratuit. |
| Metz | Sécurité commerces Metz · MM Sécurité | Technicien sécurité pour commerces à Metz. Alarme, vidéosurveillance, incendie, contrôle d'accès. Intervention rapide, devis gratuit. |
| Thionville | Sécurité commerces Thionville · MM Sécurité | Alarme et vidéosurveillance pour commerces à Thionville. Technicien basé à Metz, interventions rapides nord Moselle. |
| Nancy | Sécurité commerces Nancy · MM Sécurité | Sécurité électronique pour commerces à Nancy. Alarme, vidéo, incendie, conformité ERP. Technicien indépendant, devis gratuit. |
| Forbach | Sécurité commerces Forbach · MM Sécurité | Installation sécurité pour commerces à Forbach. Alarme intrusion, incendie ERP, vidéosurveillance. Devis gratuit sous 48h. |
| Sarreguemines | Sécurité commerces Sarreguemines · MM Sécurité | Sécurité électronique pour commerces à Sarreguemines. Alarme, vidéo RGPD, incendie ERP. Technicien Metz, devis gratuit. |
| Blog | Blog sécurité commerces · MM Sécurité Metz | Conseils et obligations de sécurité pour commerces : normes ERP, RGPD vidéosurveillance, alarme intrusion, commission de sécurité. |

---

## Message client #3

> "Le contenu est prêt, je construis le site. Maquette dans quelques jours."

*(Ton informel — Marc est le client.)*
