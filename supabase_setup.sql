-- ══════════════════════════════════════════════
--  PICPUS HOUSE — Setup base de données Supabase
--  À exécuter dans : Supabase > SQL Editor > New query
-- ══════════════════════════════════════════════

-- Table des étudiants
create table if not exists students (
  name text primary key,
  filiere text,
  created_at timestamptz default now(),
  last_seen_at timestamptz default now()
);

-- Table des résultats de quiz (1 ligne par tentative)
create table if not exists quiz_results (
  id uuid default gen_random_uuid() primary key,
  student_name text not null,
  filiere text not null,
  theme_id text not null,
  theme_title text,
  mode_id text not null,
  score int not null,
  total int not null,
  pct int not null,
  played_at timestamptz default now()
);

-- Table des fiches consultées
create table if not exists fiche_completions (
  id uuid default gen_random_uuid() primary key,
  student_name text not null,
  filiere text not null,
  fiche_id text not null,
  fiche_title text,
  completed_at timestamptz default now(),
  constraint fiche_completions_unique unique (student_name, fiche_id)
);

-- Table des notes attribuées par le formateur
create table if not exists grades (
  id uuid default gen_random_uuid() primary key,
  student_name text not null,
  label text not null,
  filiere text,
  grade numeric(5,2),
  max_grade numeric(5,2) default 20,
  comment text,
  graded_at timestamptz default now()
);

-- Désactiver RLS (outil interne, pas besoin d'authentification par ligne)
alter table students disable row level security;
alter table quiz_results disable row level security;
alter table fiche_completions disable row level security;
alter table grades disable row level security;
