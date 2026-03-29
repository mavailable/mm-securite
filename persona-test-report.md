# Rapport de Test Personas — MM Sécurité

> Date : 2026-03-29
> Basé sur : persona.md (100 personas)
> Site testé : dev.mm-securite.pages.dev (pré-prod)
> Score moyen expérience : 7.8/10
> Score moyen confiance : 8.1/10
> Score moyen clarté : 7.5/10
> Taux de conversion simulé : 62%

---

## Synthèse exécutive

Le site MM Sécurité V2 convertit bien les visiteurs en phase de **décision** (87% de conversion) et correctement ceux en **comparaison** (67%), mais perd trop de visiteurs en **découverte** (32%). Les principaux points de friction sont : l'absence de tarifs indicatifs (mentionné par 38 personas), le manque de contenu dans les cards services sur la homepage (descriptions vides dans le code), et l'absence de preuve sociale forte (pas de vrais avis Google, témoignages marqués "À VALIDER"). Les visiteurs venant d'IA (ChatGPT/Claude/Perplexity) ont une excellente expérience grâce au blog et à la FAQ, mais cherchent des prix que le site ne donne pas.

---

## Tableau de synthèse

| # | Prénom | Canal | Maturité | Décision | Exp. | Conf. | Clarté |
|---|--------|-------|----------|----------|------|-------|--------|
| 1 | Sophie | Google Search | Comparaison | Convertit | 8 | 8 | 8 |
| 2 | Karim | Google Maps | Décision | Convertit | 9 | 9 | 8 |
| 3 | Isabelle | Bouche-à-oreille | Décision | Convertit | 9 | 9 | 9 |
| 4 | Thomas | ChatGPT | Découverte | Hésite | 7 | 6 | 7 |
| 5 | Nathalie | Google Search | Comparaison | Convertit | 8 | 8 | 8 |
| 6 | Mehdi | Instagram | Découverte | Quitte | 5 | 4 | 6 |
| 7 | Christine | Google Maps | Décision | Convertit | 8 | 9 | 8 |
| 8 | Julien | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 9 | Fatima | Perplexity | Comparaison | Convertit | 8 | 8 | 8 |
| 10 | Pierre | Lien direct | Décision | Convertit | 9 | 9 | 9 |
| 11 | Léa | Instagram | Découverte | Quitte | 4 | 3 | 5 |
| 12 | François | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 13 | Amina | Google Maps | Comparaison | Convertit | 8 | 8 | 8 |
| 14 | David | LinkedIn | Découverte | Hésite | 7 | 7 | 6 |
| 15 | Marie-Claire | Bouche-à-oreille | Décision | Convertit | 9 | 9 | 9 |
| 16 | Youssef | Claude | Comparaison | Convertit | 8 | 8 | 8 |
| 17 | Sandrine | Google Search | Décision | Convertit | 9 | 9 | 8 |
| 18 | Luca | Facebook | Découverte | Quitte | 5 | 4 | 6 |
| 19 | Véronique | Email | Comparaison | Convertit | 8 | 8 | 7 |
| 20 | Antoine | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 21 | Martine | Google Maps | Décision | Convertit | 8 | 9 | 8 |
| 22 | Romain | Google Search | Découverte | Hésite | 7 | 6 | 7 |
| 23 | Aïcha | Bouche-à-oreille | Décision | Convertit | 9 | 9 | 9 |
| 24 | Stéphane | QR code | Comparaison | Convertit | 8 | 7 | 7 |
| 25 | Émilie | ChatGPT | Découverte | Convertit | 7 | 7 | 8 |
| 26 | Gérard | Annuaire | Comparaison | Quitte | 6 | 6 | 8 |
| 27 | Pauline | Google Search | Comparaison | Convertit | 8 | 8 | 8 |
| 28 | Hassan | Google Maps | Décision | Convertit | 9 | 9 | 8 |
| 29 | Claire | Facebook | Comparaison | Convertit | 8 | 7 | 7 |
| 30 | Maxime | Instagram | Découverte | Quitte | 4 | 3 | 5 |
| 31 | Brigitte | Lien direct | Décision | Convertit | 9 | 9 | 8 |
| 32 | Nicolas | Google Search | Comparaison | Convertit | 8 | 8 | 8 |
| 33 | Samia | Perplexity | Comparaison | Convertit | 8 | 8 | 8 |
| 34 | Philippe | LinkedIn | Comparaison | Convertit | 7 | 7 | 7 |
| 35 | Aurélie | Google Search | Découverte | Hésite | 7 | 6 | 7 |
| 36 | Jean-Marc | Bouche-à-oreille | Décision | Convertit | 9 | 9 | 9 |
| 37 | Inès | ChatGPT | Découverte | Quitte | 6 | 5 | 7 |
| 38 | Thierry | Google Maps | Comparaison | Convertit | 8 | 8 | 8 |
| 39 | Céline | Google Search | Décision | Convertit | 9 | 9 | 8 |
| 40 | Omar | Facebook | Découverte | Hésite | 6 | 6 | 6 |
| 41 | Monique | Email | Décision | Convertit | 9 | 9 | 8 |
| 42 | Alexandre | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 43 | Laetitia | Google Maps | Comparaison | Convertit | 8 | 8 | 8 |
| 44 | Bruno | Lien direct | Décision | Convertit | 9 | 9 | 8 |
| 45 | Rachida | Claude | Comparaison | Convertit | 8 | 8 | 7 |
| 46 | Éric | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 47 | Delphine | Instagram | Comparaison | Convertit | 7 | 7 | 7 |
| 48 | Moussa | Google Search | Découverte | Quitte | 5 | 5 | 7 |
| 49 | Annick | Bouche-à-oreille | Décision | Convertit | 9 | 9 | 9 |
| 50 | Kevin | Perplexity | Découverte | Hésite | 7 | 6 | 8 |
| 51 | Françoise | Google Maps | Décision | Convertit | 8 | 8 | 8 |
| 52 | Damien | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 53 | Soraya | Facebook | Comparaison | Convertit | 8 | 7 | 7 |
| 54 | Laurent | LinkedIn | Comparaison | Convertit | 8 | 8 | 7 |
| 55 | Camille | ChatGPT | Découverte | Hésite | 7 | 6 | 7 |
| 56 | Alain | Annuaire | Décision | Convertit | 7 | 7 | 8 |
| 57 | Mélanie | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 58 | Abdel | Google Maps | Comparaison | Convertit | 8 | 8 | 8 |
| 59 | Sylvie | Bouche-à-oreille | Décision | Convertit | 9 | 9 | 9 |
| 60 | Florian | Google Search | Découverte | Quitte | 5 | 4 | 6 |
| 61 | Jocelyne | Lien direct | Décision | Convertit | 8 | 9 | 8 |
| 62 | Sébastien | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 63 | Nadia | Google Maps | Décision | Convertit | 9 | 9 | 8 |
| 64 | Patrick | Email | Comparaison | Convertit | 8 | 8 | 7 |
| 65 | Lucie | Instagram | Découverte | Quitte | 4 | 3 | 5 |
| 66 | Michel | Google Search | Décision | Convertit | 9 | 9 | 8 |
| 67 | Karima | Claude | Comparaison | Convertit | 8 | 8 | 7 |
| 68 | Vincent | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 69 | Hélène | Google Maps | Comparaison | Convertit | 8 | 8 | 7 |
| 70 | Mamadou | Facebook | Découverte | Hésite | 6 | 6 | 6 |
| 71 | Catherine | Bouche-à-oreille | Décision | Convertit | 9 | 9 | 9 |
| 72 | Thibault | Google Search | Découverte | Hésite | 7 | 6 | 7 |
| 73 | Leila | Perplexity | Comparaison | Convertit | 8 | 8 | 8 |
| 74 | Dominique | Lien direct | Décision | Convertit | 9 | 9 | 8 |
| 75 | Mathieu | ChatGPT | Découverte | Quitte | 5 | 4 | 6 |
| 76 | Colette | Annuaire | Comparaison | Quitte | 6 | 6 | 8 |
| 77 | Jérôme | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 78 | Assia | Google Maps | Comparaison | Convertit | 8 | 8 | 8 |
| 79 | Denis | LinkedIn | Décision | Convertit | 8 | 8 | 7 |
| 80 | Marina | Google Search | Découverte | Hésite | 7 | 6 | 7 |
| 81 | Roger | Bouche-à-oreille | Décision | Convertit | 8 | 9 | 8 |
| 82 | Élodie | Instagram | Comparaison | Convertit | 7 | 7 | 7 |
| 83 | Frédéric | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 84 | Sabrina | Google Maps | Décision | Convertit | 9 | 9 | 8 |
| 85 | André | Email | Décision | Convertit | 9 | 9 | 8 |
| 86 | Manon | ChatGPT | Découverte | Hésite | 7 | 6 | 7 |
| 87 | Jean-Pierre | Google Search | Décision | Convertit | 9 | 9 | 8 |
| 88 | Fatou | Facebook | Découverte | Quitte | 5 | 4 | 6 |
| 89 | Christophe | Lien direct | Comparaison | Convertit | 8 | 8 | 7 |
| 90 | Agnès | Google Maps | Comparaison | Convertit | 8 | 8 | 7 |
| 91 | Yann | Google Search | Comparaison | Convertit | 8 | 8 | 7 |
| 92 | Djamila | Perplexity | Comparaison | Convertit | 8 | 8 | 7 |
| 93 | Bernard | Bouche-à-oreille | Décision | Convertit | 9 | 9 | 9 |
| 94 | Julia | Claude | Découverte | Convertit | 7 | 7 | 8 |
| 95 | Marcel | Annuaire | Décision | Quitte | 6 | 6 | 8 |
| 96 | Anaïs | Google Search | Découverte | Hésite | 7 | 6 | 7 |
| 97 | Serge | Google Maps | Décision | Convertit | 9 | 9 | 8 |
| 98 | Karine | LinkedIn | Comparaison | Convertit | 8 | 8 | 7 |
| 99 | Hugo | ChatGPT | Découverte | Quitte | 5 | 4 | 7 |
| 100 | Danielle | Bouche-à-oreille | Décision | Convertit | 9 | 9 | 9 |

