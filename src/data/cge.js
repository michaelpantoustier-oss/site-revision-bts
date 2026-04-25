// ─── CGE 2027 — Culture Générale et Expression ───
// Thème : Le vrai du faux
// Arrêté officiel 2027

// ─── BANQUES DE QUESTIONS ───

export const QB_CGE_CONCEPTS = [
  {id:"cge_c1",prompt:"« La Guerre du faux » est une œuvre de :",choices:["Roland Barthes","Jean Baudrillard","Umberto Eco","Jacques Derrida"],answer:2,diff:1,explication:"Umberto Eco, sémiologue italien, publie La Guerre du faux (1985). Dès les années 1970 il décrit l'hyperréalité américaine : villes factices, musées de cire — directement cité dans la problématique officielle du thème.",tags:["Umberto Eco","Hyperréalité","Référence"]},
  {id:"cge_c2",prompt:"La notion de « post-vérité » désigne :",choices:["La vérité découverte après les faits","Un contexte où l'émotion et la croyance personnelle priment sur les faits objectifs","La vérité produite par l'IA","Un euphémisme pour désigner le mensonge poli"],answer:1,diff:1,explication:"Post-truth : mot de l'année du dictionnaire Oxford (2016). Contexte politique où les appels à l'émotion ont plus d'influence que les faits objectifs. Époque inaugurée par les réseaux sociaux et les IA génératives.",tags:["Post-vérité","Désinformation"]},
  {id:"cge_c3",prompt:"Qui a forgé l'expression « mentir-vrai » pour qualifier l'art romanesque ?",choices:["André Malraux","Louis Aragon","Albert Camus","Samuel Taylor Coleridge"],answer:1,diff:1,explication:"Louis Aragon intitule un recueil de nouvelles Le Mentir-vrai (1980). L'art du roman ment (invente) pour révéler une vérité que le discours factuel ne peut atteindre. Formule fondatrice du thème.",tags:["Aragon","Mentir-vrai","Fiction"]},
  {id:"cge_c4",prompt:"La « suspension volontaire de l'incrédulité » (Coleridge, 1817) désigne :",choices:["L'incapacité à distinguer fiction et réalité","L'acceptation consciente et choisie par le lecteur/spectateur de croire à la fiction","L'aveuglement du crédule face à la propagande","Le refus catégorique de la réalité"],answer:1,diff:1,explication:"Dans Biographia Literaria (1817), Coleridge décrit le pacte de lecture : le lecteur averti sait que c'est faux mais choisit de jouer le jeu pour en tirer toute la valeur. Opposé aux oiseaux de Zeuxis qui sont vraiment dupés.",tags:["Coleridge","Fiction","Suspension de l'incrédulité"]},
  {id:"cge_c5",prompt:"Le concept de « mimésis » selon Aristote désigne :",choices:["Le mensonge poétique délibéré","L'imitation/représentation qui procure un plaisir esthétique spécifique","La propagande politique","La copie servile sans valeur propre"],answer:1,diff:2,explication:"Aristote (Poétique) : la mimésis est le principe fondamental de l'art comme représentation d'actions humaines. Elle procure un plaisir particulier, même lorsqu'elle représente des choses déplaisantes. La fiction n'est pas le mensonge.",tags:["Aristote","Mimésis","Esthétique"]},
  {id:"cge_c6",prompt:"Les IA génératives sont décrites dans la problématique comme fonctionnant selon une logique :",choices:["Déontologique et éthique","Probabiliste, sans garantie de véracité","Déductive et certaine","Empirique et expérimentale"],answer:1,diff:1,explication:"Les LLM génèrent du texte en prédisant statistiquement le mot suivant. Ils peuvent « halluciner » des faits faux avec la même assurance stylistique que des faits vrais. Enjeu majeur pour distinguer le vrai du faux.",tags:["IA générative","Post-vérité","Technologie"]},
  {id:"cge_c7",prompt:"L'expression « village Potemkine » désigne :",choices:["Un village russe authentique du XVIIIe siècle","Une façade trompeuse construite pour donner une fausse impression favorable","Un type d'architecture baroque","Un décor de théâtre classique"],answer:1,diff:1,explication:"Grigori Potemkine aurait fait construire des décors de villages prospères le long du Dniepr pour impressionner Catherine II (1787). L'expression désigne toute mise en scène destinée à masquer une réalité déplaisante.",tags:["Village Potemkine","Propagande","Mystification","Expressions"]},
  {id:"cge_c8",prompt:"« Déciller les yeux » signifie :",choices:["Faire cligner les yeux de quelqu'un","Révéler la vérité à quelqu'un qui refusait de la voir — lever le voile de l'illusion","Regarder un spectacle attentivement","Fermer les yeux sur la réalité"],answer:1,diff:1,explication:"Déciller (ou dessiller) : étymologiquement, ôter les cils qui collent les paupières. Métaphore : faire voir la vérité à quelqu'un enfermé dans l'illusion ou le mensonge.",tags:["Expressions","Vérité","Discernement"]},
  {id:"cge_c9",prompt:"L'art baroque est associé dans la problématique à :",choices:["La simplicité et la clarté formelle","Les valeurs et vertiges de l'illusion","Le naturalisme rigoureux","Le refus catégorique de toute fiction"],answer:1,diff:2,explication:"La problématique mentionne que « l'art baroque a su jouer de toutes les valeurs et de tous les vertiges de l'illusion » — trompe-l'œil architecturaux, theatrum mundi, miroirs et mise en abyme sont caractéristiques du baroque.",tags:["Baroque","Illusion","Art","Trompe-l'œil"]},
  {id:"cge_c10",prompt:"Walter Benjamin introduit le concept d'« aura » pour désigner :",choices:["La couleur dorée des œuvres baroques","La qualité de présence unique de l'original — son « ici et maintenant »","La réputation commerciale d'un artiste","La technique de dorure des enluminures médiévales"],answer:1,diff:2,explication:"Benjamin (L'Œuvre d'art à l'époque de sa reproductibilité technique, 1935) : l'aura est l'authenticité, la présence unique de l'original. La reproduction technique (photo, film) détruit l'aura mais démocratise l'art. La copie n'a pas d'aura.",tags:["Benjamin","Aura","Reproductibilité","Authenticité"]},
];

