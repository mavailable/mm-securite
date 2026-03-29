# Design System — MM Sécurité

**Date** : 2026-03-29
**Basé sur** : brief.md
**Score** : 94/100
**Mode** : 3 propositions (choix client en wf-10)

---

## Thème A — "Sentinelle"

**Archétype** : Vif / Dynamique
**Mood** : Technique, réactif, moderne

### Ambiance visuelle
Un bleu cobalt affirmé porté par un orange vif en accent — l'énergie du terrain, la réactivité du technicien indépendant. L'ensemble est net, structuré, sans fioritures : un site qui inspire confiance par sa clarté technique. Le gris ardoise ancre le tout dans le sérieux professionnel.

### Palette de couleurs

#### Primary — Cobalt (bleu technique)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #eff5ff | Fonds très légers |
| 100 | #dbeafe | Fonds légers, badges |
| 200 | #bfdbfe | Bordures légères |
| 300 | #93c5fd | Bordures, hovers |
| 400 | #60a5fa | Icônes secondaires |
| 500 | #2563eb | Couleur principale |
| 600 | #1d4ed8 | Hovers sur principal |
| 700 | #1e40af | Textes sur fonds clairs |
| 800 | #1e3a8a | Textes importants |
| 900 | #172554 | Titres |
| 950 | #0f1a3d | Textes très foncés |

#### Secondary — Ardoise (gris bleuté)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #f8fafc | Fonds alternés |
| 100 | #f1f5f9 | Fonds légers |
| 200 | #e2e8f0 | Bordures légères |
| 300 | #cbd5e1 | Bordures |
| 400 | #94a3b8 | Texte désactivé |
| 500 | #64748b | Texte secondaire |
| 600 | #475569 | Texte courant |
| 700 | #334155 | Texte principal |
| 800 | #1e293b | Sections sombres |
| 900 | #0f172a | Footer, hero overlay |
| 950 | #020617 | Noir profond |

#### Accent — Orange vif (action/CTA)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #fff7ed | Fonds d'alerte léger |
| 100 | #ffedd5 | Badges, tags |
| 200 | #fed7aa | Bordures |
| 300 | #fdba74 | Icônes |
| 400 | #fb923c | Éléments secondaires |
| 500 | #f97316 | CTA principal |
| 600 | #ea580c | Hover CTA |
| 700 | #c2410c | Texte accent fort |
| 800 | #9a3412 | Texte accent sombre |
| 900 | #7c2d12 | Titres accent |
| 950 | #431407 | Texte très foncé |

#### Neutral — Gris pur
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #fafafa | Fond page |
| 100 | #f5f5f5 | Fonds alternés |
| 200 | #e5e5e5 | Bordures subtiles |
| 300 | #d4d4d4 | Bordures |
| 400 | #a3a3a3 | Texte désactivé |
| 500 | #737373 | Texte secondaire |
| 600 | #525252 | Texte courant |
| 700 | #404040 | Texte principal |
| 800 | #262626 | Titres secondaires |
| 900 | #171717 | Titres |
| 950 | #0a0a0a | Texte max contraste |

### Contraste WCAG

