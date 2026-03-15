# Stack technique — Sites vitrines

> Fournir ce document à Claude en début de conversation pour qu'il utilise cette stack et ces conventions sur tout nouveau projet de site web.

---

## Stack

| Couche | Choix | Raison |
|--------|-------|--------|
| Framework | **Astro 5** (SSG) | HTML statique pur, Lighthouse 100, 0 JS inutile |
| Dépendance unique | `@astrojs/sitemap` | Sitemap XML automatique |
| CSS | Vanilla CSS + custom properties | Pas de build CSS, pas de dépendance |
| JS | Vanilla JS | Uniquement pour menu mobile, formulaire AJAX, animations IntersectionObserver |
| Police | Google Fonts (Inter ou selon le projet) | Avec `preconnect` pour la perf |
| Icônes | SVG inline | Pas de lib externe, contrôle total |
| Formulaire | Web3Forms API | AJAX sans backend, gratuit, pas de serveur |
| Hébergement | Cloudflare Pages | CDN gratuit, SSL auto, domaines illimités |
| Déploiement | Wrangler CLI | `npx wrangler pages deploy dist --branch main` |

---

## Structure des fichiers

```
projet/
├── public/
│   ├── favicon.svg
│   ├── robots.txt            # Crawlers classiques + crawlers IA
│   └── llms.txt              # Fiche structurée Markdown pour LLMs
├── src/
│   ├── content.config.ts     # Content Collections Astro 5 (blog)
│   ├── content/
│   │   └── blog/*.md         # Articles Markdown avec frontmatter
│   ├── layouts/
│   │   ├── Layout.astro      # Layout principal (meta, Schema.org, OG)
│   │   └── BlogPost.astro    # Layout article (Schema Article, breadcrumb)
│   └── pages/
│       ├── index.astro       # Page principale
│       ├── mentions-legales.astro
│       ├── politique-de-confidentialite.astro
│       └── blog/
│           ├── index.astro       # Liste des articles
│           └── [...slug].astro   # Route dynamique par article
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Configs de base

### package.json
```json
{
  "name": "nom-du-projet",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/sitemap": "^3.2.0"
  }
}
```

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://domaine.fr',    // À remplacer
  integrations: [sitemap()],
  compressHTML: true,
});
```

### src/content.config.ts
```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

---

## Blog — Route dynamique

### src/pages/blog/[...slug].astro
```astro
---
import { getCollection } from 'astro:content';
import BlogPost from '../../layouts/BlogPost.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---
<BlogPost
  title={post.data.title}
  description={post.data.description}
  date={post.data.date}
  updated={post.data.updated}
  tags={post.data.tags}
>
  <Content />
</BlogPost>
```

### src/pages/blog/index.astro
- `getCollection('blog')` trié par `date` décroissante
- Grille de cartes cliquables avec date, titre, description, tags
- Schema `Blog` en JSON-LD

### Format des articles (src/content/blog/*.md)
```markdown
---
title: "Titre SEO (60-70 car.)"
description: "Meta description (150-160 car.)"
date: 2026-03-14
tags: ["mot-clé", "secteur"]
---