export const QB_CGE_OEUVRES = [
  {id:"cge_o1",prompt:"Dans l'anecdote rapportée par Pline l'Ancien, pourquoi Zeuxis était-il insatisfait malgré ses raisins trompeurs ?",choices:["Les raisins n'étaient pas assez ressemblants","L'enfant peint n'était pas assez convaincant — les oiseaux auraient dû le fuir","Son concurrent l'avait battu sur tous les points","Les couleurs s'étaient dégradées"],answer:1,diff:1,explication:"Les oiseaux picoraient les raisins peints, preuve de leur réalisme. Mais Zeuxis se désole : si l'enfant représenté avait été aussi réussi, les oiseaux l'auraient craint et fui. L'illusion parfaite reste hors de portée.",tags:["Zeuxis","Mimésis","Illusion","Pline l'Ancien"]},
  {id:"cge_o2",prompt:"The Truman Show de Peter Weir illustre principalement :",choices:["La technique du trompe-l'œil baroque","L'hyperréalité : un homme vit dans un monde entièrement fabriqué sans le savoir","La propagande des régimes totalitaires","Le plagiat littéraire"],answer:1,diff:1,explication:"Truman Burbank ignore qu'il est la star d'une émission télévisée permanente. Sa ville Seahaven est entièrement artificielle — illustration directe de l'hyperréalité d'Eco. Cité explicitement dans la problématique officielle.",tags:["Truman Show","Hyperréalité","Peter Weir"]},
  {id:"cge_o3",prompt:"« Vérités et mensonges » (F for Fakes, 1973) est réalisé par :",choices:["Federico Fellini","Jean-Luc Godard","Orson Welles","Chris Marker"],answer:2,diff:2,explication:"F for Fakes (1973) : Welles explore le monde des faussaires (Elmyr de Hory, Clifford Irving). Lui-même auteur d'un célèbre canular (La Guerre des mondes, 1938), il questionne la frontière entre vérité et fiction.",tags:["Orson Welles","Faussaires","Cinéma","F for Fakes"]},
  {id:"cge_o4",prompt:"Rashōmon de Kurosawa illustre :",choices:["La propagande d'État","La relativité de la vérité : 4 témoins donnent 4 versions incompatibles d'un même meurtre","L'impossibilité totale de toute vérité","Le trompe-l'œil visuel"],answer:1,diff:1,explication:"Rashōmon (1950) : un meurtre raconté par 4 témoins aux versions incompatibles. La vérité absolue reste inaccessible — chacun déforme les faits selon ses intérêts. Film fondateur sur la subjectivité du témoignage.",tags:["Kurosawa","Rashōmon","Vérité","Témoignage"]},
  {id:"cge_o5",prompt:"Dans « 1984 » de George Orwell, le « Ministère de la Vérité » a pour fonction de :",choices:["Protéger la liberté de la presse","Réécrire l'histoire pour qu'elle corresponde à la ligne du Parti","Former les journalistes à la déontologie","Archiver les vraies nouvelles pour la postérité"],answer:1,diff:1,explication:"Ironie orwellienne : le Ministère de la Vérité (Miniver) est chargé de falsifier l'histoire. Winston Smith y efface les articles compromettants. « La guerre c'est la paix, la liberté c'est l'esclavage. »",tags:["Orwell","1984","Propagande","Totalitarisme"]},
  {id:"cge_o6",prompt:"« Ceci n'est pas une pipe » de Magritte illustre :",choices:["La critique de la société de consommation","L'écart entre la représentation et la réalité : le signe n'est pas la chose","L'impossibilité physique de peindre","Le dadaïsme anti-artistique"],answer:1,diff:1,explication:"La Trahison des images (1929) : on ne peut pas bourrer de tabac un dessin. Magritte distingue la réalité (une vraie pipe) de sa représentation peinte. Fondamental pour comprendre le rapport image/réel.",tags:["Magritte","Représentation","Surréalisme","Image"]},
  {id:"cge_o7",prompt:"Dans « Les Faux-monnayeurs » de Gide, la fausse monnaie symbolise :",choices:["Un simple élément policier du roman","L'inauthenticité et les faux semblants dans les relations humaines","Un hommage à Balzac","Un macguffin sans portée symbolique"],answer:1,diff:2,explication:"Gide (1925) : les pièces en chocolat enrobées d'or symbolisent les valeurs creuses, les identités fabriquées, les mensonges que se racontent les personnages sur eux-mêmes et les autres.",tags:["Gide","Faux-monnayeurs","Fiction","Métaphore"]},
  {id:"cge_o8",prompt:"Inception de Christopher Nolan illustre :",choices:["La propagande politique moderne","Des rêves emboîtés où la frontière entre réalité et fiction devient indiscernable","La vie rurale paisible","Le naturalisme du XIXe siècle"],answer:1,diff:1,explication:"Inception (2010) : des niveaux de rêves emboîtés créent un vertige ontologique — quel niveau est la réalité ? La toupie finale de Cobb reste le symbole parfait de l'indécidabilité du réel.",tags:["Nolan","Inception","Rêve","Réalité"]},
  {id:"cge_o9",prompt:"« Le roi est nu » renvoie à :",choices:["Un ballet baroque","La révélation d'une vérité que tous faisaient semblant de ne pas voir (conte d'Andersen)","Un tableau de Vélasquez","Une pièce de Pirandello"],answer:1,diff:1,explication:"Dans le conte d'Andersen (Les Habits neufs de l'Empereur), seul un enfant dit la vérité que tous refusent de voir. « Le roi est nu » désigne la révélation soudaine d'une réalité que le groupe social niait collectivement.",tags:["Expressions","Andersen","Vérité","Société"]},
  {id:"cge_o10",prompt:"L'Illusion comique de Corneille illustre le thème par :",choices:["La propagande amoureuse","Le théâtre dans le théâtre : des niveaux d'illusion emboîtés qui brouillent le réel et le fictif","Un trompe-l'œil pictural","La critique de la monarchie"],answer:1,diff:2,explication:"L'Illusion comique (1636) : Pridamant croit voir son fils en chair et en os — il assiste en réalité à une pièce de théâtre jouée par des acteurs. Corneille met en abyme le fictif et fait du théâtre une réflexion sur lui-même.",tags:["Corneille","L'Illusion comique","Théâtre","Mise en abyme"]},
];

