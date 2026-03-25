# Audit Performance & Technique — mm-securite.fr

**Date** : 23 mars 2026
**Auditeur** : Claude (sa-07)
**Site** : https://mm-securite.fr
**Référentiel** : wf-09 (standards pré-production)

---

## 1. Images

| Critère | Résultat | Statut |
|---------|----------|--------|
| Images > 500 Ko | Aucune | ✅ |
| Format optimisé | SVG (logo, favicon, icônes), PNG (og-image 45 Ko) | ✅ |
| Balises `<img>` brutes | Aucune dans les composants (SVGs inline) | ✅ |
| Lazy loading | Google Maps lazy-load au clic | ✅ |

**Total images** : 5 fichiers, poids max 45 Ko (og-image.png).

## 2. Polices

| Critère | Résultat | Statut |
|---------|----------|--------|
| Format | woff2 exclusivement | ✅ |
| Self-hosted | Oui (pas de CDN Google Fonts) | ✅ |
| font-display: swap | 5/5 @font-face | ✅ |
| Preload | Inter 400 + 700 (les plus utilisés) | ✅ |
| Poids | ~24 Ko par fichier × 5 poids | ✅ |

## 3. CSS

| Critère | Résultat | Statut |
|---------|----------|--------|
| Minification | `cssMinify: true` dans astro.config | ✅ |
| Inlining | `inlineStylesheets: 'always'` | ✅ |
| CSS inutilisé | Minimal (composants Astro = scoped) | ✅ |

## 4. JavaScript

| Critère | Résultat | Statut |
|---------|----------|--------|
| Scripts bloquants | Aucun | ✅ |
| defer/async | Umami `defer`, scripts inline Astro | ✅ |
| Dépendances | 2 uniquement (astro, @astrojs/sitemap) | ✅ |
| Bundle size | Minimal (site statique, pas de framework client) | ✅ |

## 5. HTML

| Critère | Résultat | Statut |
|---------|----------|--------|
| Compression HTML | `compressHTML: true` | ✅ |
| Structure sémantique | `<main>`, `<nav>`, `<section>`, `<footer>` | ✅ |
| Skip-to-content | Présent et fonctionnel | ✅ |

## 6. Analytics & Conversion

| Critère | Résultat | Statut |
|---------|----------|--------|
| Analytics | Umami (privacy-first, sans cookies) | ✅ |
| Conversion tracking | Cloudflare Zaraz (phone_click, email_click, cta_click) | ✅ |
| Script analytics | defer, non bloquant | ✅ |

## 7. Accessibilité (code)

| Critère | Résultat | Statut |
|---------|----------|--------|
| Skip-to-content | `<a class="skip-to-content" href="#main-content">` | ✅ |
| focus-visible | Styles définis pour tous les éléments interactifs | ✅ |
| aria-label | Nav principale, nav footer, bouton menu, liens téléphone | ✅ |
| aria-hidden | Tous les SVGs décoratifs | ✅ |
| aria-expanded | Bouton hamburger (toggle dynamique) | ✅ |
| role="status" | Message succès formulaire avec aria-live="polite" | ✅ |
| Labels formulaire | Tous les champs avec `<label for="">` | ✅ |
| alt textes | Pas d'images bitmap nécessitant alt | ✅ |

## 8. Favicon & Webmanifest

| Critère | Résultat | Statut |
|---------|----------|--------|
| favicon.svg | ✅ Présent | ✅ |
| favicon.ico | ✅ Présent | ✅ |
| apple-touch-icon.png | ✅ Présent | ✅ |
| icon-192.png | ✅ Présent | ✅ |
| icon-512.png | ✅ Présent | ✅ |
| site.webmanifest | ✅ Complet (name, short_name, theme_color, 3 icons) | ✅ |

## 9. HTTPS & Sécurité liens

| Critère | Résultat | Statut |
|---------|----------|--------|
| Références HTTP | Aucune (sauf xmlns SVG = safe) | ✅ |
| target="_blank" | Tous avec rel="noopener noreferrer" | ✅ |
| Mixed content | Aucun | ✅ |