Contenu en prose. H2 pour les sections. Pas de H1 (le layout s'en charge).
Dernier paragraphe = CTA implicite vers les services.
```

---

## SEO — À inclure dans Layout.astro

### Meta tags
```html
<meta name="description" content={description} />
<meta name="author" content="..." />
<meta name="keywords" content="..." />

<!-- Geo (SEO local) -->
<meta name="geo.region" content="FR-XXX" />
<meta name="geo.placename" content="Ville" />
<meta name="geo.position" content="lat;lng" />
<meta name="ICBM" content="lat, lng" />

<!-- Open Graph -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:site_name" content="..." />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />

<!-- Canonical + LLMs discovery -->
<link rel="canonical" href={canonicalUrl} />
<link rel="alternate" type="text/markdown" href="/llms.txt" />
```

### Schema.org (JSON-LD dans Layout.astro)

Toujours inclure via `<script type="application/ld+json" set:html={JSON.stringify({...})} />` :

- **LocalBusiness** : nom, SIRET, adresse, téléphone, email, areaServed, OfferCatalog (services), openingHours, aggregateRating, reviews
- **FAQPage** : 6-10 questions/réponses sur le secteur d'activité

### Schema.org (JSON-LD dans BlogPost.astro)

- **Article** : headline, description, datePublished, dateModified, author, publisher
- **BreadcrumbList** : Accueil > Blog > Titre de l'article

---

## GEO — Optimisation pour les IA

### robots.txt
Autoriser tous les crawlers classiques + explicitement les crawlers IA :
`GPTBot`, `ChatGPT-User`, `Claude-Web`, `ClaudeBot`, `Anthropic-ai`, `PerplexityBot`, `Cohere-ai`, `Google-Extended`.
Inclure l'URL du sitemap.

### llms.txt (public/llms.txt)
Fichier Markdown structuré avec :
1. Informations clés (nom, statut, SIRET, localisation, contact)
2. Services proposés (liste numérotée avec descriptions)
3. Clientèle cible
4. Avantages différenciants
5. FAQ (reprise du Schema FAQPage)
6. Articles de blog (liens + descriptions)
7. Pages du site (sitemap textuel)

Référencé dans le `<head>` via `<link rel="alternate" type="text/markdown" href="/llms.txt" />`.

---

## Formulaire de contact (Web3Forms)

1. Obtenir une clé API sur https://web3forms.com (email de réception)
2. Formulaire HTML avec `input[type=hidden]` pour `access_key`, `subject`, `from_name`
3. Soumission en AJAX via `fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) })`
4. Sur succès : cacher le formulaire, afficher un message de confirmation, `scrollIntoView({ behavior: 'smooth', block: 'center' })` pour que le message soit visible (surtout sur mobile)

---

## CSS — Conventions

```css
:root {
  /* Palette : adapter la couleur primaire au projet */
  --primary-50: ...;  --primary-600: ...;  --primary-700: ...;
  --gray-50: #f8f9fa;  --gray-100: #f1f3f5;  --gray-200: #e1e5e9;
  --gray-500: #6b7280; --gray-600: #4b5563;  --gray-700: #374151;
  --gray-800: #1f2937; --gray-900: #111827;
  --white: #ffffff;
  --transition: all 0.2s ease;
  --shadow: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 40px rgba(0,0,0,0.08);
  --radius: 12px;
}
```

- Breakpoints : `900px`, `768px`, `480px`
- Animations : IntersectionObserver ajoute `.visible` → `opacity 0→1` + `translateY`
- Mobile : burger menu, CTA sticky en bas d'écran (≤768px) avec boutons Appeler + Contact
- Tout le CSS dans le fichier `.astro` principal (pas de fichier CSS séparé pour les petits sites)

---

## Déploiement

```bash
# Première fois
npm install && npm run build
npx wrangler pages project create nom-projet
npx wrangler pages deploy dist --branch main

# Mises à jour
npm run build && npx wrangler pages deploy dist --branch main
```

### Domaine personnalisé
1. Acheter sur Cloudflare Registrar (prix coûtant)
2. Dashboard → Pages → projet → Custom Domains → Add
3. SSL automatique (quelques minutes de propagation)

---

## Commandes

```bash
npm run dev        # Dev local → http://localhost:4321
npm run build      # Build statique → dist/
npm run preview    # Preview du build local
```

---

## Checklist post-déploiement

- [ ] Domaine personnalisé connecté
- [ ] Google Search Console : domaine ajouté + sitemap soumis
- [ ] Bing Webmaster Tools : domaine ajouté (alimente ChatGPT/Copilot)
- [ ] Google Business Profile créé (SEO local)
- [ ] Inscriptions annuaires (Pages Jaunes, Société.com, CCI, CMA)
- [ ] Google Rich Results Test passé (schema.org valide)
- [ ] Avis Google demandés aux premiers clients
