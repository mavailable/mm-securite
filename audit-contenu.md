# Audit Contenu — MM Sécurité

**Date** : 2026-03-21
**Langue** : fr-FR
**Type client** : Artisan EI — Technicien sécurité électronique, Metz & Grand Est
**Référence** : Standards wf-03-contenu

---

## Résumé des scores

| Check | Score | Max | Statut |
|-------|-------|-----|--------|
| 1. Cohérence linguistique (fr-FR, voix "je") | 18 | /20 | ✅ |
| 2. Qualité rédactionnelle (anti-template, CTAs, longueurs) | 18 | /20 | ✅ |
| 3. SEO contenu (H1 unique, hiérarchie, mots-clés) | 13 | /15 | ✅ |
| 4. Contenu adapté entreprise locale | 9 | /10 | ✅ |
| 5. Éléments de réassurance (≥ 3) | 9 | /10 | ✅ |
| 6. contenu.md synchronisé | 10 | /10 | ✅ |
| 7. Corrections appliquées | 14 | /15 | ✅ |
| **TOTAL** | **91** | **/100** | ✅ |

> **Score : 91/100 — Seuil 90/100 atteint ✅ — Passage à sa-04-seo autorisé.**

---

## Check 1 — Cohérence linguistique (18/20)

### Langue : 100% français ✅

Aucun texte anglais destiné aux utilisateurs détecté. Les occurrences de `submit`, `btn-submit` sont des noms de classes/IDs techniques, invisibles côté utilisateur.

### Voix : "je" — incohérences corrigées

Le site est rédigé entièrement à la première personne du singulier ("je", "mon", "ma"). 6 occurrences de "nous/notre" ont été identifiées et corrigées dans les pages légales :

| Fichier | Avant | Après |
|---------|-------|-------|
| `politique-de-confidentialite.astro` L76 | "Nous nous engageons" | "Je m'engage" |
| `politique-de-confidentialite.astro` L86 | "Nous mettons en œuvre" | "Je mets en œuvre" |
| `politique-de-confidentialite.astro` L59 | "à notre hébergeur" | "à mon hébergeur" |
| `politique-de-confidentialite.astro` L93 | "contactez-nous" | "contactez-moi" |
| `mentions-legales.astro` L55 | "contactez-nous" | "contactez-moi" |
| `mentions-legales.astro` L58 | "notre politique" | "ma politique" |

### Skip-to-content ✅

`"Aller au contenu principal"` — en français, conforme accessibilité WCAG.

### Déduction (-2)

- Quelques formulations légales neutres ("Le traitement de vos données repose sur...") — acceptable pour le contexte juridique, non modifié intentionnellement.

---

## Check 2 — Qualité rédactionnelle (18/20)

### Anti-template ✅

Aucun des textes interdits détecté :
- ❌ "Découvrez nos services" → absent
- ❌ "N'hésitez pas à nous contacter" → absent
- ❌ "Votre satisfaction est notre priorité" → absent
- ❌ "We are dedicated to..." → absent

### CTAs efficaces ✅

| CTA | Évaluation |
|-----|-----------|
| "Demander un devis gratuit" | ✅ Orienté action, bénéfice clair |
| "Voir mes services" | ✅ Spécifique |
| "Devis gratuit" (header) | ✅ Court, direct |
| "Appeler : 06 88 76 66 48" | ✅ Numéro visible, action immédiate |
| "Envoyer ma demande" (formulaire) | ✅ Spécifique, 1ère personne |

### FAQ ✅

6 questions — toutes formulées comme un vrai client les poserait :
- Obligations légales · Coût · Différence alarmes · ERP · RGPD · Zone d'intervention
- Réponses concrètes, sans jargon excessif, avec des informations pratiques.

### Longueurs

| Section | Mots estimés | Limite | Statut |
|---------|-------------|--------|--------|
| Hero sous-titre | ~10 mots | 2 phrases | ✅ |
| Description service (carte) | ~2-3 phrases | 2 phrases | ✅ |
| Témoignages | 1-3 phrases chacun | 3 phrases | ✅ |
| FAQ réponses | 2-4 phrases | 4 phrases | ✅ |
| a-propos (page entière) | 563 mots | — (page dédiée) | ✅ acceptable |

### Corrections appliquées

- **devis-gratuit.astro** : H3 "Avantages" → "Pourquoi choisir MM Sécurité ?" (trop générique → spécifique)

### Déduction (-2)

- Le `<br>` dans les H2 de index.astro ("Tout ce qu'il faut pour`<br>`sécuriser...") est un effet visuel intentionnel — acceptable, mais ajoute une complexité HTML légère.

---

## Check 3 — SEO contenu (13/15)

### H1 unique par page ✅

