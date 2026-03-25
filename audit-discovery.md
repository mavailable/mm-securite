# Audit Discovery — MM Sécurité

**Date** : 2026-03-23
**URL** : https://mm-securite.fr
**Objectif** : Amélioration globale
**Auditeur** : Claude (pipeline sa-00)

---

## Informations de base

| Donnée | Valeur |
|--------|--------|
| Langue | fr |
| Pays cible | FR (Grand Est, Metz) |
| Type de client | Entreprise locale (technicien sécurité indépendant) |
| Framework | Astro 5.x |
| CSS | CSS custom avec variables (design tokens dans global.css) — **pas de Tailwind** |
| Hébergement | Cloudflare Pages (projet `mm-securite`) |
| TypeScript | Oui (strict) |
| Build system | Vite (intégré Astro) |
| Node.js | v22 |
| Analytics | Umami (cloud.umami.is) — privacy-first, pas de cookies |
| Formulaire | Web3Forms |
| Polices | Inter auto-hébergée (5 graisses woff2, ~24 Ko chacune) |
| Contenu blog | Astro Content Collections (Markdown) |

---

## Structure du projet

### Pages (16 pages + blog dynamique)

| Route | Fichier | Type |
|-------|---------|------|
| `/` | src/pages/index.astro | Accueil |
| `/a-propos` | src/pages/a-propos.astro | À propos |
| `/devis-gratuit` | src/pages/devis-gratuit.astro | Formulaire devis |
| `/alarme-intrusion-commerce` | src/pages/alarme-intrusion-commerce.astro | Service |
| `/alarme-incendie-erp` | src/pages/alarme-incendie-erp.astro | Service |
| `/videosurveillance-commerce` | src/pages/videosurveillance-commerce.astro | Service |
| `/controle-acces-commerce` | src/pages/controle-acces-commerce.astro | Service |
| `/plan-evacuation-erp` | src/pages/plan-evacuation-erp.astro | Service |
| `/mise-en-conformite-erp` | src/pages/mise-en-conformite-erp.astro | Service |
| `/securite-commerce-metz` | src/pages/securite-commerce-metz.astro | Ville/Geo |
| `/securite-commerce-thionville` | src/pages/securite-commerce-thionville.astro | Ville/Geo |
| `/securite-commerce-nancy` | src/pages/securite-commerce-nancy.astro | Ville/Geo |
| `/securite-commerce-forbach` | src/pages/securite-commerce-forbach.astro | Ville/Geo |
| `/securite-commerce-sarreguemines` | src/pages/securite-commerce-sarreguemines.astro | Ville/Geo |
| `/mentions-legales` | src/pages/mentions-legales.astro | Légal |
| `/politique-de-confidentialite` | src/pages/politique-de-confidentialite.astro | Légal |
| `/merci` | src/pages/merci.astro | Confirmation formulaire |
| `/404` | src/pages/404.astro | Erreur |
| `/blog` | src/pages/blog/index.astro | Liste articles |
| `/blog/[slug]` | src/pages/blog/[...slug].astro | Article (11 articles) |

### Layouts (3)

| Layout | Fichier | Utilisé pour |
|--------|---------|-------------|
| Layout | src/layouts/Layout.astro | Pages principales |
| BlogPost | src/layouts/BlogPost.astro | Articles de blog |
| ServicePage | src/layouts/ServicePage.astro | Pages service |

### Composants

**Aucun dossier `src/components/` détecté.** Tous les composants sont inline dans les pages Astro.

### Articles de blog (11)

| Slug | Sujet |
|------|-------|
| obligations-securite-erp-categorie-5 | Obligations ERP cat.5 |
| choisir-alarme-intrusion-commerce | Guide alarme intrusion |
| videosurveillance-commerce-rgpd | Vidéosurveillance & RGPD |
| preparer-commission-securite-commerce | Commission de sécurité |
| cambriolage-commerce-que-faire | Réaction cambriolage |
| controle-acces-commerce-guide | Guide contrôle d'accès |
| detecteur-incendie-obligatoire-commerce | Détection incendie |
| plan-evacuation-norme-nf-x-08-070 | Plans d'évacuation NF |
| securite-restaurant-obligations-erp-type-n | Sécurité restaurant ERP N |
| alarme-connectee-smartphone-commerce | Alarme connectée smartphone |
| securite-boulangerie-patisserie | Sécurité boulangerie |

### Assets