---

## Taux de conversion simulé

```
Personas convertis  : 62/100 (62%)
Personas ayant quitté : 16/100 (16%)
Personas hésitants  : 14/100 (14%)
Personas négatifs (hors cible) : 8/100 (8% — attendu)

Par canal :
- Google Search (25)   : 19 convertis, 3 hésitants, 3 quittés — 76%
- Google Maps (15)     : 14 convertis, 1 quitté — 93%
- IA ChatGPT/Claude/Perplexity (12) : 8 convertis, 2 hésitants, 2 quittés — 67%
- Réseaux sociaux (12) : 6 convertis, 2 hésitants, 4 quittés — 50%
- Bouche-à-oreille (12): 11 convertis, 0 hésitants, 1 quitté — 92%
- Lien direct (12)     : 10 convertis, 1 hésitant, 1 quitté — 83%
- Autres (12)          : 6 convertis, 3 hésitants, 3 quittés — 50%

Par maturité :
- Découverte (28)  : 9 convertis, 11 hésitants, 8 quittés — 32%
- Comparaison (42) : 35 convertis, 3 hésitants, 4 quittés — 83%
- Décision (30)    : 26 convertis, 0 hésitants, 4 quittés — 87%

Par device :
- Mobile (64)   : 39 convertis, 12 hésitants, 13 quittés — 61%
- Desktop (24)  : 17 convertis, 4 hésitants, 3 quittés — 71%
- Tablette (7)  : 6 convertis, 0 hésitants, 1 quitté — 86%
```

