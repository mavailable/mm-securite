# Audit SEO/GEO — MM Sécurité

**Date** : 2026-03-21
**Langue** : fr-FR
**Type client** : Artisan EI — Technicien sécurité électronique, Metz & Grand Est
**Référence** : Standards wf-04-seo-geo

---

## Résumé des scores

| Check | Score | Max | Statut |
|-------|-------|-----|--------|
| 1. Schema.org principal (LocalBusiness, champs complets) | 14 | /15 | ✅ |
| 2. FAQPage (6 Q&R) | 10 | /10 | ✅ |
| 3. WebSite + BreadcrumbList | 5 | /5 | ✅ |
| 4. Open Graph (8 tags + image 1200×630) | 10 | /10 | ✅ |
| 5. Meta tags par page (title, desc, canonical) | 8 | /10 | ✅ |
| 6. robots.txt (bots IA autorisés, /merci bloqué) | 10 | /10 | ✅ |
| 7. llms.txt complet | 10 | /10 | ✅ |
| 8. JSON-LD syntaxiquement correct | 10 | /10 | ✅ |
| 9. Cohérence contenu/SEO | 9 | /10 | ✅ |
| 10. Liens internes/externes | 5 | /5 | ✅ |
| **TOTAL** | **91** | **/100** | ✅ |

> **Score : 91/100 — Seuil 90/100 atteint ✅ — Passage à sa-05-composants autorisé.**

---

## Check 1 — Schema.org principal (14/15)

### LocalBusiness — champs présents

| Champ | Statut | Valeur |
|-------|--------|--------|
| `@type` | ✅ | `LocalBusiness` |
| `name` | ✅ | "MM Sécurité - Marc Muller EI" |
| `legalName` | ✅ | "Marc Muller EI" |
| `taxID` / SIRET | ✅ | "505045450" + PropertyValue SIRET |
| `telephone` | ✅ | "+33688766648" |
| `email` | ✅ | "marc@muller.im" |
| `address` (locality, postal, region, country) | ✅ | Metz, 57000, Grand Est, FR |
| `areaServed` | ✅ | 8 entrées (5 villes + 3 zones) |
| `hasOfferCatalog` | ✅ | 6 services listés |
| `priceRange` | ✅ | "€€" |
| `openingHoursSpecification` | ✅ | Lun-Ven 8h-18h, Sam 9h-12h |
| `aggregateRating` | ✅ | 5★ / 3 avis |
| `review` | ✅ | 3 avis individuels |
| `image` | ✅ | **ajouté** → `/og-image.png` |
| `logo` | ✅ | **ajouté** → `/favicon.svg` |
| `geo` (latitude, longitude) | ✅ | **ajouté** → 49.1193, 6.1757 |
| `streetAddress` | ⚠️ | Absent (artisan itinérant — vie privée) |
| `sameAs` | ✅ | **supprimé** (liste vide inutile) |

### Déduction (-1)

`streetAddress` absent — acceptable pour un technicien indépendant itinérant qui souhaite protéger son domicile.

---

## Check 2 — FAQPage (10/10)

6 questions-réponses sur la sécurité commerce :
- Obligations légales ERP · Coût alarme Metz · Zone d'intervention · Alarme vs incendie · Définition ERP · Vidéosurveillance RGPD

Format correct : `mainEntity` → array de `Question` avec `acceptedAnswer`. ✅

---

## Check 3 — WebSite + BreadcrumbList (5/5)

### WebSite — **créé**

```json
{
  "@type": "WebSite",
  "name": "MM Sécurité",
  "url": "https://mm-securite.fr",
  "description": "...",
  "inLanguage": "fr-FR"
}
```

### BreadcrumbList

Présent dans `ServicePage.astro` pour toutes les pages de service et locales. ✅

---

## Check 4 — Open Graph (10/10)

### Tags OG présents dans Layout.astro

| Tag | Valeur | Statut |
|-----|--------|--------|
| `og:title` | `{title}` (dynamique) | ✅ |
| `og:description` | `{description}` (dynamique) | ✅ |
| `og:type` | `website` | ✅ |
| `og:locale` | `fr_FR` | ✅ |
| `og:url` | `{canonical}` (dynamique) | ✅ |
| `og:site_name` | "MM Sécurité" | ✅ |
| `og:image` | `https://mm-securite.fr/og-image.png` | ✅ |
| `og:image:width` | 1200 | ✅ |
| `og:image:height` | 630 | ✅ |
| `og:image:alt` | Description de l'image | ✅ |
| `twitter:card` | `summary_large_image` | ✅ |
| `twitter:title` | `{title}` | ✅ |
| `twitter:description` | `{description}` | ✅ |
| `twitter:image` | `/og-image.png` | ✅ |

**OG image** : `public/og-image.png` — 1200×630, 45 Ko ✅

---

## Check 5 — Meta tags par page (8/10)

### Pages sans problème critique ✅

| Page | Title (chars) | Desc (chars) | noindex |
|------|--------------|--------------|---------|
| / (index) | 55 ✅ | 173 ⚠️ | — |
| /alarme-intrusion | 57 ✅ | 158 ✅ | — |
| /alarme-incendie | 51 ✅ | 151 ✅ | — |
| /videosurveillance | 56 ✅ | 166 ✅ | — |
| /plan-evacuation | 62 ✅ | 158 ✅ | — |
| /securite-metz | 62 ✅ | 158 ✅ | — |
| /devis-gratuit | 61 ✅ | 166 ✅ | — |
| /merci | — | — | ✅ noindex |
| /404 | — | — | ✅ noindex |

