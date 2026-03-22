const pdf = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..');

async function readPDF(relPath) {
  const fullPath = path.join(BASE, relPath);
  try {
    const buf = fs.readFileSync(fullPath);
    const data = await pdf(buf);
    return data.text;
  } catch(e) {
    return `[ERROR: ${e.message.substring(0,80)}]`;
  }
}

async function run() {
  const files = [
    "Annales/BIOALC/2023 (ancien référentiel)/BIOCHIMIE ET TECHNOLOGIES D'ANALYSE.pdf",
    "Annales/BIOALC/2023 (ancien référentiel)/MICROBIOLOGIE ET TECHNOLOGIES D'ANALYSE .pdf",
    "Annales/BIOALC/2024 (ancien référentiel)/BIOLOGIE CELLULAIRE ET MOLÉCULAIRE ET TECHNOLOGIES D'ANALYSE.pdf",
    "Annales/BIOALC/2024 (ancien référentiel)/SCIENCES ET TECHNOLOGIES BIOINDUSTRIELLES .pdf",
    "Annales/FED/2025/Analyse et définition d'un système 2025.pdf",
    "Annales/FED/2024/Analyse et définition d'un système 2024.pdf",
    "Annales/FED/2023/Analyse et définition d'un système 2023.pdf",
    "Annales/FED/2022/Analyse et définition d'un système 2022.pdf",
    "Annales/OPTIQUE/2024/24olets_-_sujet.pdf",
    "Annales/OPTIQUE/2024/24ologph_-_sujet.pdf",
    "Annales/OPTIQUE/2024/24olavis_-_sujet.pdf",
    "Annales/OPTIQUE/2023/ETSO 2023.pdf",
    "Annales/OPTIQUE/2023/OG 2023.pdf",
    "Annales/PRODENT/2019 (ancien référentiel)/Sujet E2 (3).pdf",
    "Annales/PRODENT/2019 (ancien référentiel)/Sujet E3 (2).pdf",
    "Annales/PRODENT/2024 (ancien référentiel)/PRINCIPAL SUJET E2 2024.pdf",
    "Annales/PRODENT/2024 (ancien référentiel)/PRINCIPAL SUJET E4 2024.pdf",
    "Annales/ABM/2019/Biochimie 2019.pdf",
    "Annales/ABM/2019/HAI 2019.pdf",
    "Annales/ABM/2019/Microbiologie 2019.pdf",
    "Supports de cours/ABM et BM/FT-glucose (1).pdf",
    "Supports de cours/ABM et BM/antibiogramme.pdf",
    "Supports de cours/ABM et BM/methode chromatographiques élèves  (1) (1).pdf",
    "Circulaires/FED OPTION C/2026_BTS FED - ANNEXE 10- Calendrier de prise en compte de la  progression BTS FED 2025 - 2026.pdf",
    "Référentiels/GAP BioALC novembre 2024 v2.0 (9).pdf",
    "Référentiels/BTS BIOLOGIE MEDICALE premiere session 2027 (3) (1).pdf",
  ];

  const results = {};
  for (const f of files) {
    console.log(`Reading: ${f}`);
    const text = await readPDF(f);
    const key = path.basename(f, '.pdf').substring(0, 40);
    results[key] = text.substring(0, 4000);
  }

  fs.writeFileSync(path.join(__dirname, 'pdf_content.json'), JSON.stringify(results, null, 2));
  console.log('Done! Content saved to pdf_content.json');
}

run().catch(console.error);