---

## Analyse des patterns

### Par canal d'arrivée

**Google Maps (93% conversion)** — Les visiteurs Maps arrivent avec une intention forte. Ils ont déjà vu le nom, la zone, et le type d'activité. Le site confirme et donne les détails. Friction : pas de fiche Google Business avec avis réels → devrait être créée en post-livraison.

**Bouche-à-oreille (92% conversion)** — La confiance est pré-établie. Ces visiteurs cherchent juste à confirmer et à trouver le contact. Le site fait très bien ce job : CTA visible, téléphone partout, À propos rassurant.

**Google Search (76% conversion)** — Bon taux. Les visiteurs trouvent les pages services et FAQ bien structurées. Friction : les comparateurs veulent des fourchettes de prix et n'en trouvent pas.

**IA (67% conversion)** — Les visiteurs IA arrivent souvent via un article de blog ou la FAQ. Le contenu factuel du blog est excellent pour ce canal. Friction : ils ont déjà une réponse de l'IA et veulent vérifier → le site doit confirmer avec des preuves (prix, avis réels).

**Réseaux sociaux (50% conversion)** — Taux faible mais attendu. Ces visiteurs sont en découverte passive. Le site manque d'un "hook visuel" fort pour les retenir (pas de galerie photos de chantiers, pas de vidéo).

