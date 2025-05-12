/**
 * Script principal d'AzerType
 * Initialise le jeu et gère les événements
 */

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  // Initialiser le jeu
  const game = new AzerTypeGame();
  const ui = new AzerTypeUI(game);
  
  // Options de difficulté et mode
  const optionsModes = document.querySelectorAll('input[name="mode"]');
  const optionsDifficulte = document.querySelectorAll('input[name="difficulty"]');
  
  // Champ de saisie
  const input = document.getElementById("saisie");
  
  // Bouton de soumission
  const stopBtn = document.getElementById("stop");
  
  /**
   * Démarre une nouvelle partie
   */
  function demarrerNouvellePartie() {
    const texte = game.demarrerPartie();
    ui.afficherTexte(texte);
    game.demarrerChrono();
  }
  
  /**
   * Vérifie la réponse et passe à la suivante
   */
  function verifierEtContinuer() {
    if (!game.motActuel) return;
    
    const resultat = game.verifierReponse(input.value);
    
    // Mise à jour du score
    ui.updateScore(resultat.score, resultat.total);
    
    // Affichage de l'alerte
    ui.afficherAlerte(resultat.message, resultat.classe);
    
    // Démarrer une nouvelle partie
    demarrerNouvellePartie();
  }
  
  /**
   * Gère la fin de partie
   */
  function finDePartie() {
    game.arreterChrono();
    
    const resultat = game.genererMessageFin();
    ui.afficherAlerte(resultat.message, resultat.classe, 5000);
    
    // Réinitialiser le score
    game.reinitialiserScore();
    ui.updateScore(0, 0);
    
    // Réinitialiser le chronomètre
    game.secondes = 0;
    game.minutes = 0;
    game.updateChrono();
  }
  
  // Événement de changement de mode ou difficulté
  function gererChangementOptions() {
    demarrerNouvellePartie();
  }
  
  // Associer les événements
  optionsModes.forEach(option => {
    option.addEventListener("change", gererChangementOptions);
  });
  
  optionsDifficulte.forEach(option => {
    option.addEventListener("change", gererChangementOptions);
  });
  
  // Soumission par la touche Entrée
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      verifierEtContinuer();
    }
  });
  
  // Bouton de fin de partie
  stopBtn.addEventListener("click", finDePartie);
  
  // Démarrer la première partie
  demarrerNouvellePartie();
});