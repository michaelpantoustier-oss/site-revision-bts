// phys_chim.js — Données Physique-Chimie BTS
// Importé par abm.js, bm.js et App.jsx

const T={accent:"#C57AFF",green:"#4AEAAC",orange:"#FFB259",red:"#FF6370",yellow:"#F0E547",pink:"#FF5DA0",blue:"#5EB5FF",cyan:"#47E5D9",text2:"#A199B2",border:"rgba(255,255,255,0.05)"};

// ─────────────────────────────────────────────
// QB 1 — STRUCTURE DE L'ATOME
// ─────────────────────────────────────────────
export const QB_PC_STRUCTURE_ATOME = [
  {id:"pc_sa_1",prompt:"Quel est le nombre de protons, neutrons et électrons d'un atome de ²³Na ?",choices:["11p, 12n, 11e","11p, 11n, 11e","12p, 11n, 12e","23p, 11n, 23e"],answer:0,diff:1,explication:"²³Na : Z=11 (protons et électrons) et A=23 donc N=A-Z=12 neutrons. Les autres options confondent A, Z et N.",tags:["Atome","Noyau","Isotopes"]},
  {id:"pc_sa_2",prompt:"La configuration électronique du soufre (Z=16) à l'état fondamental est :",choices:["1s² 2s² 2p⁶ 3s² 3p⁴","1s² 2s² 2p⁶ 3s² 3p⁶","1s² 2s² 2p⁴ 3s² 3p⁶","1s² 2s² 2p⁶ 3s⁴"],answer:0,diff:2,explication:"S (Z=16) : on place 16 électrons selon Klechkowski. 1s²(2) 2s²(4) 2p⁶(10) 3s²(12) 3p⁴(16). La sous-couche 3p contient 4 électrons, pas 6.",tags:["Configuration électronique","Klechkowski","Sous-couches"]},
  {id:"pc_sa_3",prompt:"La règle de Hund stipule que dans une sous-couche :",choices:["Les électrons occupent les orbitales en maximisant le nombre de spins parallèles","Les électrons se placent toujours par paires dès la première orbitale","Chaque orbitale peut contenir au maximum 3 électrons","Les sous-couches se remplissent dans l'ordre n croissant"],answer:0,diff:1,explication:"Hund : les électrons occupent les orbitales vacantes disponibles en gardant leurs spins parallèles (↑↑↑) avant de se paires. Cela minimise l'énergie de répulsion.",tags:["Règle de Hund","Orbitales","Configuration électronique"]},
  {id:"pc_sa_4",prompt:"Selon le principe de Pauli, dans une orbitale atomique :",choices:["On ne peut placer que 2 électrons de spins opposés","On peut placer jusqu'à 3 électrons","Tous les électrons ont le même spin","Il ne peut y avoir qu'un seul électron"],answer:0,diff:1,explication:"Le principe d'exclusion de Pauli interdit à deux électrons d'avoir les quatre mêmes nombres quantiques. Dans une orbitale donnée (n,l,ml fixes), ms doit différer : ↑ et ↓ uniquement.",tags:["Principe de Pauli","Nombres quantiques","Spin"]},
  {id:"pc_sa_5",prompt:"Quel nombre quantique définit la forme de l'orbitale atomique ?",choices:["l (secondaire ou azimutal)","n (principal)","ml (magnétique)","ms (spin)"],answer:0,diff:2,explication:"l=0→s (sphérique), l=1→p (bilobée), l=2→d, l=3→f. n fixe la couche et l'énergie principale, ml l'orientation, ms le spin.",tags:["Nombres quantiques","Orbitales","Sous-couches"]},
  {id:"pc_sa_6",prompt:"Pour n=3, quels sous-niveaux sont accessibles ?",choices:["3s, 3p, 3d","3s, 3p","3s, 3p, 3d, 3f","3d, 3f"],answer:0,diff:2,explication:"Pour une couche n, les valeurs de l vont de 0 à n-1. Pour n=3 : l=0(3s), l=1(3p), l=2(3d). Le sous-niveau 3f n'existe pas (l=3 nécessite n≥4).",tags:["Nombres quantiques","Sous-couches","Couches"]},
  {id:"pc_sa_7",prompt:"Le fer (Z=26) a pour configuration électronique :",choices:["[Ar] 3d⁶ 4s²","[Ar] 3d⁸","[Ar] 4s² 4p⁶","[Ne] 3s² 3p⁶ 3d⁶ 4s²"],answer:0,diff:2,explication:"Fe : [Ar]=1s²2s²2p⁶3s²3p⁶ (18e), puis 3d⁶ 4s² (8e) = 26e. Klechkowski place 4s avant 3d en remplissage, mais 4s est indiqué après 3d dans la notation compacte.",tags:["Configuration électronique","Métaux de transition","Klechkowski"]},
  {id:"pc_sa_8",prompt:"Deux atomes sont isotopes s'ils ont :",choices:["Le même nombre de protons mais des masses différentes","Le même nombre de neutrons","Le même nombre de masse A","La même configuration électronique mais des charges différentes"],answer:0,diff:1,explication:"Les isotopes d'un même élément ont le même Z (même nombre de protons, donc même position dans le tableau) mais des nombres de neutrons différents, d'où des masses différentes (ex : ¹²C et ¹³C).",tags:["Isotopes","Noyau","Nombre de masse"]},
  {id:"pc_sa_9",prompt:"Dans le tableau périodique, les éléments d'une même période ont :",choices:["Le même nombre de couches électroniques","Le même nombre d'électrons de valence","Les mêmes propriétés chimiques","Le même nombre de protons"],answer:0,diff:1,explication:"Une période correspond à un niveau n. Tous les éléments de la période 3 (Na→Ar) remplissent la couche n=3. Les éléments d'une même colonne (groupe) partagent le même nombre d'électrons de valence.",tags:["Tableau périodique","Périodes","Groupes"]},
  {id:"pc_sa_10",prompt:"L'ion Ca²⁺ (Z=20) a la configuration électronique :",choices:["1s² 2s² 2p⁶ 3s² 3p⁶","1s² 2s² 2p⁶ 3s² 3p⁶ 4s²","1s² 2s² 2p⁶ 3s² 3p⁴","1s² 2s² 2p⁶ 3s² 3p⁶ 3d²"],answer:0,diff:2,explication:"Ca (Z=20) : [Ar] 4s². Perte de 2e (ion Ca²⁺) → [Ar] = 1s² 2s² 2p⁶ 3s² 3p⁶ (18 électrons). Isoélectronique avec Ar.",tags:["Ions","Configuration électronique","Tableau périodique"]},
  {id:"pc_sa_11",prompt:"Combien d'électrons peut contenir au maximum une sous-couche d ?",choices:["10","6","2","14"],answer:0,diff:1,explication:"La sous-couche d correspond à l=2, avec 5 orbitales (ml=-2,-1,0,+1,+2). Chaque orbitale contient 2 électrons : 5×2=10 électrons maximum.",tags:["Sous-couches","Orbitales","Configuration électronique"]},
  {id:"pc_sa_12",prompt:"Quelle affirmation sur l'électronégativité de Pauling est correcte ?",choices:["Le fluor (F) est l'élément le plus électronégatif (χ=3,98)","L'oxygène est plus électronégatif que le fluor","L'électronégativité augmente de gauche à droite ET de haut en bas","Le carbone est plus électronégatif que l'azote"],answer:0,diff:1,explication:"F est le plus électronégatif (3,98). L'électronégativité augmente de gauche à droite et de bas en haut dans le tableau. O (3,44) < F (3,98) et N (3,04) > C (2,55).",tags:["Électronégativité","Tableau périodique","Pauling"]},
  {id:"pc_sa_13",prompt:"Le nombre quantique magnétique ml pour l=2 prend les valeurs :",choices:["-2, -1, 0, +1, +2","-2, -1, 0","0, 1, 2","-3 à +3"],answer:0,diff:2,explication:"ml varie de -l à +l par entiers. Pour l=2 : ml ∈ {-2,-1,0,+1,+2}, soit 5 valeurs correspondant aux 5 orbitales d.",tags:["Nombres quantiques","Orbitales d","Sous-couches"]},
  {id:"pc_sa_14",prompt:"La règle de Klechkowski ordonne les niveaux d'énergie selon :",choices:["(n+l) croissant, puis n croissant en cas d'égalité","n croissant, puis l croissant","l croissant puis n","n×l croissant"],answer:0,diff:2,explication:"Klechkowski : on remplit dans l'ordre (n+l) croissant. Si deux sous-niveaux ont le même (n+l), on remplit d'abord celui de plus petit n. Ex : 3d (n+l=5) se remplit après 4s (n+l=4).",tags:["Klechkowski","Configuration électronique","Énergie"]},
];

// ─────────────────────────────────────────────
// QB 2 — ÉDIFICES COVALENTS
// ─────────────────────────────────────────────
export const QB_PC_EDIFICES_COVALENTS = [
  {id:"pc_ec_1",prompt:"Selon la règle de l'octet, un atome de carbone forme combien de liaisons covalentes ?",choices:["4","2","3","6"],answer:0,diff:1,explication:"C possède 4 électrons de valence. Pour atteindre l'octet (8 électrons), il doit former 4 liaisons covalentes. Les autres réponses ne permettent pas d'atteindre l'octet.",tags:["Règle de l'octet","Liaisons covalentes","Carbone"]},
  {id:"pc_ec_2",prompt:"La molécule H₂O présente selon VSEPR une géométrie :",choices:["Coudée (angulaire)","Linéaire","Tétraédrique","Trigonale plane"],answer:0,diff:1,explication:"L'oxygène dans H₂O a 2 doublets liants et 2 doublets non-liants : arrangement tétraédrique électronique mais géométrie moléculaire coudée (angle H-O-H ≈ 104,5°).",tags:["VSEPR","Géométrie moléculaire","Eau"]},
  {id:"pc_ec_3",prompt:"Quelle est la géométrie de la molécule BF₃ selon VSEPR ?",choices:["Trigonale plane","Pyramidale","Tétraédrique","Linéaire"],answer:0,diff:2,explication:"B dans BF₃ a 3 doublets liants et 0 doublet non-liant (exception à l'octet). AX₃E₀ → trigonale plane, angles de 120°.",tags:["VSEPR","Géométrie moléculaire","Trigonale"]},
  {id:"pc_ec_4",prompt:"Une molécule est polaire si :",choices:["Elle possède des liaisons polaires ET une géométrie non symétrique","Elle possède uniquement des liaisons polaires","Tous ses atomes sont différents","Elle contient des doublets non-liants"],answer:0,diff:2,explication:"CO₂ a deux liaisons C=O polaires mais est apolaire (linéaire, symétrique : les moments dipolaires s'annulent). Une molécule est polaire si les vecteurs moment dipolaire ne se compensent pas.",tags:["Polarité","Moment dipolaire","Géométrie moléculaire"]},
  {id:"pc_ec_5",prompt:"La structure de Lewis de N₂ montre :",choices:["Une triple liaison N≡N et un doublet non-liant sur chaque N","Une double liaison N=N","Deux simples liaisons N-N","Une triple liaison sans doublets non-liants"],answer:0,diff:2,explication:"N possède 5 électrons de valence. Dans N₂ : triple liaison (3 doublets liants) + 1 doublet non-liant sur chaque N → chaque N a bien 8 électrons au total.",tags:["Structure de Lewis","Triple liaison","Azote"]},
  {id:"pc_ec_6",prompt:"L'hybridation du carbone dans CH₄ est :",choices:["sp³","sp²","sp","d²sp³"],answer:0,diff:1,explication:"CH₄ : C forme 4 liaisons σ équivalentes, géométrie tétraédrique, angles de 109,5°. L'hybridation sp³ combine 1 orbitale s et 3 orbitales p pour donner 4 orbitales hybrides équivalentes.",tags:["Hybridation","sp3","Méthane"]},
  {id:"pc_ec_7",prompt:"Quelle hybridation correspond à une géométrie linéaire ?",choices:["sp","sp²","sp³","sp³d"],answer:0,diff:1,explication:"sp : 2 orbitales hybrides à 180° → linéaire. Exemples : CO₂, acétylène HC≡CH, BeH₂. sp²→trigonale plane (120°), sp³→tétraédrique (109,5°).",tags:["Hybridation","sp","Linéaire"]},
  {id:"pc_ec_8",prompt:"L'électronégativité du chlore selon Pauling est :",choices:["3,16","2,55","3,44","3,98"],answer:0,diff:2,explication:"Valeurs de Pauling : F=3,98 ; O=3,44 ; Cl=3,16 ; N=3,04 ; C=2,55 ; H=2,20. Cl est plus électronégatif que C mais moins que O.",tags:["Électronégativité","Pauling","Chlore"]},
  {id:"pc_ec_9",prompt:"Dans la molécule NH₃, l'azote a :",choices:["3 doublets liants et 1 doublet non-liant","4 doublets liants","2 doublets liants et 2 doublets non-liants","3 doublets liants et 0 doublet non-liant"],answer:0,diff:1,explication:"N dans NH₃ : 5 électrons de valence, 3 liaisons N-H (3 doublets liants) + 1 doublet non-liant. AX₃E₁ → pyramidale trigonale, angle H-N-H ≈ 107°.",tags:["Structure de Lewis","NH3","VSEPR"]},
  {id:"pc_ec_10",prompt:"Quelle molécule possède une liaison double C=O ?",choices:["Formaldéhyde (H₂C=O)","Méthane (CH₄)","Éthane (C₂H₆)","Chlorure de méthyle (CH₃Cl)"],answer:0,diff:1,explication:"Le formaldéhyde (méthanal) H₂C=O possède une liaison double C=O. C y est sp² hybridé. Les autres molécules ont uniquement des liaisons simples σ.",tags:["Liaison double","Carbonyle","Structure de Lewis"]},
  {id:"pc_ec_11",prompt:"La règle de l'octet est respectée pour tous les atomes de :",choices:["CO₂","BF₃","PCl₅","SF₆"],answer:0,diff:2,explication:"Dans CO₂ : C forme deux doubles liaisons (octet), O a 2 doublets non-liants + 2 liants (octet). BF₃ (B avec 6e), PCl₅ (P avec 10e), SF₆ (S avec 12e) sont des exceptions à l'octet.",tags:["Règle de l'octet","Exceptions","CO2"]},
  {id:"pc_ec_12",prompt:"Deux atomes sont reliés par une liaison covalente coordinée (dative) quand :",choices:["Un seul atome fournit les deux électrons du doublet liant","Les deux atomes fournissent chacun un électron","Les électrons sont délocalisés sur tout le système","La liaison se forme entre deux ions de charges opposées"],answer:0,diff:3,explication:"Liaison coordinée (ou dative) : un atome donneur (base de Lewis) apporte les deux électrons à un atome accepteur (acide de Lewis). Ex : NH₃ → BF₃ où N fournit son doublet libre à B.",tags:["Liaison covalente","Coordinée","Lewis acide-base"]},
  {id:"pc_ec_13",prompt:"Selon VSEPR, PCl₅ a une géométrie :",choices:["Bipyramidale trigonale","Octaédrique","Tétraédrique","Pyramidale"],answer:0,diff:3,explication:"P dans PCl₅ : 5 doublets liants, 0 non-liant → AX₅E₀ → bipyramidale trigonale (3 positions équatoriales à 120°, 2 axiales à 90°). P utilise des orbitales d (exception à l'octet).",tags:["VSEPR","PCl5","Bipyramidale"]},
];

// ─────────────────────────────────────────────
// QB 3 — FORCES INTERMOLÉCULAIRES
// ─────────────────────────────────────────────
export const QB_PC_FORCES_INTERMO = [
  {id:"pc_fi_1",prompt:"Les forces de London résultent de :",choices:["Dipôles instantanés créés par fluctuations d'électrons","Interactions entre dipôles permanents","Liaisons entre H et un atome électronégatif","Liaisons ioniques entre charges opposées"],answer:0,diff:1,explication:"London (dispersion) : les fluctuations du nuage électronique créent des dipôles instantanés qui induisent des dipôles dans les molécules voisines. Elles existent dans TOUTES les molécules.",tags:["Forces de London","Dipôles instantanés","Interactions faibles"]},
  {id:"pc_fi_2",prompt:"Les interactions de Keesom s'établissent entre :",choices:["Deux molécules polaires (dipôle-dipôle permanents)","Une molécule polaire et une apolaire","Deux molécules apolaires","Un ion et un dipôle"],answer:0,diff:1,explication:"Keesom = interactions dipôle-dipôle entre molécules possédant un moment dipolaire permanent. Les molécules s'orientent pour que les charges partielles opposées se font face.",tags:["Keesom","Dipôle-dipôle","Molécules polaires"]},
  {id:"pc_fi_3",prompt:"Pour qu'une liaison hydrogène X-H···Y se forme, X et Y doivent être :",choices:["Des atomes très électronégatifs : N, O ou F","N'importe quel atome électronégatif dont S et Cl","Uniquement O et F","Uniquement N et O"],answer:0,diff:1,explication:"La liaison hydrogène se forme quand H est lié à N, O ou F (très électronégatifs et petits). X et Y ∈ {N, O, F}. Le Cl est trop gros malgré son électronégativité (3,16).",tags:["Liaison hydrogène","N O F","Forces intermoléculaires"]},
  {id:"pc_fi_4",prompt:"L'énergie d'une liaison hydrogène est typiquement :",choices:["15 à 40 kJ/mol","400 à 500 kJ/mol","1 à 5 kJ/mol","100 à 200 kJ/mol"],answer:0,diff:2,explication:"Les liaisons hydrogène (15-40 kJ/mol) sont bien plus fortes que les forces de Van der Waals (1-10 kJ/mol) mais bien plus faibles que les liaisons covalentes (150-500 kJ/mol).",tags:["Liaison hydrogène","Énergie","Forces intermoléculaires"]},
  {id:"pc_fi_5",prompt:"Dans la paire de bases A-T de l'ADN, combien de liaisons hydrogène sont formées ?",choices:["2","3","1","4"],answer:0,diff:2,explication:"A-T (Adénine-Thymine) : 2 liaisons H. G-C (Guanine-Cytosine) : 3 liaisons H. C'est pourquoi les régions riches en G-C ont une Tm (température de fusion) plus élevée.",tags:["ADN","Liaisons hydrogène","Bases azotées"]},
  {id:"pc_fi_6",prompt:"La glace est moins dense que l'eau liquide car :",choices:["Les liaisons hydrogène créent un réseau cristallin plus espacé que l'eau liquide","Les molécules d'eau se dilatent en gelant","Les liaisons covalentes O-H s'allongent","La glace contient moins de liaisons hydrogène que l'eau"],answer:0,diff:2,explication:"Dans la glace, chaque molécule forme 4 liaisons H en réseau tétraédrique rigide : structure hexagonale ouverte (moins dense). Dans l'eau liquide, les liaisons H sont brisées/reformées en permanence, la structure est plus compacte.",tags:["Eau","Glace","Liaisons hydrogène"]},
  {id:"pc_fi_7",prompt:"Les forces de London augmentent avec :",choices:["La masse moléculaire et la polarisabilité","L'électronégativité","La solubilité dans l'eau","Le nombre de liaisons hydrogène"],answer:0,diff:2,explication:"Plus la molécule est grande (masse molaire élevée), plus son nuage électronique est polarisable → dipôles instantanés plus intenses → forces de London plus fortes. D'où les Téb plus élevés pour les alcanes lourds.",tags:["Forces de London","Polarisabilité","Masse moléculaire"]},
  {id:"pc_fi_8",prompt:"Une molécule amphiphile possède :",choices:["Une tête polaire hydrophile et une queue apolaire hydrophobe","Uniquement des groupes polaires","Uniquement des groupes apolaires","Deux têtes polaires identiques"],answer:0,diff:1,explication:"Amphiphile (amphi=des deux côtés, philos=qui aime) : partie hydrophile (tête, ex : -COO⁻ ou -OH) et partie hydrophobe (queue, chaîne alkyle). Exemple : savon, phospholipides.",tags:["Amphiphile","Micelles","Tensioactifs"]},
  {id:"pc_fi_9",prompt:"Parmi les interactions suivantes, laquelle est la plus forte (par ordre décroissant) ?",choices:["Liaison covalente > liaison ionique > liaison H > London","Liaison H > liaison ionique > London > covalente","London > liaison H > covalente > ionique","Ionique > covalente > London > liaison H"],answer:0,diff:2,explication:"Ordre d'énergie : covalente (150-900 kJ/mol) ≈ ionique > liaison H (15-40 kJ/mol) > Keesom/Debye > London (0,1-10 kJ/mol).",tags:["Hiérarchie des liaisons","Énergie","Interactions"]},
  {id:"pc_fi_10",prompt:"La haute tension superficielle de l'eau est due principalement à :",choices:["Les nombreuses liaisons hydrogène entre molécules d'eau","Sa faible masse moléculaire","Sa polarité modérée","La liaison covalente O-H très forte"],answer:0,diff:2,explication:"Les molécules d'eau en surface forment moins de liaisons H que celles en volume → tension superficielle élevée (72 mN/m à 20°C). Plus les liaisons intermoléculaires sont fortes, plus la tension superficielle est élevée.",tags:["Tension superficielle","Eau","Liaisons hydrogène"]},
  {id:"pc_fi_11",prompt:"La solubilité de l'éthanol dans l'eau s'explique par :",choices:["La formation de liaisons hydrogène entre -OH de l'éthanol et H₂O","La solubilité de tous les alcools est identique","Les forces de London entre éthanol et eau","L'éthanol est ionique"],answer:0,diff:1,explication:"'Qui se ressemble s'assemble' : l'éthanol possède un groupe -OH qui forme des liaisons H avec l'eau. La chaîne -CH₂CH₃ hydrophobe est courte, donc l'éthanol reste miscible. Les alcools à longues chaînes sont moins solubles.",tags:["Solubilité","Liaisons hydrogène","Alcool"]},
  {id:"pc_fi_12",prompt:"Dans une micelle, les queues hydrophobes des molécules amphiphiles sont :",choices:["Orientées vers l'intérieur, loin du solvant aqueux","Orientées vers l'extérieur en contact avec l'eau","Réparties aléatoirement","Liées par des liaisons covalentes"],answer:0,diff:2,explication:"Dans une micelle en milieu aqueux : les têtes polaires (hydrophiles) sont en contact avec l'eau à l'extérieur, les queues hydrophobes se regroupent au cœur pour fuir l'eau. Principe des savons et détergents.",tags:["Micelles","Amphiphile","Hydrophobe"]},
  {id:"pc_fi_13",prompt:"Pourquoi HF a-t-il un point d'ébullition plus élevé que HCl malgré une masse plus faible ?",choices:["HF forme des liaisons hydrogène fortes (F très électronégatif) contrairement à HCl","HF est plus polaire en raison de sa masse","HCl forme plus de liaisons covalentes","La force de London de HF est plus grande"],answer:0,diff:2,explication:"HF (Téb=-19,5°C) vs HCl (Téb=-85°C) : bien que HCl soit plus lourd, HF forme de très fortes liaisons H (F est le plus électronégatif, liaison H très forte). La liaison H domine ici sur les forces de London.",tags:["Liaison hydrogène","HF","Point d'ébullition"]},
];