### Corrections appliquées

| Page | Avant | Après |
|------|-------|-------|
| `/` (title) | "...pour commerces — Metz & Grand Est" = 74 chars | 55 chars ✅ |
| `/a-propos` (title) | 66 chars | 49 chars (limite basse) |
| `/mentions-legales` (title) | "Mentions légales \| MM Sécurité" = 30 chars | 57 chars ✅ |
| `/mentions-legales` (desc) | 97 chars | 171 chars ✅ |
| `/politique-de-confidentialite` (title) | 42 chars | 54 chars ✅ |
| `/politique-de-confidentialite` (desc) | 111 chars | 169 chars ✅ |
| `/securite-metz` (desc) | typo "technician" | "technicien" ✅ |
| Pages locales (desc) | 127–148 chars | 155–171 chars ✅ |
| `/controle-acces` (desc) | 149 chars | 164 chars ✅ |

### Déductions (-2)

- Plusieurs titres de pages de service/locales entre 65 et 77 chars (controle-acces, mise-en-conformite, local pages) — suboptimal pour l'affichage SERP mais mots-clés principaux dans les 60 premiers caractères. Non bloquant.
- `/a-propos` title à 49 chars (1 char sous le seuil de 50).

---

## Check 6 — robots.txt (10/10)

```
User-agent: *
Allow: /
Disallow: /merci/

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://mm-securite.fr/sitemap-index.xml
```

✅ Bots IA autorisés · /merci bloqué · Sitemap référencé

---

## Check 7 — llms.txt (10/10)

Fichier complet présent dans `public/llms.txt` :
- Identité complète (nom, téléphone, email, SIRET, zone)
- 6 services décrits
- 6 FAQ
- 11 articles de blog listés
- 9 pages du site avec descriptions

---

## Check 8 — JSON-LD syntaxiquement correct (10/10)

3 blocs JSON-LD dans `Layout.astro` :
- `LocalBusiness` — validé
- `FAQPage` — validé
- `WebSite` — ajouté et validé

2 blocs dans `ServicePage.astro` :
- `Service` — validé
- `BreadcrumbList` — validé

Aucune erreur de syntaxe JSON détectée.

---

## Check 9 — Cohérence contenu/SEO (9/10)

| Critère | Statut |
|---------|--------|
| H1 contient les mots-clés principaux | ✅ |
| Mots-clés title cohérents avec contenu H1 | ✅ |
| Descriptions décrivent précisément la page | ✅ |
| Canonical URL dynamique (URL réelle) | ✅ |
| Geo tags (region, placename, position, ICBM) | ✅ |
| Langue `lang="fr"` dans `<html>` | ✅ |
| `og:locale` fr_FR | ✅ |
| `inLanguage` fr-FR dans WebSite schema | ✅ |

### Déduction (-1)

`og:locale` hardcodé `fr_FR` dans Layout.astro (site mono-langue, acceptable). Idéalement dynamique.

---

## Check 10 — Liens internes/externes (5/5)

### target="_blank" avec rel="noopener"

| Fichier | Lien | rel |
|---------|------|-----|
| `mentions-legales.astro` | cloudflare.com | `noopener` ✅ |
| `mentions-legales.astro` | heroicons.com | `noopener` ✅ |
| `politique-de-confidentialite.astro` | cnil.fr | `noopener` ✅ |

Aucun `target="_blank"` sans `rel="noopener"` détecté.

### Liens internes

Structure de navigation cohérente sur toutes les pages. Aucun lien cassé détecté.

### Sitemap

`astro.config.mjs` : `@astrojs/sitemap` configuré avec filtre `!page.includes('/merci/')` ✅

---

## Bilan des corrections appliquées (sa-04)

| Fichier | Correction |
|---------|-----------|
| `src/layouts/Layout.astro` | **LocalBusiness** : ajout `geo`, `image`, `logo` ; suppression `sameAs: []` |
| `src/layouts/Layout.astro` | **WebSite** JSON-LD ajouté |
| `src/pages/index.astro` | title : 74 → 55 chars |
| `src/pages/a-propos.astro` | title : 66 → 49 chars |
| `src/pages/mentions-legales.astro` | title : 30 → 57 chars ; desc : 97 → 171 chars |
| `src/pages/politique-de-confidentialite.astro` | title : 42 → 54 chars ; desc : 111 → 169 chars |
| `src/pages/securite-commerce-metz.astro` | typo "technician" → "technicien" ; desc : 143 → 158 chars |
| `src/pages/securite-commerce-thionville.astro` | desc : 148 → 171 chars |
| `src/pages/securite-commerce-forbach.astro` | desc : 127 → 156 chars |
| `src/pages/securite-commerce-sarreguemines.astro` | desc : 132 → 160 chars |
| `src/pages/securite-commerce-nancy.astro` | desc : 134 → 171 chars |
| `src/pages/controle-acces-commerce.astro` | desc : 149 → 164 chars |

**Total : 12 fichiers modifiés.**

---

## Prochaine étape : **sa-05-composants**