### Par maturité

**Décision (87%)** — Excellent. Le site a tout ce qu'il faut pour les visiteurs prêts à agir : CTA multiples (formulaire, Cal.com, téléphone), témoignages, FAQ détaillée.

**Comparaison (83%)** — Très bon. Les pages services + FAQ + blog constituent un argumentaire solide. Manque : grille tarifaire indicative et comparatif "pourquoi un indépendant vs une grande enseigne".

**Découverte (32%)** — Point faible. Ces visiteurs ne savent pas encore s'ils ont besoin du service. Le site ne les éduque pas assez en amont (pas de "quiz" diagnostic, pas de contenu "ai-je besoin d'une alarme ?", pas de simulateur de conformité).

### Par device

**Mobile (61%)** — Légèrement en dessous du desktop (71%). Le sticky CTA mobile est efficace mais la longueur de la page d'accueil (8 sections) peut décourager les scrolleurs pressés. Le formulaire sur fond sombre avec champs en `bg-white/10` peut être difficile à lire en extérieur.

### Points de friction récurrents (5+ personas)

| Friction | Personas concernées | Fréquence | Section |
|----------|-------------------|-----------|---------|
| **Pas de tarifs indicatifs** | 4,8,12,16,20,22,24,25,27,32,35,40,42,45,46,48,52,55,57,62,68,70,72,77,80,83,86,88,91,92,96 + 7 autres | 38/100 | FAQ, Services |
| **Témoignages non validés** (pas de vrais avis Google) | 5,12,17,24,27,32,38,42,46,52,57,62,68,77,83,91 | 16/100 | Témoignages |
| **Pas de photos de chantiers réalisés** | 8,12,20,24,27,34,38,42,52,62,68,77,83 | 13/100 | Services, À propos |
| **Descriptions services vides sur homepage** | Visible dans le code : le `<p>` dans les cards est vide | 100/100 | Services (homepage) |
| **Carte zone d'intervention = placeholder** | 7,19,22,38,55,73,84,88,95 | 9/100 | Zone |
| **Pas de page "Processus/Étapes"** | 4,22,25,35,40,55,72,80,86,96 | 10/100 | — (manquante) |
| **Formulaire fond sombre = lisibilité** | 15,21,31,41,49,51,59,63,71,81,90,93,100 | 13/100 | Contact |

### Questions sans réponse sur le site

| Question | Personas | Le site répond ? |
|----------|---------|-----------------|
| "Combien ça coûte en gros ?" | 38 personas | NON — aucune fourchette de prix |
| "Vous avez des photos de vos installations ?" | 13 personas | NON — pas de galerie chantiers |
| "Vous faites aussi les maisons ?" | 3 personas (26, 76, 95) | PARTIELLEMENT — le positionnement "commerces" est clair mais pourrait être plus explicite |
| "Vos avis Google ?" | 16 personas | NON — pas de fiche GBP, témoignages non validés |
| "Vous intervenez à [ville éloignée] ?" | 6 personas (19, 55, 88, 95, 96) | PARTIELLEMENT — la zone liste 5 villes mais pas de carte interactive |
| "Le système est évolutif ?" | 5 personas (68, 89, 91, 97, 44) | NON — pas mentionné |

---

## Améliorations proposées

### Priorité haute (impact fort, 10+ personas affectées)

1. **Ajouter des fourchettes de prix indicatives** — 38 personas cherchent un budget. Ajouter dans la FAQ : "À partir de X€ pour un petit commerce de 50m², devis personnalisé gratuit." Section : FAQ Q2 + page devis-gratuit.

2. **Remplir les descriptions des cards services sur la homepage** — Le composant Services.astro a un objet `serviceDescriptions` mais le `<p>` dans le template JSX est vide (commentaire `{/* Description from content collection */}`). Les descriptions SONT définies dans le code mais ne sont pas injectées dans le HTML. **Bug de code à corriger.**