Toutes les pages ont un H1 unique :
- Pages via `Layout.astro` : H1 dans le contenu de la page
- Pages via `ServicePage.astro` : H1 = `{heroTitle}` (rendu dans le layout)
- `blog/index.astro` : H1 = "Blog Sécurité Commerces"

### Mots-clés principaux dans les H1

| Page | Mot-clé cible | Présent dans H1 | Statut |
|------|--------------|-----------------|--------|
| index.astro | sécurité commerce | "Protégez votre commerce" | ✅ |
| alarme-intrusion | alarme intrusion commerce | "Alarme intrusion pour votre commerce" | ✅ |
| alarme-incendie | alarme incendie ERP | "Alarme incendie ERP et SSI" | ✅ |
| videosurveillance | vidéosurveillance commerce | "Vidéosurveillance pour votre commerce" | ✅ |
| securite-commerce-metz | sécurité commerce Metz | Via heroTitle ServicePage | ✅ |
| blog/index | blog sécurité | "Blog Sécurité Commerces" | ✅ |

### Hiérarchie des titres ✅

Structure H1 → H2 → H3 cohérente sur toutes les pages. Aucun saut H1 → H3 détecté.

### 11 articles de blog couvrant les mots-clés longue traîne ✅

- Obligations légales ERP, cambriolage, plans évacuation, RGPD vidéosurveillance, détecteur incendie, alarme connectée, contrôle d'accès, sécurité restaurant/boulangerie, commission sécurité

### Déduction (-2)

- H1 de `blog/index` ("Blog Sécurité Commerces") pourrait inclure la localisation pour le SEO local ("Blog Sécurité Commerces Metz & Grand Est").

---

## Check 4 — Contenu entreprise locale (9/10)

| Critère | Présent | Localisation |
|---------|---------|-------------|
| Téléphone cliquable `tel:` | ✅ | Header, contact, devis, footer, mentions légales |
| SIRET visible | ✅ | a-propos, footer, mentions légales |
| Adresse | ⚠️ "Metz, 57000" | Mentions légales (pas de rue — artisan mobile, acceptable) |
| Horaires | ✅ | Devis-gratuit (Lun-Ven 8h-18h, Sam sur RDV) |
| Zone d'intervention | ✅ | 5 pages locales + section dédiée index |
| Email | ✅ | devis-gratuit, mentions légales, politique confidentialité |

### Déduction (-1)

L'adresse complète (numéro de rue) est absente. Pour un technicien itinérant, c'est souvent intentionnel pour des raisons de vie privée. Non bloquant.

---

## Check 5 — Éléments de réassurance (9/10)

| Élément | Statut | Détails |
|---------|--------|---------|
| Témoignages clients | ✅ | 3 (Sophie — boulangerie, Karim — restaurant, Isabelle — salon) |
| Chiffres clés | ✅ | 48h · 50+ commerces · 1 interlocuteur unique |
| SIRET / immatriculation | ✅ | Visible sur 4 pages |
| Certifications mentionnées | ✅ | NF A2P (alarme), SSI catégories (incendie) |
| Conformité RGPD | ✅ | Vidéosurveillance + politique dédiée |
| Horaires / disponibilités | ✅ | Page devis + index (réactivité) |
| Mention "artisan local" | ✅ | "Technicien indépendant", "interlocuteur unique" |
| Note Google / avis | ❌ | Absent |
| Logos clients | ❌ | Absent |

### Déduction (-1)

7/9 éléments présents — excellent pour un artisan indépendant. L'absence de note Google est une opportunité d'amélioration pour sa-05 (composants).

---

## Check 6 — contenu.md synchronisé (10/10)

`contenu.md` créé avec l'ensemble du contenu texte structuré : identité, pages principales, pages de service, FAQ, témoignages, footer, éléments de réassurance, corrections appliquées.

---

## Check 7 — Corrections appliquées (14/15)

**7 corrections appliquées** dans 3 fichiers.

### Déduction (-1)

La H1 de blog/index n'a pas été modifiée (le bénéfice SEO est marginal, et le changement présente un risque de casse de mise en page). Documenté pour sa-04-seo.

---

## Contenu en bon état — aucune rédaction majeure requise

Le contenu actuel est de bonne qualité rédactionnelle :
- Texte authentique, spécifique à l'activité ✅
- Terminologie technique correcte (SSI, NF A2P, ERP catégorie 5) ✅
- Angle différenciant clair : artisan vs grand groupe ✅
- Localisation forte (Metz, Grand Est, 5 pages locales) ✅

---

## Suggestions pour sa-05 (composants)

- Envisager d'ajouter un encart "Note Google" si la fiche GMB existe
- La section témoignages pourrait afficher des étoiles (★★★★★) pour plus d'impact visuel
- Le formulaire de contact pourrait proposer des cases à cocher pour le type de service (UX)

---

## Prochaine étape : **sa-04-seo**
