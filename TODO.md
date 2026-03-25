# TODO — mm-securite.fr

> Audit du 2026-03-25 — Score : 96/100

## P1 — Haute priorité

_Aucun problème critique._

## P2 — Moyenne priorité

- [ ] Zone.astro : remplacer `<div role="button">` par un vrai `<button>` pour la carte Google Maps
- [ ] Ajouter une bannière cookies informative (même si aucun cookie traceur)
- [ ] Ajouter un event Umami sur la page 404 (custom 404 existe mais pas de tracking)
- [ ] Vérifier que les images frontmatter du blog sont bien utilisées dans les templates

## P3 — Basse priorité

- [ ] Ajouter un rate limiting côté formulaire Web3Forms
- [ ] Score Observatory B — limitation CSP Astro statique, non bloquant
- [ ] Considérer l'ajout de `rel="noopener"` sur tous les liens externes
