# Picpus House — Plateforme Révisions BTS

## Contexte
Application React de révision pour les BTS du campus Picpus (Aurlom Éducation).
6 filières : BIOALC, ABM, BM, Opticien-Lunetier, FED C, Prothésiste Dentaire.
La filière BIOALC est la plus développée : 200+ questions, 16 fiches, 11 thèmes de quiz.

## Stack technique
- React 18 (JSX, hooks)
- Recharts pour les graphiques
- Tailwind-like inline styles (pas de CSS externe)
- Font: Sora (Google Fonts)
- Thème dark avec palette Aurlom (violet #C57AFF / #902EDB)

## Structure
- `src/App.jsx` — Composant principal (tout-en-un actuellement)
- Les données (questions, fiches, annales) sont intégrées en dur dans le JSX
- Pas de backend, pas de base de données (state React en mémoire)

## Conventions
- Français pour tout le contenu pédagogique
- Questions de quiz : {id, prompt, choices:[4], answer:index, diff:1-3, explication, tags:[]}
- Fiches : {id, title, bloc, tags, duree, niveau, qbank, contenu}
- 3 modes de quiz : Express (10Q), Standard (20Q), Marathon (50Q)

## Commandes
- `npm run dev` — Serveur de développement (Vite)
- `npm run build` — Build production

## Priorités de développement
1. Enrichir les banques de questions (objectif : 50+ par thème)
2. Ajouter les contenus des autres filières (ABM, BM, OL, FED, PRODENT)
3. Migrer vers des fichiers JSON séparés pour les données
4. Ajouter persistance (localStorage ou backend)
5. Responsive mobile