// ─────────────────────────────────────────────
// QB 4 — PRÉPARATION DES SOLUTIONS
// ─────────────────────────────────────────────
export const QB_PC_PREP_SOLUTIONS = [
  {id:"pc_ps_1",prompt:"On dissout 5,85 g de NaCl (M=58,5 g/mol) dans 500 mL d'eau. La concentration molaire est :",choices:["0,2 mol/L","0,1 mol/L","1 mol/L","0,5 mol/L"],answer:0,diff:1,explication:"n(NaCl)=5,85/58,5=0,1 mol. C=n/V=0,1/0,500=0,2 mol/L. Ne pas confondre n et C.",tags:["Concentration molaire","NaCl","Calculs"]},
  {id:"pc_ps_2",prompt:"La masse molaire de H₂SO₄ est :",choices:["98 g/mol","96 g/mol","49 g/mol","80 g/mol"],answer:0,diff:1,explication:"H₂SO₄ : 2×H(1) + S(32) + 4×O(16) = 2+32+64 = 98 g/mol. Ne pas oublier les 4 oxygènes.",tags:["Masse molaire","H2SO4","Calculs"]},
  {id:"pc_ps_3",prompt:"Pour préparer 250 mL d'une solution à 0,1 mol/L à partir d'une solution à 1 mol/L, le volume à prélever est :",choices:["25 mL","2,5 mL","250 mL","10 mL"],answer:0,diff:1,explication:"C₁V₁=C₂V₂ → 1×V₁=0,1×0,250 → V₁=0,025 L=25 mL. On complète ensuite à 250 mL avec le solvant dans une fiole jaugée.",tags:["Dilution","C1V1=C2V2","Calculs"]},
  {id:"pc_ps_4",prompt:"La constante d'Avogadro NA vaut :",choices:["6,022×10²³ mol⁻¹","6,022×10²³ g/mol","6,022×10²³ J/mol","9,81×10²³ mol⁻¹"],answer:0,diff:1,explication:"NA = 6,022×10²³ mol⁻¹ : c'est le nombre d'entités (atomes, molécules, ions) dans 1 mole. C'est une constante fondamentale, sans unité de masse.",tags:["Avogadro","Mole","Constantes"]},
  {id:"pc_ps_5",prompt:"Une solution de NaOH a une concentration massique Cm=8 g/L. Sa concentration molaire (M(NaOH)=40 g/mol) est :",choices:["0,2 mol/L","8 mol/L","0,5 mol/L","20 mol/L"],answer:0,diff:2,explication:"C=Cm/M=8/40=0,2 mol/L. Attention : Cm est en g/L et M en g/mol, C est en mol/L.",tags:["Concentration massique","NaOH","Calculs"]},
  {id:"pc_ps_6",prompt:"Quel matériel utilise-t-on pour préparer une solution de concentration précise ?",choices:["Fiole jaugée","Bécher","Erlenmeyer","Éprouvette graduée"],answer:0,diff:1,explication:"La fiole jaugée est calibrée pour un volume précis à une température donnée (ex : 250 mL ± 0,12 mL). Le bécher et l'erlenmeyer donnent des volumes approximatifs.",tags:["Verrerie","Fiole jaugée","Précision"]},
  {id:"pc_ps_7",prompt:"Un titre massique de 36% pour HCl (ρ=1,18 g/mL, M=36,5 g/mol). La concentration molaire est :",choices:["11,6 mol/L","36 mol/L","1,18 mol/L","3,6 mol/L"],answer:0,diff:3,explication:"m_solution=1180 g/L. m_HCl=1180×0,36=424,8 g/L. C=424,8/36,5=11,6 mol/L. Méthode : C=(ρ×1000×t%)/M avec t% en décimal.",tags:["Titre massique","HCl","Calculs avancés"]},
  {id:"pc_ps_8",prompt:"La fraction molaire d'éthanol dans un mélange 1 mol EtOH + 4 mol H₂O est :",choices:["0,2","0,25","0,8","1"],answer:0,diff:2,explication:"x(EtOH)=n(EtOH)/n_total=1/(1+4)=1/5=0,2. La fraction molaire est sans unité et toutes les fractions molaires d'une solution somment à 1.",tags:["Fraction molaire","Mélange","Calculs"]},
  {id:"pc_ps_9",prompt:"Pour peser 0,5 mol de CaCl₂ (M=111 g/mol), il faut :",choices:["55,5 g","111 g","0,5 g","222 g"],answer:0,diff:1,explication:"m=n×M=0,5×111=55,5 g. La relation fondamentale est m=n×M, où n est en mol et M en g/mol.",tags:["Masse molaire","CaCl2","Calculs"]},
  {id:"pc_ps_10",prompt:"La concentration molaire C et la concentration massique Cm sont reliées par :",choices:["C=Cm/M","C=Cm×M","C=M/Cm","Cm=C/M"],answer:0,diff:1,explication:"Cm est en g/L, M en g/mol, C en mol/L. C=Cm/M (ex : si Cm=40 g/L et M=40 g/mol, alors C=1 mol/L). Cm=C×M.",tags:["Concentration","Calculs","Relations"]},
  {id:"pc_ps_11",prompt:"Lors d'une dissolution, l'ordre correct des opérations pour NaOH solide est :",choices:["Peser NaOH → dissoudre dans peu d'eau → transférer en fiole → compléter à trait","Compléter la fiole → ajouter NaOH → agiter","Ajouter NaOH directement dans la fiole jaugée pleine","Dissoudre dans la fiole jaugée directement"],answer:0,diff:2,explication:"NaOH produit de la chaleur en se dissolvant (dissolution exothermique). On dissout d'abord dans un bécher avec peu d'eau, on laisse refroidir, puis on transfère quantitativement dans la fiole et on complète au trait.",tags:["Dissolution","NaOH","Protocole"]},
  {id:"pc_ps_12",prompt:"La densité d'une solution est ρ=1,05 g/mL. La masse de 200 mL de cette solution est :",choices:["210 g","105 g","1050 g","200 g"],answer:0,diff:1,explication:"m=ρ×V=1,05×200=210 g. La densité (ou masse volumique) en g/mL×volume en mL donne la masse en g.",tags:["Densité","Masse volumique","Calculs"]},
  {id:"pc_ps_13",prompt:"Le nombre de molécules dans 2 mol de CO₂ est :",choices:["1,204×10²⁴","6,022×10²³","2 molécules","3,011×10²³"],answer:0,diff:1,explication:"N=n×NA=2×6,022×10²³=1,204×10²⁴ molécules. On multiplie le nombre de moles par la constante d'Avogadro.",tags:["Avogadro","Mole","CO2"]},
  {id:"pc_ps_14",prompt:"Pour une dilution au 1/10, si la concentration initiale est 5 mol/L, la concentration finale est :",choices:["0,5 mol/L","50 mol/L","0,05 mol/L","5 mol/L"],answer:0,diff:1,explication:"Facteur de dilution F=10. C₂=C₁/F=5/10=0,5 mol/L. Ou par C₁V₁=C₂V₂ : si V₁=10 mL et V₂=100 mL, C₂=5×10/100=0,5 mol/L.",tags:["Dilution","Facteur de dilution","Calculs"]},
];

// ─────────────────────────────────────────────
// QB 5 — AVANCEMENT DES RÉACTIONS
// ─────────────────────────────────────────────
export const QB_PC_AVANCEMENT = [
  {id:"pc_av_1",prompt:"Pour la réaction N₂ + 3H₂ → 2NH₃, si on part de 1 mol N₂ et 6 mol H₂, le réactif limitant est :",choices:["N₂","H₂","NH₃","Les deux sont limitants"],answer:0,diff:2,explication:"Pour consommer tout N₂ : besoin 3×1=3 mol H₂ disponibles : 6 mol → H₂ en excès (6>3). Pour consommer tout H₂ : besoin 6/3=2 mol N₂, on n'en a que 1. Donc N₂ est le réactif limitant.",tags:["Réactif limitant","Avancement","Stœchiométrie"]},
  {id:"pc_av_2",prompt:"L'avancement maximal ξmax correspond à :",choices:["L'avancement quand le réactif limitant est épuisé","L'avancement à l'équilibre","La quantité de produit formé","Le taux d'avancement final"],answer:0,diff:1,explication:"ξmax = n₀(réactif limitant) / ν(réactif limitant). C'est l'avancement atteint si la réaction est totale et le réactif limitant entièrement consommé.",tags:["Avancement maximal","Réactif limitant","Tableau d'avancement"]},
  {id:"pc_av_3",prompt:"Le taux d'avancement τ d'une réaction vaut 0,75. Cela signifie :",choices:["La réaction a consommé 75% du réactif limitant","La réaction est complète à 25%","τ>1, la réaction est impossible","Le rendement est de 75% forcément"],answer:0,diff:2,explication:"τ=ξ/ξmax. τ=0,75 → la réaction a avancé à 75% de son maximum possible. Pour une réaction totale τ=1, pour un équilibre τ<1. Le rendement implique aussi les pertes expérimentales.",tags:["Taux d'avancement","Équilibre","Réaction totale"]},
  {id:"pc_av_4",prompt:"Dans un tableau d'avancement ICE, les lignes représentent :",choices:["Initial (I), Change (C, en fonction de ξ), Equilibre/End (E)","Intensité, Concentration, Énergie","Isotherme, Constant, Exothermique","Ions, Cations, Électrons"],answer:0,diff:1,explication:"ICE = Initial / Change / Equilibrium (ou End). On note les quantités initiales, les variations stœchiométriques en ξ, et les quantités à l'équilibre ou en fin de réaction.",tags:["Tableau d'avancement","ICE","Méthodologie"]},
  {id:"pc_av_5",prompt:"Pour 2A + B → 3C, partant de 4 mol A et 3 mol B, le réactif limitant et ξmax sont :",choices:["A limitant, ξmax=2 mol","B limitant, ξmax=3 mol","A limitant, ξmax=4 mol","B limitant, ξmax=1 mol"],answer:0,diff:2,explication:"Pour A : ξmax=4/2=2 mol. Pour B : ξmax=3/1=3 mol. Le réactif limitant donne le plus petit ξmax → A, ξmax=2 mol. À ξmax=2 : A consommé (4-2×2=0), B restant (3-1×2=1 mol).",tags:["Réactif limitant","Avancement maximal","Calculs"]},
  {id:"pc_av_6",prompt:"Un rendement de 80% pour une réaction de synthèse signifie :",choices:["On obtient 80% de la masse théorique attendue","La réaction avance à 80% seulement","20% des réactifs ne réagissent pas","La pureté du produit est de 80%"],answer:0,diff:2,explication:"r=m_obtenu/m_théorique×100. r=80% : des pertes expérimentales (manipulation, filtration, solubilité) expliquent que la masse réelle < masse théorique. Le réactif peut réagir totalement (τ=1) mais le rendement < 100%.",tags:["Rendement","Synthèse","Calculs"]},
  {id:"pc_av_7",prompt:"Pour la réaction : HCl + NaOH → NaCl + H₂O. Si 0,1 mol HCl réagit avec 0,15 mol NaOH, ξmax vaut :",choices:["0,1 mol","0,15 mol","0,25 mol","0,05 mol"],answer:0,diff:1,explication:"ν(HCl)=1, ν(NaOH)=1. ξmax(HCl)=0,1/1=0,1 mol. ξmax(NaOH)=0,15/1=0,15 mol. HCl limitant → ξmax=0,1 mol. Il restera 0,05 mol NaOH.",tags:["Avancement","Neutralisation","Réactif limitant"]},
  {id:"pc_av_8",prompt:"L'unité de l'avancement de réaction ξ est :",choices:["mol","mol/L","sans unité","g"],answer:0,diff:1,explication:"ξ est exprimé en moles (mol). C'est une quantité de matière qui mesure l'avancement de la transformation. Ne pas confondre avec le taux τ qui est sans unité.",tags:["Avancement","Unités","Définition"]},
  {id:"pc_av_9",prompt:"Si une réaction a un taux d'avancement τ=1, cela indique que :",choices:["La réaction est totale, le réactif limitant est entièrement consommé","La réaction n'a pas commencé","Le système est à l'équilibre avec des quantités réactifs = produits","ξ=0"],answer:0,diff:1,explication:"τ=ξ/ξmax=1 signifie ξ=ξmax : la réaction est totale (irréversible). Exemple : neutralisation acide fort / base forte. Si τ<1, il y a un équilibre chimique.",tags:["Taux d'avancement","Réaction totale","Équilibre"]},
  {id:"pc_av_10",prompt:"Dans le tableau d'avancement de : A + 2B → C, si ξ=x, la variation de B est :",choices:["-2x","-x","+x","+2x"],answer:0,diff:2,explication:"La variation de chaque espèce est ±ν×ξ, avec - pour les réactifs et + pour les produits. Pour B (coefficient 2, réactif) : ΔB=-2×ξ=-2x.",tags:["Tableau d'avancement","Stœchiométrie","Calculs"]},
  {id:"pc_av_11",prompt:"Le rendement d'une réaction est TOUJOURS ≤ 100% car :",choices:["Des pertes expérimentales (manipulation, solubilité, réactions secondaires) diminuent la quantité de produit","Le taux d'avancement est toujours inférieur à 1","La loi de conservation de la masse l'interdit","Les réactifs sont toujours en défaut"],answer:0,diff:2,explication:"Le rendement compare produit réel/produit théorique. Les pertes incluent : produit dissous dans les solvants, adhérent aux parois, détruit par réactions secondaires, ou produit non isolé lors de la purification.",tags:["Rendement","Pertes","Synthèse"]},
  {id:"pc_av_12",prompt:"Pour 3H₂ + N₂ → 2NH₃ avec 6 mol H₂ et 2 mol N₂, combien de mol NH₃ sont produites au maximum ?",choices:["4 mol","3 mol","6 mol","2 mol"],answer:0,diff:2,explication:"ξmax(H₂)=6/3=2 mol. ξmax(N₂)=2/1=2 mol. Les deux donnent ξmax=2 mol (tous deux limitants simultanément). NH₃ produit = 2×ξmax=2×2=4 mol.",tags:["Avancement maximal","NH3","Stœchiométrie"]},
];

// ─────────────────────────────────────────────
// QB 6 — ÉQUILIBRES CHIMIQUES
// ─────────────────────────────────────────────
export const QB_PC_EQUILIBRES = [
  {id:"pc_eq_1",prompt:"Pour la réaction : aA + bB ⇌ cC + dD, la constante d'équilibre Kc est :",choices:["Kc=[C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)","Kc=[A]ᵃ[B]ᵇ / ([C]ᶜ[D]ᵈ)","Kc=[C]+[D] / [A]+[B]","Kc=c×d / (a×b)"],answer:0,diff:1,explication:"Loi d'action des masses : Kc = produits/réactifs, avec les concentrations élevées aux puissances des coefficients stœchiométriques. Les solides et liquides purs n'apparaissent pas.",tags:["Constante d'équilibre","Kc","Loi d'action des masses"]},
  {id:"pc_eq_2",prompt:"Si le quotient réactionnel Qr < K, la réaction évolue :",choices:["Dans le sens direct (→ formation de produits)","Dans le sens inverse (← formation de réactifs)","La réaction est à l'équilibre","Qr et K sont sans lien"],answer:0,diff:2,explication:"Si Qr<K : le système n'est pas à l'équilibre, il y a trop de réactifs par rapport à l'équilibre. La réaction avance dans le sens direct pour augmenter Qr jusqu'à Qr=K.",tags:["Quotient réactionnel","Qr","Équilibre"]},
  {id:"pc_eq_3",prompt:"Le principe de Le Chatelier stipule que :",choices:["Si on perturbe un équilibre, le système évolue pour s'opposer à la perturbation","L'équilibre est atteint quand les concentrations sont égales","K change avec la pression","La réaction accélère si on augmente la température"],answer:0,diff:1,explication:"Le Chatelier (1884) : toute perturbation (T, P, concentration) entraîne un déplacement de l'équilibre dans le sens qui tend à atténuer cette perturbation. K ne change qu'avec T.",tags:["Le Chatelier","Équilibre","Perturbation"]},
  {id:"pc_eq_4",prompt:"Pour N₂ + 3H₂ ⇌ 2NH₃ (ΔrH°<0), augmenter la température :",choices:["Déplace l'équilibre vers les réactifs (sens endothermique)","Déplace l'équilibre vers NH₃","N'affecte pas la constante K","Augmente la solubilité de NH₃"],answer:0,diff:2,explication:"Réaction exothermique (ΔH<0). Augmenter T apporte de l'énergie → le système s'oppose en favorisant le sens endothermique (← réactifs). K diminue. C'est pourquoi l'ammoniaque est synthétisé à température modérée industriellement.",tags:["Le Chatelier","Température","Exothermique"]},
  {id:"pc_eq_5",prompt:"Pour la réaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), augmenter la pression totale :",choices:["Favorise la formation de SO₃ (moins de moles de gaz)","Favorise la formation de SO₂ et O₂","N'a aucun effet","Diminue K"],answer:0,diff:2,explication:"Gauche : 2+1=3 moles de gaz. Droite : 2 moles. Augmenter P → le système favorise le sens qui diminue le nombre de moles (→ SO₃). Δn=-1 < 0, donc augmenter P favorise les produits.",tags:["Pression","Équilibre","Gaz"]},
  {id:"pc_eq_6",prompt:"La relation entre Kp et Kc est :",choices:["Kp=Kc(RT)^Δn","Kp=Kc×Δn","Kp=Kc/RT","Kp=Kc toujours"],answer:0,diff:3,explication:"Kp=Kc(RT)^Δn où Δn=moles gaz produits - moles gaz réactifs, R=8,314 J/(mol·K), T en K. Si Δn=0 (même nombre de moles de gaz), Kp=Kc.",tags:["Kp","Kc","Gaz"]},
  {id:"pc_eq_7",prompt:"La relation entre ΔrG° et K est :",choices:["ΔrG° = -RT ln K","ΔrG° = RT ln K","ΔrG° = -nFE°","ΔrG° = ΔrH° + RT ln K"],answer:0,diff:3,explication:"ΔrG° = -RT ln K. Si K>>1 → ln K > 0 → ΔrG°<0 (réaction spontanée thermodynamiquement). Si K<<1 → ΔrG°>0 (réaction non spontanée à l'état standard).",tags:["Énergie libre","Gibbs","Constante d'équilibre"]},
  {id:"pc_eq_8",prompt:"L'ajout d'un catalyseur à un système à l'équilibre :",choices:["Accélère l'atteinte de l'équilibre mais ne modifie pas K ni la composition à l'équilibre","Déplace l'équilibre vers les produits","Augmente K","Diminue K"],answer:0,diff:2,explication:"Un catalyseur abaisse l'énergie d'activation mais n'affecte pas l'état d'équilibre thermodynamique (K constant). Il accélère les deux sens de la réaction à égalité.",tags:["Catalyseur","Équilibre","Constante"]},
  {id:"pc_eq_9",prompt:"Pour la dissolution de NaCl dans l'eau : NaCl(s) ⇌ Na⁺(aq) + Cl⁻(aq), ajouter du NaCl solide à la solution saturée :",choices:["Ne change pas les concentrations à l'équilibre (solide pur exclut de Kc)","Augmente la concentration en Na⁺ et Cl⁻","Déplace l'équilibre vers la gauche","Diminue la solubilité"],answer:0,diff:2,explication:"NaCl est un solide pur : son activité est 1, il n'apparaît pas dans Kps. La solution reste saturée : [Na⁺] et [Cl⁻] ne varient pas. L'excès de NaCl reste solide.",tags:["Équilibre de dissolution","Solide pur","Activité"]},
  {id:"pc_eq_10",prompt:"K d'une réaction est très grand (K>>1). Cela indique que :",choices:["L'équilibre est très déplacé vers les produits, la réaction est quasi-totale","La réaction est rapide","Les réactifs sont favorisés","La réaction ne peut pas avoir lieu"],answer:0,diff:1,explication:"K>>1 (ex K=10¹⁰) : les concentrations de produits dominent largement à l'équilibre. La réaction est considérée comme totale en pratique (τ≈1). K ne renseigne pas sur la vitesse.",tags:["Constante d'équilibre","Réaction totale","Thermodynamique"]},
  {id:"pc_eq_11",prompt:"Pour la réaction H₂(g)+I₂(g)⇌2HI(g), Δn de gaz vaut :",choices:["0","2","-1","1"],answer:0,diff:2,explication:"Δn=moles gaz produits - moles gaz réactifs = 2 - (1+1) = 0. Donc Kp=Kc×(RT)⁰=Kc. La pression n'affecte pas la composition à l'équilibre de cette réaction.",tags:["Kp","Kc","Delta n"]},
  {id:"pc_eq_12",prompt:"Si Qr=K, le système :",choices:["Est à l'équilibre, pas d'évolution nette","Évolue dans le sens direct","Évolue dans le sens inverse","Produit plus de réactifs"],answer:0,diff:1,explication:"Qr=K : la composition du mélange correspond exactement à l'état d'équilibre. Il n'y a pas d'évolution nette macroscopique (les vitesses des sens direct et inverse sont égales).",tags:["Quotient réactionnel","Équilibre","Qr=K"]},
];