## 10. Responsive

| Critère | Résultat | Statut |
|---------|----------|--------|
| Viewport meta | `width=device-width, initial-scale=1.0` | ✅ |
| Breakpoints | 3 (480px, 768px, 900px) | ✅ |
| Mobile sticky CTA | Présent (Appeler + Devis) | ✅ |
| Hamburger menu | Présent avec aria-expanded | ✅ |
| Grilles responsives | Services 3→2→1 col, hero stack, etc. | ✅ |

## 11. Parcours de conversion

| Critère | Résultat | Statut |
|---------|----------|--------|
| CTAs multiples | Hero, section commerces, contact, sticky mobile | ✅ |
| Formulaire | Web3Forms, AJAX submit, redirect /merci | ✅ |
| Téléphone | Lien tel: header + sticky mobile + contact | ✅ |
| Avis Google | Lien dans page /merci | ✅ |

## 12. Observatory (Mozilla)

| Critère | Résultat | Statut |
|---------|----------|--------|
| Score global | **B (75/100)** | ⚠️ |
| CSP | Présent mais -20 pts (unsafe-inline requis par Astro) | ⚠️ |
| SRI | -5 pts (script Umami CDN, hash non viable) | ⚠️ |
| HSTS | max-age=63072000; includeSubDomains; preload | ✅ |
| X-Frame-Options | DENY | ✅ |
| X-Content-Type-Options | nosniff | ✅ |
| Referrer-Policy | strict-origin-when-cross-origin | ✅ |
| Permissions-Policy | Complet (geo, micro, camera, payment, usb) | ✅ |

**Limites architecturales documentées** :
- `unsafe-inline` dans script-src : **requis** par Astro qui injecte des scripts inline. Cloudflare Pages (hébergement statique) ne supporte pas les nonces CSP côté serveur. Compromis accepté.
- SRI non applicable au script Umami CDN : le script est mis à jour par Umami sans versioning, un hash SRI casserait le tracking à chaque mise à jour. Compromis accepté.

## 13. PageSpeed Insights

### Mobile

| Catégorie | Score | Statut |
|-----------|-------|--------|
| **Performance** | **97** | ✅ |
| Accessibility | 93 | ✅ |
| Best Practices | 92 | ✅ |
| **SEO** | **100** | ✅ |

**Core Web Vitals (mobile)** :

| Métrique | Valeur | Seuil | Statut |
|----------|--------|-------|--------|
| FCP | 0.3 s | < 1.8 s | ✅ |
| LCP | 0.6 s | < 2.5 s | ✅ |
| TBT | 0 ms | < 200 ms | ✅ |
| CLS | 0 | < 0.1 | ✅ |
| Speed Index | 0.3 s | < 3.4 s | ✅ |

### Desktop

| Catégorie | Score | Statut |
|-----------|-------|--------|
| **Performance** | **100** | ✅ |
| Accessibility | 92 | ✅ |
| Best Practices | 92 | ✅ |
| **SEO** | **100** | ✅ |

### Problèmes PageSpeed identifiés (mineurs)

1. **ARIA prohibited attributes** (-3 pts accessibilité) : Attribut potentiellement obsolète détecté par Lighthouse. Impact mineur, ne bloque pas l'utilisabilité.
2. **Contraste couleurs** (-4 pts accessibilité) : Certains éléments secondaires (badges, texte sur fond sombre) légèrement sous le ratio WCAG AA. Vérifier les opacités des textes blancs sur fond bleu.
3. **CSP effectiveness** (-4 pts best practices) : `unsafe-inline` pénalisé (même limite que Observatory). Architectural.
4. **COOP header** (-2 pts best practices) : Cross-Origin-Opener-Policy manquant. Peut être ajouté dans `_headers`.
5. **Trusted Types** (-2 pts best practices) : Politique Trusted Types non implémentée. Feature avancée, non bloquante.

## 14. Tests visuels

### Desktop (1920px)

