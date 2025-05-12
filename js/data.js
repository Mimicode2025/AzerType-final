/**
 * Données du jeu AzerType
 * Contient les mots et phrases classés par niveau de difficulté
 */

// Mots classés par difficulté
const motsFaciles = [
  // Éducation - Facile
  "école", "livre", "élève", "maître", "stylo",
  "cahier", "crayon", "tableau", "leçon", "copie",
  "devoir", "cloche", "salle", "lecture", "classe",
  "question", "réponse", "note", "examen", "diplôme",
  
  // Informatique - Facile
  "souris", "écran", "clavier", "fichier", "logiciel",
  "dossier", "ordinateur", "programme", "site", "lien",
  "motdepasse", "réseau", "clic", "serveur", "donnée",
  
  // Ingénierie - Facile
  "outil", "plan", "vis", "clou", "niveau",
  "brique", "mur", "mètre", "béton", "casque",
  "chantier", "mesure", "foret", "tube", "visseuse",
  
  // Médecine - Facile
  "malade", "docteur", "fièvre", "toux", "rhume",
  "pilule", "blessure", "sang", "dent", "yeux",
  "nez", "peau", "os", "bras", "jambe"
];

const motsMoyens = [
  // Éducation - Moyen
  "grammaire", "orthographe", "pédagogie", "programme", "discipline",
  "conjugaison", "mathématiques", "didactique", "apprentissage", "formation",
  
  // Informatique - Moyen
  "variable", "fonction", "boucle", "interface", "système",
  "navigateur", "codage", "algorithme", "script", "répertoire",
  "wifi", "connectivité", "bit", "octet", "protocole",
  
  // Ingénierie - Moyen
  "structure", "bascule", "équilibre", "ressort", "levier",
  "tension", "pression", "conducteur", "mécanisme", "réservoir",
  "turbine", "piston", "soudure", "thermique", "isolation",
  
  // Médecine - Moyen
  "symptôme", "ordonnance", "diagnostic", "injection", "traitement",
  "analyse", "fracture", "infection", "allergie", "chirurgie",
  "consultation", "prescription", "radio", "plâtre", "greffe"
];

const motsDifficiles = [
  // Éducation - Difficile
  "psychologie", "méthodologie", "répétiteur", "évaluation", "curriculum",
  
  // Informatique - Difficile
  "virtualisation", "débogage", "architecture", "intelligence", "machinelearning",
  "cybersécurité", "cloud", "framework", "cryptographie", "déploiement",
  "compilation", "asynchrone", "récursivité", "infrastructure", "microservices",
  
  // Ingénierie - Difficile
  "résistance", "conduction", "aérodynamique", "thermodynamique", "automatisation",
  "optimisation", "cotation", "contrainte", "dimensionnement", "simulation",
  "vibrations", "freinage", "robotique", "modélisation", "télécommunication",
  
  // Médecine - Difficile
  "cardiologie", "neurologie", "oncologie", "immunologie", "gastroentérite",
  "anesthésie", "prognostic", "métastase", "bactérie", "antibiotique",
  "pathologie", "radiographie", "hémoglobine", "transplantation", "pharmacologie"
];

// Phrases classées par difficulté
const phrasesFaciles = [
  // Niveau 1 : Très simples (mots faciles, courtes)
  "Le chat dort.",
  "La maison est rouge.",
  "Il fait chaud.",
  "Le soleil brille.",
  "Maman lit.",
  "Papa dort.",
  "Je mange.",
  "Il court.",
  "Elle chante.",
  "L'oiseau vole.",
  "Le chien aboie.",
  "La balle roule.",
  "Je bois de l'eau.",
  "Tu es gentil.",
  "Nous jouons.",
  "Il pleut.",
  "L'enfant rit.",
  "Le bébé pleure.",
  "Le ciel est bleu.",
  "La porte est fermée."
];

const phrasesMoyennes = [
  // Niveau 3 et 4 : Phrases plus longues et vocabulaire enrichi
  "L'oiseau chante dans l'arbre.",
  "Il fait froid ce matin.",
  "Je joue avec mes amis.",
  "Elle a une robe bleue.",
  "Nous marchons dans le parc.",
  "Le bébé dort paisiblement.",
  "Le ciel devient gris.",
  "Je prépare mon cartable.",
  "Tu fermes la porte.",
  "Il lit un livre d'aventure.",
  "La fille court très vite.",
  "Nous mangeons des bananes.",
  "Elle porte une jupe rouge.",
  "Le garçon rit fort.",
  "Ils jouent dans le jardin.",
  "Je bois du lait chaud.",
  "Tu mets ton manteau.",
  "Le vent souffle fort.",
  "Le soleil se lève tôt.",
  "Elle dessine un papillon.",
  "Le chat grimpe sur le toit.",
  "Il range ses affaires.",
  "Nous regardons un film.",
  "Je nettoie ma chambre.",
  "Elle apprend à lire."
];

const phrasesDifficiles = [
  // Niveau 6 et 7 : Phrases longues avec vocabulaire avancé
  "La bibliothèque contient des livres très intéressants.",
  "Le scientifique observe une réaction chimique.",
  "Elle étudie attentivement pour son examen.",
  "Nous participons à un concours de dessin.",
  "Le médecin soigne les malades avec attention.",
  "Je comprends mieux après la révision.",
  "Ils organisent une fête surprise.",
  "Le chat se cache sous le canapé.",
  "La maîtresse explique bien la leçon.",
  "Nous explorons la forêt en groupe.",
  "Les élèves révisent sérieusement avant le contrôle final.",
  "Il analyse les résultats de l'expérience.",
  "La nature offre une grande diversité de paysages.",
  "Elle développe une application mobile utile.",
  "Le système solaire est composé de plusieurs planètes.",
  "Nous discutons des enjeux environnementaux.",
  "Tu réfléchis à une solution efficace.",
  "Le volcan est en activité depuis deux jours.",
  "Ils adoptent un comportement responsable.",
  "La technologie progresse rapidement."
];

// Export des données
const DONNEES = {
  mots: {
    facile: motsFaciles,
    moyen: motsMoyens,
    difficile: motsDifficiles
  },
  phrases: {
    facile: phrasesFaciles,
    moyen: phrasesMoyennes,
    difficile: phrasesDifficiles
  }
};