// ─────────────────────────────────────────────
// QB 7 — THERMOCHIMIE
// ─────────────────────────────────────────────
export const QB_PC_THERMOCHIMIE = [
  {id:"pc_tc_1",prompt:"Le premier principe de la thermodynamique s'énonce :",choices:["ΔU = Q + W (conservation de l'énergie)","ΔU = Q - W","ΔH = Q + W","ΔS > 0 pour tout système"],answer:0,diff:1,explication:"1er principe : l'énergie interne U d'un système fermé varie de ΔU=Q+W (chaleur reçue + travail reçu). Convention IUPAC : Q>0 si chaleur reçue par le système, W>0 si travail reçu.",tags:["Premier principe","Thermodynamique","ΔU"]},
  {id:"pc_tc_2",prompt:"À pression constante, la chaleur échangée est égale à :",choices:["ΔH (variation d'enthalpie)","ΔU (variation d'énergie interne)","ΔS (variation d'entropie)","ΔG (énergie de Gibbs)"],answer:0,diff:1,explication:"À pression constante (conditions habituelles au laboratoire) : Qp = ΔH. C'est pourquoi les réactions en solution aqueuse à pression atmosphérique mesurent ΔH directement par calorimétrie.",tags:["Enthalpie","Pression constante","Chaleur"]},
  {id:"pc_tc_3",prompt:"L'enthalpie standard de formation ΔfH° d'un élément dans son état de référence est :",choices:["0 kJ/mol par convention","Positive","Négative","Égale à ΔrH°"],answer:0,diff:1,explication:"Par définition, ΔfH°=0 pour les éléments sous leur forme la plus stable à 25°C et 1 bar (ex: O₂(g), N₂(g), C(graphite), H₂(g)). Cette convention sert de référence pour calculer les enthalpies de réaction.",tags:["Enthalpie de formation","État de référence","Convention"]},
  {id:"pc_tc_4",prompt:"La loi de Hess permet de calculer ΔrH° car :",choices:["L'enthalpie est une fonction d'état (ne dépend que des états initial et final)","La réaction est toujours exothermique","Les enthalpies sont toujours additives","ΔH = 0 pour les éléments"],answer:0,diff:2,explication:"Hess (1840) : l'enthalpie est une fonction d'état. ΔrH° ne dépend pas du chemin réactionnel mais uniquement des états initial et final. On peut additionner des réactions intermédiaires.",tags:["Loi de Hess","Fonction d'état","Enthalpie"]},
  {id:"pc_tc_5",prompt:"ΔrH° = Σ ΔfH°(produits) - Σ ΔfH°(réactifs). Pour H₂ + ½O₂ → H₂O(l), sachant ΔfH°(H₂O)=-286 kJ/mol :",choices:["ΔrH°=-286 kJ/mol (réaction exothermique)","ΔrH°=+286 kJ/mol","ΔrH°=0","ΔrH°=572 kJ/mol"],answer:0,diff:2,explication:"ΔrH°=ΔfH°(H₂O)-[ΔfH°(H₂)+½ΔfH°(O₂)]=(-286)-(0+0)=-286 kJ/mol. Négatif → exothermique. C'est la combustion de l'hydrogène.",tags:["Calcul ΔrH°","Hess","Exothermique"]},
  {id:"pc_tc_6",prompt:"Une réaction endothermique se caractérise par :",choices:["ΔH > 0 (le système absorbe de la chaleur du milieu)","ΔH < 0","ΔS < 0","ΔG < 0 obligatoirement"],answer:0,diff:1,explication:"Endothermique (endo=en dedans) : chaleur absorbée depuis le milieu extérieur → ΔH>0. Le milieu se refroidit. Exemple : dissolution de NH₄NO₃ (sac froid). Exothermique : ΔH<0, milieu se réchauffe.",tags:["Endothermique","Enthalpie","ΔH"]},
  {id:"pc_tc_7",prompt:"L'énergie libre de Gibbs ΔrG° = ΔrH° - TΔrS°. Une réaction est spontanée si :",choices:["ΔrG < 0","ΔrG > 0","ΔrH < 0 uniquement","ΔrS > 0 uniquement"],answer:0,diff:2,explication:"Critère de spontanéité : ΔrG < 0. ΔG combine enthalpie (ΔH) et entropie (TΔS). Une réaction peut être spontanée même si ΔH>0 (si TΔS >> ΔH). Ex : dissolution de NaCl.",tags:["Gibbs","Spontanéité","ΔG"]},
  {id:"pc_tc_8",prompt:"L'entropie ΔrS° d'une réaction est positive si :",choices:["Le désordre augmente (ex : gaz produit à partir de solide)","L'énergie diminue","La température diminue","ΔH est négatif"],answer:0,diff:2,explication:"S mesure le désordre/la dispersion. ΔS>0 : augmentation du désordre. Gaz > liquide > solide. Ex : CaCO₃(s)→CaO(s)+CO₂(g) : ΔS>0 car apparition d'un gaz.",tags:["Entropie","Désordre","ΔS"]},
  {id:"pc_tc_9",prompt:"Pour ΔrH°=-100 kJ/mol et ΔrS°=+200 J/(mol·K) à 298 K, ΔrG° vaut :",choices:["-159,6 kJ/mol","-40,4 kJ/mol","+159,6 kJ/mol","-100 kJ/mol"],answer:0,diff:3,explication:"ΔrG°=ΔrH°-TΔrS°=-100×10³-(298×200)=-100000-59600=-159600 J/mol=-159,6 kJ/mol. Attention aux unités : ΔS en J/(mol·K) et ΔH en J/mol.",tags:["Gibbs","Calcul","ΔG"]},
  {id:"pc_tc_10",prompt:"Dans un calorimètre, si la température augmente lors d'une réaction, la réaction est :",choices:["Exothermique (ΔH<0, chaleur libérée vers le calorimètre)","Endothermique","Thermostatée","Réversible"],answer:0,diff:1,explication:"Si T monte dans le calorimètre, la réaction libère de la chaleur vers le milieu (calorimètre). Exothermique : ΔH<0. Si T baisse, la réaction absorbe la chaleur : endothermique.",tags:["Calorimétrie","Exothermique","Température"]},
  {id:"pc_tc_11",prompt:"Quelle affirmation sur ΔrG° est correcte ?",choices:["ΔrG° = -RT ln K, si K>1 alors ΔrG°<0","ΔrG° = ΔrH° à toute température","ΔrG° est indépendant de T","ΔrG° < 0 signifie toujours que la réaction est rapide"],answer:0,diff:3,explication:"ΔrG°=-RT ln K relie thermodynamique et constante d'équilibre. K>1 → ln K>0 → ΔrG°<0. ΔrG° dépend de T. ΔrG°<0 est une condition thermodynamique, pas cinétique (la vitesse peut être nulle).",tags:["Gibbs","Constante d'équilibre","Thermodynamique"]},
  {id:"pc_tc_12",prompt:"L'enthalpie de combustion du méthane ΔcH°(CH₄)=-890 kJ/mol. Pour brûler 0,5 mol de CH₄ :",choices:["Q=-445 kJ (dégagement de 445 kJ)","Q=+890 kJ","Q=-890 kJ","Q=+445 kJ"],answer:0,diff:2,explication:"Q=n×ΔcH°=0,5×(-890)=-445 kJ. Le signe moins indique que la chaleur est dégagée (libérée) par la réaction. En valeur absolue, 445 kJ sont libérés.",tags:["Enthalpie de combustion","Calcul","Méthane"]},
];

// ---------------------------------------------
// QB_PC_ACIDES_BASES_1
// ---------------------------------------------
export const QB_PC_ACIDES_BASES_1 = [
  {"id": "pc_ab1_1", "prompt": "Selon Bronsted-Lowry, un acide est :", "choices": ["Un donneur de proton H+", "Un accepteur de proton H+", "Une espece chargee positivement", "Un donneur electrons"], "answer": 0, "diff": 1, "explication": "Bronsted-Lowry : acide = donneur de proton H+. Base = accepteur H+. Ex: CH3COOH -> CH3COO- + H+.", "tags": ["Bronsted", "Acide", "Proton"]},
  {"id": "pc_ab1_2", "prompt": "Le pH d une solution de HCl a 0,01 mol/L est :", "choices": ["2", "12", "-2", "7"], "answer": 0, "diff": 1, "explication": "HCl totalement dissocie : [H3O+]=0,01=10^-2. pH = -log(10^-2) = 2.", "tags": ["pH", "Acide fort", "Calcul"]},
  {"id": "pc_ab1_3", "prompt": "Le produit ionique de l eau Ke a 25 deg C vaut :", "choices": ["10^-14", "10^-7", "10^-4", "1"], "answer": 0, "diff": 1, "explication": "Ke=10^-14 a 25C. Eau pure : [H3O+]=[OH-]=10^-7, pH=7. pKe=14.", "tags": ["Ke", "Produit ionique", "Eau"]},
  {"id": "pc_ab1_4", "prompt": "A la demi-neutralisation d un acide faible AH, pH = :", "choices": ["pKa", "7", "14", "pKa/2"], "answer": 0, "diff": 1, "explication": "Demi-neutralisation : [AH]=[A-]. Henderson-Hasselbalch : pH = pKa + log(1) = pKa. Meilleur effet tampon.", "tags": ["Demi-neutralisation", "pKa", "Tampon"]},
  {"id": "pc_ab1_5", "prompt": "Un indicateur coloré change de couleur autour de :", "choices": ["Son pKa (zone pKa +/- 1)", "pH = 7 pour tous", "Son Ka", "pH = 14"], "answer": 0, "diff": 1, "explication": "Indicateur = acide faible HInd/Ind-. Zone virage : pKa +/- 1. Helianthine pKa~3,1 ; BBT pKa~7 ; phenolphthaleine pKa~9,3.", "tags": ["Indicateurs", "Zone de virage", "pKa"]},
  {"id": "pc_ab1_6", "prompt": "Le pH d une solution de NaOH a 0,001 mol/L est :", "choices": ["11", "3", "7", "14"], "answer": 0, "diff": 1, "explication": "NaOH base forte : [OH-]=10^-3. pOH=3. pH=14-pOH=11.", "tags": ["Base forte", "NaOH", "pH"]},
  {"id": "pc_ab1_7", "prompt": "La relation entre pKa et pKb d un couple conjugue est :", "choices": ["pKa + pKb = 14", "pKa x pKb = 14", "pKa - pKb = 7", "pKa = pKb"], "answer": 0, "diff": 2, "explication": "Ka x Kb = Ke = 10^-14 -> pKa + pKb = 14. Ex: NH4+/NH3 : pKa=9,25 + pKb=4,75=14.", "tags": ["pKa", "pKb", "Relation conjugues"]},
  {"id": "pc_ab1_8", "prompt": "Pour l acide acetique (Ka=1,8e-5), le pKa est :", "choices": ["4,74", "5,74", "8,26", "9,26"], "answer": 0, "diff": 1, "explication": "pKa = -log(1,8e-5) = 5 - log(1,8) = 4,74.", "tags": ["pKa", "Acide acetique", "Calcul"]},
  {"id": "pc_ab1_9", "prompt": "Un acide faible HA (pKa=5, C=0,1 mol/L) a un pH d environ :", "choices": ["3", "5", "7", "1"], "answer": 0, "diff": 2, "explication": "[H+]=sqrt(Ka x C)=sqrt(10^-6)=10^-3 -> pH=3. Taux ionisation 1%<5%, approximation valide.", "tags": ["Acide faible", "pH calcul", "Approximation"]},
  {"id": "pc_ab1_10", "prompt": "Plus le pKa d un acide est petit :", "choices": ["Plus l acide est fort (plus ionise)", "Plus l acide est faible", "Plus la solution est basique", "Moins il libere de H+"], "answer": 0, "diff": 1, "explication": "Grand Ka (petit pKa) -> forte ionisation -> acide fort. pKa(HCl)<<0, pKa(CH3COOH)=4,74.", "tags": ["Force acide", "Ka", "Ionisation"]},
];

// ---------------------------------------------
// QB_PC_ACIDES_BASES_2
// ---------------------------------------------
export const QB_PC_ACIDES_BASES_2 = [
  {"id": "pc_ab2_1", "prompt": "La formule de Henderson-Hasselbalch est :", "choices": ["pH = pKa + log([A-]/[AH])", "pH = pKa - log([A-]/[AH])", "pH = Ka + log([AH]/[A-])", "pH = pKa x [A-]/[AH]"], "answer": 0, "diff": 1, "explication": "Henderson-Hasselbalch : pH = pKa + log([A-]/[AH]). Si [A-]=[AH] -> pH=pKa.", "tags": ["Henderson-Hasselbalch", "Tampons", "pH"]},
  {"id": "pc_ab2_2", "prompt": "Un tampon acetate (pKa=4,75) avec [AcO-]/[AcOH]=10 a un pH de :", "choices": ["5,75", "3,75", "4,75", "7"], "answer": 0, "diff": 1, "explication": "pH = 4,75 + log(10) = 4,75 + 1 = 5,75.", "tags": ["Tampon acetate", "Calcul", "pH"]},
  {"id": "pc_ab2_3", "prompt": "Un tampon est efficace dans la zone :", "choices": ["pKa +/- 1", "pKa +/- 3", "pH 6-8 uniquement", "Toute la gamme"], "answer": 0, "diff": 1, "explication": "Zone d efficacite optimale : pKa +/- 1 unite de pH.", "tags": ["Tampon", "Zone efficacite", "pKa"]},
  {"id": "pc_ab2_4", "prompt": "Le tampon sanguin (HCO3-/H2CO3, pKa=6,1) a pH=7,4. Le rapport [HCO3-]/[H2CO3] est :", "choices": ["environ 20", "environ 1", "environ 10", "environ 0,05"], "answer": 0, "diff": 2, "explication": "7,4 = 6,1 + log(rapport) -> rapport=10^1,3~20.", "tags": ["Tampon sanguin", "Bicarbonate", "pH sanguin"]},
  {"id": "pc_ab2_5", "prompt": "L acidose metabolique se caracterise par :", "choices": ["pH < 7,35 avec HCO3- diminue", "pH > 7,45 avec HCO3- augmente", "pH < 7,35 avec pCO2 eleve", "pH = 7,4"], "answer": 0, "diff": 2, "explication": "Acidose metabolique : pH<7,35, HCO3- bas. Compensation : hyperventilation.", "tags": ["Acidose metabolique", "pH sanguin", "Bicarbonate"]},
  {"id": "pc_ab2_6", "prompt": "Au point d equivalence d un titrage HCl + NaOH, le pH est :", "choices": ["7 (sel neutre)", "pKa", ">7", "<7"], "answer": 0, "diff": 1, "explication": "HCl + NaOH -> NaCl + H2O. NaCl sel neutre -> pH=7 a equivalence.", "tags": ["Titrage", "Point equivalence", "pH 7"]},
  {"id": "pc_ab2_7", "prompt": "La capacite tampon est maximale quand :", "choices": ["pH = pKa ([AH]=[A-])", "pH = 7", "[AH] >> [A-]", "[A-] >> [AH]"], "answer": 0, "diff": 2, "explication": "Capacite tampon maximale quand [AH]=[A-] (pH=pKa).", "tags": ["Capacite tampon", "Tampon", "pKa"]},
  {"id": "pc_ab2_8", "prompt": "Le point isoelectrique d un acide amine (pKa1=2, pKa2=9,5) est :", "choices": ["5,75", "2", "9,5", "7,25"], "answer": 0, "diff": 2, "explication": "pI = (pKa1 + pKa2)/2 = (2+9,5)/2 = 5,75. Charge nette = 0.", "tags": ["Point isoelectrique", "Acides amines", "pI"]},
  {"id": "pc_ab2_9", "prompt": "L alcalose respiratoire est causee par :", "choices": ["Hyperventilation -> pCO2 diminue -> pH augmente", "Hypoventilation -> pCO2 augmente -> pH diminue", "Diarrhee severe", "Acidocetose"], "answer": 0, "diff": 2, "explication": "Hyperventilation -> CO2 expire -> pCO2 diminue -> pH monte.", "tags": ["Alcalose respiratoire", "pCO2", "pH sanguin"]},
  {"id": "pc_ab2_10", "prompt": "H3PO4 a des pKa successifs croissants (pKa1=2,1 ; pKa2=7,2 ; pKa3=12,4) car :", "choices": ["Charge negative croissante rend chaque proton plus difficile a arracher", "Tous les pKa sont egaux", "La dissociation est simultanee", "pKa2 < pKa1"], "answer": 0, "diff": 2, "explication": "H3PO4 : pKa1=2,1 ; pKa2=7,2 ; pKa3=12,4. Chaque proton est plus difficile a enlever a cause de la charge negative croissante.", "tags": ["Acide polyprotique", "Phosphate", "pKa"]},
];

// ---------------------------------------------
// QB_PC_CONDUCTIVITE
// ---------------------------------------------
export const QB_PC_CONDUCTIVITE = [
  {"id": "pc_co_1", "prompt": "La conductance G d une solution est :", "choices": ["G = 1/R (Siemens, S)", "G = R (Ohms)", "G = sigma x C", "G = lambda x C"], "answer": 0, "diff": 1, "explication": "G = 1/R. La resistance R (Ohms) mesure l opposition au courant. G (Siemens) est l inverse.", "tags": ["Conductance", "Resistance", "Siemens"]},
  {"id": "pc_co_2", "prompt": "La loi de Kohlrausch pour les electrolytes forts est :", "choices": ["Lambda_m = Lambda_m° - K*sqrt(C) (diminue avec sqrt C)", "Lambda_m = Lambda_m° + K*sqrt(C)", "Lambda_m est constante", "Lambda_m = K/C"], "answer": 0, "diff": 2, "explication": "Kohlrausch : interactions inter-ioniques reduisent la mobilite -> Lambda_m diminue linearement avec sqrt(C).", "tags": ["Kohlrausch", "Conductivite molaire", "Electrolyte fort"]},
  {"id": "pc_co_3", "prompt": "Lambda_m° (dilution infinie) se calcule par :", "choices": ["Addition des conductivites molaires ioniques : Lambda_m° = somme(lambda°i)", "Mesure directe en solution concentree", "Lambda_m° = Lambda_m x C", "Lambda_m° = sigma x l/S"], "answer": 0, "diff": 2, "explication": "Loi d additivite de Kohlrausch : Lambda_m° = lambda°(cation) + lambda°(anion). Permet de calculer Lambda_m° d acides/bases faibles.", "tags": ["Conductivite molaire", "Additivite", "Dilution infinie"]},
  {"id": "pc_co_4", "prompt": "L eau ultra-pure a une conductivite de :", "choices": ["0,055 µS/cm (quasi-isolant)", "100 mS/cm", "1 S/m", "0,1 S/cm"], "answer": 0, "diff": 2, "explication": "Eau ultra-pure (resistivite 18,2 MOhm.cm) : sigma=0,055 µS/cm. Seuls H3O+ et OH- de l autoprotolyse contribuent.", "tags": ["Eau ultra-pure", "Conductivite", "Purete"]},
  {"id": "pc_co_5", "prompt": "Lors d un titrage conductimetrique HCl + NaOH, la conductivite :", "choices": ["Diminue jusqu a l equivalence puis remonte (H+ mobile remplace par Na+ moins mobile)", "Augmente lineairement", "Reste constante", "Est nulle a equivalence"], "answer": 0, "diff": 2, "explication": "H+ tres mobile -> remplace par Na+ moins mobile -> sigma diminue. Apres equivalence : OH- tres mobile -> sigma augmente. Minimum = point equivalent.", "tags": ["Titrage conductimetrique", "Neutralisation", "Point equivalent"]},
  {"id": "pc_co_6", "prompt": "La mobilite exceptionnnelle de H3O+ et OH- est due au :", "choices": ["Mecanisme de Grotthuss (saut de proton de H2O en H2O)", "Faible masse des ions", "Leur charge elevee", "Absence de liaison H"], "answer": 0, "diff": 3, "explication": "Grotthuss : le proton ne migre pas physiquement mais saute de molecule en molecule (comme une vague). Beaucoup plus rapide que migration ionique classique.", "tags": ["Grotthuss", "Mobilite ionique", "H3O+"]},
  {"id": "pc_co_7", "prompt": "Pour un acide faible, Lambda_m est inferieur a Lambda_m° car :", "choices": ["Ionisation partielle : seule la fraction ionisee contribue a la conductivite", "Lambda_m° n existe pas pour les acides faibles", "La temperature est plus basse", "Le pH est trop faible"], "answer": 0, "diff": 2, "explication": "Acide faible : tau = ionisation partielle -> Lambda_m/Lambda_m° ~ tau. Quand C -> 0, tau -> 1 et Lambda_m -> Lambda_m°.", "tags": ["Acide faible", "Ionisation", "Conductivite"]},
  {"id": "pc_co_8", "prompt": "La conductimetrie mesure la durete de l eau en mesurant :", "choices": ["La conductivite proportionnelle aux ions Ca2+ et Mg2+", "La couleur de l eau", "Le pH", "La turbidite"], "answer": 0, "diff": 1, "explication": "Eau dure = riche en Ca2+ et Mg2+ (HCO3- aussi) -> sigma elevee. La conductivite mesure la teneur ionique totale (TDS).", "tags": ["Durete eau", "Conductivite", "Ca2+"]},
  {"id": "pc_co_9", "prompt": "La constante de cellule Kcell d un conductimetre est :", "choices": ["Kcell = l/S (distance/surface electrodes, cm^-1)", "La resistivite de la solution", "Le facteur de calibration pH", "La conductivite de reference"], "answer": 0, "diff": 2, "explication": "sigma = G x Kcell. La cellule est calibree avec solution etalon KCl de conductivite connue.", "tags": ["Cellule conductimetrique", "Constante", "Calibration"]},
  {"id": "pc_co_10", "prompt": "Lors d une precipitation AgNO3 + NaCl -> AgCl, la conductivite :", "choices": ["Reste quasi constante avant equivalence (Ag+ remplace Cl-), puis augmente (exces Ag+)", "Diminue fortement", "Est nulle a equivalence", "Augmente puis diminue"], "answer": 0, "diff": 2, "explication": "lambda°(Ag+)~lambda°(Cl-) -> remplacement n apporte pas de changement. Apres equivalence : exces Ag+ libre -> sigma augmente.", "tags": ["Precipitation", "Titrage conductimetrique", "AgCl"]},
];

// ---------------------------------------------
// QB_PC_PRECIPITATION
// ---------------------------------------------
export const QB_PC_PRECIPITATION = [
  {"id": "pc_pr_1", "prompt": "Le produit de solubilite Ks de AgCl s ecrit :", "choices": ["Ks = [Ag+][Cl-]", "Ks = [AgCl]", "Ks = [Ag+]/[Cl-]", "Ks = [Ag+]^2[Cl-]"], "answer": 0, "diff": 1, "explication": "AgCl(s) <-> Ag+ + Cl- : Ks = [Ag+][Cl-]. Le solide pur n apparait pas dans l expression.", "tags": ["Ks", "AgCl", "Produit de solubilite"]},
  {"id": "pc_pr_2", "prompt": "La solubilite s d un sel 1:1 (type AB) vaut :", "choices": ["s = sqrt(Ks)", "s = Ks^2", "s = Ks/2", "s = 2Ks"], "answer": 0, "diff": 1, "explication": "AB <-> A+ + B- : [A+]=[B-]=s -> Ks = s^2 -> s = sqrt(Ks). Ex: AgCl Ks=1,8e-10 -> s=1,34e-5 mol/L.", "tags": ["Solubilite", "Calcul", "sel 1:1"]},
  {"id": "pc_pr_3", "prompt": "Pour CaF2 (1:2), Ks=4s^3, donc s =", "choices": ["s = (Ks/4)^(1/3)", "s = sqrt(Ks)", "s = Ks/4", "s = Ks^2/4"], "answer": 0, "diff": 2, "explication": "CaF2 <-> Ca2+ + 2F- : [Ca2+]=s, [F-]=2s -> Ks = s x (2s)^2 = 4s^3 -> s = (Ks/4)^(1/3).", "tags": ["CaF2", "Solubilite", "Calcul sel 1:2"]},
  {"id": "pc_pr_4", "prompt": "L effet d ion commun sur la solubilite d un sel :", "choices": ["La diminue (ajout ion commun -> precipitation)", "L augmente", "N a aucun effet", "Depend de la temperature"], "answer": 0, "diff": 1, "explication": "Ajout de Cl- a AgCl sature : [Ag+][Cl-] > Ks -> precipitation -> solubilite diminue. Principe de Le Chatelier.", "tags": ["Ion commun", "Solubilite", "Le Chatelier"]},
  {"id": "pc_pr_5", "prompt": "La methode de Mohr dose Cl- par Ag+ avec comme indicateur :", "choices": ["Chromate de potassium K2CrO4 (precipite rouge Ag2CrO4 en exces Ag+)", "Thiocyanate de fer (SCN-)", "Helianthine", "Phenolphthaleine"], "answer": 0, "diff": 1, "explication": "Mohr : AgCl blanc precipite d abord (Ks plus petit). A equivalence, exces Ag+ forme Ag2CrO4 rouge brique.", "tags": ["Mohr", "Chlorure", "Argentimetrie"]},
  {"id": "pc_pr_6", "prompt": "La methode de Volhard est un titrage :", "choices": ["Retour : exces Ag+ dose par SCN- (indicateur Fe3+ rouge)", "Direct de Cl- par Ag+", "De Ca2+ par EDTA", "De PO4^3- par gravimetrie"], "answer": 0, "diff": 2, "explication": "Volhard : exces Ag+ (apres precipitation) dose par rétro-titrage avec SCN-. Indicateur Fe3+: Ag++ SCN- -> AgSCN blanc ; exces SCN- + Fe3+ -> rouge.", "tags": ["Volhard", "Retro-titrage", "Thiocyanate"]},
  {"id": "pc_pr_7", "prompt": "Une solution est sursaturee par rapport a CaCO3 si :", "choices": ["[Ca2+][CO3^2-] > Ks (precipitation spontanee)", "[Ca2+][CO3^2-] < Ks", "[Ca2+] = [CO3^2-] = Ks", "Le pH est < 7"], "answer": 0, "diff": 1, "explication": "Qsi = [Ca2+][CO3^2-]. Qsi > Ks -> sursaturation -> precipitation. Qsi < Ks -> dissolution. Qsi = Ks -> equilibre.", "tags": ["Sursaturation", "Precipitation", "Qsi vs Ks"]},
  {"id": "pc_pr_8", "prompt": "La solubilite de CaCO3 augmente quand le pH diminue car :", "choices": ["CO3^2- est protone en H2CO3 (H+ + CO3^2- -> HCO3- -> H2CO3) -> equilibre deplace vers dissolution", "Ks augmente en milieu acide", "Ca2+ precipite en milieu acide", "CO2 diminue la solubilite"], "answer": 0, "diff": 2, "explication": "En milieu acide, CO3^2- est consomme -> [CO3^2-] diminue -> Qsi < Ks -> dissolution de CaCO3. Explication dissolution calcaire par pluies acides.", "tags": ["pH", "Solubilite CaCO3", "Pluies acides"]},
  {"id": "pc_pr_9", "prompt": "La gravimetrie est basee sur :", "choices": ["Precipitation selective, filtration, sechage et pesee du precipite", "Mesure de conductivite", "Titrage colorimetrique", "Spectrophotometrie"], "answer": 0, "diff": 1, "explication": "Gravimetrie : analyte -> precipite de composition connue -> filtration -> pesee. Ex: SO4^2- par BaSO4 (Ks=1,1e-10).", "tags": ["Gravimetrie", "Precipitation", "Analyse quantitative"]},
  {"id": "pc_pr_10", "prompt": "La precipitation fractionnee est possible si :", "choices": ["Les Ks sont tres differents (ex: Ks(AgI) << Ks(AgCl))", "Les concentrations sont identiques", "Les ions ont la meme charge", "Leurs rayons sont identiques"], "answer": 0, "diff": 2, "explication": "AgI (Ks=8,5e-17) precipite d abord, puis AgCl (Ks=1,8e-10). Ratio Ks(AgCl)/Ks(AgI)~2e6 -> separation quantitative possible.", "tags": ["Precipitation fractionnee", "Selectivite", "Ks"]},
];

