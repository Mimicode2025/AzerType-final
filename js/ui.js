/**
 * Interface utilisateur AzerType
 * Gestion des éléments d'interface et des animations
 */

class AzerTypeUI {
  constructor(game) {
    // Référence au jeu
    this.game = game;
    
    // Éléments de l'interface
    this.displayText = document.getElementById("mot-phrase");
    this.input = document.getElementById("saisie");
    this.scoreText = document.getElementById("score");
    this.chrono = document.getElementById("chronometre");
    this.stopBtn = document.getElementById("stop");
    this.alertContainer = document.getElementById("alert-container");
    
    // Initialisation de l'interface
    this.initialiserUI();
  }
  
  /**
   * Initialisation des éléments d'interface
   */
  initialiserUI() {
    // Affichage du score initial
    this.updateScore(0, 0);
    
    // Focus sur le champ de saisie
    this.input.focus();
  }
  
  /**
   * Met à jour l'affichage du texte à saisir
   * @param {string} texte - Le texte à afficher
   */
  afficherTexte(texte) {
    this.displayText.value = texte;
    this.input.value = "";
    this.input.focus();
  }
  
  /**
   * Met à jour l'affichage du score
   * @param {number} score - Le score actuel
   * @param {number} total - Le total possible
   */
  updateScore(score, total) {
    this.scoreText.textContent = `Votre score : ${score} / ${total}`;
  }
  
  /**
   * Affiche une alerte avec animation
   * @param {string} message - Le message à afficher
   * @param {string} classe - Classe CSS pour le style (success, warning, error)
   * @param {number} duree - Durée d'affichage en ms
   */
  afficherAlerte(message, classe = "", duree = 4000) {
    // Création de l'élément alerte
    const alerte = document.createElement("div");
    alerte.className = `alert ${classe}`;
    alerte.innerHTML = message;
    
    // Ajout au conteneur
    this.alertContainer.appendChild(alerte);
    
    // Suppression automatique après la durée spécifiée
    setTimeout(() => {
      alerte.style.opacity = "0";
      alerte.style.transform = "translateY(-20px)";
      
      // Suppression de l'élément après la fin de l'animation
      setTimeout(() => {
        alerte.remove();
      }, 300);
    }, duree);
  }
  
  /**
   * Applique un effet de vibration au champ de saisie (pour les erreurs)
   */
  vibrerInput() {
    this.input.classList.add("error-shake");
    setTimeout(() => {
      this.input.classList.remove("error-shake");
    }, 500);
  }
  
  /**
   * Applique un effet de succès au champ de saisie
   */
  succesInput() {
    this.input.classList.add("success-flash");
    setTimeout(() => {
      this.input.classList.remove("success-flash");
    }, 500);
  }
  
  /**
   * Anime la transition vers un nouveau mot/phrase
   */
  transitionNouveauTexte() {
    this.displayText.classList.add("text-change");
    setTimeout(() => {
      this.displayText.classList.remove("text-change");
    }, 300);
  }
}