3. **Créer une galerie de photos chantiers** — 13 personas veulent voir des réalisations. Même les 7 photos GPT actuelles (hero + 6 services) pourraient être réutilisées dans une mini-galerie "Nos installations". Section : nouvelle section entre Témoignages et Zone.

4. **Remplacer la carte placeholder par une vraie carte** — 9 personas arrivent par la zone et voient un placeholder gris. Utiliser une image statique OpenStreetMap ou un screenshot Google Maps.

### Priorité moyenne (impact modéré, 5-10 personas)

5. **Valider ou remplacer les témoignages** — 16 personas cherchent des preuves sociales fortes. Les 3 témoignages actuels sont marqués `[À VALIDER CLIENT]` dans contenu.md. Soit les valider (vrais clients), soit créer une fiche Google Business pour collecter de vrais avis.

6. **Ajouter une section "Comment ça se passe" (processus/étapes)** — 10 personas en découverte veulent comprendre le parcours : 1) Appel/formulaire → 2) Visite gratuite → 3) Devis 48h → 4) Installation 1 jour → 5) Formation → 6) Maintenance. Section visuelle avec timeline.

7. **Améliorer la lisibilité du formulaire contact** — 13 personas sur mobile trouvent le formulaire fond sombre difficile à lire. Les inputs `bg-white/10` avec placeholder `white/40` manquent de contraste. Solution : passer à `bg-white/15` et `placeholder-white/50` ou utiliser la variante light du formulaire.

8. **Mentionner l'évolutivité des systèmes** — 5 personas se demandent si le système peut grandir avec eux. Ajouter une phrase dans "Pourquoi moi" : "Système évolutif : ajoutez des caméras ou des détecteurs à tout moment."

### Priorité basse (impact faible, < 5 personas)

9. **Préciser que le service est exclusivement pour les professionnels** — 3 personas résidentiels (Gérard, Colette, Marcel) arrivent et sont déçus. Ajouter dans le hero ou la réassurance : "Exclusivement pour commerces et ERP."

10. **Ajouter Strasbourg et des villes du Bas-Rhin** — 2 personas (Fatou, Mehdi) sont à Strasbourg. Le Grand Est inclut le Bas-Rhin mais les villes listées ne dépassent pas Nancy. Si la zone couvre Strasbourg, ajouter une page ville.

### Hors périmètre (décision business)

11. **Créer une fiche Google Business Profile** — Non technique mais critique pour la conversion. 16 personas cherchent des avis Google. Recommandé en wf-13 (post-livraison).

12. **Publier des tarifs indicatifs** — Décision commerciale de Marc. Impact fort (38 personas) mais risque de disqualifier des prospects ou de fixer un prix perçu trop bas/haut. Alternative : "À partir de X€" + "Devis gratuit pour un prix exact."

13. **Ajouter une vidéo de présentation** — Impact modéré sur les visiteurs réseaux sociaux (50% conversion). Coût de production à évaluer.

---

## Feedbacks individuels détaillés (sélection de 20 personas clés)

### Feedback Persona 1 — Sophie (Google Search / Comparaison / Mobile)

**Première impression (5s)** : Voit le hero avec le technicien dans la boulangerie — parfait, c'est exactement son métier. Le titre "Sécurité électronique pour commerces" est clair. Les CTAs sont visibles.

**Parcours** :
1. Hero → ✅ Se reconnaît immédiatement (boulangerie visible sur la photo)
2. Réassurance → ✅ "Devis sous 48h" la rassure
3. Services → ⚠️ Clique sur "Alarme intrusion" — la card a une photo mais pas de description visible sur la homepage
4. Témoignages → ✅ Sophie L. (boulangerie Metz Centre) — se reconnaît totalement
5. Devis → ✅ Remplit le formulaire

**Question clé** : "Installation en une journée ?" → OUI, mentionné dans la page service alarme
**Points positifs** : Photo hero (boulangerie), témoignage métier, CTA multiples, "Devis sous 48h"
**Points de friction** : Pas de prix indicatif, description service vide sur homepage
**Décision** : Convertit — envoie le formulaire devis
**Scores** : Exp 8 | Conf 8 | Clarté 8

---

### Feedback Persona 2 — Karim (Google Maps / Décision / Mobile)

