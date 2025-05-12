/**
 * Logique du jeu AzerType
 * Contient les fonctions principales pour la gestion du jeu
 */

class AzerTypeGame {
  constructor() {
    this.motActuel = "";
    this.score = 0;
    this.total = 0;
    this.chronoInterval = null;
    this.secondes = 0;
    this.minutes = 0;
    
    // Limites de temps selon la difficulté (en secondes)
    this.limiteTemps = {
      facile: 15,
      moyen: 10,
      difficile: 8
    };
  }

  /**
   * Génère un mot ou une phrase selon le mode et la difficulté choisis
   * @returns {string} Le texte généré
   */
  genererTexte() {
    // Détermine le mode
    const modeMots = document.getElementById("mots").checked;
    const mode = modeMots ? "mots" : "phrases";
    
    // Détermine la difficulté
    let difficulte = "facile";
    if (document.getElementById("moyen").checked) {
      difficulte = "moyen";
    } else if (document.getElementById("difficile").checked) {
      difficulte = "difficile";
    }
    
    // Récupère la liste correspondante
    const liste = DONNEES[mode][difficulte];
    
    // Sélectionne un élément aléatoire
    if (liste && liste.length > 0) {
      return liste[Math.floor(Math.random() * liste.length)];
    } else {
      console.error(`Aucune donnée trouvée pour le mode ${mode} et la difficulté ${difficulte}`);
      return "Erreur de chargement";
    }
  }
  
  /**
   * Démarre une nouvelle partie
   */
  demarrerPartie() {
    // Réinitialise et démarre le chronomètre
    this.arreterChrono();
    this.secondes = 0;
    this.minutes = 0;
    this.updateChrono();
    
    // Génère un nouveau texte
    this.motActuel = this.genererTexte();
    
    return this.motActuel;
  }
  
  /**
   * Met à jour l'affichage du chronomètre
   */
  updateChrono() {
    const chronoElement = document.getElementById("chronometre");
    if (chronoElement) {
      chronoElement.textContent = `${String(this.minutes).padStart(2, '0')}:${String(this.secondes).padStart(2, '0')}`;
    }
  }
  
  /**
   * Démarre le chronomètre
   */
  demarrerChrono() {
    this.chronoInterval = setInterval(() => {
      this.secondes++;
      if (this.secondes === 60) {
        this.secondes = 0;
        this.minutes++;
      }
      this.updateChrono();
    }, 1000);
  }
  
  /**
   * Arrête le chronomètre
   */
  arreterChrono() {
    clearInterval(this.chronoInterval);
  }
  
  /**
   * Vérifie la réponse de l'utilisateur
   * @param {string} reponseUtilisateur - La réponse entrée par l'utilisateur
   * @returns {Object} Résultat avec message et points
   */
  verifierReponse(reponseUtilisateur) {
    this.arreterChrono();
    this.total++;
    
    // Calcule le temps écoulé en secondes
    const tempsEcoule = this.minutes * 60 + this.secondes;
    
    // Définit la limite selon la difficulté choisie
    let difficulte = "facile";
    if (document.getElementById("moyen").checked) {
      difficulte = "moyen";
    } else if (document.getElementById("difficile").checked) {
      difficulte = "difficile";
    }
    
    const limiteTemps = this.limiteTemps[difficulte];
    
    let message = "";
    let points = 0;
    let classe = "";
    
    // Vérification de la réponse
    const reponseCorrecte = reponseUtilisateur.trim() === this.motActuel.trim();
    
    if (reponseCorrecte && tempsEcoule <= limiteTemps) {
      points = 10;
      message = `🚀 Bravo ! Réponse correcte en ${tempsEcoule}s (+10 points).`;
      classe = "success";
    } else if (!reponseCorrecte) {
      message = `❌ Réponse incorrecte en ${tempsEcoule}s.`;
      classe = "error";
    } else {
      message = `🐢 Trop lent (${tempsEcoule}s) : la limite est de ${limiteTemps}s !`;
      classe = "warning";
    }
    
    this.score += points;
    
    return {
      message: message,
      score: this.score,
      total: this.total * 10,
      classe: classe
    };
  }
  
  /**
   * Réinitialise le score
   */
  reinitialiserScore() {
    this.score = 0;
    this.total = 0;
  }
  
  /**
   * Calcule le pourcentage de réussite
   * @returns {number} Pourcentage de réussite
   */
  calculerPourcentage() {
    return this.total > 0 ? (this.score / (this.total * 10)) * 100 : 0;
  }
  
  /**
   * Génère un message de fin de partie
   * @returns {Object} Message et classe CSS
   */
  genererMessageFin() {
    const pourcentage = this.calculerPourcentage();
    let message = "";
    let classe = "";
    
    if (this.total === 0) {
      message = `😒 Tu n'as rien trouvé ! Tu peux faire mieux : ${this.score} / ${this.total * 10} (0%)`;
      classe = "error";
    } else if (pourcentage < 50) {
      message = `💪 Bon effort, continue ! Tu peux y arriver 💡<br>Ton score est : ${this.score} / ${this.total * 10} (${pourcentage.toFixed(1)}%)`;
      classe = "warning";
    } else if (pourcentage === 50) {
      message = `👍 Tu as fait la moitié du boulot !<br>Score : ${this.score} / ${this.total * 10} (${pourcentage.toFixed(1)}%)`;
      classe = "warning";
    } else if (pourcentage > 70) {
      message = `👏🏽👏🏽 Bon travail !<br>Score : ${this.score} / ${this.total * 10} (${pourcentage.toFixed(1)}%)`;
      classe = "success";
    } else if (pourcentage > 80) {
      message = `🏆 Excellent travail ! Tu es trop fort 😎<br>Score : ${this.score} / ${this.total * 10} (${pourcentage.toFixed(1)}%)`;
      classe = "success";
    }
    
    return { message, classe };
  }
}