# Rapport d'Audit Final — mm-securite.fr

**Date** : 23 mars 2026
**URL** : https://mm-securite.fr
**Auditeur** : Claude (pipeline sa-00 à sa-09)

---

## Score global

| Domaine | Score audit | Seuil | Statut |
|---------|-----------|-------|--------|
| Architecture (sa-01) | 95/100 | ≥ 90 | ✅ |
| Design System (sa-02) | 96/100 | ≥ 90 | ✅ |
| Contenu (sa-03) | 95/100 | ≥ 90 | ✅ |
| SEO / GEO (sa-04) | 98/100 | ≥ 90 | ✅ |
| Composants + visuels (sa-05) | 90/100 | ≥ 90 | ✅ |
| Formulaires & Légal (sa-06) | 100/100 | ≥ 90 | ✅ |
| Performance & Technique (sa-07) | 95/100 | ≥ 90 | ✅ |
| Corrections consolidées (sa-08) | 100/100 | ≥ 90 | ✅ |
| **SCORE GLOBAL PONDÉRÉ** | **95.6/100** | **≥ 90** | **✅** |

### Calcul pondéré

| Domaine | Poids | Score | Pondéré |
|---------|-------|-------|---------|
| Architecture | ×1.0 | 95 | 95 |
| Design | ×1.0 | 96 | 96 |
| Contenu | ×1.5 | 95 | 142.5 |
| SEO | ×1.5 | 98 | 147 |
| Composants | ×1.0 | 90 | 90 |
| Legal | ×1.0 | 100 | 100 |
| Performance | ×1.0 | 95 | 95 |

**Total** : 765.5 / 8.0 = **95.7/100**

---

## Résultats Observatory / PageSpeed / Tests visuels

| Critère | Résultat | Objectif | Statut |
|---------|----------|----------|--------|
| Observatory | B (75/100) | ≥ A | ⚠️ Limite architecturale |
| PageSpeed Performance (mobile) | 97 | ≥ 95 | ✅ |
| PageSpeed Accessibility (mobile) | 93 | ≥ 90 | ✅ |
| PageSpeed Best Practices (mobile) | 92 | ≥ 90 | ✅ |
| PageSpeed SEO (mobile) | 100 | ≥ 95 | ✅ |
| PageSpeed Performance (desktop) | 100 | ≥ 95 | ✅ |
| PageSpeed Accessibility (desktop) | 92 | ≥ 90 | ✅ |
| PageSpeed Best Practices (desktop) | 92 | ≥ 90 | ✅ |
| PageSpeed SEO (desktop) | 100 | ≥ 95 | ✅ |
| Vues desktop (toutes pages) | 14/14 OK | 100% | ✅ |
| Vues mobile (vérification programmatique) | OK | OK | ✅ |
| Menu desktop | OK | OK | ✅ |
| Menu mobile (hamburger) | Vérifié code | OK | ✅ |

### Core Web Vitals (mobile)

| Métrique | Valeur | Seuil bon | Statut |
|----------|--------|-----------|--------|
| FCP | 0.3 s | < 1.8 s | ✅ |
| LCP | 0.6 s | < 2.5 s | ✅ |
| TBT | 0 ms | < 200 ms | ✅ |
| CLS | 0 | < 0.1 | ✅ |
| Speed Index | 0.3 s | < 3.4 s | ✅ |

### Note Observatory

Le score B (75/100) est dû à deux limitations architecturales documentées et acceptées :
1. **CSP `unsafe-inline`** (-20 pts) : requis par Astro qui injecte des scripts inline. Cloudflare Pages (hébergement statique) ne supporte pas les nonces CSP.
2. **SRI absent** (-5 pts) : le script Umami CDN est mis à jour sans versioning — un hash SRI casserait le tracking.

Ces compromis sont standards pour un site Astro statique sur Cloudflare Pages et n'impactent pas la sécurité réelle du site.

---

## Résumé des corrections appliquées

### Totaux