| Type | Nombre | Taille | Problèmes |
|------|--------|--------|-----------|
| Images | 0 (hors favicon/OG) | — | Pas de photos de réalisations |
| Polices woff2 | 5 (Inter 400-800) | ~121 Ko total | ✅ Tailles correctes |
| Favicon SVG | 1 | 4 Ko | ✅ |
| Favicon ICO | 1 | 4 Ko | ✅ |
| Favicon PNG 32x32 | 1 | 4 Ko | ✅ |
| Apple Touch Icon | 1 | 4 Ko | ✅ |
| Icons PWA | 2 (192, 512) | 12 Ko | ✅ |
| OG Image | 1 | 48 Ko | ✅ |

### Données et configuration

| Fichier | Rôle |
|---------|------|
| src/content.config.ts | Définition collection blog (title, description, date, tags, image) |
| src/styles/global.css | Design tokens (259 lignes) — palette, shadows, radius, transitions, typo |
| contenu.md | Contenu texte du site |
| public/_headers | Headers sécurité Cloudflare (CSP, HSTS, X-Frame-Options) |
| public/_redirects | Redirects 301 pour slugs .md cassés |
| .env.example | Variables Web3Forms + SITE_URL |
| TEMPLATE-SITE-ASTRO.md | Documentation template |

---

## État actuel par domaine

### SEO

| Critère | État | Détails |
|---------|------|---------|
| Meta title | ✅ | "MM Sécurité \| Alarme & Vidéosurveillance commerces Metz" |
| Meta description | ✅ | Présente et descriptive |
| Meta keywords | ✅ | Présentes (pertinence à vérifier) |
| Schema LocalBusiness | ✅ | Complet (nom, SIRET, adresse, téléphone, email, services) |
| Schema FAQPage | ✅ | Présent sur accueil |
| Schema WebSite | ✅ | Présent |
| OG tags | ✅ | Complets (title, desc, image 1200×630, locale fr_FR, url) |
| Twitter Card | ✅ | summary_large_image |
| Canonical | ✅ | Dynamique via Astro.url |
| sitemap.xml | ✅ | Via @astrojs/sitemap (exclut /merci) |
| robots.txt | ✅ | Allow: /, bots IA autorisés (GPTBot, ClaudeBot, PerplexityBot) |
| llms.txt | ✅ | Complet et détaillé |
| Geo meta | ✅ | geo.region FR-GES, geo.placename Metz, ICBM |
| LLMs link tag | ✅ | `<link rel="alternate" type="text/markdown">` |

### Design & Accessibilité

| Critère | État | Détails |
|---------|------|---------|
| Responsive | ✅ | Viewport meta présent, header desktop + mobile |
| Police Inter | ✅ | Auto-hébergée, font-display: swap, latin subset |
| Design tokens | ✅ | CSS custom properties (palette blue 50-950, gray 50-950) |
| WCAG AA contraste | ⚠️ | Guide dans global.css mais à vérifier en pratique |
| Skip-to-content | ❌ | Absent |
| Alt-text images | ✅ | 0 images sans alt (0 images total sur accueil) |
| Focus visible | ⚠️ | À vérifier |
| Touch targets 44px | ⚠️ | À vérifier |

### Legal & RGPD

| Critère | État | Détails |
|---------|------|---------|
| Mentions légales | ✅ | Page `/mentions-legales` |
| Politique confidentialité | ✅ | Page `/politique-de-confidentialite` |
| Bannière cookies | ✅ Non nécessaire | Umami = pas de cookies, Web3Forms = pas de cookies |
| RGPD mention formulaire | ✅ | Texte + lien politique de confidentialité |
| Lien politique dans formulaire | ✅ | Lien cliquable vers /politique-de-confidentialite |

### Formulaire