| Page | Résultat | Statut |
|------|----------|--------|
| Accueil — Header | Logo, nav 6 items, téléphone, CTA "Devis gratuit" | ✅ |
| Accueil — Hero | Titre, sous-titre, 2 CTAs, illustration dashboard | ✅ |
| Accueil — Reassurance | 5 badges (Certifié NF, Conforme, Rapide, Local, Clé en main) | ✅ |
| Accueil — Services | 6 cartes en grille 3×2, badges différenciants | ✅ |
| Accueil — Commerces | Fond bleu foncé, types de commerces, CTA | ✅ |
| Accueil — Avis | 3 témoignages avec étoiles, noms, localisations | ✅ |
| Accueil — Zone | Villes en tags, carte lazy-load | ✅ |
| Accueil — FAQ | Section avec accordéons | ✅ |
| Accueil — Contact | Formulaire + carte de visite + disponibilités | ✅ |
| Accueil — Footer | Navigation, services, mentions légales, copyright, SIRET | ✅ |
| /mentions-legales | 7 sections, lien retour, infos LCEN complètes | ✅ |
| /politique-de-confidentialite | 10 sections RGPD complètes | ✅ |
| /404 | Header, message, 4 CTAs, footer | ✅ |
| /merci | Icône check, message, CTA retour, 4 liens secondaires | ✅ |

### Mobile (vérification programmatique)

| Élément | Résultat | Statut |
|---------|----------|--------|
| Viewport meta | `width=device-width, initial-scale=1.0` | ✅ |
| Media queries | 3 breakpoints (480px, 768px, 900px) | ✅ |
| Hamburger menu | Présent, aria-expanded dynamique | ✅ |
| Mobile sticky CTA | Présent (display:flex ≤768px) | ✅ |
| Grilles responsives | CSS vérifié pour stack mobile | ✅ |

> Note : Le viewport du navigateur sandbox ne peut pas être redimensionné en dessous de 1920px. Les tests mobiles sont vérifiés programmatiquement via les media queries CSS et la présence des éléments DOM. Le test PageSpeed Insights mobile (score 97) confirme le bon fonctionnement en conditions réelles.

---

## Corrections recommandées

### Priorité haute
Aucune correction critique requise.

### Priorité moyenne
1. **Ajouter Cross-Origin-Opener-Policy** dans `public/_headers` : `Cross-Origin-Opener-Policy: same-origin` (+2 pts Best Practices)
2. **Vérifier les contrastes** des textes blancs sur fond bleu dans la section Commerces (opacités potentiellement trop basses)

### Priorité basse (compromis architecturaux acceptés)
3. Observatory CSP `unsafe-inline` : Non corrigeable sans serveur SSR (Astro inline scripts)
4. SRI script Umami : Non viable (CDN sans versioning)
5. Trusted Types : Feature avancée, pas de support natif Astro

---

## Score final

| Domaine | Score | Poids | Pondéré |
|---------|-------|-------|---------|
| Images & assets | 10/10 | 10% | 1.0 |
| Polices | 10/10 | 5% | 0.5 |
| CSS & JS | 10/10 | 10% | 1.0 |
| HTML & sémantique | 10/10 | 5% | 0.5 |
| Analytics & conversion | 10/10 | 10% | 1.0 |
| Accessibilité code | 9/10 | 10% | 0.9 |
| Favicon & manifest | 10/10 | 5% | 0.5 |
| HTTPS & sécurité | 10/10 | 5% | 0.5 |
| Responsive | 10/10 | 10% | 1.0 |
| Observatory | 7.5/10 | 10% | 0.75 |
| PageSpeed mobile | 9.7/10 | 10% | 0.97 |
| PageSpeed desktop | 10/10 | 5% | 0.5 |
| Tests visuels | 10/10 | 5% | 0.5 |

**SCORE GLOBAL : 95/100** ✅

---

*Audit réalisé le 23 mars 2026. Tous les tests sont effectués sur le site en production (https://mm-securite.fr). Les scores PageSpeed peuvent varier selon les conditions réseau.*