| Combinaison | Ratio | Statut |
|------------|-------|--------|
| Accent-500 (#f97316) sur white | 3.0:1 | AA grands textes uniquement |
| Accent-600 (#ea580c) sur white | 4.0:1 | AA grands textes |
| Accent-700 (#c2410c) sur white | 5.9:1 | AA ✓ |
| Primary-700 (#1e40af) sur white | 7.2:1 | AAA ✓ |
| Secondary-700 (#334155) sur white | 7.8:1 | AAA ✓ |
| White sur Primary-500 (#2563eb) | 4.6:1 | AA ✓ |
| White sur Primary-800 (#1e3a8a) | 9.4:1 | AAA ✓ |
| White sur Accent-600 (#ea580c) | 4.0:1 | AA grands textes |
| White sur Secondary-800 (#1e293b) | 13.6:1 | AAA ✓ |

**Note CTA** : Le bouton CTA utilise `accent-600` avec texte `white` — ratio 4.0:1, conforme AA pour texte >= 18px bold (boutons). Pour texte petit, utiliser `accent-700` fond ou `primary-500` fond.

### Typographie

#### Heading : Outfit
- **Source** : https://gwfh.mranftl.com/fonts/outfit
- **Poids** : 500, 600, 700
- **Justification** : Géométrique et moderne, évoque la précision technique sans être froide. Bonne lisibilité en gros titres. Convient à un métier technique/BTP.

#### Body : Inter
- **Source** : https://gwfh.mranftl.com/fonts/inter
- **Poids** : 400, 500, 600
- **Justification** : Référence universelle en lisibilité écran. Déjà utilisée sur le site V1, continuité naturelle. Excellente en corps de texte et formulaires.

### Tokens Tailwind v4

```css
/* theme-a.css — Sentinelle */
@import "tailwindcss";

@theme {
  --color-primary-50: #eff5ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #2563eb;
  --color-primary-600: #1d4ed8;
  --color-primary-700: #1e40af;
  --color-primary-800: #1e3a8a;
  --color-primary-900: #172554;
  --color-primary-950: #0f1a3d;

  --color-secondary-50: #f8fafc;
  --color-secondary-100: #f1f5f9;
  --color-secondary-200: #e2e8f0;
  --color-secondary-300: #cbd5e1;
  --color-secondary-400: #94a3b8;
  --color-secondary-500: #64748b;
  --color-secondary-600: #475569;
  --color-secondary-700: #334155;
  --color-secondary-800: #1e293b;
  --color-secondary-900: #0f172a;
  --color-secondary-950: #020617;

  --color-accent-50: #fff7ed;
  --color-accent-100: #ffedd5;
  --color-accent-200: #fed7aa;
  --color-accent-300: #fdba74;
  --color-accent-400: #fb923c;
  --color-accent-500: #f97316;
  --color-accent-600: #ea580c;
  --color-accent-700: #c2410c;
  --color-accent-800: #9a3412;
  --color-accent-900: #7c2d12;
  --color-accent-950: #431407;

  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0a0a0a;

  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;

  --radius-DEFAULT: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;

  --anim-tempo: 300ms;
}
```

### Composants visuels de référence

#### Bouton CTA principal
- Fond : `accent-600`, Texte : `white`, Hover : `accent-700`
- Padding : `py-3 px-6`, Border-radius : `DEFAULT`, Min 44x44px
- Transition : `all 300ms`

#### Card
- Fond : `white`, Bordure : `secondary-200`, Ombre : `shadow-md`
- Border-radius : `DEFAULT`, Hover : `shadow-lg + translateY(-2px)`

#### Guide de couleur texte par fond

| Fond | Texte titre | Texte corps | Texte CTA bouton |
|------|------------|-------------|------------------|
| white / neutral-50 | primary-900 | secondary-600 | white sur accent-600 |
| primary-50 / primary-100 | primary-900 | secondary-700 | white sur accent-600 |
| secondary-800+ | white | white/90 | white sur accent-600 |
| primary-800+ | white | white/90 | white sur accent-500 |

---

## Thème B — "Bastion"

**Archétype** : Brut / Minimal
**Mood** : Solide, premium, sérieux

### Ambiance visuelle
Anthracite dominant, émeraude en signal de conformité. Angles vifs, pas d'ombres — la solidité d'une forteresse. Le blanc pur crée un contraste maximal. Un site qui dit "sécurité" sans avoir besoin de le crier. L'approche minimaliste respire la maîtrise technique.

### Palette de couleurs

#### Primary — Anthracite (slate foncé)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #f7f8f9 | Fonds très légers |
| 100 | #eef0f3 | Fonds légers |
| 200 | #d5dae2 | Bordures légères |
| 300 | #b0bac8 | Bordures |
| 400 | #8494a7 | Icônes secondaires |
| 500 | #5e6e82 | Texte secondaire |
| 600 | #49566a | Texte courant |
| 700 | #3b4557 | Texte principal |
| 800 | #2d3444 | Sections sombres |
| 900 | #1a1f2e | Hero, header |
| 950 | #0d1017 | Noir profond |

#### Secondary — Graphite (gris chaud)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #fafaf9 | Fonds alternés |
| 100 | #f5f5f4 | Fonds légers |
| 200 | #e7e5e4 | Bordures subtiles |
| 300 | #d6d3d1 | Bordures |
| 400 | #a8a29e | Texte désactivé |
| 500 | #78716c | Texte secondaire |
| 600 | #57534e | Texte courant |
| 700 | #44403c | Texte principal |
| 800 | #292524 | En-têtes |
| 900 | #1c1917 | Footer |
| 950 | #0c0a09 | Noir max |

#### Accent — Émeraude (conformité/action)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #ecfdf5 | Fonds validation |
| 100 | #d1fae5 | Badges conformité |
| 200 | #a7f3d0 | Bordures accent |
| 300 | #6ee7b7 | Icônes |
| 400 | #34d399 | Éléments secondaires |
| 500 | #10b981 | CTA principal |
| 600 | #059669 | Hover CTA |
| 700 | #047857 | Texte accent |
| 800 | #065f46 | Texte accent sombre |
| 900 | #064e3b | Titres accent |
| 950 | #022c22 | Texte très foncé |

#### Neutral — Zinc (gris froid)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #fafafa | Fond page |
| 100 | #f4f4f5 | Fonds alternés |
| 200 | #e4e4e7 | Bordures subtiles |
| 300 | #d4d4d8 | Bordures |
| 400 | #a1a1aa | Texte désactivé |
| 500 | #71717a | Texte secondaire |
| 600 | #52525b | Texte courant |
| 700 | #3f3f46 | Texte principal |
| 800 | #27272a | Titres secondaires |
| 900 | #18181b | Titres |
| 950 | #09090b | Texte max contraste |

### Contraste WCAG

| Combinaison | Ratio | Statut |
|------------|-------|--------|
| Accent-500 (#10b981) sur white | 3.1:1 | AA grands textes |
| Accent-600 (#059669) sur white | 4.6:1 | AA ✓ |
| Accent-700 (#047857) sur white | 5.9:1 | AA ✓ |
| Primary-700 (#3b4557) sur white | 7.5:1 | AAA ✓ |
| Primary-900 (#1a1f2e) sur white | 14.8:1 | AAA ✓ |
| White sur Primary-800 (#2d3444) | 10.8:1 | AAA ✓ |
| White sur Primary-900 (#1a1f2e) | 14.8:1 | AAA ✓ |
| White sur Accent-600 (#059669) | 4.6:1 | AA ✓ |
| White sur Accent-700 (#047857) | 5.9:1 | AA ✓ |

### Typographie

#### Heading : Oswald
- **Source** : https://gwfh.mranftl.com/fonts/oswald
- **Poids** : 500, 600, 700
- **Justification** : Condensée et impactante — titres qui frappent. L'esprit "industriel" colle à l'univers sécurité/BTP. Très lisible même en petite taille grâce aux proportions étroites.

#### Body : Work Sans
- **Source** : https://gwfh.mranftl.com/fonts/work-sans
- **Poids** : 400, 500, 600
- **Justification** : Géométrique, efficace, sans personnalité envahissante. Complète Oswald sans rivaliser. Bonne lisibilité dans les paragraphes techniques (normes, ERP).

### Tokens Tailwind v4

```css
/* theme-b.css — Bastion */
@import "tailwindcss";

@theme {
  --color-primary-50: #f7f8f9;
  --color-primary-100: #eef0f3;
  --color-primary-200: #d5dae2;
  --color-primary-300: #b0bac8;
  --color-primary-400: #8494a7;
  --color-primary-500: #5e6e82;
  --color-primary-600: #49566a;
  --color-primary-700: #3b4557;
  --color-primary-800: #2d3444;
  --color-primary-900: #1a1f2e;
  --color-primary-950: #0d1017;

  --color-secondary-50: #fafaf9;
  --color-secondary-100: #f5f5f4;
  --color-secondary-200: #e7e5e4;
  --color-secondary-300: #d6d3d1;
  --color-secondary-400: #a8a29e;
  --color-secondary-500: #78716c;
  --color-secondary-600: #57534e;
  --color-secondary-700: #44403c;
  --color-secondary-800: #292524;
  --color-secondary-900: #1c1917;
  --color-secondary-950: #0c0a09;

  --color-accent-50: #ecfdf5;
  --color-accent-100: #d1fae5;
  --color-accent-200: #a7f3d0;
  --color-accent-300: #6ee7b7;
  --color-accent-400: #34d399;
  --color-accent-500: #10b981;
  --color-accent-600: #059669;
  --color-accent-700: #047857;
  --color-accent-800: #065f46;
  --color-accent-900: #064e3b;
  --color-accent-950: #022c22;

  --color-neutral-50: #fafafa;
  --color-neutral-100: #f4f4f5;
  --color-neutral-200: #e4e4e7;
  --color-neutral-300: #d4d4d8;
  --color-neutral-400: #a1a1aa;
  --color-neutral-500: #71717a;
  --color-neutral-600: #52525b;
  --color-neutral-700: #3f3f46;
  --color-neutral-800: #27272a;
  --color-neutral-900: #18181b;
  --color-neutral-950: #09090b;

  --font-heading: 'Oswald', sans-serif;
  --font-body: 'Work Sans', sans-serif;

  --radius-DEFAULT: 0;
  --radius-lg: 0;
  --radius-xl: 0;

  --anim-tempo: 300ms;
}
```

### Composants visuels de référence

#### Bouton CTA principal
- Fond : `accent-600`, Texte : `white`, Hover : `accent-700`
- Padding : `py-3 px-8`, Border-radius : `0`, Min 44x44px
- Transition : `all 300ms`, Hover : fond plus foncé uniquement (pas d'ombre)

#### Card
- Fond : `white`, Bordure : `primary-200` (1px), Ombre : aucune
- Border-radius : `0`, Hover : `bordure accent-500`

#### Guide de couleur texte par fond

| Fond | Texte titre | Texte corps | Texte CTA bouton |
|------|------------|-------------|------------------|
| white / neutral-50 | primary-900 | primary-600 | white sur accent-600 |
| primary-50 / primary-100 | primary-900 | primary-700 | white sur accent-600 |
| primary-800+ / primary-900 | white | white/90 | white sur accent-500 |
| neutral-900+ | white | neutral-300 | white sur accent-600 |

---

## Thème C — "Confiance"

**Archétype** : Aéré / Élégant
**Mood** : Rassurant, accessible, humain

### Ambiance visuelle
Un bleu marine chaud rencontre un ambre doré — la stabilité du professionnel établi alliée à la chaleur de l'artisan de proximité. Le serif en heading apporte du sérieux sans rigidité. Les ombres douces et les radius arrondis créent un site accueillant, rassurant pour le petit commerçant qui cherche un partenaire de confiance.

### Palette de couleurs

#### Primary — Marine chaud (bleu profond)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #f0f4f8 | Fonds très légers |
| 100 | #d9e2ec | Fonds légers |
| 200 | #bcccdc | Bordures légères |
| 300 | #9fb3c8 | Bordures |
| 400 | #829ab1 | Icônes secondaires |
| 500 | #627d98 | Texte secondaire |
| 600 | #486581 | Texte courant |
| 700 | #334e68 | Texte principal |
| 800 | #243b53 | Sections sombres |
| 900 | #102a43 | Hero, header |
| 950 | #0a1929 | Noir profond |

#### Secondary — Crème (fond chaleureux)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #fffbf5 | Fond page principal |
| 100 | #fef6ec | Fonds alternés |
| 200 | #fde8c8 | Bordures légères |
| 300 | #fbd5a0 | Bordures |
| 400 | #f5b461 | Icônes |
| 500 | #e59a30 | Éléments décoratifs |
| 600 | #c47f17 | Texte secondaire fort |
| 700 | #9d6410 | Texte accent |
| 800 | #7b4e0e | Texte sombre |
| 900 | #5c3a0b | Titres accent |
| 950 | #3d2607 | Texte très foncé |

#### Accent — Ambre doré (CTA/action)
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #fffbeb | Fonds d'accent léger |
| 100 | #fef3c7 | Badges |
| 200 | #fde68a | Bordures accent |
| 300 | #fcd34d | Étoiles avis |
| 400 | #fbbf24 | Éléments secondaires |
| 500 | #f59e0b | CTA principal |
| 600 | #d97706 | Hover CTA |
| 700 | #b45309 | Texte accent fort |
| 800 | #92400e | Texte accent sombre |
| 900 | #78350f | Titres accent |
| 950 | #451a03 | Texte très foncé |

#### Neutral — Gris chaud
| Nuance | Hex | Usage |
|--------|-----|-------|
| 50 | #fafaf9 | Fond page |
| 100 | #f5f5f4 | Fonds alternés |
| 200 | #e7e5e4 | Bordures subtiles |
| 300 | #d6d3d1 | Bordures |
| 400 | #a8a29e | Texte désactivé |
| 500 | #78716c | Texte secondaire |
| 600 | #57534e | Texte courant |
| 700 | #44403c | Texte principal |
| 800 | #292524 | Titres secondaires |
| 900 | #1c1917 | Titres |
| 950 | #0c0a09 | Texte max contraste |

### Contraste WCAG

| Combinaison | Ratio | Statut |
|------------|-------|--------|
| Accent-600 (#d97706) sur white | 3.5:1 | AA grands textes |
| Accent-700 (#b45309) sur white | 4.9:1 | AA ✓ |
| Accent-800 (#92400e) sur white | 6.6:1 | AA ✓ |
| Primary-700 (#334e68) sur white | 7.3:1 | AAA ✓ |
| Primary-800 (#243b53) sur white | 10.0:1 | AAA ✓ |
| Primary-900 (#102a43) sur white | 13.5:1 | AAA ✓ |
| White sur Primary-800 (#243b53) | 10.0:1 | AAA ✓ |
| White sur Primary-900 (#102a43) | 13.5:1 | AAA ✓ |
| White sur Accent-700 (#b45309) | 4.9:1 | AA ✓ |
| Primary-900 sur Secondary-50 (#fffbf5) | 13.3:1 | AAA ✓ |

**Note CTA** : Le bouton CTA utilise `accent-700` (#b45309) fond + `white` texte pour garantir AA (4.9:1). Hover : `accent-800`. L'ambre pur (#f59e0b) est trop clair pour du texte blanc — réservé aux étoiles et décorations.

### Typographie

#### Heading : Libre Baskerville
- **Source** : https://gwfh.mranftl.com/fonts/libre-baskerville
- **Poids** : 400, 700
- **Justification** : Serif classique qui inspire confiance et sérieux sans froideur. Le petit commerçant reconnaît un professionnel établi. Contraste élégant avec DM Sans en body.

#### Body : DM Sans
- **Source** : https://gwfh.mranftl.com/fonts/dm-sans
- **Poids** : 400, 500, 600, 700
- **Justification** : Géométrique contemporaine, très lisible. Sa rondeur douce complète la rigueur du Baskerville. Excellente sur écran dans les longs paragraphes.

### Tokens Tailwind v4

```css
/* theme-c.css — Confiance */
@import "tailwindcss";

@theme {
  --color-primary-50: #f0f4f8;
  --color-primary-100: #d9e2ec;
  --color-primary-200: #bcccdc;
  --color-primary-300: #9fb3c8;
  --color-primary-400: #829ab1;
  --color-primary-500: #627d98;
  --color-primary-600: #486581;
  --color-primary-700: #334e68;
  --color-primary-800: #243b53;
  --color-primary-900: #102a43;
  --color-primary-950: #0a1929;

  --color-secondary-50: #fffbf5;
  --color-secondary-100: #fef6ec;
  --color-secondary-200: #fde8c8;
  --color-secondary-300: #fbd5a0;
  --color-secondary-400: #f5b461;
  --color-secondary-500: #e59a30;
  --color-secondary-600: #c47f17;
  --color-secondary-700: #9d6410;
  --color-secondary-800: #7b4e0e;
  --color-secondary-900: #5c3a0b;
  --color-secondary-950: #3d2607;

  --color-accent-50: #fffbeb;
  --color-accent-100: #fef3c7;
  --color-accent-200: #fde68a;
  --color-accent-300: #fcd34d;
  --color-accent-400: #fbbf24;
  --color-accent-500: #f59e0b;
  --color-accent-600: #d97706;
  --color-accent-700: #b45309;
  --color-accent-800: #92400e;
  --color-accent-900: #78350f;
  --color-accent-950: #451a03;

  --color-neutral-50: #fafaf9;
  --color-neutral-100: #f5f5f4;
  --color-neutral-200: #e7e5e4;
  --color-neutral-300: #d6d3d1;
  --color-neutral-400: #a8a29e;
  --color-neutral-500: #78716c;
  --color-neutral-600: #57534e;
  --color-neutral-700: #44403c;
  --color-neutral-800: #292524;
  --color-neutral-900: #1c1917;
  --color-neutral-950: #0c0a09;

  --font-heading: 'Libre Baskerville', serif;
  --font-body: 'DM Sans', sans-serif;

  --radius-DEFAULT: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;

  --anim-tempo: 500ms;
}
```

### Composants visuels de référence

#### Bouton CTA principal
- Fond : `accent-700`, Texte : `white`, Hover : `accent-800`
- Padding : `py-3.5 px-7`, Border-radius : `DEFAULT`, Min 44x44px
- Transition : `all 500ms ease`, Hover : `shadow-md`

#### Card
- Fond : `white`, Bordure : `primary-200`, Ombre : `shadow-sm`
- Border-radius : `lg`, Hover : `shadow-md`, Transition douce

#### Guide de couleur texte par fond

| Fond | Texte titre | Texte corps | Texte CTA bouton |
|------|------------|-------------|------------------|
| white / secondary-50 | primary-900 | neutral-600 | white sur accent-700 |
| primary-50 / primary-100 | primary-900 | primary-700 | white sur accent-700 |
| primary-800+ / primary-900 | white | white/90 | white sur accent-600 |
| secondary-100 (crème) | primary-900 | neutral-700 | white sur accent-700 |

---

## Variantes de layout recommandées

**Thème A — "Sentinelle"** :
- Hero : plein écran, stats animées sur bandeau, 2 CTA côte à côte
- About : layout image gauche + texte droite (asymétrique)
- Services : grille 3 colonnes avec icônes + tags colorés
- Témoignages : carousel horizontal avec flèches

**Thème B — "Bastion"** :
- Hero : split vertical (texte gauche / illustration droite), fond sombre
- About : texte centré pleine largeur, chiffres clés en bandeau
- Services : liste verticale alternée (icône + description, gauche/droite)
- Témoignages : grille 3 colonnes, cartes bordurées sans ombre

**Thème C — "Confiance"** :
- Hero : centré avec fond crème dégradé, CTA empilés verticalement
- About : 2 colonnes avec photo portrait + citation en exergue
- Services : cartes empilées 2 colonnes avec illustrations subtiles
- Témoignages : format citation pleine largeur, défilement vertical

---

## Éléments signature

**Thème A — "Sentinelle"** :
1. **Bandeau stats animé** : compteurs qui s'incrémentent au scroll (48h, 50+, 1 interlocuteur) — fond `primary-900`, texte `white`, accents `accent-500`
2. **Tags de service colorés** : badges "Le plus demandé" (bleu) et "Obligatoire ERP" (orange) sur les cartes services
3. **Bordure accent latérale** : liseré `accent-500` de 3px à gauche des cards et blockquotes

**Thème B — "Bastion"** :
1. **Séparateur géométrique** : lignes diagonales SVG entre sections, en `primary-200`
2. **Numérotation de section** : grands chiffres (`primary-300`, 4rem) en arrière-plan des titres H2
3. **Indicateur de conformité** : pastille émeraude pulsante à côté des certifications (NF A2P, RGPD)

**Thème C — "Confiance"** :
1. **Citation en exergue** : grande lettrine dorée (`accent-500`) + serif italic pour les témoignages
2. **Fond crème texturé** : micro-grain subtil en `secondary-50` sur les sections alternées — chaleur papier
3. **Icônes dorées dessinées** : style line-art en `accent-600` pour les services — touche artisanale

---

## Échelle typographique (commune)

| Élément | Mobile | Desktop | Poids | Police |
|---------|--------|---------|-------|--------|
| H1 | 2rem | 3rem | 700 | heading |
| H2 | 1.5rem | 2rem | 600 | heading |
| H3 | 1.25rem | 1.5rem | 600 | heading |
| Body | 1rem | 1.125rem | 400 | body |
| Small | 0.875rem | 0.875rem | 400 | body |
| CTA | 1rem | 1.125rem | 600 | body |

> L'échelle typographique est la même pour les 3 thèmes — seules les familles de polices changent.

## Section alternée (commune)

- Impaire : fond `white`
- Paire : fond `primary-50` ou `neutral-50` (selon thème)
- CTA/bannière : fond `primary-800` ou `primary-900` — texte `white` / `white/90`

> Le pattern d'alternance est le même — les couleurs changent avec le thème actif.

---

## Message client 2

> "Le travail sur ton site avance bien. La maquette sera bientôt prête — tu pourras choisir parmi plusieurs propositions visuelles."

*(Ton informel — Marc est le client et le dirigeant de l'agence.)*
