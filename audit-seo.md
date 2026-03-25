# Audit SEO/GEO — MM Sécurité (mm-securite.fr)

**Date** : 2026-03-23 (sa-04 — 2ème passe)
**Référence** : Standards wf-04-seo-geo

---

## Résumé

| Check | Score | Max | Statut |
|-------|-------|-----|--------|
| Schema.org principal (LocalBusiness complet) | 15 | /15 | ✅ |
| FAQPage (6 Q&R) | 10 | /10 | ✅ |
| WebSite + BreadcrumbList | 5 | /5 | ✅ |
| Open Graph (6 tags + image 1200×630) | 10 | /10 | ✅ |
| Meta tags par page (title, desc, canonical) | 10 | /10 | ✅ |
| robots.txt (bots IA autorisés) | 10 | /10 | ✅ |
| llms.txt complet | 10 | /10 | ✅ |
| JSON-LD syntaxiquement correct | 10 | /10 | ✅ |
| Cohérence contenu/SEO | 9 | /10 | ✅ |
| Liens internes/externes | 5 | /5 | ✅ |
| **TOTAL** | **94** | **/100** | **✅ PASS** |

---

## Check 1 — Schema.org LocalBusiness (15/15)

Schéma complet dans `Layout.astro` avec tous les champs obligatoires : name, legalName, taxID/SIRET, description, url, telephone (format international), email, address (Metz, 57000, Grand Est, FR), areaServed (5 villes + 3 zones admin), hasOfferCatalog (6 services), priceRange, openingHoursSpecification, image, logo, geo, aggregateRating (5/5, 3 avis), et 3 reviews détaillées.

## Check 2 — FAQPage (10/10)

6 Q&R dans `Layout.astro`, format correct (`mainEntity` → `Question` + `acceptedAnswer`). Couvre : obligations ERP, coûts, zone, technique, RGPD.

## Check 3 — WebSite + BreadcrumbList (5/5)

WebSite (Layout.astro) : name, url, description, inLanguage ✅
BreadcrumbList (ServicePage.astro) : sur toutes les pages service ✅

## Check 4 — Open Graph (10/10)

Tous les tags OG + Twitter Card présents dans les 3 layouts. OG image : 1200×630, 45 Ko, PNG ✅

## Check 5 — Meta tags (10/10)

12 pages vérifiées — toutes avec title (30-62 chars), description, canonical. Pages /merci et /404 : noindex ✅

## Check 6 — robots.txt (10/10)

Bots IA autorisés (GPTBot, ClaudeBot, PerplexityBot, GoogleOther). /merci bloqué. Sitemap référencé ✅

## Check 7 — llms.txt (10/10)

Fichier exhaustif (~120 lignes) : infos clés, 7 services, FAQ, 11 articles blog, pages. Lien `<link rel="alternate">` dans le head ✅

## Check 8 — JSON-LD syntaxe (10/10)

8 blocs JSON-LD via `JSON.stringify()` d'Astro → syntaxe valide garantie ✅

## Check 9 — Cohérence (9/10)

Données SEO cohérentes avec le contenu affiché. **-1** : données Schema hardcodées dans les layouts plutôt que centralisées via `business.ts`.

## Check 10 — Liens (5/5)

11 pages internes vérifiées, liens externes avec `rel="noopener noreferrer"`, canonical cohérent ✅

---

## Corrections effectuées

**Aucune correction nécessaire.** Le SEO/GEO est complet et conforme.

## Recommandations non bloquantes

1. Centraliser les données Schema.org depuis `business.ts`
2. Ajouter `i18n` config au sitemap (optionnel mono-langue)