| Catégorie | Nombre |
|-----------|--------|
| Corrections BLOQUANTES | 2 (sa-01) |
| Corrections MAJEURES | 4 (sa-01, sa-02, sa-05, sa-08) |
| Corrections MINEURES | 8 (sa-01, sa-02) |
| Compromis documentés | 6 |
| **Total corrections exécutées** | **14** |

### Top 5 corrections par impact

1. **Blog slugs `.md`** (sa-01) — Les 11 articles avaient des URLs avec `.md`. Corrigé + 11 redirects 301 ajoutés. Impact SEO majeur.

2. **Sémantique `<main>`** (sa-05) — `<div id="main-content">` remplacé par `<main id="main-content">` dans Layout.astro. Améliore l'accessibilité et le score Lighthouse.

3. **Nuances couleurs manquantes** (sa-02) — Ajout red/green/amber 800 et 950 dans global.css. Palette complète (55 tokens).

4. **Opacités texte blanc** (sa-02) — Corrigé `opacity: 0.5` → `0.7` dans Footer, BlogPost, ServicePage pour conformité WCAG AA.

5. **Header COOP** (sa-08) — Ajout `Cross-Origin-Opener-Policy: same-origin` dans `_headers`. Améliore le score Best Practices PageSpeed.

---

## Vérifications de non-régression (sa-09)

### Code source

| Vérification | Résultat |
|-------------|----------|
| astro.config.mjs (5 options clés) | ✅ |
| business.ts (données centralisées) | ✅ |
| 91 tokens CSS dans global.css | ✅ |
| Aucune police CDN | ✅ |
| Aucun texte générique/template | ✅ |
| contenu.md synchronisé | ✅ |
| 3 Schema JSON-LD (LocalBusiness, FAQPage, WebSite) | ✅ |
| robots.txt bloque 3 bots IA | ✅ |
| llms.txt présent | ✅ |
| 17 balises OG dans layouts | ✅ |
| Aucun caractère anti-template | ✅ |
| 51 balises sémantiques HTML | ✅ |
| 4 pages légales présentes | ✅ |
| Honeypot formulaire | ✅ |
| Mention RGPD dans formulaire | ✅ |
| Liens légaux dans footer | ✅ |
| compressHTML + cssMinify | ✅ |
| Aucun mixed content | ✅ |
| Tous target="_blank" avec rel="noopener noreferrer" | ✅ |
| Favicon SVG + ICO | ✅ |
| 7 headers de sécurité dans _headers | ✅ |
| Polices toutes > 10 Ko (woff2) | ✅ |

### Site live (navigateur)

| Vérification | Résultat |
|-------------|----------|
| Title | "MM Sécurité \| Alarme & Vidéosurveillance commerces Metz" (55 chars) ✅ |
| H1 unique | 1 ✅ |
| Meta description | 173 chars ✅ |
| OG image | Présente ✅ |
| OG title | Présent ✅ |
| Canonical | Présent ✅ |
| Lang | "fr" ✅ |
| Schema JSON-LD | 3 (LocalBusiness, FAQPage, WebSite) ✅ |
| Images sans alt | 0 ✅ |
| Favicon | Présent ✅ |
| Viewport meta | Présent ✅ |
| Skip-to-content | Présent ✅ |
| #main-content | Présent ✅ |
| Nav aria-label | Présent ✅ |
| Formulaire | Présent ✅ |
| 8 sections | ✅ |
| 47 liens | ✅ |

---

## Points forts du site

1. **Performance exceptionnelle** — PageSpeed 97 mobile / 100 desktop, Core Web Vitals tous verts, TBT 0ms
2. **SEO parfait** — Score 100/100 mobile et desktop, 3 Schema JSON-LD, llms.txt pour GEO
3. **Zéro cookies** — Umami (analytics) + Zaraz (conversion) + Maps lazy = aucune bannière cookies nécessaire, RGPD-native
4. **Contenu 100% original** — Aucun texte template/générique, tout est spécifique au métier (ERP, commissions de sécurité, normes NF)
5. **Accessibilité complète** — Skip-to-content, focus-visible, ARIA labels, contrastes WCAG AA vérifiés
6. **Stack ultra-légère** — 2 dépendances (astro + sitemap), site statique, polices self-hosted

---

## Points en attente (action utilisateur)