// ─── FICHES ───

const FICHES_CGE = [
  {id:"cge_f1",title:"Désinformation et post-vérité",bloc:"CGE 2027",tags:["post-vérité","infox","propagande","IA","deepfake"],duree:20,niveau:"Base",qbank:null,
    contenu:`## Ère numérique et crise de la vérité

### Définitions fondamentales
**Post-vérité :** Contexte où l'émotion et la croyance personnelle priment sur les faits objectifs (Oxford Dictionary, mot de l'année 2016)
**Infox (fake news) :** Fausse information délibérément diffusée pour induire en erreur
**Désinformation :** Diffusion intentionnelle d'informations fausses à des fins politiques ou commerciales
**Deepfake :** Vidéo synthétique générée par IA — impossible à distinguer à l'œil nu d'une vidéo réelle

### Mécanismes de propagation
① L'algorithme des réseaux sociaux amplifie ce qui génère de l'émotion forte
② La chambre d'écho : on lit ce qui confirme nos croyances existantes
③ L'effet de vérité illusoire : la répétition suffit à faire passer pour vrai

### Intelligence artificielle et véracité
• Les LLM (GPT, Claude…) fonctionnent selon une logique **probabiliste** (prédiction du mot suivant)
• Ils peuvent "halluciner" des faits faux avec la même assurance stylistique que des faits vrais
• Ils **ne peuvent pas garantir la véracité** — mentionné explicitement dans la problématique

### Repères historiques
| Événement | Date | Type de faux |
|-----------|------|-------------|
| Guerre des mondes — Orson Welles | 1938 | Canular radiophonique |
| Propagande nazie (Goebbels) | 1933–45 | Propagande d'État |
| Photo-montages staliniens | 1930s | Falsification photographique |
| Village Potemkine | 1787 | Mise en scène politique |
| Brexit & élection Trump | 2016 | Désinformation numérique massive |

### À retenir pour l'épreuve
→ La propagande ≠ information : intention dissimulée de persuader en orientant les faits
→ Le bourrage de crâne : répétition intensive d'un slogan pour forcer la conviction
→ Le contre-discours : la vérification des faits (fact-checking) comme remède`},

  {id:"cge_f2",title:"Fiction et réalité — le paradoxe du mentir-vrai",bloc:"CGE 2027",tags:["fiction","mentir-vrai","mimésis","Coleridge","Aragon"],duree:22,niveau:"Intermédiaire",qbank:"cge_concepts",
    contenu:`## Le fictif n'est pas le mensonge

### La mimésis selon Aristote (Poétique, IVe s. av. J.-C.)
• La mimésis = imitation / représentation d'actions humaines
• Elle procure un **plaisir spécifique** même si elle représente des choses déplaisantes
• L'art ne prétend pas être le réel — il l'imite pour mieux le comprendre
→ Distinction fondamentale : la fiction qui imite ≠ le mensonge qui trompe

### L'anecdote de Zeuxis (Pline l'Ancien, Histoire naturelle, livre XXXV)
**Raisins si réalistes que des oiseaux tentent de les picorer** — mais Zeuxis se désole :
→ Si l'enfant peint avait été aussi réussi, les oiseaux auraient eu peur et fui
→ L'illusion reste partielle : perfection de la représentation hors de portée
→ Cet échec révèle la distance irréductible entre art et réalité

### La suspension volontaire de l'incrédulité — Coleridge (1817)
**Biographia Literaria** : le lecteur/spectateur accepte **volontairement** de croire à la fiction
• Ce n'est pas être dupé : c'est un choix conscient
• Il "tirera tout le suc et toute la valeur" de l'œuvre
• Contrairement aux oiseaux de Zeuxis, il sait que c'est faux — et joue le jeu

### Le « mentir-vrai » — Aragon (1980)
**Le Mentir-vrai** : titre d'un recueil de nouvelles
• Le roman **invente** (ment) pour **révéler** (vrai)
• La fiction accède à des vérités que le discours factuel ne peut saisir
• "Représentant le monde, [la littérature] en divulgue la vérité" — problématique

### Fiction vs Mensonge
| | Fiction | Mensonge |
|---|---------|---------|
| But | Révéler, questionner | Tromper |
| Contrat | Pacte de lecture explicite | Intention dissimulée |
| Réception | Suspension volontaire de l'incrédulité | Crédulité exploitée |
| Exemple | Roman, théâtre, cinéma | Propagande, imposture |
| Effet | Catharsis, connaissance | Manipulation |

### Il y a un vrai du faux
→ "Le fictif n'est pas le mensonge : s'il invente, c'est pour dévoiler" (problématique)
→ La fiction révèle parfois une vérité plus profonde que les faits bruts`},

  {id:"cge_f3",title:"L'art de l'illusion — trompe-l'œil et baroque",bloc:"CGE 2027",tags:["trompe-l'œil","baroque","Magritte","Escher","illusion","Borromini"],duree:18,niveau:"Intermédiaire",qbank:null,
    contenu:`## Les vertiges de l'illusion artistique

### Le trompe-l'œil
**Définition :** Technique picturale créant l'illusion de relief ou de profondeur sur surface plane
**Enjeu paradoxal :** Le plaisir de se voir trompé — puis de découvrir la tromperie

**Exemples majeurs**
| Œuvre | Artiste | Date | Illusion créée |
|-------|---------|------|---------------|
| Galerie du Palazzo Spada | Borromini | 1652 | Couloir de 8m simulant 35m |
| Panneau retourné | Cornelis Gysbrechts | 1668–72 | On croit voir l'envers du tableau |
| Plafonds illusionnistes | Paul Véronèse | XVIe s. | Ciel ouvert sur la voûte |
| Lithographies impossibles | M.C. Escher | XXe s. | Escaliers infinis, cascade remontante |

### L'art baroque et le vertige de l'illusion
• Le baroque joue de toutes les "valeurs et vertiges de l'illusion" (problématique)
• Théâtre dans le théâtre : Corneille, L'Illusion comique (1636)
• Ambiguïté rêve/réalité : Calderón, La Vie est un songe (1635)
• Miroirs, reflets, mises en abyme — tout déstabilise la certitude du réel

### Magritte — la représentation remise en question
**La Trahison des images (1929) : "Ceci n'est pas une pipe"**
→ L'image d'une pipe n'est PAS une pipe — on ne peut pas bourrer de tabac un dessin
→ Le signe n'est pas la chose : distinction fondamentale représentation / réalité
→ Magritte révèle par le faux (l'image) une vérité philosophique sur le langage

### Escher — l'impossible rendu visible
• Escaliers infinis, cascades remontant à leur source
• Illusions fondées sur la géométrie — le cerveau cherche du sens dans l'impossible
• L'œil accepte ce que la raison refuse : vertige cognitif

### Questions clés pour analyser une œuvre d'illusion
① Quel type d'illusion crée-t-elle ? (optique, narrative, scénique…)
② À qui veut-elle faire croire quoi ?
③ Quand l'illusion se révèle-t-elle, que reste-t-il — quelle vérité apparaît ?`},

  {id:"cge_f4",title:"Faussaires, contrefaçon et authenticité",bloc:"CGE 2027",tags:["faussaire","contrefaçon","authenticité","Benjamin","aura","restauration"],duree:20,niveau:"Intermédiaire",qbank:null,
    contenu:`## Quand le faux imite ou remplace l'original

### Walter Benjamin — L'aura de l'original (1935)
**L'Œuvre d'art à l'époque de sa reproductibilité technique**
• **L'aura** : qualité de présence unique de l'original — son "ici et maintenant"
• La reproduction photographique / cinématographique **détruit l'aura**
• Mais elle **démocratise l'art** : un tableau peut être vu par des millions
→ Gain : diffusion / Perte : unicité, authenticité, irremplaçabilité

### Les faussaires célèbres
| Faussaire | Spécialité | Découverte |
|-----------|-----------|-----------|
| Han van Meegeren | Faux Vermeer | 1945 — avait vendu à Göring |
| Elmyr de Hory | Faux Picasso, Matisse | Film de Welles (F for Fakes, 1973) |
| Mark Landis | Faux dons à 50 musées américains | Jamais poursuivi (dons ≠ fraude) |
| Damien Hirst | Fausses antiquités (Unbelievable, 2017) | Canular artistique délibéré |

### Copie, hommage, contrefaçon, plagiat
| Type | Définition | Légalité |
|------|-----------|---------|
| Copie pédagogique | Reproduction autorisée, assumée | Légal |
| Pastiche / hommage | Imitation explicite et déclarée | Légal |
| Contrefaçon | Reproduction illicite destinée à tromper | Illégal |
| Plagiat | Appropriation non déclarée du travail d'autrui | Illégal |

### Authenticité et restauration
• Une restauration peut-elle être trop fidèle ? Quand devient-elle falsification ?
• **Viollet-le-Duc** reconstituait des monuments "tels qu'ils auraient dû être"
• La copie qui remplace un original disparu acquiert parfois sa propre valeur ("aura déléguée")
• Où s'arrête l'hommage, où commence la mystification ? (problématique)

### Simili, toc et contrefaçon de marque
→ Simili-cuir, bijoux en toc, fausse monnaie : "ressembler à s'y méprendre" (problématique)
→ Deux positions du consommateur : dupe involontaire (oiseaux de Zeuxis) OU complice consentant`},

  {id:"cge_f5",title:"Oeuvres clés — grille d'analyse pour l'épreuve",bloc:"CGE 2027",tags:["bibliographie","oeuvres","analyse","méthode"],duree:15,niveau:"Base",qbank:"cge_oeuvres",
    contenu:`## Oeuvres incontournables du thème

### Littérature
| Œuvre | Auteur | Angle « vrai du faux » |
|-------|--------|----------------------|
| 1984 | Orwell | Vérité réécrite par l'État (Ministère de la Vérité, novlangue) |
| La Ferme des animaux | Orwell | Propagande comme outil de domination politique |
| Les Faux-monnayeurs | Gide | Fausse monnaie = inauthenticité des relations humaines |
| L'Illusion comique | Corneille | Théâtre dans le théâtre — niveaux d'illusion emboîtés |
| Le Tartuffe | Molière | Hypocrisie religieuse comme mensonge social organisé |
| La Vie est un songe | Calderón | Réalité indistinguable du rêve — "Qu'est-ce que la vie ?" |
| L'Adversaire | Carrère | Jean-Claude Romand : le faux plus monstrueux que la fiction |
| Fictions | Borges | Textes-labyrinthes brouillant la frontière réel/fictif |
| Le Mentir-vrai | Aragon | La fiction invente pour révéler — formule fondatrice |

### Cinéma
| Film | Réalisateur | Angle « vrai du faux » |
|------|-------------|----------------------|
| The Truman Show (1998) | Peter Weir | Réalité entièrement fabriquée — cité dans la problématique |
| Rashōmon (1950) | Kurosawa | 4 versions contradictoires — vérité inaccessible |
| F for Fakes (1973) | Orson Welles | Documentaire sur les faussaires par un faussaire |
| Inception (2010) | Nolan | Rêves emboîtés — l'indécidabilité du réel |
| Wag the Dog (1997) | Levinson | Guerre fabriquée par les médias et Hollywood |
| Le Dictateur (1940) | Chaplin | L'imitation de Hitler comme arme comique contre le fascisme |

### Essais et arts plastiques
| Œuvre | Auteur | Concept clé |
|-------|--------|------------|
| La Guerre du faux (1985) | Umberto Eco | Hyperréalité, villes factices, simulacre |
| Reproductibilité technique (1935) | Walter Benjamin | Aura de l'original vs. copie |
| La Trahison des images (1929) | René Magritte | Le signe n'est pas la chose |
| Lithographies impossibles | M.C. Escher | Illusions géométriques — l'impossible rendu visible |
| Galerie Palazzo Spada | Borromini | Trompe-l'œil architectural (8m = 35m) |

### Formules à intégrer dans un devoir
→ "Le fictif n'est pas le mensonge : s'il invente, c'est pour dévoiler" (problématique officielle)
→ "Mentir-vrai" (Aragon) — la fiction révèle une vérité plus profonde que les faits
→ "Suspension volontaire de l'incrédulité" (Coleridge) — le lecteur averti choisit de croire
→ "L'aura de l'original" (Benjamin) — ce que la copie ne peut transmettre
→ "Post-vérité" — l'émotion prime sur les faits dans le débat public contemporain`},
];