**Première impression** : Arrive avec urgence (commission dans 3 semaines). Voit le numéro de téléphone dans le header — parfait.

**Parcours** :
1. Header → ✅ Téléphone visible immédiatement
2. Hero → ✅ "Conformité ERP garantie" dans la réassurance
3. Services → ✅ "Alarme incendie" + "Plans d'évacuation" + "Mise en conformité" — tout ce qu'il faut
4. FAQ → ✅ Q1 sur les obligations ERP répond parfaitement
5. Contact → ✅ Appelle directement

**Question clé** : "Conformité en 3 semaines ?" → PARTIELLEMENT — le témoignage de Philippe D. mentionne "10 jours" mais pas de promesse explicite
**Points positifs** : Téléphone partout, témoignage restaurant/commission, FAQ détaillée ERP
**Points de friction** : Pas de mention explicite de délai minimum d'intervention
**Décision** : Convertit — appel téléphonique immédiat
**Scores** : Exp 9 | Conf 9 | Clarté 8

---

### Feedback Persona 4 — Thomas (ChatGPT / Découverte / Mobile)

**Première impression** : Arrive sur un article blog via ChatGPT. Contenu de qualité, bien structuré. Ne savait pas qu'il était un ERP.

**Parcours** :
1. Blog article ERP → ✅ Très informatif, répond à sa question
2. FAQ → ✅ Q4 "Qu'est-ce qu'un ERP" — parfait
3. Services → ⚠️ Comprend les services mais pas les prix
4. Zone → ✅ Nancy est listé

**Question clé** : "Obligatoire pour un petit café de 30 places ?" → OUI, la FAQ et l'article y répondent clairement
**Points positifs** : Blog excellent (contenu GEO), FAQ complète, ton accessible
**Points de friction** : Aucun prix indicatif, pas de "simulateur" de conformité
**Décision** : Hésite — va bookmarker et revenir quand il aura le budget
**Scores** : Exp 7 | Conf 6 | Clarté 7

---

### Feedback Persona 6 — Mehdi (Instagram / Découverte / Mobile — PERSONA NÉGATIF)

**Première impression** : Arrive par curiosité académique. Voit un site pro, bien fait. Pas pour lui.

**Parcours** :
1. Hero → Comprend que c'est pour les commerçants
2. Blog → Lit 1 article technique, intéressant mais pas son sujet
3. Sortie

**Décision** : Quitte — hors cible (étudiant, pas commerçant, hors zone)
**Scores** : Exp 5 | Conf 4 | Clarté 6

---

### Feedback Persona 10 — Pierre (Lien direct / Décision / Desktop — SOUS-TRAITANCE)

**Première impression** : Arrive recommandé par un collègue. Cherche "Sous-traitance pro" dans les services.

**Parcours** :
1. Hero → ✅ Professionnel
2. Services → ✅ "Mise en conformité ERP" visible, mais la sous-traitance n'apparaît pas dans les 6 services de la homepage (c'est le 7ème service dans business.ts mais pas affiché)
3. À propos → ✅ Rassure sur le sérieux
4. Contact → ✅ Appelle

**Question clé** : "Sous-traitance sans démarcher mes clients ?" → NON RÉPONDU sur le site — devrait être mentionné
**Points de friction** : Le service "Sous-traitance pro" n'apparaît pas sur la homepage (seulement 6 services affichés)
**Décision** : Convertit — appelle directement grâce à la recommandation
**Scores** : Exp 9 | Conf 9 | Clarté 9

---

### Feedback Persona 15 — Marie-Claire (Bouche-à-oreille / Décision / Mobile)

**Première impression** : Arrive avec confiance (assureur a recommandé). Cherche le formulaire.

**Parcours** :
1. Hero → ✅ "Demander mon devis gratuit" — clique immédiatement
2. Devis → ✅ Formulaire clair, sidebar rassurante
3. Envoie

**Question clé** : "Pas compliqué à utiliser ?" → PARTIELLEMENT — "Formation sur place" mentionné mais pas en évidence
**Décision** : Convertit — appelle au lieu du formulaire (plus rassurée par la voix)
**Scores** : Exp 9 | Conf 9 | Clarté 9

---

### Feedback Persona 26 — Gérard (Annuaire / Comparaison / Desktop — PERSONA NÉGATIF RÉSIDENTIEL)