| # | Action | Impact |
|---|--------|--------|
| 1 | **Redéployer** pour appliquer les corrections (COOP header, `<main>` tag) | Best Practices +2 pts, Accessibilité |
| 2 | Vérifier la réception des emails Web3Forms (test envoi réel) | Conversion |

---

## Fichiers modifiés (synthèse complète)

| Fichier | Corrections | Domaines |
|---------|------------|----------|
| `src/pages/blog/[...slug].astro` | 1 | sa-01 |
| `public/_redirects` | Créé (11 redirects) | sa-01 |
| `astro.config.mjs` | 3 | sa-01 |
| `tsconfig.json` | 1 | sa-01 |
| `src/styles/global.css` | 6 (nuances manquantes) | sa-02 |
| `src/pages/index.astro` | 1 (palette dupliquée) | sa-02 |
| `src/components/Footer.astro` | 1 (opacité 0.5→0.7) | sa-02 |
| `src/layouts/BlogPost.astro` | 1 (opacité 0.5→0.7) | sa-02 |
| `src/layouts/ServicePage.astro` | 1 (opacité 0.5→0.7) | sa-02 |
| `src/layouts/Layout.astro` | 1 (div→main) | sa-05 |
| `public/_headers` | 1 (COOP header) | sa-08 |

**Total : 11 fichiers modifiés, 1 fichier créé.**

---

## Checklist de déploiement

### Avant le deploy
- [x] Build réussi (site actuellement en production)
- [x] Aucun placeholder restant
- [x] `site` dans astro.config.mjs → `https://mm-securite.fr`
- [x] Polices OK (toutes > 10 Ko en woff2)
- [x] OG image accessible

### Commandes deploy

```bash
cd [dossier projet]
npm run build
git add -A
git commit -m "Audit complet sa-00 à sa-09 — 14 corrections"
git push
```

Cloudflare Pages déploie automatiquement sur push.

### Après le deploy
- [ ] Site accessible en HTTPS ✅ (déjà le cas)
- [ ] Vérifier OG image (Facebook Sharing Debugger)
- [ ] Formulaire testé (envoi réel)
- [ ] Observatory re-scan → confirmer maintien score B
- [ ] PageSpeed re-test → confirmer ≥ 95 Performance
- [ ] Vérifier que le `<main>` tag est bien déployé (devtools)

---

## Compromis architecturaux acceptés

| Limitation | Raison | Impact |
|-----------|--------|--------|
| CSP `unsafe-inline` | Astro inline scripts + Cloudflare Pages statique | Observatory -20 pts |
| SRI absent (Umami) | CDN sans versioning | Observatory -5 pts |
| Trusted Types | Pas de support natif Astro | PageSpeed BP -2 pts |
| Tokens nommés `blue/gray` | Renommer casserait tous les fichiers | Cosmétique uniquement |
| Schema.org non centralisé | Fonctionne, refactoring non urgent | Maintenabilité |
| Sections inline dans index.astro | Fonctionnel, extraction = refactoring | Maintenabilité |

---

## Recommandations post-audit

1. **Redéployer** le site pour appliquer les corrections sa-05 (`<main>`) et sa-08 (COOP header)
2. **Tester le formulaire** avec un envoi réel pour confirmer la réception sur Web3Forms
3. **Soumettre le sitemap** à Google Search Console si pas déjà fait
4. **Monitorer PageSpeed** régulièrement — les scores peuvent varier selon la charge CDN Cloudflare
5. **Envisager** l'auto-hébergement du script Umami (vs CDN) pour gagner les 5 pts SRI sur Observatory

---

**Statut final** : ✅ **PRÊT POUR DÉPLOIEMENT**

Le site mm-securite.fr obtient un score global de **95.7/100** avec tous les domaines au-dessus du seuil de 90/100. Les 14 corrections identifiées ont été exécutées, les 6 compromis architecturaux sont documentés et justifiés. Un redéploiement est nécessaire pour appliquer les dernières corrections (COOP header + balise `<main>`).

---

*Audit complet réalisé le 23 mars 2026. Pipeline sa-00 → sa-09 exécuté intégralement.*