// ─── QUIZ THEMES ───

const QUIZ_THEMES_CGE = [
  {id:"qt-cge-concepts",title:"Fondements théoriques — Vrai du faux",tags:["mimésis","Coleridge","Aragon","Benjamin","post-vérité","IA"],bank:QB_CGE_CONCEPTS,ficheId:"cge_f2",color:"#F59E0B"},
  {id:"qt-cge-oeuvres",title:"Oeuvres et auteurs du thème",tags:["Orwell","Magritte","Kurosawa","Corneille","Welles","Nolan","Gide"],bank:QB_CGE_OEUVRES,ficheId:"cge_f5",color:"#E97C4F"},
];

// ─── PROGRAMME CGE ───

export const PROGRAM_CGE = {
  id:"cge",
  short:"CGE 2027",
  name:"Culture Générale et Expression — Le vrai du faux",
  color:"#F59E0B",
  icon:"📖",
  blocs:[
    {id:"cge_b1",title:"Bloc 1 — Problématique et enjeux contemporains",unit:"CGE",
      competences:[
        {id:"CGE_C1.1",label:"Enjeux numériques et post-vérité",
          savoirs:["Post-vérité et ère numérique","Intelligence artificielle et logique probabiliste","Deepfakes et images manipulées","Désinformation et propagande","Hyperréalité (Umberto Eco — La Guerre du faux)"]},
        {id:"CGE_C1.2",label:"Plaisir de l'illusion — de l'Antiquité à aujourd'hui",
          savoirs:["Mimésis selon Aristote (Poétique)","Zeuxis et les raisins de Pline l'Ancien","Suspension volontaire de l'incrédulité (Coleridge, 1817)","Le fictif n'est pas le mensonge","Il y a un vrai du faux — la fiction révèle"]},
        {id:"CGE_C1.3",label:"Consommation, authenticité et contrefaçon",
          savoirs:["Simili, toc, fausse monnaie","L'aura de l'original (Walter Benjamin, 1935)","Copie, plagiat, mystification — distinctions","Restauration et reconstitution (Viollet-le-Duc)","Valeur des copies remplaçant un original disparu"]},
      ],
      themes:["T1.1 Désinformation numérique","T1.2 Illusion et plaisir esthétique","T1.3 Authenticité et reproduction"]},

    {id:"cge_b2",title:"Bloc 2 — Repères culturels",unit:"CGE",
      competences:[
        {id:"CGE_C2.1",label:"Littérature et théâtre",
          savoirs:["Aragon — Le Mentir-vrai (1980)","Gide — Les Faux-monnayeurs (1925)","Orwell — 1984 (1949) & La Ferme des animaux","Molière — Le Tartuffe","Corneille — L'Illusion comique (1636)","Calderón — La Vie est un songe (1635)","Carrère — L'Adversaire (2000)","Borges — Fictions (1944)","Pirandello — Six personnages en quête d'auteur"]},
        {id:"CGE_C2.2",label:"Cinéma",
          savoirs:["Peter Weir — The Truman Show (1998)","Orson Welles — F for Fakes (1973)","Kurosawa — Rashōmon (1950)","Nolan — Inception (2010) & The Prestige","Barry Levinson — Wag the Dog (1997)","Charles Chaplin — Le Dictateur (1940)","Lubitsch — To Be or Not to Be (1942)","William Karel — Opération Lune (2002)"]},
        {id:"CGE_C2.3",label:"Arts plastiques et architecture",
          savoirs:["Magritte — La Trahison des images (1929)","M.C. Escher — lithographies impossibles","Borromini — Galerie Palazzo Spada, Rome (1652)","Dalí — double lecture et surréalisme","Damien Hirst — Unbelievable (2017)","Cornelis Gysbrechts — trompe-l'œil"]},
        {id:"CGE_C2.4",label:"Essais de référence",
          savoirs:["Umberto Eco — La Guerre du faux (1985)","Walter Benjamin — Reproductibilité technique (1935)","David Colon — Propagande (2019)","Edgar Morin — La Rumeur d'Orléans (1969)","Werner Herzog — L'Avenir de la vérité"]},
      ],
      themes:["T2.1 Corpus littéraire","T2.2 Corpus filmique","T2.3 Arts visuels","T2.4 Essais"]},

    {id:"cge_b3",title:"Bloc 3 — Vocabulaire et expressions",unit:"CGE",
      competences:[
        {id:"CGE_C3.1",label:"Champ lexical : vérité / mensonge / fiction",
          savoirs:["vérité, mensonge, véracité, crédulité, crédibilité","fiction, fictif, invention, imagination","mimesis, imaginaire, illusion scénique, illusion romanesque","trompe-l'œil, effets spéciaux, illusion d'optique, mascarade"]},
        {id:"CGE_C3.2",label:"Champ lexical : désinformation / simulacre",
          savoirs:["infox, désinformation, manipulation, duperie","imposture, mystification, canular, propagande","contre-vérité, bourrage de crâne, post-vérité","simulacre, leurre, contrefaçon, copie, toc, simili, faussaire","artefact, faux-semblant, feindre, pseudo, factice"]},
        {id:"CGE_C3.3",label:"Expressions à maîtriser",
          savoirs:["Distinguer le vrai du faux","Le mentir-vrai (Aragon) — la métaphore vive","Noble mensonge (Platon, La République)","Village Potemkine — mise en scène trompeuse","Le roi est nu (Andersen) — vérité niée collectivement","Déciller les yeux / déchirer le voile","Se faire un cinéma / se faire des illusions"]},
      ],
      themes:["T3.1 Lexique du vrai/faux","T3.2 Lexique de la manipulation","T3.3 Expressions courantes"]},
  ],

  fiches: FICHES_CGE,
  quizThemes: QUIZ_THEMES_CGE,

  annales:[
    {id:"cge_an1",annee:"Littérature",epreuve:"Corpus littéraire — sélection CGE 2027",themes:["Aragon","Gide","Orwell","Molière","Calderón","Borges","Carrère","Pirandello"],format:"Liste",nolink:true,
      note:"Aragon (Le Mentir-vrai, 1980) · Gide (Les Faux-monnayeurs, 1925) · Orwell (1984, La Ferme des animaux) · Molière (Le Tartuffe) · Corneille (L'Illusion comique) · Calderón (La Vie est un songe) · Carrère (L'Adversaire) · Borges (Fictions) · Pirandello (Six personnages).",url:null},
    {id:"cge_an2",annee:"Cinéma",epreuve:"Corpus filmique — sélection CGE 2027",themes:["Welles","Weir","Kurosawa","Nolan","Levinson","Chaplin","Karel","Lubitsch"],format:"Liste",nolink:true,
      note:"Peter Weir (The Truman Show, 1998) · Orson Welles (F for Fakes, 1973) · Kurosawa (Rashōmon, 1950) · Nolan (Inception, The Prestige) · Levinson (Wag the Dog, 1997) · Chaplin (Le Dictateur, 1940) · Karel (Opération Lune, 2002) · Lubitsch (To Be or Not to Be, 1942).",url:null},
    {id:"cge_an3",annee:"Essais",epreuve:"Corpus essayistique — sélection CGE 2027",themes:["Eco","Benjamin","Colon","Morin","Herzog"],format:"Liste",nolink:true,
      note:"Umberto Eco (La Guerre du faux) · Walter Benjamin (L'Œuvre d'art à l'époque de sa reproductibilité technique) · David Colon (Propagande, 2019) · Edgar Morin (La Rumeur d'Orléans) · Werner Herzog (L'Avenir de la vérité).",url:null},
    {id:"cge_an4",annee:"Expositions",epreuve:"Fake News — art, fiction, mensonge (Fondation EDF)",themes:["Fake News","Art","Fiction","Musée"],format:"PDF",
      note:"Dossier pédagogique de la Fondation groupe EDF (exposition 2021). Approche artistique des fake news.",url:"https://fondation.edf.com/app/uploads/2021/05/edf-fake-new-fr-03.pdf"},
    {id:"cge_an5",annee:"Exposition virtuelle",epreuve:"Archives nationales — Faux et faussaires du Moyen Âge à nos jours",themes:["Faussaires","Moyen Âge","Archives","Histoire"],format:"Exposition virtuelle",
      note:"Exposition virtuelle (oct. 2025 – fév. 2026) — histoire du faux à travers les siècles, conservée aux Archives nationales.",url:"https://www.archives-nationales.culture.gouv.fr/evenements/faux-et-faussaires-du-moyen-age-nos-jours"},
    {id:"cge_an6",annee:"Exposition",epreuve:"Monnaie de Paris — M.C. Escher (dossier de presse)",themes:["Escher","Trompe-l'œil","Illusion","Arts plastiques"],format:"PDF",
      note:"Dossier de presse de l'exposition Escher à la Monnaie de Paris (nov. 2025 – mars 2026). Illusions géométriques et trompe-l'œil.",url:"https://www.monnaiedeparis.fr/media/contentmanager/content/000_Dossier_de_presse_Escher.pdf"},
    {id:"cge_an7",annee:"Audio",epreuve:"La Guerre des mondes — Orson Welles (1938) · INA",themes:["Canular","Radio","Panique","Welles"],format:"Document sonore",
      note:"Le 30 octobre 1938, CBS diffuse une adaptation radio de H.G. Wells sous forme de faux bulletin d'info. Une partie du public croit à une vraie invasion martienne — exemple fondateur de canular médiatique.",url:"https://www.ina.fr/ina-eclaire-actu/fiction-radio-canular-atome-panique-apocalypse-nucleaire-france"},
    {id:"cge_an8",annee:"Podcast",epreuve:"France Culture — Faits alternatifs : pourquoi notre cerveau est pris en défaut ?",themes:["Post-vérité","Cognition","Biais"],format:"Podcast",nolink:true,
      note:"Brice Couturier, France Culture, 23 avril 2021. Les biais cognitifs qui nous rendent vulnérables à la désinformation.",url:null},
  ],
};