// ---------------------------------------------
// QB_PC_COMPLEXATION
// ---------------------------------------------
export const QB_PC_COMPLEXATION = [
  {"id": "pc_cx_1", "prompt": "Un complexe de coordination est forme par :", "choices": ["Un ion central (acide de Lewis) + ligands (bases de Lewis)", "Deux ions de charges opposees", "Un acide fort et une base forte", "Deux molecules covalentes"], "answer": 0, "diff": 1, "explication": "Complexe : ion central (metal, accepteur doublets) + ligands (donneurs de doublets libres). Ex: [Cu(NH3)4]^2+.", "tags": ["Complexe", "Ligand", "Acide-Base Lewis"]},
  {"id": "pc_cx_2", "prompt": "L EDTA est dit hexadente car il possede :", "choices": ["6 sites coordinateurs (2 N + 4 O)", "6 atomes de carbone", "6 charges negatives", "6 doublets libres uniquement"], "answer": 0, "diff": 1, "explication": "EDTA : 2 N amines + 4 O carboxylates = 6 sites. Forme des chelates 1:1 tres stables avec tous les cations metalliques.", "tags": ["EDTA", "Hexadente", "Chelate"]},
  {"id": "pc_cx_3", "prompt": "L effet chelate explique la grande stabilite des complexes polydentes par :", "choices": ["Gain entropique lors de la formation (liberation de molecules d eau)", "Gain enthalpique uniquement", "Absence d effet entropique", "Augmentation de l enthalpie"], "answer": 0, "diff": 2, "explication": "Effet chelate : ligand polydente libere plusieurs molecules H2O -> gain entropique -> deltaG plus negatif -> complexe plus stable.", "tags": ["Effet chelate", "Entropie", "Stabilite"]},
  {"id": "pc_cx_4", "prompt": "La constante de formation globale beta_n d un complexe MLn est :", "choices": ["beta_n = [MLn]/([M][L]^n) (grand beta -> complexe stable)", "beta_n = [M][L]^n/[MLn]", "beta_n = ln([MLn]/[M])", "beta_n = Ka x n"], "answer": 0, "diff": 2, "explication": "Grand beta (log beta~10-20 pour EDTA) -> equilibre favor le complexe. Ex: log beta(CaEDTA)~10,7.", "tags": ["Constante formation", "Stabilite", "Complexe"]},
  {"id": "pc_cx_5", "prompt": "Le dosage de Ca2+ a l EDTA est realise a :", "choices": ["pH 10 (tampon ammoniacal NH4+/NH3), indicateur Eriochrome Noir T", "pH 4 (tampon acetate)", "pH 7", "pH 2"], "answer": 0, "diff": 1, "explication": "pH 10 : EDTA sous forme Y^4- (espece la plus reactive). ENT (Eriochrome Noir T) : rouge avec Ca/Mg -> bleu quand tous complexes par EDTA.", "tags": ["Complexometrie", "Durete eau", "pH 10"]},
  {"id": "pc_cx_6", "prompt": "L indicateur Eriochrome Noir T (ENT) fonctionne car :", "choices": ["Il forme un complexe rouge avec Ca2+/Mg2+ moins stable que EDTA -> vire au bleu a equivalence", "Il precipite a equivalence", "Il change de couleur selon le pH uniquement", "Il oxyde les metaux"], "answer": 0, "diff": 2, "explication": "ENT rouge avec metaux. A equivalence : EDTA (beta >> beta_ENT) arrache les metaux a ENT -> ENT libre = bleu. Rouge -> bleu = fin titrage.", "tags": ["Eriochrome T", "Indicateur metal", "Complexometrie"]},
  {"id": "pc_cx_7", "prompt": "Le masquage en complexometrie consiste a :", "choices": ["Complexer selectivement un ion genant pour doser un autre (ex: CN- masque Zn2+)", "Precipiter tous les ions", "Augmenter le pH", "Utiliser un exces d EDTA"], "answer": 0, "diff": 3, "explication": "Masquage : CN- forme complexe stable avec Zn2+ -> Zn2+ masque -> dosage selectif de Ca2+ a l EDTA.", "tags": ["Masquage", "Selectivite", "Complexometrie"]},
  {"id": "pc_cx_8", "prompt": "Fe3+ + SCN- forme une coloration :", "choices": ["Rouge sang ([Fe(SCN)]^2+) - utilisee en analyse qualitative", "Bleu fonce", "Jaune pale", "Verte"], "answer": 0, "diff": 1, "explication": "Fe3+ + SCN- -> [Fe(SCN)]^2+ rouge vif. Tres sensible (detection 0,1 mg/L). Utilise aussi comme indicateur dans la methode de Volhard.", "tags": ["Fer", "Thiocyanate", "Coloration"]},
  {"id": "pc_cx_9", "prompt": "La coordination de l hemoglobine avec O2 est un exemple de complexation car :", "choices": ["Fe2+ (porphyrine) coordonne O2 comme ligand -> transport O2", "Fe3+ forme un sel avec O2", "CO2 est le ligand principal", "La liaison est ionique"], "answer": 0, "diff": 2, "explication": "Heme : Fe2+ dans porphyrine coordonne O2 (ligand labile). CO forme un complexe plus stable (affinite x240) -> toxicite CO.", "tags": ["Hemoglobine", "Fe2+", "Transport oxygene"]},
  {"id": "pc_cx_10", "prompt": "En complexometrie, la coordinence d un ion central est :", "choices": ["Le nombre de liaisons de coordination (ex: Fe3+ coordinence 6 dans [Fe(CN)6]^3-)", "La charge de l ion", "Le nombre de protons dans le noyau", "Le rayon ionique"], "answer": 0, "diff": 2, "explication": "Coordinence = nombre de ligands coordines. Fe3+ : coordinence 6 (octaedrique). Cu2+ : 4 (tetraedrique ou carré plan). Zn2+ : 4 (tetraedrique).", "tags": ["Coordinence", "Ion central", "Complexe"]},
];

// ---------------------------------------------
// QB_PC_OXYDOREDUC
// ---------------------------------------------
export const QB_PC_OXYDOREDUC = [
  {"id": "pc_ox_1", "prompt": "Dans une reaction redox, l oxydant :", "choices": ["Accepte des electrons (est reduit)", "Donne des electrons (est oxyde)", "Ne change pas de NO", "Gagne des protons"], "answer": 0, "diff": 1, "explication": "Mnemo OIL RIG : Oxidation Is Loss, Reduction Is Gain. Oxydant = accepteur electrons = espece reduite. Reducteur = donneur electrons = espece oxydee.", "tags": ["Oxydant", "Reducteur", "Electrons"]},
  {"id": "pc_ox_2", "prompt": "Le nombre d oxydation du soufre dans SO4^2- est :", "choices": ["+6", "-2", "0", "+4"], "answer": 0, "diff": 2, "explication": "S + 4x(-2) = -2 -> S = +6. Dans SO3^2- : S=+4. Dans S^2- : S=-2. Valeurs O=-2 et charge totale = charge ion.", "tags": ["Nombre oxydation", "SO4", "Calcul"]},
  {"id": "pc_ox_3", "prompt": "L equation de Nernst a 25°C est :", "choices": ["E = E° + (0,059/n) x log([Ox]/[Red])", "E = E° - (0,059/n) x log([Ox]/[Red])", "E = E° x n x 0,059", "E = E°/n x log([Ox]/[Red])"], "answer": 0, "diff": 2, "explication": "Nernst (25°C) : E = E° + (0,059/n) x log([Ox]/[Red]). Si [Ox]>[Red] -> E > E°. Origine : RT/F=0,02569 V, facteur 0,059=2,303xRT/F.", "tags": ["Nernst", "Potentiel", "Equation"]},
  {"id": "pc_ox_4", "prompt": "La constante de Faraday F vaut :", "choices": ["96 485 C/mol (charge 1 mol electrons)", "6,022e23 mol^-1", "8,314 J/(mol.K)", "1,602e-19 C"], "answer": 0, "diff": 1, "explication": "F = NA x e = 6,022e23 x 1,602e-19 = 96485 C/mol. Loi de Faraday : n(e-) = Q/F = I x t/F.", "tags": ["Faraday", "Electrolyse", "Constante"]},
  {"id": "pc_ox_5", "prompt": "Dans une pile, la cathode est :", "choices": ["Siege de la reduction (gain electrons, pole +)", "Siege de l oxydation (perte electrons, pole -)", "L electrode en zinc", "L electrode inerte toujours"], "answer": 0, "diff": 1, "explication": "Cathode = reduction = pole +. Anode = oxydation = pole -. Pile Daniell : anode Zn -> Zn2++2e- ; cathode Cu2++2e- -> Cu.", "tags": ["Cathode", "Pile", "Redox"]},
  {"id": "pc_ox_6", "prompt": "La force electromotrice (fem) d une pile vaut :", "choices": ["fem = E(cathode) - E(anode)", "fem = E(anode) - E(cathode)", "fem = E° uniquement", "fem = deltaG/nF"], "answer": 0, "diff": 2, "explication": "fem = Ecathode - Eanode. fem > 0 : reaction spontanee. Relation : deltaG = -nFE. Pile Daniell : E°(Cu2+/Cu)=+0,34V, E°(Zn2+/Zn)=-0,76V -> fem°=1,10V.", "tags": ["FEM", "Pile", "Potentiel"]},
  {"id": "pc_ox_7", "prompt": "Le titrage au KMnO4 est auto-indicateur car :", "choices": ["MnO4- (violet) -> Mn2+ (incolore) pendant reaction ; exces MnO4- rose a equivalence", "KMnO4 change couleur selon pH", "KMnO4 precipite a equivalence", "La coloration vient du titre"], "answer": 0, "diff": 1, "explication": "En milieu acide : MnO4- + 5e- -> Mn2+ (incolore). Tant qu il reste reducteur, MnO4- se decolore. Premier exces = rose persistant = fin.", "tags": ["KMnO4", "Titrage redox", "Auto-indicateur"]},
  {"id": "pc_ox_8", "prompt": "Le NO de Mn dans KMnO4 est :", "choices": ["+7", "-7", "+2", "0"], "answer": 0, "diff": 2, "explication": "K=+1, O=-2 (x4=-8). K+Mn+4O=0 -> +1+Mn-8=0 -> Mn=+7. Dans MnO2 : Mn=+4. Dans MnO : Mn=+2.", "tags": ["Nombre oxydation", "KMnO4", "Manganese"]},
  {"id": "pc_ox_9", "prompt": "Pour deposer 1 mol de Cu (n=2) par electrolyse, il faut passer :", "choices": ["192 970 C (2 mol electrons)", "96 485 C", "1 mol electrons", "6,022e23 electrons"], "answer": 0, "diff": 2, "explication": "Cu2+ + 2e- -> Cu : 2 mol electrons pour 1 mol Cu. Q = 2 x 96485 = 192 970 C.", "tags": ["Faraday", "Electrodepot", "Cuivre"]},
  {"id": "pc_ox_10", "prompt": "Le glucose reduit Cu2+ (Fehling) car :", "choices": ["Le glucose (aldehyde en C1) est oxydant -> Cu2+ -> Cu2O rouge brique", "Le glucose est l oxydant", "Le glucose precipite le cuivre", "Le glucose forme un complexe"], "answer": 0, "diff": 1, "explication": "Fehling : Cu2+ (bleu, complexe tartrate) + RCHO -> Cu2O (rouge brique) + RCOOH. Glucose = reducteur (aldehyde libre).", "tags": ["Fehling", "Glucose", "Dosage"]},
];

// ---------------------------------------------
// QB_PC_CINETIQUE
// ---------------------------------------------
export const QB_PC_CINETIQUE = [
  {"id": "pc_ci_1", "prompt": "Pour une reaction d ordre 1, si [A] double, la vitesse :", "choices": ["Double (v = k[A])", "Quadruple", "Reste identique", "Diminue de moitie"], "answer": 0, "diff": 1, "explication": "Ordre 1 : v = k[A]. Doublement de [A] -> doublement de v. Ordre 2 : quadruplement. Ordre 0 : aucun effet.", "tags": ["Ordre 1", "Vitesse", "Loi de vitesse"]},
  {"id": "pc_ci_2", "prompt": "Le temps de demi-vie d une reaction d ordre 1 vaut :", "choices": ["t½ = ln2/k = 0,693/k (independant de [A]0)", "t½ = [A]0/(2k)", "t½ = 1/(k[A]0)", "t½ = k/[A]0"], "answer": 0, "diff": 1, "explication": "Ordre 1 : [A]=[A]0 e^(-kt). A t½ : e^(-kt½)=1/2 -> t½=ln2/k. INDEPENDANT de [A]0. Propriete caracteristique de l ordre 1.", "tags": ["Demi-vie", "Ordre 1", "Independance de C0"]},
  {"id": "pc_ci_3", "prompt": "Pour un ordre 0 : [A]=[A]0 - kt, le temps de demi-vie vaut :", "choices": ["t½ = [A]0/(2k) (depend de [A]0)", "t½ = ln2/k", "t½ = 1/(k[A]0)", "t½ = k x [A]0"], "answer": 0, "diff": 2, "explication": "Ordre 0 : v=k constante. [A] diminue lineairement. t½ = [A]0/(2k) : depend de [A]0 (contrairement a l ordre 1).", "tags": ["Ordre 0", "Demi-vie", "Cinetique"]},
  {"id": "pc_ci_4", "prompt": "La loi d Arrhenius k = A x e^(-Ea/RT) predit qu une augmentation de 10°C :", "choices": ["Multiplie k par 2 a 3 (plus de molecules depassent Ea)", "Reduit k de moitie", "Ne change pas k", "Reduit Ea"], "answer": 0, "diff": 1, "explication": "T augmente -> Ea/RT diminue -> e^(-Ea/RT) augmente -> k augmente. Q10~2-3. Applications : conservation a +4°C, pasteurisation, autoclave 121°C.", "tags": ["Arrhenius", "Temperature", "Energie activation"]},
  {"id": "pc_ci_5", "prompt": "Un catalyseur augmente la vitesse en :", "choices": ["Abaissant Ea (sans changer K ni deltaG°)", "Augmentant la concentration reactifs", "Modifiant K", "Augmentant deltaH°"], "answer": 0, "diff": 1, "explication": "Catalyseur : chemin alternatif avec Ea plus faible -> k augmente. K et deltaG° sont des grandeurs thermodynamiques independantes du chemin.", "tags": ["Catalyseur", "Energie activation", "Cinetique"]},
  {"id": "pc_ci_6", "prompt": "Le graphe de ln[A] vs temps est lineaire pour :", "choices": ["Une reaction d ordre 1 (pente = -k)", "Un ordre 0 (pente = -k)", "Un ordre 2", "Une reaction a l equilibre"], "answer": 0, "diff": 2, "explication": "Ordre 1 : ln[A] = ln[A]0 - kt -> droite pente -k. Ordre 0 : [A]=f(t) lineaire. Ordre 2 : 1/[A]=f(t) lineaire.", "tags": ["Graphe cinetique", "Ordre 1", "ln"]},
  {"id": "pc_ci_7", "prompt": "La cinetique enzymatique suit v = Vmax[S]/(Km+[S]) (Michaelis-Menten). Quand [S] >> Km :", "choices": ["v -> Vmax (saturation de l enzyme)", "v -> 0", "v = Vmax/2", "v = k[S]"], "answer": 0, "diff": 1, "explication": "[S]>>Km : v = Vmax[S]/[S] = Vmax. L enzyme est saturee. Quand [S]=Km : v=Vmax/2 (definition de Km).", "tags": ["Michaelis-Menten", "Vmax", "Saturation"]},
  {"id": "pc_ci_8", "prompt": "L energie d activation Ea peut etre determinee experimentalement par :", "choices": ["Mesure de k a plusieurs T + trace de ln(k) vs 1/T (pente = -Ea/R)", "Mesure directe par spectroscopie", "Calcul de deltaG°", "Mesure de K"], "answer": 0, "diff": 2, "explication": "Arrhenius : ln(k) = ln(A) - Ea/(RT). Trace ln(k) vs 1/T -> droite pente = -Ea/R. Ea = -R x pente.", "tags": ["Energie activation", "Determination Ea", "Arrhenius"]},
  {"id": "pc_ci_9", "prompt": "Une reaction est d ordre zero par rapport a A si :", "choices": ["v est independante de [A] (v = k = constante)", "La reaction est tres rapide", "La reaction ne produit pas de produits", "Le reactif est en exces uniquement"], "answer": 0, "diff": 2, "explication": "Ordre 0 par rapport a A : v = k. Exemple : enzyme saturee ([S]>>Km). Graphe [A]=f(t) = droite de pente -k.", "tags": ["Ordre zero", "Saturation", "Cinetique"]},
  {"id": "pc_ci_10", "prompt": "La methode de degenerescence d ordre consiste a :", "choices": ["Mettre un reactif en grand exces pour obtenir un ordre apparent plus simple (pseudo-ordre)", "Eliminer un reactif du milieu", "Catalyser la reaction", "Mesurer la vitesse initiale uniquement"], "answer": 0, "diff": 2, "explication": "Si [B]>>[A] : [B] quasi-constant -> v = k_eff[A]^alpha avec k_eff = k[B]^beta -> determination de l ordre alpha par rapport a A.", "tags": ["Degenerescence ordre", "Pseudo-ordre", "Methode experimentale"]},
];

// ---------------------------------------------
// QB_PC_ONDES_EM
// ---------------------------------------------
export const QB_PC_ONDES_EM = [
  {"id": "pc_oe_1", "prompt": "La relation entre vitesse, longueur d onde et frequence d une onde EM est :", "choices": ["c = lambda x nu (c=3e8 m/s)", "c = lambda / nu", "c = nu / lambda", "c = lambda^2 x nu"], "answer": 0, "diff": 1, "explication": "c = lambda x nu. c=3e8 m/s (vitesse lumiere dans le vide). Si lambda=600 nm : nu = c/lambda = 3e8/(600e-9) = 5e14 Hz.", "tags": ["Onde EM", "Vitesse lumiere", "Frequence"]},
  {"id": "pc_oe_2", "prompt": "L energie d un photon E = h*nu = h*c/lambda. Un photon UV (lambda=200 nm) est :", "choices": ["Plus energetique qu un photon IR (lambda=800 nm)", "Moins energetique", "Identique en energie", "Independant de lambda"], "answer": 0, "diff": 1, "explication": "E = hc/lambda -> E augmente quand lambda diminue. UV < lambda < IR -> UV plus energetique qu IR. UV detruit l ADN (dimeres thymine).", "tags": ["Energie photon", "UV", "IR"]},
  {"id": "pc_oe_3", "prompt": "La constante de Planck h vaut :", "choices": ["6,626e-34 J.s", "8,314 J/(mol.K)", "6,022e23 mol^-1", "9,11e-31 kg"], "answer": 0, "diff": 1, "explication": "h = 6,626e-34 J.s (constante de Planck). E = h*nu = h*c/lambda. Quantification de l energie des photons.", "tags": ["Constante de Planck", "Photon", "Energie"]},
  {"id": "pc_oe_4", "prompt": "Le spectre visible s etend de :", "choices": ["400 nm (violet) a 800 nm (rouge)", "200 nm a 400 nm", "800 nm a 2500 nm", "100 nm a 200 nm"], "answer": 0, "diff": 1, "explication": "Visible : ~400 nm (violet) -> ~700-800 nm (rouge). UV : <400 nm. IR : >800 nm. L oeil humain est sensible dans cette gamme.", "tags": ["Spectre visible", "Longueur onde", "UV-visible"]},
  {"id": "pc_oe_5", "prompt": "L ultraviolet C (UV-C, 200-280 nm) est sterilisant car :", "choices": ["Il detruit l ADN (formation de dimeres de thymine)", "Il chauffe suffisamment", "Il oxyde toutes les molecules", "Il est visible et brulant"], "answer": 0, "diff": 1, "explication": "UV-C (surtout 254 nm) -> absorption par ADN -> dimeres cyclobutane entre thymines adjacentes -> blocage replication -> mort cellulaire. Utilise pour decontamination des PSM, eau, surfaces.", "tags": ["UV-C", "ADN", "Sterilisation"]},
  {"id": "pc_oe_6", "prompt": "Dans le spectre EM, l ordre d energie croissant est :", "choices": ["Radio < micro-ondes < IR < visible < UV < X < gamma", "Gamma < X < UV < visible < IR < micro-ondes < radio", "Radio < IR < UV < X", "Visible < UV < X < radio"], "answer": 0, "diff": 2, "explication": "E = hc/lambda -> lambda decroit : radio (km) > micro-ondes (cm) > IR > visible > UV > X (0,01-10 nm) > gamma (<0,01 nm). Energie inverse.", "tags": ["Spectre EM", "Energie", "Ordre"]},
  {"id": "pc_oe_7", "prompt": "La couleur d un objet percu comme rouge signifie qu il :", "choices": ["Absorbe les longueurs d onde bleues-vertes et reflechit/transmet le rouge", "Absorbe le rouge et reflechit le bleu", "Absorbe toutes les longueurs d onde", "Emet sa propre lumiere rouge"], "answer": 0, "diff": 2, "explication": "Un objet colore absorbe certaines longueurs d onde. Couleur percue = couleur complementaire de la couleur absorbee. Absorbance maximale a ~500 nm (vert-bleu) -> couleur percue rouge.", "tags": ["Couleur", "Absorption", "Complementaire"]},
  {"id": "pc_oe_8", "prompt": "En spectrometrie d emission atomique (ICP-OES), chaque element emet :", "choices": ["Des raies spectrales caracteristiques (longueurs d onde specifiques)", "Un continuum de longueurs d onde", "Uniquement des rayons X", "Des neutrons"], "answer": 0, "diff": 2, "explication": "Atome excite -> electrons retournent a l etat fondamental -> emission photons E=h*nu. Chaque element a un spectre d emission unique (raies specifiques). Fondement de l ICP-OES et la spectrometrie de flamme.", "tags": ["Emission atomique", "ICP-OES", "Spectre"]},
  {"id": "pc_oe_9", "prompt": "La vitesse de la lumiere dans un milieu d indice n est :", "choices": ["v = c/n (plus lente que dans le vide)", "v = c x n", "v = c + n", "v = c - n"], "answer": 0, "diff": 2, "explication": "n = c/v -> v = c/n. Dans l eau (n=1,33) : v = 3e8/1,33 = 2,26e8 m/s. Dans le vide : v=c (valeur maximale). L indice de refraction mesure ce ralentissement.", "tags": ["Indice refraction", "Vitesse lumiere", "Milieu"]},
  {"id": "pc_oe_10", "prompt": "Le principe de fonctionnement d un laser est base sur :", "choices": ["Emission stimulee de photons coherents en longueur d onde et phase", "Emission spontanee aleatoire", "Absorption de tous les photons", "Reflexion totale uniquement"], "answer": 0, "diff": 3, "explication": "Laser : milieu actif avec inversion de population -> photon incident stimule emission d un photon identique (meme lambda, meme phase, meme direction) -> amplification coherente. Applications : cytometrie, spectrometrie Raman, microscopes confocaux.", "tags": ["Laser", "Emission stimulee", "Coherence"]},
];

