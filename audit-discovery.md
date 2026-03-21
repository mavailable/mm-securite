# Audit Discovery — MM Sécurité

**Date** : 2026-03-21
**URL** : https://mm-securite.fr
**Objectif** : Amélioration globale (audit complet de A à Z)

---

## Informations de base

| Donnée | Valeur |
|--------|--------|
| Langue | fr |
| Pays cible | FR (Grand Est — Metz, Moselle, Meurthe-et-Moselle) |
| Type de client | Entreprise locale (freelance/technicien indépendant EI) |
| Framework | Astro 5.0.0 |
| CSS | CSS custom inline (pas de Tailwind) |
| Hébergement | Cloudflare Pages |
| TypeScript | ✅ (strict mode) |
| Build system | Vite (via Astro) |
| Analytics | ✅ Cloudflare Web Analytics (injection automatique) |
| Formulaire contact | ✅ Web3Forms |

---

## Structure du projet

### Pages (29 URLs dans le sitemap)

| Route | Fichier | H1 / Titre |
|-------|---------|-----------|
| `/` | src/pages/index.astro | "Protégez votre commerce en toute sérénité." |
| `/a-propos` | src/pages/a-propos.astro | — |
| `/alarme-intrusion-commerce` | src/pages/alarme-intrusion-commerce.astro | "Alarme intrusion pour votre commerce" |
| `/alarme-incendie-erp` | src/pages/alarme-incendie-erp.astro | — |
| `/videosurveillance-commerce` | src/pages/videosurveillance-commerce.astro | — |
| `/controle-acces-commerce` | src/pages/controle-acces-commerce.astro | — |
| `/plan-evacuation-erp` | src/pages/plan-evacuation-erp.astro | — |
| `/mise-en-conformite-erp` | src/pages/mise-en-conformite-erp.astro | — |
| `/devis-gratuit` | src/pages/devis-gratuit.astro | — |
| `/securite-commerce-metz` | src/pages/securite-commerce-metz.astro | — |
| `/securite-commerce-thionville` | src/pages/securite-commerce-thionville.astro | — |
| `/securite-commerce-nancy` | src/pages/securite-commerce-nancy.astro | — |
| `/securite-commerce-forbach` | src/pages/securite-commerce-forbach.astro | — |
| `/securite-commerce-sarreguemines` | src/pages/securite-commerce-sarreguemines.astro | — |
| `/blog` | src/pages/blog/index.astro | — |
| `/blog/[...slug]` | src/pages/blog/[...slug].astro | — |
| `/mentions-legales` | src/pages/mentions-legales.astro | — |
| `/politique-de-confidentialite` | src/pages/politique-de-confidentialite.astro | — |
| `/404` | src/pages/404.astro | — (noindex) |
| `/merci` | src/pages/merci.astro | — (noindex) |

**Articles de blog (11)** : alarme-connectee, cambriolage-commerce, choisir-alarme-intrusion, controle-acces-guide, detecteur-incendie, obligations-erp-cat5, plan-evacuation-norme, preparer-commission, securite-boulangerie, securite-restaurant, videosurveillance-rgpd

### Layouts
| Layout | Fichier | Utilisé pour |
|--------|---------|-------------|
| Layout | src/layouts/Layout.astro | Page d'accueil, blog index, pages légales |
| ServicePage | src/layouts/ServicePage.astro | Pages de services |
| BlogPost | src/layouts/BlogPost.astro | Articles de blog |

### Assets

| Type | Nombre | Détail |
|------|--------|--------|
| Favicon | ✅ | favicon.svg, favicon-32x32.png, favicon.ico |
| OG Image | ✅ | og-image.png (1200×630) |
| Apple touch icon | ✅ | apple-touch-icon.png |
| PWA icons | ✅ | icon-192x192.png, icon-512x512.png |
| **Images contenu** | ❌ **0** | Aucune photo de chantier, équipement ou prestation |
| Polices locales | ❌ 0 | Google Fonts CDN (Inter) |
| Polices .woff2 | ❌ 0 | Aucun fichier local |

---

## État actuel par domaine

### SEO