| Critère | État | Détails |
|---------|------|---------|
| Formulaire contact | ✅ | Sur accueil (section #contact) + page /devis-gratuit |
| Service | ✅ | Web3Forms |
| Champs | ✅ | Nom*, Téléphone*, Email, Type de commerce, Besoin, Message* |
| Anti-spam | ⚠️ | À vérifier (honeypot Web3Forms ?) |
| Page /merci | ✅ | Existe |
| CSP form-action | ✅ | `form-action 'self' https://api.web3forms.com` |

### Performance & Technique

| Critère | État | Détails |
|---------|------|---------|
| Analytics | ✅ | Umami (privacy-first, RGPD natif) |
| Polices locales | ✅ | woff2 auto-hébergées (pas de Google Fonts) |
| Preload fonts | ✅ | Inter 400 et 700 preloadées |
| compressHTML | ✅ | `compressHTML: true` dans astro.config |
| CSS minifié | ✅ | `cssMinify: true` dans vite config |
| Inline stylesheets | ✅ | `inlineStylesheets: 'always'` |
| Headers sécurité | ✅ | CSP, HSTS, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy |
| Cache statique | ✅ | `/_astro/*` → 1 an immutable, favicon 1 jour, OG 1 semaine |
| Webmanifest | ✅ | PWA-ready (icons, theme_color, lang) |
| theme-color | ✅ | #0c2340 |
| Redirects .md | ✅ | 11 redirects 301 pour slugs Astro 5 cassés |

---

## Problèmes détectés

### Critiques (bloquants)

*Aucun problème critique détecté.*

### Majeurs

1. **Pas de dossier `src/components/`** — Tous les composants sont inline dans les pages. Maintenance difficile, pas de réutilisation. Hero, Services, Témoignages, FAQ, CTA, Header, Footer devraient être des composants séparés.
2. **Pas de `business.ts` / fichier de données centralisé** — Les données métier (nom, SIRET, téléphone, services) sont hardcodées dans les pages et le Layout plutôt que centralisées.
3. **Pas de Tailwind CSS** — CSS custom avec variables uniquement. Moins maintenable qu'un framework utilitaire, plus sujet aux incohérences.
4. **Commentaire résiduel** — Layout.astro ligne 59 : `<!-- Google Fonts — non render-blocking -->` alors qu'aucun Google Fonts n'est utilisé.
5. **Mots collés dans les H2** — "Tout ce qu'il faut poursécuriser", "Pensé pour lespetits commerces", "Ce que disentmes clients", "Basé à Metz,j'interviens" — espaces manquants entre les lignes du HTML.

### Mineurs

1. **Skip-to-content absent** — Pas de lien d'accessibilité pour sauter au contenu principal.
2. **0 images de contenu** — Le site n'a aucune photo de réalisations ou d'équipement. Tout est iconographique.
3. **Fichiers d'audit dans la racine** — audit-*.md, audit-mm-securite.docx ne devraient pas être dans le repo production.
4. **`.wrangler/cache/` potentiellement versionné** — Vérifier que .gitignore l'exclut.
5. **URL site dans config** — `astro.config.mjs` dit `mm-securite.fr`, le domaine est correct mais le dossier projet s'appelle `mm-alarmes`.

---

## Architecture des sections (page d'accueil)

| Section | Contenu | État |
|---------|---------|------|
| Header | Logo + nav (Services, Commerces, À propos, FAQ, Blog) + CTA "Devis gratuit" + téléphone | ✅ |
| Hero | H1 + sous-titre + 2 CTAs + badge + illustration dashboard + compteurs | ✅ |
| Trust bar | Certifié NF, Conforme RGPD & ERP, Rapide, Local, Clé en main | ✅ |
| Services | 6 cartes services avec icônes et descriptions | ✅ |
| Commerces | Section sombre "Pensé pour les petits commerces" + types d'établissements | ✅ |
| Témoignages | 3 témoignages (Sophie L., Philippe D., Nadia K.) + disclaimer confidentialité | ✅ |
| Zone intervention | "Basé à Metz, j'interviens dans tout le Grand Est" | ✅ |
| FAQ | Questions fréquentes (accordéon) | ✅ |
| Contact | Formulaire + infos contact + disponibilités (L-V 8h-18h, Sam sur RDV) | ✅ |
| Footer | Logo + desc + nav + services + mentions légales + copyright 2026 + crédit Marc M. | ✅ |

---

## Prochaines étapes recommandées

| Étape | Skill | Estimation | Priorité |
|-------|-------|-----------|----------|
| Architecture | sa-01 | 5-8 points (composants, business.ts, commentaires résiduels) | Haute |
| Design | sa-02 | 3-5 points (contraste WCAG, absence Tailwind) | Moyenne |
| Contenu | sa-03 | 3-5 points (H2 collés, 0 photos, qualité textes) | Moyenne |
| SEO | sa-04 | 1-3 points (SEO déjà très bon, vérification fine) | Basse |
| Composants | sa-05 | 5-8 points (inline→composants, responsive, accessibilité visuelle) | Haute |
| Legal | sa-06 | 1-2 points (vérification formulaire anti-spam) | Basse |
| Performance | sa-07 | 2-4 points (Lighthouse, Observatory, PageSpeed) | Moyenne |

---

## Score initial estimé : ~75/100

Le site est bien construit et fonctionnel avec un SEO solide et de bonnes pratiques techniques (headers sécurité, polices locales, analytics privacy-first). Les principaux axes d'amélioration sont :

- **Architecture** : extraction en composants modulaires, centralisation des données métier
- **Accessibilité** : skip-to-content, contraste WCAG AA validé, focus visible
- **Contenu** : correction des mots collés dans les H2, ajout de photos

**Score cible : ≥ 90/100**