// ---------------------------------------------
// QB_PC_SPECTROMETRIE
// ---------------------------------------------
export const QB_PC_SPECTROMETRIE = [
  {"id": "pc_sp_1", "prompt": "La loi de Beer-Lambert A = epsilon x l x C. Si l absorbance double pour une meme solution :", "choices": ["La longueur du trajet optique l a double (ou la concentration C a double)", "Epsilon a change", "La lumiere est polychromatique", "La cuve est plus petite"], "answer": 0, "diff": 1, "explication": "A = epsilon x l x C. Toutes les variables sont proportionnelles. Si A double a C fixe -> l a double. Additionnalite : A_total = A1 + A2 pour plusieurs solutes.", "tags": ["Beer-Lambert", "Absorbance", "Trajet optique"]},
  {"id": "pc_sp_2", "prompt": "L absorbance A et la transmittance T sont reliees par :", "choices": ["A = -log(T) = -log(I/I0)", "A = T", "A = 1/T", "A = T^2"], "answer": 0, "diff": 1, "explication": "T = I/I0 (rapport intensite transmise / incidente). A = -log(T) = log(1/T). T=1 -> A=0 (pas d absorption). T=0,001 -> A=3 (99,9% absorbe).", "tags": ["Absorbance", "Transmittance", "Beer-Lambert"]},
  {"id": "pc_sp_3", "prompt": "La longueur d onde de mesure optimale en spectrophotometrie est :", "choices": ["Lambda_max (coefficient extinction maximal -> sensibilite maximale)", "N importe quelle longueur d onde", "Le minimum d absorbance", "La longueur d onde la plus courte"], "answer": 0, "diff": 1, "explication": "A lambda_max : epsilon maximal -> meilleure sensibilite et linearite Beer-Lambert. Ex: hemoglobine A_max ~415 nm, solutions de CuSO4 A_max ~800 nm.", "tags": ["Lambda max", "Sensibilite", "Spectrophotometrie"]},
  {"id": "pc_sp_4", "prompt": "La fluorescence : lambda emission vs lambda excitation :", "choices": ["Lambda_em > lambda_exc (decalage de Stokes, perte energie vibrationnelle)", "Lambda_em = lambda_exc", "Lambda_em < lambda_exc", "Independant de lambda_exc"], "answer": 0, "diff": 1, "explication": "Stokes : molecule excitee perd energie par relaxation vibrationnelle avant emission -> lambda_em > lambda_exc. Ex: fluoresceine lambda_exc=490 nm -> lambda_em=514 nm.", "tags": ["Fluorescence", "Decalage Stokes", "Emission"]},
  {"id": "pc_sp_5", "prompt": "Les acides nucleiques absorbent a 260 nm et les proteines a 280 nm. Le ratio A260/A280 :", "choices": ["~1,8-2,0 pour ADN pur ; ~0,6 pour proteines pures (contamination proteique si ratio faible)", "~1 pour ADN pur", "~3 pour proteines pures", "N a pas de signification"], "answer": 0, "diff": 2, "explication": "ADN pur : A260/A280~1,8-2,0. Si ratio < 1,8 : contamination proteique (proteines absorbent fort a 280 nm). Si >2 : contamination ARN ou phenol. Utilise en biologie moleculaire pour evaluer la purete de l ADN.", "tags": ["A260/A280", "Purete ADN", "Proteines"]},
  {"id": "pc_sp_6", "prompt": "En spectroscopie IR, la bande a ~3300 cm^-1 (large) indique :", "choices": ["O-H etire (liaison H) ou N-H (amine)", "C=O", "C-H", "C=C"], "answer": 0, "diff": 1, "explication": "IR - zones : O-H 3200-3600 cm^-1 (large car liaisons H), N-H 3300-3500 cm^-1, C-H 2850-3100 cm^-1, C-O-H 2500-3300 cm^-1 (acide carboxylique tres large).", "tags": ["IR", "OH", "NH"]},
  {"id": "pc_sp_7", "prompt": "La bande IR de C=O d un ester (~1735-1750 cm^-1) est a plus haute frequence qu un acide carboxylique (~1710 cm^-1) car :", "choices": ["La conjugaison OH-C=O dans l acide affaiblit et abaisse la frequence de vibration C=O", "L ester a une double liaison plus forte", "L acide est plus volatil", "La masse moleculaire est differente"], "answer": 0, "diff": 3, "explication": "Dans RCOOH : la forme resonance O-H...O=C (liaison H + mesomerie) affaiblit la liaison C=O -> frequence de vibration plus basse. Dans RCOOR : moins de conjugaison -> C=O plus fort -> frequence plus haute.", "tags": ["IR", "CO", "Ester vs acide"]},
  {"id": "pc_sp_8", "prompt": "La spectrometrie d absorption atomique (SAA) mesure :", "choices": ["L absorption de lumiere par des atomes en phase gazeuse a une longueur d onde specifique a chaque element", "L emission des atomes", "L absorption par des molecules en solution", "La fluorescence des ions"], "answer": 0, "diff": 2, "explication": "SAA : atomisation de l echantillon (flamme ou four) -> atomes libres absorbent la radiation de la lampe a cathode creuse (longueur d onde specifique element). Applications : dosage de metaux traces (Pb, Cd, Cu, Zn, Fe).", "tags": ["SAA", "Absorption atomique", "Metaux"]},
  {"id": "pc_sp_9", "prompt": "La turbidimetrie mesure :", "choices": ["La diminution de l intensite lumineuse transmise due a la diffusion par des particules", "L emission de fluorescence", "L absorbance a 260 nm", "La conductivite de la solution"], "answer": 0, "diff": 1, "explication": "Turbidimetrie : Itransmise diminue avec la quantite de particules en suspension (diffusion Rayleigh). A=epsilon x l x C (loi de Beer-Lambert modifiee). Application : bacteriologie (DO600), controle eau.", "tags": ["Turbidimetrie", "DO600", "Particules"]},
  {"id": "pc_sp_10", "prompt": "La nephelometrie differe de la turbidimetrie car :", "choices": ["Elle mesure la lumiere diffusee (a 90°) plutot que transmise -> plus sensible a faibles concentrations", "Elle mesure la transmission", "Elle utilise la fluorescence", "Elle necessite une colorimetrie"], "answer": 0, "diff": 2, "explication": "Turbidimetrie : mesure la diminution de la lumiere transmise (0°). Nephelometrie : mesure la lumiere diffusee a 90° -> plus sensible pour les faibles concentrations de particules. Applications : immunonephelometrie (CRP, albumine, Ig).", "tags": ["Nephelometrie", "Turbidimetrie", "Diffusion"]},
];

// ---------------------------------------------
// QB_PC_OPTIQUE
// ---------------------------------------------
export const QB_PC_OPTIQUE = [
  {"id": "pc_op_1", "prompt": "La loi de Snell-Descartes pour la refraction est :", "choices": ["n1 x sin(theta1) = n2 x sin(theta2)", "n1 x theta1 = n2 x theta2", "n1/sin(theta1) = n2/sin(theta2)", "sin(theta1)/n1 = sin(theta2)/n2"], "answer": 0, "diff": 1, "explication": "Snell-Descartes : n1 x sin(theta1) = n2 x sin(theta2). Angles mesures par rapport a la normale. Si n2>n1 : rayon refracte se rapproche de la normale.", "tags": ["Snell-Descartes", "Refraction", "Optique"]},
  {"id": "pc_op_2", "prompt": "L indice de refraction de l eau (n=1,33) signifie que :", "choices": ["La lumiere se propage 1,33x plus lentement dans l eau que dans le vide", "La lumiere est 1,33x plus rapide dans l eau", "L eau est 1,33x plus dense que le vide", "L eau absorbe 1,33x plus de lumiere"], "answer": 0, "diff": 1, "explication": "n = c/v -> v = c/n = 3e8/1,33 = 2,26e8 m/s. n_air~1, n_eau=1,33, n_verre~1,52, n_huile~1,515.", "tags": ["Indice refraction", "Eau", "Vitesse lumiere"]},
  {"id": "pc_op_3", "prompt": "La reflexion totale interne se produit quand :", "choices": ["L angle d incidence depasse l angle critique theta_c = arcsin(n2/n1) (n1>n2)", "L angle est inferieur a l angle critique", "La lumiere passe de l air vers le verre", "n1 = n2"], "answer": 0, "diff": 2, "explication": "Reflexion totale : n1>n2 (ex verre->air) et theta1 > theta_c. Au-dela de theta_c : tout est reflechi, rien transmis. Principe des fibres optiques et de la microscope TIRF.", "tags": ["Reflexion totale", "Angle critique", "Fibre optique"]},
  {"id": "pc_op_4", "prompt": "La relation conjugaison pour une lentille mince est :", "choices": ["1/OA' - 1/OA = 1/f' (f' = focale image)", "1/OA + 1/OA' = 1/f'", "OA x OA' = f'", "1/OA' = 1/OA + f'"], "answer": 0, "diff": 2, "explication": "Relation conjugaison (convention algebrique) : 1/OA' - 1/OA = 1/f'. Grandissement transversal : gamma = OA'/OA. Lentille convergente f'>0, divergente f'<0.", "tags": ["Lentille", "Relation conjugaison", "Focale"]},
  {"id": "pc_op_5", "prompt": "La resolution d un microscope optique (formule de Rayleigh) est :", "choices": ["d = 0,61 x lambda / ON (plus d est petit, meilleure est la resolution)", "d = lambda x ON", "d = ON / lambda", "d = 0,61 / (lambda x ON)"], "answer": 0, "diff": 1, "explication": "d = 0,61*lambda/ON. ON = n*sin(alpha). Pour ameliorer la resolution : diminuer lambda (lumiere bleue) ou augmenter ON (immersion huile ON~1,4). Limite ~ 0,2 µm pour la microscopie optique.", "tags": ["Resolution", "Microscope", "Rayleigh"]},
  {"id": "pc_op_6", "prompt": "L avantage de l objectif a immersion huile est que :", "choices": ["n_huile ~ n_verre ~ 1,515 : pas de refraction a l interface -> ON maximale (~1,4)", "L huile absorbe les UV", "L air a un indice superieur a 1", "La refraction augmente le grossissement"], "answer": 0, "diff": 2, "explication": "Sans huile : n_verre=1,52 -> n_air=1 : refraction a l interface -> perte rayons -> ON reduite (~0,95). Avec huile (n~1,515~n_verre) : pas de refraction -> ON~1,4. ON = n x sin(alpha_max).", "tags": ["Immersion huile", "ON", "Microscope"]},
  {"id": "pc_op_7", "prompt": "Le grossissement total d un microscope optique est :", "choices": ["Gt = Gobjectif x Goculaire", "Gt = Gobjectif + Goculaire", "Gt = Gobjectif / Goculaire", "Gt = (Gobjectif)^2"], "answer": 0, "diff": 1, "explication": "Gt = |gamma objectif| x Goculaire. Ex: objectif 40x, oculaire 10x -> Gt = 400x. Le grossissement utile est limite par la resolution (inutile d agrandir un detail non resoluble).", "tags": ["Grossissement", "Microscope", "Oculaire"]},
  {"id": "pc_op_8", "prompt": "La limite de resolution pratique du microscope optique est d environ :", "choices": ["0,2 µm (200 nm) - les bactéries de 1-2 µm sont visibles", "0,02 µm (20 nm)", "2 nm", "20 µm"], "answer": 0, "diff": 1, "explication": "d_min ~ 0,61 x 500nm / 1,4 ~ 218 nm ~ 0,2 µm. Les virus (~100 nm) ne sont pas resolus en microscopie optique. Bacteries (~0,5-2 µm) visibles. Microscopie electronique (TEM) : resolution ~0,1-1 nm.", "tags": ["Limite resolution", "Bactéries", "Microscopie electronique"]},
  {"id": "pc_op_9", "prompt": "Le principe TIRF (Total Internal Reflection Fluorescence) exploite :", "choices": ["La reflexion totale interne pour n eclairer qu une fine tranche (~100 nm) a l interface", "L immersion dans l huile uniquement", "La fluorescence de toute la cellule", "La diffraction des ondes"], "answer": 0, "diff": 3, "explication": "TIRF : angle d incidence > angle critique -> onde evanescente ~100 nm d epaisseur -> n excite que les fluorophores proches de la surface -> bruit de fond minimal. Application : visualisation vesicules d exocytose, recepteurs membranaires.", "tags": ["TIRF", "Reflexion totale", "Fluorescence"]},
  {"id": "pc_op_10", "prompt": "En microscopie de contraste de phase, les structures transparentes sont visibles car :", "choices": ["Le dephasage des ondes traversant la cellule est converti en contraste d amplitude", "Les structures sont colorees par fixation", "L objectif grossit differemment selon la densite", "La lumiere est absorbee differemment"], "answer": 0, "diff": 3, "explication": "Cellules vivantes non colorees : meme intensite transmise mais dephasage different selon l epaisseur/indice. Contraste de phase : anneau de phase dans l objectif -> interference constructive/destructive -> contraste.", "tags": ["Contraste de phase", "Cellules vivantes", "Interference"]},
];