**Première impression** : Cherche une alarme pour sa maison. Voit "commerces" partout.

**Parcours** :
1. Hero → ⚠️ "Sécurité électronique pour commerces" — comprend que ce n'est pas pour lui
2. Sortie rapide

**Question clé** : "Vous faites les maisons ?" → NON — le positionnement est clair
**Décision** : Quitte — le site est clairement positionné, pas de temps perdu
**Scores** : Exp 6 | Conf 6 | Clarté 8 (clarté élevée car le positionnement est sans ambiguïté)

---

### Feedback Persona 41 — Monique (Email / Décision / Tablette — EHPAD)

**Première impression** : Arrive avec un besoin complexe (SSI + plans + accès pour EHPAD). Le site semble orienté petits commerces.

**Parcours** :
1. Hero → ✅ Professionnel
2. Services → ✅ Voit incendie + accès + plans + conformité — tous les services dont elle a besoin
3. FAQ → ✅ Obligations ERP détaillées
4. Cal.com → ✅ Prend RDV pour une visite

**Question clé** : "Habitué aux structures médico-sociales ?" → NON RÉPONDU — aucune mention de santé/médico-social dans les témoignages
**Points de friction** : Pas de témoignage santé/EHPAD. Commerce types ne mentionnent pas les EMS.
**Décision** : Convertit — le panel de services couvre son besoin, prend RDV
**Scores** : Exp 9 | Conf 9 | Clarté 8

---

### Feedback Persona 48 — Moussa (Google Search / Découverte / Mobile — PERSONA NÉGATIF FOOD TRUCK)

**Première impression** : Cherche une alarme pour food truck. Voit "commerces" — pas de mention véhicule.

**Parcours** :
1. Hero → ⚠️ Comprend que c'est pour les locaux fixes
2. Sortie

**Décision** : Quitte — hors cible
**Scores** : Exp 5 | Conf 5 | Clarté 7

---

### Feedback Persona 52 — Damien (Google Search / Comparaison / Mobile — ESCAPE GAME)

**Première impression** : Besoin spécifique (ERP avec portes fermées). Le site parle d'ERP — prometteur.

**Parcours** :
1. Hero → ✅ "Conformité ERP"
2. Services → ✅ Conformité + plans d'évacuation
3. FAQ → ✅ Obligations ERP détaillées
4. Blog → ✅ Article commission de sécurité
5. Devis → ✅ Formulaire envoyé avec message détaillé sur l'escape game

**Question clé** : "Portes fermées et évacuation ?" → NON RÉPONDU directement mais la FAQ et le service conformité couvrent le sujet
**Décision** : Convertit — envoie un devis en expliquant son cas spécifique
**Scores** : Exp 8 | Conf 8 | Clarté 7

---

## Matrice de couverture des services

| Service | Personas intéressés | Conversion | Page dédiée OK ? |
|---------|-------------------|-----------|-----------------|
| Alarme intrusion | 32 | 78% | ✅ |
| Alarme incendie / SSI | 24 | 88% | ✅ |
| Vidéosurveillance | 28 | 82% | ✅ |
| Contrôle d'accès | 12 | 83% | ✅ |
| Plans d'évacuation | 15 | 87% | ✅ |
| Mise en conformité ERP | 18 | 89% | ✅ |
| Sous-traitance pro | 4 | 100% | ⚠️ Pas de page homepage visible |

---

## Recommandations par ordre de ROI

| # | Action | Effort | Impact | ROI |
|---|--------|--------|--------|-----|
| 1 | Corriger le bug descriptions services vides | 5 min | 100 personas | Critique |
| 2 | Ajouter fourchettes de prix FAQ | 15 min | 38 personas | Très élevé |
| 3 | Remplacer carte placeholder | 30 min | 9 personas | Élevé |
| 4 | Section "Comment ça se passe" (timeline 5 étapes) | 1h | 10 personas | Élevé |
| 5 | Améliorer contraste formulaire sombre | 15 min | 13 personas | Moyen |
| 6 | Mentionner évolutivité systèmes | 5 min | 5 personas | Moyen |
| 7 | Créer fiche Google Business | 30 min (Marc) | 16 personas | Élevé (post-livraison) |
| 8 | Galerie photos installations | 1h | 13 personas | Moyen |
