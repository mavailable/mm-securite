# TODO — mm-securite.fr

> Audit complet du 2026-03-25 — Score : 91/100

## Corrections appliquees dans cet audit

- [x] **P1 HTML** : Double `<main>` sur mentions-legales et politique-de-confidentialite (Layout.astro wrap deja en `<main>`) -> change en `<section>`
- [x] **P1 Analytics** : Umami manquant sur ServicePage, BlogPost, devis-gratuit, merci, blog/index -> ajoute partout
- [x] **P1 Contenu** : Typo "technician" -> "technicien" (securite-commerce-metz)
- [x] **P1 Contenu** : Typo "de vos soins" -> "des forces de l'ordre" (alarme-intrusion-commerce)
- [x] **P1 Contenu** : Demonym "mettziens" -> "messins" (securite-commerce-metz)
- [x] **P1 Contenu** : "pompes a chaleur" hors contexte supprime (securite-commerce-metz)
- [x] **P1 Contenu** : "dysfontionne" -> "dysfonctionne" (securite-commerce-metz)
- [x] **P2 Contenu** : "controle reglementaires" -> "controles reglementaires" (a-propos)
- [x] **P2 Contenu** : "Depuis plus de 15 ans" non verifiable supprime (securite-commerce-metz)
- [x] **P2 SEO** : Annee hardcodee 2026 -> dynamique `new Date().getFullYear()` (devis-gratuit footer)
- [x] **P2 WCAG** : Credit link `opacity:0.7` -> `0.85` sur fond sombre (Footer, ServicePage, BlogPost)
- [x] **P2 A11y** : `aria-hidden="true"` manquant sur 2 SVG decoratives (index.astro reassurance)
- [x] **P3 SEO** : Favicons + manifest + theme-color manquants sur blog/index -> ajoutes

## P1 — Haute priorite

_Aucun probleme critique restant._

## P2 — Moyenne priorite

- [ ] **Image OG** : Verifier que `/public/og-image.png` est bien genere et a jour (1200x630). Non verifiable sans acces au fichier image.
- [ ] **Formulaire devis-gratuit** : Double `<div class="dg-form">` imbrique (le form a la meme classe que son wrapper). Fonctionnel mais semantiquement incorrect.
- [ ] **Blog images** : Verifier que les images frontmatter des articles sont presentes dans `/public/` ou le dossier assets.
- [ ] **SRI Umami** : L'attribut `integrity` est present sur Layout.astro mais absent des autres pages ou Umami a ete ajoute. Harmoniser ou retirer (le SRI peut casser si le script CDN est mis a jour).
- [ ] **Content Security Policy** : Ajouter `https://cloud.umami.is` dans `script-src` du `_headers` si pas deja fait (deja present: OK).
- [ ] **Banniere cookies** : Meme si aucun cookie traceur, une banniere informative renforce la confiance. Optionnel car Umami est cookie-free.
- [ ] **Schema.org reviews** : Les avis affichent "datePublished" absent dans le JSON-LD. Google recommande de l'ajouter.

## P3 — Basse priorite

- [ ] **Rate limiting formulaire** : Ajouter un debounce/rate limit cote client sur les soumissions Web3Forms pour eviter le spam.
- [ ] **Preload fonts** : Les pages standalone (ServicePage, BlogPost, devis-gratuit, blog/index) ne preload pas Inter -> leger delai FOUT possible.
- [ ] **Tokens CSS dupliques** : ServicePage, BlogPost, blog/index, devis-gratuit redefinissent les variables `:root` au lieu d'importer global.css. Pas bloquant mais maintenance plus lourde.
- [ ] **Zone.astro** : Le placeholder carte utilise `onclick` inline au lieu d'un event listener propre. Fonctionnel mais non ideal.
- [ ] **Mise en conformite ERP** : La page `/mise-en-conformite-erp` n'a pas de lien retour depuis le footer ou la nav. Ajouter dans le maillage interne.
- [ ] **Blog SEO** : Articles sans `updated` dans le frontmatter. Ajouter les dates de derniere mise a jour pour le freshness signal Google.

---

## Resume audit par etape

| Etape | Score | Notes |
|-------|-------|-------|
| SA-00 Discovery | OK | Astro 5 + Sitemap, Cloudflare Pages, Umami, Web3Forms |
| SA-01 Architecture | 9/10 | Structure propre, business.ts centralise. Tokens CSS dupliques dans pages standalone. |
| SA-02 Design | 9/10 | Palette coherente, Inter auto-hebergee, tokens complets. Opacite credit corrigee. |
| SA-03 Contenu | 8/10 | Bon contenu metier. Plusieurs typos corrigees. Claim "15 ans" non verifiable retire. |
| SA-04 SEO | 9/10 | Schema.org complet (LocalBusiness, FAQ, BreadcrumbList, Article, Blog, Service, WebSite). OG + Twitter OK. Sitemap + robots.txt + llms.txt presents. |
| SA-05 Composants | 9/10 | Hero, Services, Temoignages, FAQ, Contact, Zone, Header, Footer bien structures. aria-hidden corrige. |
| SA-06 Legal | 10/10 | Mentions legales completes, politique de confidentialite detaillee, RGPD OK, formulaire avec mention + lien. Double main corrige. |
| SA-07 Performance | 9/10 | compressHTML, inlineStylesheets, fonts preload (Layout), lazy map, CSP + security headers, Umami no-cookie. Fonts pas preload sur standalone. |

**Score global : 91/100**