export const QB_PC_ORGA_STRUCTURE = [
  {
    "id": "pc-orga-struct-1",
    "prompt": "Quelle est la valence (nombre de liaisons) d'un atome de carbone dans un composé organique ?",
    "choices": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 2,
    "diff": 1,
    "explication": "Le carbone a 4 électrons de valence et forme toujours 4 liaisons covalentes en chimie organique.",
    "tags": [
      "chimie organique",
      "structure"
    ]
  },
  {
    "id": "pc-orga-struct-2",
    "prompt": "Quelle formule brute correspond au butane ?",
    "choices": [
      "C3H8",
      "C4H10",
      "C4H8",
      "C5H12"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Le butane est un alcane à 4 carbones : CnH2n+2 → C4H10.",
    "tags": [
      "alcanes",
      "formule brute"
    ]
  },
  {
    "id": "pc-orga-struct-3",
    "prompt": "Qu'est-ce qu'une liaison π (pi) ?",
    "choices": [
      "Liaison sigma entre deux carbones",
      "Recouvrement latéral d'orbitales p",
      "Liaison hydrogène",
      "Liaison ionique C-N"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Une liaison π résulte du recouvrement latéral de deux orbitales p parallèles, présente dans les liaisons doubles et triples.",
    "tags": [
      "liaisons",
      "orbitales"
    ]
  },
  {
    "id": "pc-orga-struct-4",
    "prompt": "Quel groupe fonctionnel caractérise les alcènes ?",
    "choices": [
      "C≡C",
      "C=O",
      "C=C",
      "C-OH"
    ],
    "answer": 2,
    "diff": 1,
    "explication": "Les alcènes possèdent une ou plusieurs doubles liaisons C=C.",
    "tags": [
      "alcènes",
      "groupe fonctionnel"
    ]
  },
  {
    "id": "pc-orga-struct-5",
    "prompt": "La formule générale des alcanes est :",
    "choices": [
      "CnH2n",
      "CnH2n+2",
      "CnH2n-2",
      "CnHn"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Les alcanes sont des hydrocarbures saturés de formule CnH2n+2.",
    "tags": [
      "alcanes",
      "formule"
    ]
  },
  {
    "id": "pc-orga-struct-6",
    "prompt": "Qu'appelle-t-on un hétéroatome en chimie organique ?",
    "choices": [
      "Un carbone quaternaire",
      "Un atome autre que C et H dans la molécule",
      "Un isotope du carbone",
      "Un carbone asymétrique"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Un hétéroatome est tout atome différent du carbone et de l'hydrogène (O, N, S, halogens...).",
    "tags": [
      "hétéroatome",
      "définition"
    ]
  },
  {
    "id": "pc-orga-struct-7",
    "prompt": "Quelle représentation montre clairement les angles de liaison et la géométrie 3D d'une molécule ?",
    "choices": [
      "Formule topologique",
      "Représentation de Cram",
      "Formule de Lewis",
      "Formule brute"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "La représentation de Cram utilise des traits pleins, en coin et en pointillés pour représenter la géométrie 3D.",
    "tags": [
      "représentation",
      "Cram"
    ]
  },
  {
    "id": "pc-orga-struct-8",
    "prompt": "Un carbone sp3 possède une géométrie :",
    "choices": [
      "Plane et trigonale (120°)",
      "Tétraédrique (109,5°)",
      "Linéaire (180°)",
      "Plane et carrée"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "L'hybridation sp3 donne 4 orbitales équivalentes orientées vers les sommets d'un tétraèdre, angle 109,5°.",
    "tags": [
      "hybridation",
      "sp3",
      "géométrie"
    ]
  },
  {
    "id": "pc-orga-struct-9",
    "prompt": "Quelle est la différence entre isomères de constitution et stéréoisomères ?",
    "choices": [
      "Même formule brute mais ordre de liaison différent vs même squelette mais arrangement 3D différent",
      "Isomères de constitution ont une formule brute différente",
      "Stéréoisomères n'existent qu'en série cyclique",
      "Aucune différence chimique réelle"
    ],
    "answer": 0,
    "diff": 2,
    "explication": "Les isomères de constitution diffèrent dans l'enchaînement des atomes ; les stéréoisomères ont le même enchaînement mais diffèrent dans l'arrangement spatial.",
    "tags": [
      "isomérie",
      "stéréoisomères"
    ]
  },
  {
    "id": "pc-orga-struct-10",
    "prompt": "Une chaîne carbonée ramifiée est :",
    "choices": [
      "Toujours cyclique",
      "Une chaîne avec au moins un carbone portant plus de 2 carbones voisins",
      "Une chaîne sans hydrogène",
      "Synonyme de chaîne aromatique"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "La ramification implique un carbone tertiaire ou quaternaire relié à ≥3 autres carbones.",
    "tags": [
      "ramification",
      "chaîne carbonée"
    ]
  }
];

export const QB_PC_ORGA_STEREO = [
  {
    "id": "pc-orga-stereo-1",
    "prompt": "Un carbone asymétrique est un carbone qui :",
    "choices": [
      "Porte une double liaison",
      "Porte 4 substituants tous différents",
      "Est en position terminale",
      "Porte un groupement OH"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Un carbone asymétrique (ou stéréogène) porte 4 substituants différents, créant une non-superposabilité à son image miroir.",
    "tags": [
      "carbone asymétrique",
      "stéréochimie"
    ]
  },
  {
    "id": "pc-orga-stereo-2",
    "prompt": "L'énantiomère d'une molécule est :",
    "choices": [
      "Son isomère de constitution",
      "Son image miroir non superposable",
      "Son diastéréoisomère",
      "La même molécule en conformation différente"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Deux énantiomères sont des images miroirs non superposables l'une de l'autre.",
    "tags": [
      "énantiomères",
      "chiralité"
    ]
  },
  {
    "id": "pc-orga-stereo-3",
    "prompt": "La configuration absolue R/S est déterminée selon :",
    "choices": [
      "Les règles de Cahn-Ingold-Prelog (CIP)",
      "La règle de Markovnikov",
      "Les règles de Baldwin",
      "La règle de Zaitsev"
    ],
    "answer": 0,
    "diff": 2,
    "explication": "Les règles CIP classifient les substituants par numéro atomique croissant pour attribuer R ou S.",
    "tags": [
      "CIP",
      "R/S",
      "configuration"
    ]
  },
  {
    "id": "pc-orga-stereo-4",
    "prompt": "Un mélange racémique contient :",
    "choices": [
      "Seulement l'énantiomère R",
      "50% de chaque énantiomère",
      "Uniquement des diastéréoisomères",
      "Un composé méso"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Un mélange racémique est composé à 50/50 des deux énantiomères, il ne dévie pas la lumière polarisée.",
    "tags": [
      "mélange racémique",
      "optique"
    ]
  },
  {
    "id": "pc-orga-stereo-5",
    "prompt": "Des diastéréoisomères sont des stéréoisomères qui :",
    "choices": [
      "Sont des images miroirs",
      "Ne sont pas des images miroirs l'un de l'autre",
      "Ont des formules brutes différentes",
      "Sont identiques en solution"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Les diastéréoisomères sont des stéréoisomères non énantiomères, ils ont des propriétés physiques différentes.",
    "tags": [
      "diastéréoisomères",
      "stéréochimie"
    ]
  },
  {
    "id": "pc-orga-stereo-6",
    "prompt": "La géométrie Z/E des alcènes est due à :",
    "choices": [
      "La libre rotation autour de C=C (bloquée)",
      "La rotation libre autour de C-C",
      "La chiralité du carbone central",
      "L'hybridation sp3"
    ],
    "answer": 0,
    "diff": 2,
    "explication": "La double liaison C=C est rigide (pas de rotation libre), créant une isomérie géométrique E/Z selon la position des substituants.",
    "tags": [
      "E/Z",
      "alcènes",
      "isomérie"
    ]
  },
  {
    "id": "pc-orga-stereo-7",
    "prompt": "Pour la règle E/Z avec deux substituants identiques sur un même carbone de la double liaison :",
    "choices": [
      "On attribue Z systématiquement",
      "E/Z n'est pas applicable, on utilise cis/trans",
      "On attribue E systématiquement",
      "La molécule est achiral"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Si un carbone de la double liaison porte deux substituants identiques, l'isomérie E/Z n'existe pas et on peut parler de cis/trans.",
    "tags": [
      "E/Z",
      "règle"
    ]
  },
  {
    "id": "pc-orga-stereo-8",
    "prompt": "Un composé méso est :",
    "choices": [
      "Un énantiomère pur",
      "Une molécule avec des centres chiraux mais superposable à son image miroir grâce à un plan de symétrie",
      "Un diastéréoisomère stable",
      "Un polymère optiquement actif"
    ],
    "answer": 1,
    "diff": 3,
    "explication": "Un composé méso possède des centres stéréogènes mais est achiral car il contient un plan de symétrie interne.",
    "tags": [
      "composé méso",
      "symétrie"
    ]
  },
  {
    "id": "pc-orga-stereo-9",
    "prompt": "Le pouvoir rotatoire spécifique [α] d'un énantiomère pur est :",
    "choices": [
      "Toujours positif",
      "Toujours nul",
      "Opposé à celui de son énantiomère",
      "Identique à celui de son diastéréoisomère"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "Deux énantiomères dévient la lumière polarisée du même angle mais en sens opposé : [α]R = -[α]S.",
    "tags": [
      "pouvoir rotatoire",
      "énantiomères"
    ]
  },
  {
    "id": "pc-orga-stereo-10",
    "prompt": "Combien de stéréoisomères maximum pour une molécule à n centres asymétriques ?",
    "choices": [
      "n",
      "2n",
      "n²",
      "2^n"
    ],
    "answer": 3,
    "diff": 2,
    "explication": "Le nombre maximal de stéréoisomères est 2^n, où n est le nombre de carbones asymétriques (règle de Van't Hoff).",
    "tags": [
      "stéréoisomères",
      "Van't Hoff"
    ]
  }
];

export const QB_PC_ORGA_EFFETS_ELEC = [
  {
    "id": "pc-orga-effets-1",
    "prompt": "L'effet inductif +I est exercé par les groupements :",
    "choices": [
      "Alkyles (donneurs d'électrons)",
      "Halogènes (attracteurs)",
      "Nitro -NO2",
      "Carbonyle C=O"
    ],
    "answer": 0,
    "diff": 2,
    "explication": "Les groupements alkyles exercent un effet inductif donneur (+I) par hyperconjugaison et induction.",
    "tags": [
      "effet inductif",
      "+I"
    ]
  },
  {
    "id": "pc-orga-effets-2",
    "prompt": "L'effet mésomère (M) se propage via :",
    "choices": [
      "Les liaisons sigma uniquement",
      "Le système conjugué (liaisons π)",
      "Les liaisons hydrogène",
      "Les effets de solvatation"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "L'effet mésomère se transmet par délocalistion des électrons π à travers un système conjugué.",
    "tags": [
      "effet mésomère",
      "conjugaison"
    ]
  },
  {
    "id": "pc-orga-effets-3",
    "prompt": "Un groupement -OH est :",
    "choices": [
      "-I et -M",
      "-I et +M",
      "Neutre (ni I ni M)",
      "+I et +M"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "-OH est attracteur inductif (-I) mais donneur mésomère (+M) grâce aux doublets libres de l'oxygène vers le cycle.",
    "tags": [
      "-OH",
      "effets électroniques"
    ]
  },
  {
    "id": "pc-orga-effets-4",
    "prompt": "La réactivité d'un carbocation (carbanion) est stabilisée par les effets :",
    "choices": [
      "Attracteurs d'électrons",
      "Donneurs d'électrons",
      "La présence d'halogènes",
      "Les effets -M"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Un carbocation (charge +) est stabilisé par des effets donneurs (+I, +M) qui délocalisent la charge positive.",
    "tags": [
      "carbocation",
      "stabilisation"
    ]
  },
  {
    "id": "pc-orga-effets-5",
    "prompt": "L'ordre de stabilité des carbocations est :",
    "choices": [
      "Primaire > secondaire > tertiaire",
      "Tertiaire > secondaire > primaire > méthyle",
      "Méthyle > primaire > secondaire",
      "Tous égaux"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Plus il y a de groupements alkyles (effet +I et hyperconjugaison), plus le carbocation est stabilisé : 3° > 2° > 1° > méthyle.",
    "tags": [
      "carbocation",
      "stabilité"
    ]
  },
  {
    "id": "pc-orga-effets-6",
    "prompt": "Un carbanion est stabilisé par :",
    "choices": [
      "Les effets donneurs +I",
      "Les effets attracteurs -I et -M",
      "La présence de groupements alkyles",
      "L'aromaticité"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Un carbanion (charge –) est stabilisé par des groupements attracteurs (-I, -M) qui délocalisent la charge négative.",
    "tags": [
      "carbanion",
      "stabilisation"
    ]
  },
  {
    "id": "pc-orga-effets-7",
    "prompt": "L'acidité d'un composé organique est liée à la stabilité de :",
    "choices": [
      "La molécule neutre",
      "Sa base conjuguée (anion)",
      "Son cation correspondant",
      "Son état de transition"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Un composé est d'autant plus acide que sa base conjuguée (l'anion après perte de H+) est stable.",
    "tags": [
      "acidité",
      "base conjuguée"
    ]
  },
  {
    "id": "pc-orga-effets-8",
    "prompt": "La résonance (mésomérie) déstabilise la molécule ou la stabilise ?",
    "choices": [
      "Déstabilise toujours",
      "Stabilise toujours la molécule",
      "Stabilise si les charges formelles sont délocalises",
      "N'a aucun effet sur la stabilité"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "La délocalistion des électrons par résonance abaisse l'énergie et stabilise la molécule.",
    "tags": [
      "résonance",
      "stabilisation"
    ]
  },
  {
    "id": "pc-orga-effets-9",
    "prompt": "Parmi les acides carboxyliques suivants, lequel est le plus acide ?",
    "choices": [
      "CH3COOH",
      "Cl3CCOOH",
      "CH3CH2COOH",
      "(CH3)3CCOOH"
    ],
    "answer": 1,
    "diff": 3,
    "explication": "CCl3COOH : les 3 Cl exercent un effet –I fort qui stabilise la base conjuguée COO–, augmentant fortement l'acidité.",
    "tags": [
      "acidité",
      "effet inductif",
      "acides carboxyliques"
    ]
  },
  {
    "id": "pc-orga-effets-10",
    "prompt": "L'effet hypercojugaison contribue à la stabilisation des :",
    "choices": [
      "Radicaux primaires seulement",
      "Carbocations et radicaux par délocalisation des liaisons C-H σ",
      "Anions carboxylates",
      "Molécules aromatiques uniquement"
    ],
    "answer": 1,
    "diff": 3,
    "explication": "L'hyperconjugaison est la délocalisation des électrons de liaisons C-H ou C-C σ vers une orbitale p vide adjacente, stabilisant carbocations et radicaux.",
    "tags": [
      "hyperconjugaison",
      "carbocation"
    ]
  }
];

export const QB_PC_ORGA_ALCOOLS = [
  {
    "id": "pc-orga-alcools-1",
    "prompt": "Quel est le groupe fonctionnel des alcools ?",
    "choices": [
      "C=O",
      "OH lié à un carbone sp3",
      "NH2",
      "COOH"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Les alcools portent un groupe hydroxyle -OH sur un carbone saturé sp3.",
    "tags": [
      "alcools",
      "groupe fonctionnel"
    ]
  },
  {
    "id": "pc-orga-alcools-2",
    "prompt": "L'oxydation ménagée d'un alcool primaire donne :",
    "choices": [
      "Un acide carboxylique directement",
      "Un aldéhyde puis un acide si excès d'oxydant",
      "Une cétone",
      "Un alcène"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Oxydation ménagée d'alcool 1° → aldéhyde ; en excès d'oxydant → acide carboxylique.",
    "tags": [
      "oxydation",
      "alcool primaire",
      "aldéhyde"
    ]
  },
  {
    "id": "pc-orga-alcools-3",
    "prompt": "L'oxydation d'un alcool secondaire donne :",
    "choices": [
      "Un aldéhyde",
      "Une cétone",
      "Un acide carboxylique",
      "Aucun produit (résistant)"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Les alcools secondaires s'oxydent en cétones (arrêt de l'oxydation car pas de H sur C=O).",
    "tags": [
      "oxydation",
      "alcool secondaire",
      "cétone"
    ]
  },
  {
    "id": "pc-orga-alcools-4",
    "prompt": "Les alcools tertiaires sont :",
    "choices": [
      "Facilement oxydés en acide",
      "Résistants à l'oxydation douce",
      "Oxydés en cétones",
      "Plus acides que les primaires"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Les alcools tertiaires ne s'oxydent pas facilement car le carbone portant OH n'a pas de H à abstraire.",
    "tags": [
      "alcool tertiaire",
      "oxydation"
    ]
  },
  {
    "id": "pc-orga-alcools-5",
    "prompt": "La déshydratation intramoléculaire d'un alcool conduit à :",
    "choices": [
      "Un éther",
      "Un alcène",
      "Un acide carboxylique",
      "Un aldéhyde"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Chauffage d'un alcool avec H2SO4 concentré → élimination d'eau intramoléculaire → alcène (règle de Zaitsev).",
    "tags": [
      "déshydratation",
      "alcène",
      "élimination"
    ]
  },
  {
    "id": "pc-orga-alcools-6",
    "prompt": "La déshydratation intermoléculaire de deux alcools donne :",
    "choices": [
      "Un alcène",
      "Un acide",
      "Un éther (liaison C-O-C)",
      "Un ester"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "Chauffage modéré d'alcool avec H2SO4 → condensation de deux molécules → éther R-O-R'.",
    "tags": [
      "déshydratation",
      "éther"
    ]
  },
  {
    "id": "pc-orga-alcools-7",
    "prompt": "Quelle réaction transforme un alcool en ester ?",
    "choices": [
      "Oxydation",
      "Estérification (alcool + acide carboxylique)",
      "Réduction",
      "Déshydratation"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "L'estérification est la réaction d'un alcool avec un acide carboxylique pour former un ester et de l'eau.",
    "tags": [
      "estérification",
      "ester"
    ]
  },
  {
    "id": "pc-orga-alcools-8",
    "prompt": "Le test de Lucas (ZnCl2/HCl conc.) permet de distinguer :",
    "choices": [
      "Aldéhydes et cétones",
      "Alcools primaires, secondaires et tertiaires",
      "Acides et esters",
      "Alcools et phénols"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Le test de Lucas : 3° réagit immédiatement (trouble), 2° en quelques minutes, 1° ne réagit pas à froid.",
    "tags": [
      "test de Lucas",
      "alcools"
    ]
  },
  {
    "id": "pc-orga-alcools-9",
    "prompt": "L'acide chromique (CrO3, H2SO4) oxyde les alcools primaires en :",
    "choices": [
      "Cétones",
      "Acides carboxyliques",
      "Aldéhydes uniquement",
      "Alcènes"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "CrO3/H2SO4 (réactif de Jones) oxyde les alcools primaires jusqu'à l'acide carboxylique.",
    "tags": [
      "réactif de Jones",
      "oxydation",
      "acide carboxylique"
    ]
  },
  {
    "id": "pc-orga-alcools-10",
    "prompt": "Un phénol diffère d'un alcool car :",
    "choices": [
      "Le groupe OH est sur un carbone aromatique sp2",
      "Il ne peut pas former de liaisons H",
      "Il est moins acide qu'un alcool aliphatique",
      "Il ne réagit pas avec NaOH"
    ],
    "answer": 0,
    "diff": 2,
    "explication": "Dans un phénol, le -OH est directement sur le cycle aromatique (sp2), ce qui augmente son acidité par résonance.",
    "tags": [
      "phénol",
      "aromatique"
    ]
  }
];

export const QB_PC_ORGA_CARBONYLES = [
  {
    "id": "pc-orga-carb-1",
    "prompt": "Quel groupe fonctionnel est commun aux aldéhydes et aux cétones ?",
    "choices": [
      "C-OH",
      "C=O (carbonyle)",
      "COOH",
      "C≡N"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Les aldéhydes (R-CHO) et les cétones (R-CO-R') partagent le groupe carbonyle C=O.",
    "tags": [
      "carbonyle",
      "aldéhyde",
      "cétone"
    ]
  },
  {
    "id": "pc-orga-carb-2",
    "prompt": "Le test de la 2,4-DNPH (Brady) est positif avec :",
    "choices": [
      "Acides carboxyliques",
      "Alcools",
      "Aldéhydes et cétones",
      "Esters"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "La 2,4-DNPH réagit avec le groupe C=O des aldéhydes et cétones pour former un précipité jaune-orangé.",
    "tags": [
      "2,4-DNPH",
      "test",
      "carbonyle"
    ]
  },
  {
    "id": "pc-orga-carb-3",
    "prompt": "La réaction de Fehling détecte spécifiquement :",
    "choices": [
      "Les cétones",
      "Les aldéhydes (agents réducteurs)",
      "Les acides carboxyliques",
      "Les alcools primaires"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Le réactif de Fehling (Cu2+) est réduit en Cu2O (précipité rouge) par les aldéhydes ; les cétones ne réagissent pas.",
    "tags": [
      "Fehling",
      "aldéhyde",
      "réducteur"
    ]
  },
  {
    "id": "pc-orga-carb-4",
    "prompt": "L'addition nucléophile d'un réactif de Grignard R'MgX sur un aldéhyde donne :",
    "choices": [
      "Un acide carboxylique",
      "Un alcool secondaire",
      "Une cétone",
      "Un alcool primaire"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "R'MgX (nucléophile carbanionique) + RCHO → alcool secondaire R-CHOH-R' après hydrolyse.",
    "tags": [
      "Grignard",
      "addition nucléophile",
      "alcool secondaire"
    ]
  },
  {
    "id": "pc-orga-carb-5",
    "prompt": "La réaction de Wittig transforme un carbonyle en :",
    "choices": [
      "Alcool",
      "Alcène (liaison C=C à la place de C=O)",
      "Amine",
      "Acide carboxylique"
    ],
    "answer": 1,
    "diff": 3,
    "explication": "La réaction de Wittig (aldéhyde ou cétone + ylure de phosphore) forme un alcène C=C en éliminant Ph3P=O.",
    "tags": [
      "Wittig",
      "alcène",
      "synthèse"
    ]
  },
  {
    "id": "pc-orga-carb-6",
    "prompt": "La condensation aldolique implique :",
    "choices": [
      "L'addition d'un alcool sur un acide",
      "La réaction d'un énolate sur un carbonyle pour former un β-hydroxy carbonyle",
      "La réduction d'une cétone en alcool",
      "L'oxydation d'un aldéhyde"
    ],
    "answer": 1,
    "diff": 3,
    "explication": "La condensation aldolique est l'addition nucléophile d'un carbone α déprotoné (énolate) sur un carbonyle.",
    "tags": [
      "condensation aldolique",
      "énolate"
    ]
  },
  {
    "id": "pc-orga-carb-7",
    "prompt": "La réduction d'une cétone par NaBH4 donne :",
    "choices": [
      "Un alcool primaire",
      "Un alcool secondaire",
      "Une amine",
      "Un acide carboxylique"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "NaBH4 (hydrure) réduit les cétones R-CO-R' en alcools secondaires R-CHOH-R'.",
    "tags": [
      "NaBH4",
      "réduction",
      "alcool secondaire"
    ]
  },
  {
    "id": "pc-orga-carb-8",
    "prompt": "Les acétals (R-CH(OR')2) se forment par réaction d'un aldéhyde avec :",
    "choices": [
      "Un alcool (en catalyse acide)",
      "Un acide carboxylique",
      "Une amine",
      "Un halogénure"
    ],
    "answer": 0,
    "diff": 2,
    "explication": "Un aldéhyde + 2 molécules d'alcool → acétal + H2O, en catalyse acide. Utilisé comme groupe protecteur.",
    "tags": [
      "acétal",
      "groupe protecteur"
    ]
  },
  {
    "id": "pc-orga-carb-9",
    "prompt": "L'énol est l'isomère d'une cétone qui comporte :",
    "choices": [
      "Un carbanion sur Cα",
      "Un groupe C=C-OH (double liaison et OH vicinaux)",
      "Un groupe amino",
      "Aucun oxygène"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "La tautomérie céto-énolique interconvertit la cétone (C=O) et l'énol (C=C-OH).",
    "tags": [
      "tautomérie",
      "énol",
      "cétone"
    ]
  },
  {
    "id": "pc-orga-carb-10",
    "prompt": "La réaction de Cannizzaro est caractéristique des aldéhydes :",
    "choices": [
      "Avec un Cα (pouvant former un énolate)",
      "Sans Cα (ne pouvant pas former d'énolate)",
      "Avec un groupe amine adjacent",
      "De haut poids moléculaire uniquement"
    ],
    "answer": 1,
    "diff": 3,
    "explication": "La réaction de Cannizzaro (dismutation) concerne les aldéhydes sans H en α (formaldéhyde, benzaldéhyde) : l'un s'oxyde en acide, l'autre se réduit en alcool.",
    "tags": [
      "Cannizzaro",
      "sans Cα",
      "dismutation"
    ]
  }
];

export const QB_PC_ORGA_DERIVES_ACIDES = [
  {
    "id": "pc-orga-deriv-1",
    "prompt": "Quel groupe fonctionnel caractérise les acides carboxyliques ?",
    "choices": [
      "CHO",
      "COOH",
      "COO-",
      "CO-NH"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Le groupe carboxyle -COOH = -C(=O)OH caractérise les acides carboxyliques.",
    "tags": [
      "acide carboxylique",
      "groupe fonctionnel"
    ]
  },
  {
    "id": "pc-orga-deriv-2",
    "prompt": "L'estérification est une réaction :",
    "choices": [
      "Rapide et totale",
      "Lente, réversible et totale",
      "Lente, réversible et limitée (équilibre)",
      "Rapide et irréversible"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "L'estérification est une réaction lente, réversible, limitée (Keq ≈ 1-10) nécessitant une catalyse acide.",
    "tags": [
      "estérification",
      "équilibre"
    ]
  },
  {
    "id": "pc-orga-deriv-3",
    "prompt": "L'hydrolyse d'un ester en milieu basique (saponification) est :",
    "choices": [
      "Réversible",
      "Totale et irréversible",
      "Aussi lente qu'en milieu acide",
      "Endothermique"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "La saponification (NaOH) est totale car elle produit un carboxylate (sel), déplaçant l'équilibre vers les produits.",
    "tags": [
      "saponification",
      "hydrolyse basique",
      "irréversible"
    ]
  },
  {
    "id": "pc-orga-deriv-4",
    "prompt": "L'ordre de réactivité des dérivés d'acides en substitution nucléophile acyle est :",
    "choices": [
      "Ester > chlorure d'acyle > anhydride > amide",
      "Chlorure d'acyle > anhydride > ester > amide",
      "Amide > ester > anhydride > chlorure d'acyle",
      "Tous réactifs égaux"
    ],
    "answer": 1,
    "diff": 3,
    "explication": "Plus le groupe partant est bon, plus le dérivé est réactif : Cl- > RCOO- > RO- > NH2-. Donc : chlorure > anhydride > ester > amide.",
    "tags": [
      "dérivés acides",
      "réactivité",
      "ordre"
    ]
  },
  {
    "id": "pc-orga-deriv-5",
    "prompt": "La réaction d'un acide carboxylique avec une amine donne (après déshydratation) :",
    "choices": [
      "Un ester",
      "Un amide",
      "Un anhydride",
      "Une cétone"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Acide carboxylique + amine → sel d'ammonium → amide + H2O (à chaud).",
    "tags": [
      "amide",
      "synthèse",
      "amine"
    ]
  },
  {
    "id": "pc-orga-deriv-6",
    "prompt": "Le groupe protecteur Boc (tert-butoxycarbonyl) protège :",
    "choices": [
      "Les fonctions alcool",
      "Les fonctions acide carboxylique",
      "Les fonctions amine",
      "Les fonctions carbonyle"
    ],
    "answer": 2,
    "diff": 3,
    "explication": "Le groupe Boc est utilisé en synthèse peptidique pour protéger les amines, il est retiré par TFA ou HCl gazeux.",
    "tags": [
      "Boc",
      "protection",
      "amine",
      "synthèse peptidique"
    ]
  },
  {
    "id": "pc-orga-deriv-7",
    "prompt": "La réaction de condensation entre deux acides aminés utilise le groupe :",
    "choices": [
      "Hydroxyle avec hydroxyle",
      "Amine d'un + acide carboxylique de l'autre → liaison peptidique -CO-NH-",
      "Deux groupes carbonyle",
      "Deux groupes amino"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "La liaison peptidique -CO-NH- se forme entre le -COOH d'un acide aminé et le -NH2 du suivant, avec élimination d'eau.",
    "tags": [
      "liaison peptidique",
      "acides aminés",
      "amide"
    ]
  },
  {
    "id": "pc-orga-deriv-8",
    "prompt": "L'anhydride acétique est utilisé pour :",
    "choices": [
      "Hydrolyser les esters",
      "Acétyler les fonctions -OH et -NH2",
      "Oxyder les alcools",
      "Réduire les acides"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "L'anhydride acétique est un agent d'acétylation qui transforme -OH en ester acétate et -NH2 en amide acétyle.",
    "tags": [
      "anhydride acétique",
      "acétylation"
    ]
  },
  {
    "id": "pc-orga-deriv-9",
    "prompt": "L'amide est hydrolysé plus difficilement que l'ester car :",
    "choices": [
      "L'azote est plus électronégatif que l'oxygène",
      "La résonance N-CO rend la liaison C-N partiellement double (moins réactive)",
      "L'amide est moins soluble",
      "L'amide est plus volatil"
    ],
    "answer": 1,
    "diff": 3,
    "explication": "La résonance amide (doublet de N vers C=O) confère un caractère double liaison partiel à la liaison C-N, la rendant moins accessible à l'attaque nucléophile.",
    "tags": [
      "amide",
      "résonance",
      "réactivité"
    ]
  },
  {
    "id": "pc-orga-deriv-10",
    "prompt": "L'acide acetylsalicylique (aspirine) est un :",
    "choices": [
      "Ester",
      "Amide",
      "Anhydride",
      "Alcool"
    ],
    "answer": 0,
    "diff": 1,
    "explication": "L'aspirine est l'ester acétique du salicylate (acide 2-acetoxybenzoïque) : le -OH phénolique est acétylé.",
    "tags": [
      "aspirine",
      "ester",
      "application"
    ]
  }
];

export const QB_PC_ORGA_SPECTRO = [
  {
    "id": "pc-orga-spectro-1",
    "prompt": "En spectroscopie IR, à quelle fréquence (cm-1) observe-t-on typiquement la bande d'élongation C=O des esters ?",
    "choices": [
      "~2200 cm-1",
      "~1735 cm-1",
      "~3300 cm-1",
      "~1000 cm-1"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "La bande C=O des esters apparaît vers 1735 cm-1 (plus haute fréquence que les acides ~1710 cm-1 et amides ~1680 cm-1).",
    "tags": [
      "IR",
      "C=O",
      "ester"
    ]
  },
  {
    "id": "pc-orga-spectro-2",
    "prompt": "En RMN 1H, le déplacement chimique δ (ppm) est mesuré par rapport à :",
    "choices": [
      "L'eau D2O",
      "Le TMS (tétraméthylsilane, δ=0)",
      "Le CDCl3",
      "Le benzène"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "Le TMS (Si(CH3)4) est la référence universelle en RMN 1H et 13C, δ = 0 ppm.",
    "tags": [
      "RMN",
      "TMS",
      "déplacement chimique"
    ]
  },
  {
    "id": "pc-orga-spectro-3",
    "prompt": "En RMN 1H, les protons aromatiques résonnent typiquement à :",
    "choices": [
      "0-1 ppm",
      "1-3 ppm",
      "6-8 ppm",
      "10-12 ppm"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "Les protons aromatiques résonnent à 6-8 ppm en raison du courant de cycle qui les met en position de deshielding.",
    "tags": [
      "RMN",
      "aromatique",
      "déplacement chimique"
    ]
  },
  {
    "id": "pc-orga-spectro-4",
    "prompt": "La règle de n+1 en RMN 1H indique que :",
    "choices": [
      "n protons équivalents donnent n+1 raies par couplage avec les voisins",
      "Un proton en α d'un carbonyle résonne à n+1 ppm",
      "n liaisons H donnent n+1 bandes IR",
      "n carbones donnent n+1 pics en RMN 13C"
    ],
    "answer": 0,
    "diff": 2,
    "explication": "Un proton avec n voisins équivalents est divisé en n+1 raies (multiplet) par couplage spin-spin.",
    "tags": [
      "RMN",
      "couplage",
      "règle n+1"
    ]
  },
  {
    "id": "pc-orga-spectro-5",
    "prompt": "En spectrométrie de masse, le pic le plus intense est appelé :",
    "choices": [
      "Pic moléculaire (M+)",
      "Pic de base",
      "Pic isotopique",
      "Pic de fragmentation principal"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Le pic de base est le pic le plus intense du spectre de masse (abondance relative = 100%).",
    "tags": [
      "spectrométrie de masse",
      "pic de base"
    ]
  },
  {
    "id": "pc-orga-spectro-6",
    "prompt": "Le pic moléculaire M+ en spectrométrie de masse correspond à :",
    "choices": [
      "Le fragment le plus petit",
      "La molécule entière ionisée (perte d'un électron)",
      "Un artifact du spectromètre",
      "Le fragment dominant toujours"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "M+ est l'ion moléculaire formé par ionisation de la molécule intacte (EI : perte d'un électron).",
    "tags": [
      "spectrométrie de masse",
      "ion moléculaire",
      "M+"
    ]
  },
  {
    "id": "pc-orga-spectro-7",
    "prompt": "En RMN 13C découplé, chaque carbone inéquivalent donne :",
    "choices": [
      "Un doublet",
      "Un singulet",
      "Un triplet",
      "Un quadruplet"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "En 13C découplé (découplage 1H), chaque carbone non équivalent donne un singulet, simplifiant l'interprétation.",
    "tags": [
      "RMN 13C",
      "découplé",
      "singulet"
    ]
  },
  {
    "id": "pc-orga-spectro-8",
    "prompt": "La bande large et forte vers 2500-3300 cm-1 en IR est caractéristique :",
    "choices": [
      "Des alcynes (C≡C-H)",
      "Des acides carboxyliques (O-H très large)",
      "Des amines primaires",
      "Des alcènes"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Les acides carboxyliques montrent une large bande O-H élargie par liaison H entre 2500-3300 cm-1.",
    "tags": [
      "IR",
      "acide carboxylique",
      "O-H"
    ]
  },
  {
    "id": "pc-orga-spectro-9",
    "prompt": "Le couplage vicinal (3J) en RMN 1H correspond au couplage entre protons séparés par :",
    "choices": [
      "1 liaison",
      "2 liaisons",
      "3 liaisons",
      "4 liaisons"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "Le couplage vicinal 3J implique 3 liaisons entre les deux protons couplés (H-C-C-H), le plus courant en RMN.",
    "tags": [
      "RMN",
      "couplage vicinal",
      "3J"
    ]
  },
  {
    "id": "pc-orga-spectro-10",
    "prompt": "En spectrométrie de masse, la perte d'un fragment de 15 Da indique la perte d'un groupe :",
    "choices": [
      "OH",
      "CH3 (méthyle)",
      "CO",
      "NH2"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "La perte de 15 Da correspond au groupe méthyle CH3 (M = 12+3 = 15).",
    "tags": [
      "spectrométrie de masse",
      "fragmentation",
      "méthyle"
    ]
  }
];

export const QB_PC_ORGA_ALCANES_ALCENES = [
  {
    "id": "pc-orga-alk-1",
    "prompt": "La bromation radicalaire des alcanes nécessite :",
    "choices": [
      "Un catalyseur acide",
      "La lumière UV ou une température élevée",
      "Un oxydant fort",
      "Un solvant polaire"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "La substitution radicalaire des alcanes est initiée par lumière UV (hν) ou chaleur qui homolysent Br2 en radicaux Br•.",
    "tags": [
      "bromation radicalaire",
      "alcanes",
      "UV"
    ]
  },
  {
    "id": "pc-orga-alk-2",
    "prompt": "La chloration radicalaire est moins sélective que la bromation car :",
    "choices": [
      "Cl2 est plus petit que Br2",
      "Les radicaux Cl• sont moins stables et plus réactifs (état de transition précoce)",
      "Le chlore est plus électronégatif",
      "La chloration est ionique"
    ],
    "answer": 1,
    "diff": 3,
    "explication": "Le radical Cl• très réactif attaque sans grande discrimination (peu sélectif). Le radical Br• plus stable (état de transition tardif) est plus sélectif.",
    "tags": [
      "chloration",
      "bromation",
      "sélectivité",
      "radical"
    ]
  },
  {
    "id": "pc-orga-alk-3",
    "prompt": "L'addition électrophile de HBr sur un alcène suit la règle de Markovnikov : le H se fixe sur :",
    "choices": [
      "Le carbone le plus substitué",
      "Le carbone le moins substitué (porte le plus de H)",
      "Le carbone en fin de chaîne",
      "N'importe quel carbone de façon aléatoire"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Règle de Markovnikov : H+ s'additionne sur le carbone qui porte déjà le plus de H (formant le carbocation le plus stable).",
    "tags": [
      "Markovnikov",
      "addition électrophile",
      "HBr"
    ]
  },
  {
    "id": "pc-orga-alk-4",
    "prompt": "L'hydratation d'un alcène en catalyse acide (H2SO4/H2O) suit :",
    "choices": [
      "La règle anti-Markovnikov",
      "La règle de Markovnikov",
      "La règle de Zaitsev",
      "La règle de Baldwin"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Markovnikov : l'eau s'additionne avec OH sur le carbone le plus substitué → alcool secondaire ou tertiaire.",
    "tags": [
      "hydratation",
      "alcène",
      "Markovnikov"
    ]
  },
  {
    "id": "pc-orga-alk-5",
    "prompt": "L'hydroboration-oxydation d'un alcène (BH3 puis H2O2/NaOH) donne :",
    "choices": [
      "Un alcool avec addition syn anti-Markovnikov",
      "Un aldéhyde",
      "Un alcool de Markovnikov",
      "Un alcène trans"
    ],
    "answer": 0,
    "diff": 3,
    "explication": "L'hydroboration-oxydation est syn et anti-Markovnikov : OH va sur le carbone le moins substitué (stéréospécifique syn).",
    "tags": [
      "hydroboration",
      "anti-Markovnikov",
      "syn"
    ]
  },
  {
    "id": "pc-orga-alk-6",
    "prompt": "L'ozonolyse d'un alcène R1R2C=CR3R4 donne :",
    "choices": [
      "Des alcools",
      "Deux composés carbonylés R1R2C=O et R3R4C=O",
      "Un diol",
      "Un époxyde"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "L'ozonolyse clive la double liaison : chaque carbone de C=C forme un aldéhyde ou une cétone selon ses substituants.",
    "tags": [
      "ozonolyse",
      "coupure",
      "carbonyle"
    ]
  },
  {
    "id": "pc-orga-alk-7",
    "prompt": "L'époxydation d'un alcène par l'acide m-chloroperbenzoïque (mCPBA) est :",
    "choices": [
      "Anti-addition (stéréospécifique)",
      "Syn-addition",
      "Ionique non stéréospécifique",
      "Radicalaire"
    ],
    "answer": 0,
    "diff": 3,
    "explication": "mCPBA réalise une époxydation syn (les 2 oxygènes restent du même côté), mais l'ouverture de l'époxyde est anti.",
    "tags": [
      "époxydation",
      "mCPBA",
      "stéréospécificité"
    ]
  },
  {
    "id": "pc-orga-alk-8",
    "prompt": "La dihydroxylation syn des alcènes est réalisée par :",
    "choices": [
      "KMnO4 froid dilué (ou OsO4)",
      "KMnO4 chaud concentré",
      "HBr/peroxyde",
      "H2SO4"
    ],
    "answer": 0,
    "diff": 2,
    "explication": "KMnO4 froid dilué ou OsO4 catalytique réalisent une dihydroxylation syn : les deux OH s'ajoutent du même côté.",
    "tags": [
      "dihydroxylation",
      "syn",
      "KMnO4",
      "OsO4"
    ]
  },
  {
    "id": "pc-orga-alk-9",
    "prompt": "L'addition de Br2 sur un alcène dans CCl4 est :",
    "choices": [
      "Syn",
      "Anti (formation d'un ion bromonium)",
      "Radicalaire",
      "Thermique"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "L'ajout de Br2 passe par un ion bromonium ponté : l'ouverture nucléophile est anti → produit d'addition anti (trans-dibromure).",
    "tags": [
      "addition anti",
      "Br2",
      "bromonium"
    ]
  },
  {
    "id": "pc-orga-alk-10",
    "prompt": "La déshydrohalogénation d'un halogénoalcane par base forte donne :",
    "choices": [
      "Un alcool",
      "Un alcène (élimination E2 majoritairement vers Zaitsev)",
      "Un éther",
      "Un alcyne"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "Base forte (KOH alcoolique) + halogénoalcane → élimination E2 → alcène le plus substitué (règle de Zaitsev).",
    "tags": [
      "élimination E2",
      "Zaitsev",
      "alcène"
    ]
  }
];

export const QB_PC_ORGA_AROMATIQUES = [
  {
    "id": "pc-orga-arom-1",
    "prompt": "La règle de Hückel définit l'aromaticité pour un système cyclique conjugué comportant :",
    "choices": [
      "2n électrons π",
      "4n+2 électrons π (n entier ≥ 0)",
      "4n électrons π",
      "n² électrons π"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "La règle de Hückel : 4n+2 électrons π (2, 6, 10, 14...) → système aromatique stable (benzène : 6 e- π, n=1).",
    "tags": [
      "Hückel",
      "aromaticité",
      "électrons π"
    ]
  },
  {
    "id": "pc-orga-arom-2",
    "prompt": "La substitution aromatique électrophile (SEAr) préserve :",
    "choices": [
      "La saturation du cycle",
      "L'aromaticité du cycle",
      "Les halogènes initiaux",
      "La géométrie tétraédrique"
    ],
    "answer": 1,
    "diff": 1,
    "explication": "La SEAr est favorisée car elle maintient l'aromaticité : la dernière étape est la perte de H+ (pas d'addition).",
    "tags": [
      "SEAr",
      "substitution électrophile",
      "aromaticité"
    ]
  },
  {
    "id": "pc-orga-arom-3",
    "prompt": "Dans la nitration du benzène (HNO3/H2SO4), l'électrophile actif est :",
    "choices": [
      "NO3-",
      "NO2+ (ion nitronium)",
      "H2SO4",
      "H3O+"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "H2SO4 protone HNO3 → H2NO3+ → NO2+ + H2O. L'ion nitronium NO2+ est l'électrophile qui attaque le cycle.",
    "tags": [
      "nitration",
      "ion nitronium",
      "SEAr"
    ]
  },
  {
    "id": "pc-orga-arom-4",
    "prompt": "Un groupement fortement activant en SEAr (ortho-para directeur) est :",
    "choices": [
      "NO2",
      "COOH",
      "NH2 (donneur +M)",
      "CF3"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "-NH2 est un groupement donneur fort (+M) qui active le cycle et dirige en ortho/para.",
    "tags": [
      "orientation",
      "SEAr",
      "ortho-para"
    ]
  },
  {
    "id": "pc-orga-arom-5",
    "prompt": "Un groupement désactivant qui dirige en méta est :",
    "choices": [
      "OH",
      "OCH3",
      "NO2 (-M, -I)",
      "CH3"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "-NO2 est fortement désactivant (-I et -M) et dirige les électrophiles en méta (car les positions ortho/para sont appauvries).",
    "tags": [
      "orientation méta",
      "NO2",
      "désactivant"
    ]
  },
  {
    "id": "pc-orga-arom-6",
    "prompt": "La condensation de Friedel-Crafts (alkylation) utilise comme catalyseur :",
    "choices": [
      "NaOH",
      "AlCl3 (acide de Lewis)",
      "KMnO4",
      "H2O"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "AlCl3 est un acide de Lewis qui active l'halogénoalcane R-X → carbocation (électrophile) pour l'alkylation de Friedel-Crafts.",
    "tags": [
      "Friedel-Crafts",
      "AlCl3",
      "acide de Lewis"
    ]
  },
  {
    "id": "pc-orga-arom-7",
    "prompt": "Le toluène est oxydé par KMnO4 chaud concentré en :",
    "choices": [
      "Benzaldéhyde",
      "Acide benzoïque",
      "Phénol",
      "Cyclohexane"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "KMnO4 chaud oxyde les alkylbenzènes (quelle que soit la longueur de chaîne) en acide benzoïque.",
    "tags": [
      "KMnO4",
      "toluène",
      "acide benzoïque"
    ]
  },
  {
    "id": "pc-orga-arom-8",
    "prompt": "Le phénol a un pKa d'environ 10 (plus acide que l'éthanol pKa~16) car :",
    "choices": [
      "L'oxygène du phénol est plus électronégatif",
      "La base conjuguée phénoxyde est stabilisée par résonance avec le cycle aromatique",
      "Le phénol est volatil",
      "L'anneau aromatique attire le proton H"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "L'anion phénoxyde est stabilisé par délocalistion de la charge négative sur le cycle (résonance), abaissant l'énergie de la base conjuguée.",
    "tags": [
      "phénol",
      "acidité",
      "résonance",
      "phénoxyde"
    ]
  },
  {
    "id": "pc-orga-arom-9",
    "prompt": "L'aniline (aminobenzène) est une base plus faible que la méthylamine car :",
    "choices": [
      "L'azote est plus encombré",
      "Le doublet de N est délocalisé dans le cycle aromatique (moins disponible pour capter H+)",
      "L'aniline est moins soluble",
      "La méthylamine a un pKb plus élevé"
    ],
    "answer": 1,
    "diff": 2,
    "explication": "La résonance N→cycle délocalise le doublet libre de N, le rendant moins disponible pour la protonation → aniline plus faible base (pKb~9,4) que méthylamine (pKb~3,4).",
    "tags": [
      "aniline",
      "basicité",
      "résonance",
      "azote"
    ]
  },
  {
    "id": "pc-orga-arom-10",
    "prompt": "Le naphthalène est un composé aromatique bicyclique possédant :",
    "choices": [
      "6 électrons π",
      "8 électrons π",
      "10 électrons π",
      "12 électrons π"
    ],
    "answer": 2,
    "diff": 2,
    "explication": "Le naphthalène (C10H8) possède 10 électrons π dans son système conjugué à deux cycles fusionnés, vérifiant 4n+2 avec n=2.",
    "tags": [
      "naphthalène",
      "aromaticité",
      "bicyclique"
    ]
  }
];

export const FICHES_PC = [
  {id:"pc-f1",title:"Structure de l'atome",bloc:"Chimie générale",tags:["atome","orbitales","configuration électronique"],duree:"30 min",niveau:"Intermédiaire",qbank:"QB_PC_STRUCTURE_ATOME",contenu:{resume:"Modèle orbital : niveaux K, L, M... ; orbitales s, p, d ; règles de remplissage (Aufbau, Hund, Pauli) ; configuration électronique des éléments.",points:["Numéro atomique Z = nombre de protons = nombre d'électrons","Nombre de masse A = protons + neutrons","Règle de l'Aufbau : remplissage par énergie croissante","Règle de Hund : remplissage des sous-couches dégénérées","Principe de Pauli : 2 électrons max par orbitale (spins opposés)","Configuration d'exception : Cu (3d10 4s1), Cr (3d5 4s1)"],formules:["E_n = -13,6/n² eV (modèle de Bohr)","Capacité d'une couche : 2n²"],rappels:["1s < 2s < 2p < 3s < 3p < 4s < 3d...(règle de Klechkowski)"]}},
  {id:"pc-f2",title:"Édifices covalents",bloc:"Chimie générale",tags:["Lewis","VSEPR","liaisons","géométrie"],duree:"30 min",niveau:"Intermédiaire",qbank:"QB_PC_EDIFICES_COVALENTS",contenu:{resume:"Représentation de Lewis des molécules ; modèle VSEPR pour la géométrie ; polarité des liaisons et des molécules.",points:["Liaison covalente = mise en commun de 2 électrons","Règle de l'octet (sauf H : duet) et exceptions (PCl5, SF6, BF3)","Charge formelle = électrons de valence – libres – liants/2","VSEPR : répulsions doublets → géométrie (tétraédrique, trigonale, linéaire)","Moment dipolaire μ = q×d ; molécule polaire si dipôles non compensés"],formules:["μ = q × d (Debye)","Électronégativité : F > O > N > Cl > Br > C > H"],rappels:["Doublets libres répulsent plus que les doublets liants (angle H2O = 104,5°)"]}},
  {id:"pc-f3",title:"Forces intermoléculaires",bloc:"Chimie générale",tags:["van der Waals","liaison hydrogène","interactions"],duree:"25 min",niveau:"Débutant",qbank:"QB_PC_FORCES_INTERMO",contenu:{resume:"Forces intermoléculaires : ion-dipôle, dipôle-dipôle (Keesom), dipôle-dipôle induit (Debye), London ; liaison hydrogène.",points:["Forces de London (dispersion) : universelles, croissent avec la masse molaire","Forces de Keesom (orientation) : molécules polaires","Forces de Debye (induction) : molécule polaire + apolaire","Liaison hydrogène : X-H···Y (X,Y = F,O,N) ; forte (~20 kJ/mol)","Conséquences : températures d'ébullition élevées de l'eau, H2O2"],formules:["E_London ∝ α² / r6","T_éb H2O = 100°C vs H2S = -61°C (liaison H)"],rappels:["Plus la molécule est polarisable, plus les forces de London sont fortes"]}},
  {id:"pc-f4",title:"Préparation des solutions",bloc:"Chimie générale",tags:["concentration","dilution","dissolution"],duree:"25 min",niveau:"Débutant",qbank:"QB_PC_PREP_SOLUTIONS",contenu:{resume:"Concentrations massique et molaire ; loi de dilution ; pourcentage massique et volumique.",points:["Cm = masse soluté / volume solution (g/L)","C = n / V = Cm / M (mol/L)","Dilution : C1V1 = C2V2 (conservation des moles)","Fraction molaire, molalité (mol/kg solvant)","Densité d : d = ρ/ρ_eau ; relier % massique et concentration molaire"],formules:["n = C × V","C = (d × P% × 1000) / M (P% en fraction décimale)","C1V1 = C2V2"],rappels:["Toujours verser l'acide dans l'eau (acide dans eau, pas l'inverse)"]}},
  {id:"pc-f5",title:"Avancement et stœchiométrie",bloc:"Chimie générale",tags:["avancement","réactif limitant","stœchiométrie"],duree:"30 min",niveau:"Intermédiaire",qbank:"QB_PC_AVANCEMENT",contenu:{resume:"Tableau d'avancement, réactif limitant, rendement, taux d'avancement.",points:["Avancement x : varie de 0 à xmax","Réactif limitant : celui qui s'épuise en premier (x_max le plus faible)","Rendement η = x_final / x_max × 100%","Taux d'avancement final : rf = xf / xeq","État d'équilibre : avancement x_eq où Q = K"],formules:["xmax = n_i / ν_i (minimum sur les réactifs)","η = n_obtenu / n_théorique × 100","τ = x_eq / x_max"],rappels:["Écrire le tableau n(initial) – n_i(stœchio)×x pour chaque espèce"]}},
  {id:"pc-f6",title:"Équilibres chimiques",bloc:"Chimie générale",tags:["Kc","Kp","Le Chatelier","équilibre"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_EQUILIBRES",contenu:{resume:"Constante d'équilibre Kc et Kp ; quotient réactionnel Q ; principe de Le Chatelier ; équilibres hétérogènes.",points:["Kc = ∏[produits]^ν / ∏[réactifs]^ν (à équilibre)","Q < K : réaction directe ; Q > K : réaction inverse ; Q = K : équilibre","Principe de Le Chatelier : perturbation → déplacement pour compenser","Kp = Kc × (RT)^Δn pour les gaz","Solides et solvants purs exclus de K"],formules:["Kp = Kc(RT)^Δn","ln K = -ΔrG°/RT = -ΔrH°/RT + ΔrS°/R"],rappels:["K > 1 : équilibre favorable aux produits ; K < 1 : aux réactifs"]}},
  {id:"pc-f7",title:"Thermochimie",bloc:"Chimie générale",tags:["enthalpie","Hess","énergie","thermochimie"],duree:"40 min",niveau:"Intermédiaire",qbank:"QB_PC_THERMOCHIMIE",contenu:{resume:"Loi de Hess, enthalpies standard de formation et de combustion, liaison enthalpe de liaison.",points:["Réaction exothermique : ΔrH < 0 ; endothermique : ΔrH > 0","Loi de Hess : additivité des enthalpies","ΔrH° = Σ ΔfH°(produits) – Σ ΔfH°(réactifs)","Énergie de liaison : énergie à fournir pour rompre 1 mol de liaison","Capacité calorifique Cp ; calorimétrie : q = mCpΔT"],formules:["ΔrH = Σ(liaisons rompues) – Σ(liaisons formées)","q = mCpΔT","ΔrG° = ΔrH° – TΔrS°"],rappels:["ΔfH°(éléments stables) = 0 ; ΔfH°(H2O liquide) = –286 kJ/mol"]}},
  {id:"pc-f8",title:"Acides et bases I",bloc:"Chimie générale",tags:["pH","Brønsted","acides","bases","pKa"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_ACIDES_BASES_1",contenu:{resume:"Définition de Brønsted-Lowry, couples acide-base, pH des acides et bases forts et faibles, Ke.",points:["Acide de Brønsted : donneur de proton H+","Base de Brønsted : accepteur de proton","Ke = [H3O+][OH-] = 10-14 à 25°C ; pKe = 14","pH = -log[H3O+] ; pOH = 14 – pH","Acide fort : totalement dissocié ; pH = -log(Ca)","Acide faible : Ka ; pH = ½(pKa – log Ca)"],formules:["Ka = [A-][H3O+]/[AH]","pH acide fort = -log Ca","pH base forte = 14 + log Cb","pKa + pKb = pKe = 14"],rappels:["Demi-neutralisation : pH = pKa"]}},
  {id:"pc-f9",title:"Acides et bases II",bloc:"Chimie générale",tags:["tampon","Henderson","polyprotiques","isoélectrique"],duree:"35 min",niveau:"Avancé",qbank:"QB_PC_ACIDES_BASES_2",contenu:{resume:"Équation de Henderson-Hasselbalch, solutions tampons, point d'équivalence, acides polyprotiques, pH isoélectrique.",points:["Henderson-Hasselbalch : pH = pKa + log([A-]/[AH])","Solution tampon : résiste aux changements de pH","Capacité tampon maximale : [A-] = [AH] → pH = pKa","Acide polyprotique : Ka1 >> Ka2 >> Ka3","Point d'équivalence : pH calculé par hydrolyse","pH isoélectrique pI = (pKa1 + pKa2)/2 pour acides aminés"],formules:["pH = pKa + log([A-]/[AH])","pI = (pKa_COOH + pKa_NH3+) / 2"],rappels:["Tampon acide acétique/acétate : pH ≈ 4,75 ± 1"]}},
  {id:"pc-f10",title:"Conductimétrie",bloc:"Chimie générale",tags:["conductance","conductimétrie","Kohlrausch","dosage"],duree:"30 min",niveau:"Intermédiaire",qbank:"QB_PC_CONDUCTIVITE",contenu:{resume:"Conductance G et résistance R, conductivité σ, conductivité molaire Λm, loi de Kohlrausch, dosages conductimetriques.",points:["G = 1/R (siemens, S) ; conductivité σ = G×l/S (S/m)","Conductivité molaire Λm = σ/C","Loi de Kohlrausch (solutions diluées) : Λm = Λm° – k√C","Λm° = Σ λ°ions (additivité de Kohlrausch)","Mécanisme de Grotthuss pour H3O+ et OH- (mobilité exceptionnelle)","Courbe conductimétrique : V_équivalence au minimum ou changement de pente"],formules:["σ = Σ λi ci zi","Λm = σ / C","Loi de Kohlrausch : Λm = Λm° – k√C"],rappels:["Eau pure : σ ≈ 5,5×10-6 S/m à 25°C"]}},
  {id:"pc-f11",title:"Précipitation",bloc:"Chimie générale",tags:["Ks","précipitation","solubilité","Mohr"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_PRECIPITATION",contenu:{resume:"Produit de solubilité Ks, calcul de la solubilité, effets sur la dissolution, titrages par précipitation.",points:["Ks = [cation]^a × [anion]^b (à l'équilibre de dissolution)","Précipitation si Q > Ks","Solubilité s : s = (Ks)^(1/(a+b)) pour sel Ma Xb","Effet d'ion commun : diminue la solubilité","Méthode de Mohr (Ag+/Cl- avec indicateur CrO4²-)","Méthode de Volhard (Ag+ puis SCN-, indicateur Fe³+)"],formules:["s(AgCl) = √Ks","s(CaF2) = (Ks/4)^(1/3)","pH de précipitation : [OH-] = (Ks/[M^n+])^(1/n)"],rappels:["Ks(AgCl) = 1,8×10-10 ; Ks(BaSO4) = 1,1×10-10"]}},
  {id:"pc-f12",title:"Complexation",bloc:"Chimie générale",tags:["EDTA","complexe","chélate","dosage"],duree:"30 min",niveau:"Intermédiaire",qbank:"QB_PC_COMPLEXATION",contenu:{resume:"Définition des complexes, ligands, constante de stabilité βn, EDTA, dosages complexometriques.",points:["Complexe = métal central + ligands (donneurs de doublets)","Nombre de coordination = nombre de liaisons métal-ligand","Ligand monodentate, bidentate... hexadentate (EDTA)","Constante de stabilité βn = [MLn] / ([M][L]^n)","Effet chélate : complexes polydentates plus stables","EDTA dose Ca²+ et Mg²+ à pH 10 avec indicateur NET"],formules:["Kf = βn = [MLn] / ([M][L]^n)","log β(Ca-EDTA) ≈ 10,7"],rappels:["Indicateur NET (eriochrome T) : rose avec Ca/Mg, bleu seul"]}},
  {id:"pc-f13",title:"Oxydoréduction",bloc:"Chimie générale",tags:["redox","Nernst","électrochimie","pile"],duree:"40 min",niveau:"Avancé",qbank:"QB_PC_OXYDOREDUC",contenu:{resume:"Nombres d'oxydation, demi-réactions, loi de Nernst, piles électrochimiques, constante d'équilibre redox.",points:["Oxydant : accepteur d'électrons ; réducteur : donneur d'électrons","Couple Ox/Red : Ox + ne- ⇌ Red","Bilan redox : ajuster électrons transférés","E = E° + (RT/nF)×ln([Ox]/[Red]) = E° + 0,06/n × log([Ox]/[Red]) à 25°C","FEM = E_cathode – E_anode","Relation K et ΔG° : ΔG° = –nFE° = –RT ln K"],formules:["E = E° + (0,059/n) log([Ox]/[Red])","ΔG° = -nFE°","log K = nE°/0,059"],rappels:["E°(O2/H2O) = +1,23 V ; E°(H+/H2) = 0,00 V (référence)"]}},
  {id:"pc-f14",title:"Cinétique chimique",bloc:"Chimie générale",tags:["cinétique","ordre","Arrhenius","demi-vie"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_CINETIQUE",contenu:{resume:"Loi de vitesse, ordres de réaction, demi-vie, équation d'Arrhenius, catalyse.",points:["Vitesse v = k[A]^m[B]^n ; ordre global = m+n","Ordre 1 : v = k[A] ; t1/2 = ln2/k (indépendant de C)","Ordre 0 : v = k ; t1/2 = [A]0/(2k)","Ordre 2 : v = k[A]² ; t1/2 = 1/(k[A]0)","Arrhenius : k = A×exp(−Ea/RT) ; ln k = ln A – Ea/RT","Catalyseur : abaisse Ea, ne déplace pas l'équilibre"],formules:["t1/2 (ordre 1) = ln2/k ≈ 0,693/k","ln(k2/k1) = Ea/R × (1/T1 – 1/T2)","[A] = [A]0 × e^(-kt) (ordre 1)"],rappels:["Règle des 10° : k double tous les 10°C ≈ facteur Q10=2"]}},
  {id:"pc-f15",title:"Ondes électromagnétiques",bloc:"Physique",tags:["ondes","EM","lumière","spectre"],duree:"25 min",niveau:"Débutant",qbank:"QB_PC_ONDES_EM",contenu:{resume:"Spectre électromagnétique, relation c=λν, énergie des photons, applications biologiques.",points:["c = λ × ν (c = 3×10⁸ m/s dans le vide)","Énergie photon : E = hν = hc/λ (h = 6,63×10-34 J·s)","Spectre (λ croissante) : γ, X, UV, visible (400-780 nm), IR, micro-ondes, radio","UV-A (315-400 nm), UV-B (280-315 nm), UV-C (<280 nm, germicide)","Visible : violet (400) < bleu < vert < jaune < orange < rouge (780 nm)"],formules:["E = hν = hc/λ","c = λν (λ en m, ν en Hz)","Nombre d'onde : σ̃ = 1/λ (cm-1)"],rappels:["UV-C stérilisant car absorbé par l'ADN (bases aromatiques) à ~260 nm"]}},
  {id:"pc-f16",title:"Spectrométrie d'absorption moléculaire",bloc:"Physique",tags:["Beer-Lambert","absorbance","spectrophotométrie","fluorescence"],duree:"30 min",niveau:"Intermédiaire",qbank:"QB_PC_SPECTROMETRIE",contenu:{resume:"Loi de Beer-Lambert, absorbance A, transmittance T, longueur d'onde optimale, fluorescence.",points:["A = ε × l × c (A = log(I0/I) = -log T)","ε : coefficient d'extinction molaire (L·mol-1·cm-1)","Additivité de Beer-Lambert : A_totale = Σ Ai","λmax : longueur d'onde d'absorbance maximale → meilleure sensibilité","Fluorescence : absorption hν → émission hν' (Stokes, λemission > λabsorption)","A260/A280 pour la pureté ADN (ratio pur ≈ 1,8)"],formules:["A = εlc","T = I/I0 ; A = -log T","A260/A280 ADN pur ≈ 1,8 ; ARN ≈ 2,0"],rappels:["Mesurer à λmax ; préparer blanc (eau ou solvant) pour zéro l'absorbance"]}},
  {id:"pc-f17",title:"Optique géométrique",bloc:"Physique",tags:["réfraction","lentilles","microscopie","optique"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_OPTIQUE",contenu:{resume:"Lois de Descartes, réfraction, lentilles convergentes, microscope optique, résolution.",points:["Snell-Descartes : n1 sin θ1 = n2 sin θ2","Réflexion totale interne : sin θc = n2/n1 (n1 > n2)","Vergence V = 1/f' (dioptries) ; 1/OA' – 1/OA = 1/f'","Grossissement commercial : G = –OA'/OA","Limite de résolution Rayleigh : d = 0,61λ/ON (ON = n×sin α)","Immersion à l'huile : ON jusqu'à 1,4 ; résolution ~0,2 µm","Grossissement total microscope = Gobj × Goculaire"],formules:["n1 sin θ1 = n2 sin θ2","d = 0,61λ/ON","1/OA' - 1/OA = 1/f'","G_total = G_obj × G_oculaire"],rappels:["Contraste de phase, fond noir, TIRF : techniques sans fluorescence pour visualiser structures vivantes"]}},
  {id:"pc-f18",title:"Structure et nomenclature des molécules organiques",bloc:"Chimie organique",tags:["nomenclature","formule","hybridation","isomérie"],duree:"30 min",niveau:"Débutant",qbank:"QB_PC_ORGA_STRUCTURE",contenu:{resume:"Règles de nomenclature IUPAC, hybridations sp/sp2/sp3, isomérie de constitution.",points:["Chaîne principale = chaîne la plus longue contenant le groupe fonctionnel prioritaire","Numérotation : position la plus basse pour les substituants","Hybridation sp3 : tétraédrique 109,5° ; sp2 : trigonal plan 120° ; sp : linéaire 180°","Isomérie de constitution : même formule brute, enchaînements différents","Groupes fonctionnels par priorité : COOH > COO- > CHO > C=O > OH > NH2"],formules:["CnH2n+2 alcanes ; CnH2n alcènes/cycloalcanes ; CnH2n-2 alcynes","Insaturation = (2C + 2 + N – H – X) / 2"],rappels:["Suffixe -ane (alcane), -ène (alcène), -yne (alcyne), -ol (alcool), -al (aldéhyde), -one (cétone), -oïque (acide)"]}},
  {id:"pc-f19",title:"Stéréochimie",bloc:"Chimie organique",tags:["chiralité","énantiomères","diastéréoisomères","R/S","E/Z"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_ORGA_STEREO",contenu:{resume:"Chiralité, carbone asymétrique, configurations R/S et E/Z, énantiomères, diastéréoisomères, composés méso.",points:["Carbone asymétrique C* : 4 substituants différents","Configuration absolue R/S : règles CIP (priorité par numéro atomique)","Énantiomères : images miroir non superposables → même propriétés physiques sauf activité optique","Diastéréoisomères : propriétés physiques différentes","E/Z (géométrie alcènes) : E si groupes prioritaires opposés","Mélange racémique : 50/50, [α] = 0","Composé méso : plan de symétrie, achiral malgré C*"],formules:["[α] = α / (c × l) (polarimétrie)","Nombre max stéréoisomères = 2^n (n = nb C*)"],rappels:["Règle CIP : H priorité 1 (la plus basse) ; on tourne dans le sens de 1→2→3"]}},
  {id:"pc-f20",title:"Effets électroniques",bloc:"Chimie organique",tags:["inductif","mésomère","résonance","acidité","basicité"],duree:"30 min",niveau:"Avancé",qbank:"QB_PC_ORGA_EFFETS_ELEC",contenu:{resume:"Effets inductif (+I/-I) et mésomère (+M/-M), stabilisation des intermédiaires, acidité et basicité.",points:["Effet inductif (-I) : attracteurs (halogens, OH, NO2) ; (+I) : alkyles","Effet mésomère (-M) : attracteurs conjugués (C=O, NO2) ; (+M) : donneurs O, N","Carbocation stabilisé par +I, +M (3° > 2° > 1° > méthyle)","Carbanion stabilisé par -I, -M","Plus la base conjuguée est stable, plus l'acide est fort","NH2 : +M fort → aniline moins basique que alkylamine"],formules:["pKa(CH3COOH) = 4,75 ; pKa(CCl3COOH) = 0,7","pKa(PhOH) = 10 ; pKa(EtOH) = 16"],rappels:["Pour acidité : analyser la stabilité de l'anion ; pour basicité : disponibilité du doublet"]}},
  {id:"pc-f21",title:"Alcools et phénols",bloc:"Chimie organique",tags:["alcools","oxydation","élimination","ester","phénol"],duree:"30 min",niveau:"Intermédiaire",qbank:"QB_PC_ORGA_ALCOOLS",contenu:{resume:"Réactivité des alcools : oxydation, élimination, estérification ; propriétés des phénols.",points:["Alcool 1° → aldéhyde (ménagé) → acide carboxylique (excès oxydant)","Alcool 2° → cétone","Alcool 3° : résistant à l'oxydation douce","Déshydratation intramol. → alcène (Zaitsev) ; intermol. → éther","Estérification (lente, réversible) : ROH + R'COOH → R'COOR + H2O","Phénol : pKa ≈ 10 (acidité ↑ par résonance), réagit avec NaOH"],formules:["CrO3/H2SO4 (Jones) : 1° → COOH ; 2° → cétone","KMnO4/NaOH chaud : clive diol"],rappels:["PCC (pyridinium chlorochromate) : arrêt à l'aldéhyde pour alcool primaire"]}},
  {id:"pc-f22",title:"Aldéhydes et cétones",bloc:"Chimie organique",tags:["carbonyle","addition nucléophile","Grignard","réduction","Fehling"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_ORGA_CARBONYLES",contenu:{resume:"Réactivité du groupe carbonyle : addition nucléophile, Grignard, réductions, condensations, tautomérie.",points:["Addition nucléophile sur C=O : Nu- attaque le C δ+","Grignard sur aldéhyde → alcool secondaire ; sur cétone → alcool tertiaire","NaBH4 réduit aldéhydes et cétones en alcools (sélectif)","Test Fehling (Cu2+) : positif avec aldéhydes seulement","Test 2,4-DNPH : positif avec aldéhydes ET cétones (précipité jaune)","Tautomérie céto-énolique ; condensation aldolique (énolate + carbonyle)"],formules:["Test Tollens : Ag+ → Ag° (miroir d'argent) avec aldéhydes","Condensation aldolique : β-hydroxycarbonyle → α,β-insaturé"],rappels:["RCOH (aldéhyde) vs R2CO (cétone) : distinguer par Fehling/Tollens"]}},
  {id:"pc-f23",title:"Dérivés d'acides carboxyliques",bloc:"Chimie organique",tags:["ester","amide","acide carboxylique","estérification","saponification"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_ORGA_DERIVES_ACIDES",contenu:{resume:"Réactivité des dérivés d'acides : esters, amides, anhydrides, chlorures d'acyle ; estérification, saponification.",points:["Ordre réactivité : chlorure d'acyle > anhydride > ester > amide","Estérification : lente, réversible, Keq ≈ 1-10 (catalyse H+)","Saponification : totale, irréversible (NaOH)","Amide : résonance N→CO rend hydolyse difficile","Liaison peptidique = amide entre acides aminés","Anhydride acétique : agent d'acétylation (-OH → acétate, -NH2 → acétamide)"],formules:["Boc-NH → NH2 (TFA) ; Fmoc-NH → NH2 (pipéridine) en synthèse peptidique","Keq(estérification) = [ester][eau] / [alcool][acide]"],rappels:["Aspirine = ester acétylsalicylique ; hydrolysée par la muqueuse gastrique"]}},
  {id:"pc-f24",title:"Spectroscopie des molécules organiques",bloc:"Chimie organique",tags:["IR","RMN","spectrométrie de masse","analyse structurale"],duree:"40 min",niveau:"Avancé",qbank:"QB_PC_ORGA_SPECTRO",contenu:{resume:"IR (groupes fonctionnels), RMN 1H et 13C (déplacements chimiques, couplage), spectrométrie de masse (fragmentation).",points:["IR C=O : ester ~1735, cétone ~1715, acide ~1710, amide ~1680 cm-1","IR O-H acide carboxylique : large bande 2500-3300 cm-1","RMN 1H : ArH 6-8 ppm ; CHO ~9-10 ppm ; COOH ~10-12 ppm","Règle n+1 : n voisins → multiplet n+1 raies","SM : M+ (ion moléculaire) ; pertes de masse caractéristiques (15=CH3, 28=CO, 29=CHO)","Indice d'insaturation = (2C+2+N-H-X)/2"],formules:["A = εlc (Beer-Lambert)","Déplacement chimique δ (ppm) = (νsignal – νTMS)/νspectrometrie × 10^6"],rappels:["Haute résolution MS : formule brute exacte par mesure précise de la masse"]}},
  {id:"pc-f25",title:"Alcènes et alcanes – réactivité",bloc:"Chimie organique",tags:["alcènes","addition","élimination","Markovnikov","Zaitsev"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_ORGA_ALCANES_ALCENES",contenu:{resume:"Réactions des alcanes (substitution radicalaire) et des alcènes (additions électrophiles, syn/anti, oxydations).",points:["Alcanes : bromation/chloration radicalaire (UV ou Δ) ; sélectivité Br > Cl","Alcènes : addition électrophile de HX selon Markovnikov","Addition de Br2 : anti via ion bromonium → trans-dibromure","Hydratation (H2SO4/H2O) : alcool selon Markovnikov","Hydroboration : addition syn anti-Markovnikov","Ozonolyse : clive C=C en 2 carbonyls","Dihydroxylation syn (KMnO4 froid ou OsO4) / anti (ouverture époxyde)"],formules:["Zaitsev : alcène le plus substitué lors d'élimination E2","Markovnikov : H sur C qui porte le plus de H (ou qui forme C+ le plus stable)"],rappels:["Regel de Baldwin pour les cyclisations : endo/exo, tet/trig/dig"]}},
  {id:"pc-f26",title:"Composés aromatiques",bloc:"Chimie organique",tags:["aromaticité","Hückel","SEAr","orientation","benzène"],duree:"35 min",niveau:"Intermédiaire",qbank:"QB_PC_ORGA_AROMATIQUES",contenu:{resume:"Aromaticité (règle de Hückel), substitution électrophile aromatique (SEAr), orientation des substituants.",points:["Hückel : 4n+2 électrons π pour aromaticité (benzène 6e-, naphtalène 10e-)","SEAr : halogénation (AlX3), nitration (HNO3/H2SO4), sulfonation, Friedel-Crafts alkylation/acylation","Groupes activants ortho/para (+M) : OH, OR, NR2, alkyles","Groupes désactivants méta (-M, -I) : NO2, COOH, CHO, CF3","Phénol pKa ≈ 10 (vs éthanol 16) ; aniline base faible (résonance N→cycle)","Oxydation de la chaîne alkyle : KMnO4 chaud → acide benzoïque"],formules:["Règle de Hückel : 4n+2 e- π (n = 0, 1, 2...)","pKa PhOH = 10 ; pKb aniline ≈ 9,4"],rappels:["Ortho/para si le substituant présent est donneur ; méta si attracteur"]}},
];

export const QUIZ_THEMES_PC = [
  {id:"qt-pc-structure-atome",title:"Structure de l'atome",tags:["atome","orbitales"],bank:QB_PC_STRUCTURE_ATOME,ficheId:"pc-f1",color:"#C57AFF"},
  {id:"qt-pc-edifices-cov",title:"Édifices covalents",tags:["Lewis","VSEPR"],bank:QB_PC_EDIFICES_COVALENTS,ficheId:"pc-f2",color:"#5EB5FF"},
  {id:"qt-pc-forces-intermo",title:"Forces intermoléculaires",tags:["liaison H","van der Waals"],bank:QB_PC_FORCES_INTERMO,ficheId:"pc-f3",color:"#4AEAAC"},
  {id:"qt-pc-prep-solutions",title:"Préparation des solutions",tags:["concentration","dilution"],bank:QB_PC_PREP_SOLUTIONS,ficheId:"pc-f4",color:"#FFB259"},
  {id:"qt-pc-avancement",title:"Avancement et stœchiométrie",tags:["avancement","réactif limitant"],bank:QB_PC_AVANCEMENT,ficheId:"pc-f5",color:"#FF6370"},
  {id:"qt-pc-equilibres",title:"Équilibres chimiques",tags:["Kc","Le Chatelier"],bank:QB_PC_EQUILIBRES,ficheId:"pc-f6",color:"#F0E547"},
  {id:"qt-pc-thermochimie",title:"Thermochimie",tags:["enthalpie","Hess"],bank:QB_PC_THERMOCHIMIE,ficheId:"pc-f7",color:"#FF5DA0"},
  {id:"qt-pc-acides-bases-1",title:"Acides et bases I",tags:["pH","pKa"],bank:QB_PC_ACIDES_BASES_1,ficheId:"pc-f8",color:"#C57AFF"},
  {id:"qt-pc-acides-bases-2",title:"Acides et bases II",tags:["tampon","Henderson"],bank:QB_PC_ACIDES_BASES_2,ficheId:"pc-f9",color:"#5EB5FF"},
  {id:"qt-pc-conductivite",title:"Conductimétrie",tags:["conductance","Kohlrausch"],bank:QB_PC_CONDUCTIVITE,ficheId:"pc-f10",color:"#4AEAAC"},
  {id:"qt-pc-precipitation",title:"Précipitation",tags:["Ks","solubilité"],bank:QB_PC_PRECIPITATION,ficheId:"pc-f11",color:"#FFB259"},
  {id:"qt-pc-complexation",title:"Complexation",tags:["EDTA","chélate"],bank:QB_PC_COMPLEXATION,ficheId:"pc-f12",color:"#FF6370"},
  {id:"qt-pc-oxydoreduc",title:"Oxydoréduction",tags:["Nernst","électrochimie"],bank:QB_PC_OXYDOREDUC,ficheId:"pc-f13",color:"#F0E547"},
  {id:"qt-pc-cinetique",title:"Cinétique chimique",tags:["ordre","Arrhenius"],bank:QB_PC_CINETIQUE,ficheId:"pc-f14",color:"#FF5DA0"},
  {id:"qt-pc-ondes-em",title:"Ondes électromagnétiques",tags:["spectre EM","UV","IR"],bank:QB_PC_ONDES_EM,ficheId:"pc-f15",color:"#C57AFF"},
  {id:"qt-pc-spectrometrie",title:"Spectrométrie d'absorption",tags:["Beer-Lambert","fluorescence"],bank:QB_PC_SPECTROMETRIE,ficheId:"pc-f16",color:"#5EB5FF"},
  {id:"qt-pc-optique",title:"Optique géométrique",tags:["réfraction","microscopie"],bank:QB_PC_OPTIQUE,ficheId:"pc-f17",color:"#4AEAAC"},
  {id:"qt-pc-orga-structure",title:"Structure org. et nomenclature",tags:["nomenclature","hybridation"],bank:QB_PC_ORGA_STRUCTURE,ficheId:"pc-f18",color:"#FFB259"},
  {id:"qt-pc-orga-stereo",title:"Stéréochimie",tags:["chiralité","R/S","E/Z"],bank:QB_PC_ORGA_STEREO,ficheId:"pc-f19",color:"#FF6370"},
  {id:"qt-pc-orga-effets",title:"Effets électroniques",tags:["inductif","mésomère"],bank:QB_PC_ORGA_EFFETS_ELEC,ficheId:"pc-f20",color:"#F0E547"},
  {id:"qt-pc-orga-alcools",title:"Alcools et phénols",tags:["alcools","oxydation","estérification"],bank:QB_PC_ORGA_ALCOOLS,ficheId:"pc-f21",color:"#FF5DA0"},
  {id:"qt-pc-orga-carbonyles",title:"Aldéhydes et cétones",tags:["carbonyle","Grignard","Fehling"],bank:QB_PC_ORGA_CARBONYLES,ficheId:"pc-f22",color:"#C57AFF"},
  {id:"qt-pc-orga-derives",title:"Dérivés d'acides carboxyliques",tags:["ester","amide","saponification"],bank:QB_PC_ORGA_DERIVES_ACIDES,ficheId:"pc-f23",color:"#5EB5FF"},
  {id:"qt-pc-orga-spectro",title:"Spectroscopie organique",tags:["IR","RMN","SM"],bank:QB_PC_ORGA_SPECTRO,ficheId:"pc-f24",color:"#4AEAAC"},
  {id:"qt-pc-orga-alcanes",title:"Alcènes et alcanes",tags:["Markovnikov","addition","radical"],bank:QB_PC_ORGA_ALCANES_ALCENES,ficheId:"pc-f25",color:"#FFB259"},
  {id:"qt-pc-orga-aromatiques",title:"Composés aromatiques",tags:["aromaticité","SEAr","Hückel"],bank:QB_PC_ORGA_AROMATIQUES,ficheId:"pc-f26",color:"#FF6370"},
];