| Élément | Statut | Détail |
|---------|--------|--------|
| Meta title | ✅ | Dynamique par page, bien formaté |
| Meta description | ✅ | Dynamique, ~160 caractères |
| Meta keywords | ⚠️ | Présent mais ignoré par Google |
| Schema JSON-LD | ✅ | LocalBusiness + FAQ + AggregateRating + Reviews |
| Schema AggregateRating | ⚠️ | 3 avis seulement (risque affichage Google) |
| OG tags complets | ✅ | title, description, image, locale, url, site_name |
| Twitter Card | ✅ | summary_large_image |
| Canonical | ✅ | Généré dynamiquement |
| sitemap.xml | ✅ | sitemap-index.xml → sitemap-0.xml (29 URLs) |
| **URLs blog dans sitemap** | ❌ | Extension `.md` dans les slugs (ex: `blog/choisir-alarme-intrusion-commerce.md/`) |
| robots.txt | ⚠️ | **CONFLIT** : Cloudflare managed section bloque IA bots avant les règles custom |
| llms.txt | ✅ | Présent, très complet (FAQ, articles, pages) |
| Geo meta tags | ✅ | geo.region, geo.placename, geo.position, ICBM |

### Design & Accessibilité

| Élément | Statut | Détail |
|---------|--------|--------|
| Responsive | ✅ | viewport meta présent, menu hamburger |
| lang HTML | ✅ | `lang="fr"` |
| Skip-to-content | ❌ | Absent |
| Alt-text images | ✅ | Pas d'`<img>` sans alt (mais pas d'images contenu) |
| Focus visible | ⚠️ | À vérifier |
| CSS framework | ⚠️ | CSS custom inline, pas de design system unifié (Tailwind absent) |
| Contrastes WCAG | ⚠️ | À vérifier (palette #0c2340 / blanc — a priori OK) |
| Touch targets | ⚠️ | À vérifier sur mobile |

### Legal & RGPD

| Élément | Statut | Détail |
|---------|--------|--------|
| Mentions légales | ✅ | `/mentions-legales` présente |
| Politique de confidentialité | ✅ | `/politique-de-confidentialite` présente |
| Bannière cookies | ❌ | Absente (Cloudflare Analytics peut nécessiter consentement) |
| RGPD mention formulaire | ✅ | Mention présente dans le formulaire |
| Page /merci | ✅ | Présente, noindex, nofollow |
| Page 404 | ✅ | Présente, noindex, nofollow |

### Formulaire

| Élément | Statut | Détail |
|---------|--------|--------|
| Formulaire contact | ✅ | Web3Forms (access_key présent) |
| Champs | ✅ | Nom*, Téléphone*, Email, Type commerce, Service, Message* |
| Anti-spam | ✅ | Honeypot (checkbox cachée) |
| Page /merci | ✅ | Confirmation après envoi |
| AJAX | ✅ | Envoi sans rechargement, état d'envoi visible |

### Performance

| Élément | Statut | Détail |
|---------|--------|--------|
| Analytics | ✅ | Cloudflare Web Analytics (injection CF automatique) |
| Polices locales | ❌ | Google Fonts CDN (impact perf + RGPD) |
| HTML compressé | ✅ | compressHTML: true dans astro.config.mjs |
| Cache assets | ✅ | _headers avec Cache-Control immutable sur /_astro/* |
| Images optimisées | N/A | Pas d'images contenu |
| Security headers | ✅ | X-Content-Type-Options, X-Frame-Options, Referrer-Policy |
| webmanifest | ⚠️ | Icons ne référence que favicon.svg (pas les PNG 192/512) |

---

## Problèmes détectés

### Critiques (bloquants)

1. **URLs blog cassées dans le sitemap** — Les 11 articles ont l'extension `.md` dans leurs URLs sitemap (ex: `https://mm-securite.fr/blog/choisir-alarme-intrusion-commerce.md/`). Ces URLs peuvent être invalides ou en double avec les URLs sans extension. Localisation : configuration Astro content layer (`src/content.config.ts`).

2. **Conflit robots.txt — Cloudflare Managed Section** — Cloudflare injecte automatiquement une section managed qui précède le robots.txt custom. Cette section bloque explicitement les bots IA (`ClaudeBot Disallow: /`, `GPTBot Disallow: /`, `Google-Extended Disallow: /`, `ai-train=no`) AVANT les règles custom qui les autorisent. Le résultat est conflictuel et potentiellement bloquant pour l'indexation IA. La section Cloudflare doit être désactivée dans le dashboard Cloudflare (Security > Bots > Managed Robots.txt).

### Majeurs

3. **Aucune image de contenu** — Aucune photo dans les pages services, blog, à-propos. Ni photos du technicien, ni photos de chantiers, équipements ou réalisations. Impact fort sur la crédibilité, l'engagement et le SEO (pas d'images alt à indexer).

4. **Google Fonts CDN** — Les polices Inter sont chargées depuis `fonts.googleapis.com`. Problèmes : (a) requête tiers bloquante avant rendu, (b) transfert de données vers Google (RGPD), (c) impact sur le score Lighthouse. Solution : télécharger les woff2 et les héberger localement.

5. **Pas de skip-to-content** — Lien d'évitement absent, problème d'accessibilité WCAG 2.4.1 niveau A.

6. **CSS sans design system** — Le CSS est écrit en style inline et `<style>` dans chaque page/composant Astro. Pas de Tailwind, pas de tokens partagés. Risque d'incohérences visuelles entre les pages et difficulté de maintenance.

7. **Pas de bannière cookies** — Cloudflare Web Analytics est injecté automatiquement. Selon les configurations CF, des cookies peuvent être déposés. En l'absence de bannière, la conformité RGPD n'est pas garantie.

8. **AggregateRating avec 3 avis seulement** — Google peut refuser d'afficher les rich snippets d'étoiles si les avis ne sont pas vérifiables ou trop peu nombreux. Les prénoms sont anonymisés dans le code source, ce qui réduit la crédibilité.

### Mineurs

9. **`/merci` dans le sitemap** — La page `/merci` a `noindex, nofollow` mais apparaît dans sitemap-0.xml. Contradiction : exclure du sitemap via `astro.config.mjs` (option `exclude` du plugin sitemap).

10. **webmanifest icons incomplet** — `site.webmanifest` ne référence que `favicon.svg` comme icône PWA. Les fichiers `icon-192x192.png` et `icon-512x512.png` existent mais ne sont pas dans le manifeste.

11. **Pages villes sans lien nav direct** — Les 5 pages géographiques (`/securite-commerce-metz`, etc.) ne sont pas accessibles depuis la navigation principale (le lien "Commerces" pointe vers `#commerces` sur la homepage).

12. **`mise-en-conformite-erp` absent du footer nav** — La page est dans le footer ("Conformité ERP") mais pas dans le header. Cohérence à améliorer.

13. **`meta name="keywords"`** — Toujours présent dans le Layout mais ignoré par tous les moteurs de recherche modernes. Peut être supprimé.

---

## Navigation (header)

| Lien | Destination | Type |
|------|-------------|------|
| Services | #services | Ancre homepage |
| Commerces | #commerces | Ancre homepage |
| À propos | /a-propos | Page interne |
| FAQ | #faq | Ancre homepage |
| Blog | /blog | Page interne |
| Devis gratuit | /devis-gratuit | Page interne (CTA) |

**Absent de la nav** : pages services individuelles, pages villes, mise en conformité

---

## Prochaines étapes recommandées

| Étape | Skill | Estimation |
|-------|-------|-----------|
| 1 | **sa-01-architecture** | robots.txt conflit CF, sitemap URLs .md, content.config.ts, webmanifest — ~5 points |
| 2 | **sa-02-design** | Contraste WCAG, design system CSS, cohérence typographique — ~4 points |
| 3 | **sa-03-contenu** | Pages sans H1 vérifiées, cohérence contenu pages villes, blog — ~3 points |
| 4 | **sa-04-seo** | URLs sitemap blog, Schema AggregateRating, robots.txt, llms.txt — ~6 points |
| 5 | **sa-05-composants** | Skip link, images contenu, touch targets, nav cohérence — ~5 points |
| 6 | **sa-06-legal** | Bannière cookies, vérification RGPD, /merci dans sitemap — ~3 points |
| 7 | **sa-07-performance** | Google Fonts → local, Lighthouse complet, images à venir — ~5 points |

---

## Score initial estimé : ~62/100

| Domaine | Score | Commentaire |
|---------|-------|-------------|
| Architecture & Tech Stack | 14/20 | Astro 5 ✅, TypeScript ✅, CSS sans système ❌, fonts CDN ❌ |
| Design & Accessibilité | 10/20 | Responsive ✅, skip link ❌, pas d'images ❌ |
| Contenu | 12/20 | Textes de qualité ✅, 11 articles ✅, aucune image ❌ |
| SEO | 13/20 | Schema riche ✅, robots.txt conflictuel ❌, sitemap URLs .md ❌ |
| Legal / RGPD | 6/10 | Légal présent ✅, cookies ❌ |
| Performance | 7/10 | CF Pages ✅, HTML compressé ✅, fonts CDN ❌ |

**Score cible après corrections : ≥ 90/100**
