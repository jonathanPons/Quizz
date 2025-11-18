// @ts-nocheck
const tableauQuestion = document.getElementById("tableauQuestion");

const MessageReponse = document.querySelector(".OptionReponse");
const answers = document.querySelector(".option-reponse");
const NextQuestion = document.getElementById("btn-1");
const suiviQuestion = document.querySelector(".numberQuestion");
const removeQuizz = document.getElementById("remove-Quizz");
const scoresFinal = document.getElementById("scoreFinal");
// Mettre le nombre de Q repondu et score final à 0//
let numberQuestion = 0;
let scoreFinal = 0;
let messageScoreFinal = "";
// Creer le tableau de questions
const tableauData = [
  {
    Question: "Capital de la France",
    Answer: ["Madrid", "Paris", "Bruxelle"],
    correct: "Paris",
  },
  {
    Question: "Capital de l'Espagne",
    Answer: ["Madrid", "Paris", "Bruxelle"],
    correct: "Madrid",
  },
  {
    Question: "Capital de la Belgique",
    Answer: ["Madrid", "Paris", "Bruxelles"],
    correct: "Bruxelles",
  },

  {
    Question: "Capital de l'Italie",
    Answer: ["Madrid", "Paris", "Rome"],
    correct: "Rome",
  },
  {
    Question: "Capital de l'Autriche",
    Answer: ["Vienne", "Paris", "Rome"],
    correct: "Vienne",
  },
];
// Creer une fonction reutilisable//
function Questions(number) {
  const afficherQuestion =
    " Quelle est la " + tableauData[number].Question + " ?";
  // Aller chercher l'endroit ou je veux mettre la question//
  const CreationQuestion = document.createElement("p");
  CreationQuestion.textContent = afficherQuestion;
  tableauQuestion.appendChild(CreationQuestion);
}
// Creer fonction d'affichage des reponses

function ButtonReponse(numberReponse) {
  const afficherReponse = tableauData[numberReponse].Answer;
  afficherReponse.forEach((e) => {
    const creationButton = document.createElement("button");
    creationButton.textContent = e;
    answers.appendChild(creationButton);
  });
}

//Au clic sur la bonne reponse, un message en vert" Bonne Reponse"

//Crrer variable qui desavtive les autres boutons//

answers.addEventListener("click", (event) => {
  const ancienMessage = answers.querySelector("p");
  if (ancienMessage) {
    ancienMessage.remove();
  }
  if (event.target.tagName === "BUTTON") {
    const repUser = event.target.textContent;

    const bonneReponse = tableauData[numberQuestion].correct;
    const tousBoutons = answers.querySelectorAll("button");
    if (repUser === bonneReponse) {
      const messageBonneReponse = document.createElement("p");
      messageBonneReponse.textContent = "Bonne Reponse";
      messageBonneReponse.style.color = "green";
      answers.appendChild(messageBonneReponse);

      console.log(tousBoutons);

      scoreFinal = scoreFinal + 1;
      console.log(
        " Score final est de  " + scoreFinal + "/" + tableauData.length
      );
    } else if (repUser !== bonneReponse) {
      const messageMauvaiseReponse = document.createElement("p");
      messageMauvaiseReponse.textContent = "Mauvaise Reponse";
      answers.appendChild(messageMauvaiseReponse);
      // AU clic sur une mauvaise rep, mess en rouge " mauvaise reponse"
      messageMauvaiseReponse.style.color = "red";
    }
    tousBoutons.forEach((bouton) => {
      bouton.disabled = true;
    });
  }
});

// Je veux un compteur qui  à chaque fois qu'une questione est validée avec le bouton Questions

document.addEventListener("DOMContentLoaded", () => {
  let monCompteur = numberQuestion + " / " + tableauData.length;
  const compteurQuestions = document.createElement("p");
  compteurQuestions.textContent = monCompteur;
  suiviQuestion.appendChild(compteurQuestions);
  NextQuestion.addEventListener("click", () => {
    numberQuestion = numberQuestion + 1;
    if (numberQuestion < tableauData.length) {
      monCompteur = numberQuestion + " / " + tableauData.length;
      compteurQuestions.textContent = monCompteur;
      tableauQuestion.innerHTML = "";
      answers.innerHTML = "";

      Questions(numberQuestion);
      ButtonReponse(numberQuestion);
    } else {
      suiviQuestion.style.display = "none";
      NextQuestion.style.display = "none";
      tableauQuestion.style.display = "none";
      answers.style.display = "none";
      scoresFinal.textContent =
        " Votre score final est de " + scoreFinal + " / " + tableauData.length;
      scoresFinal.style.display = "block"; // ✅ Ajoute cette ligne !
      console.log("Quizz terminé");
    }
  });
});
// Creer la function remove QUizz
function renitialiseQuizz() {
  numberQuestion = 0;
  scoreFinal = 0;
  tableauQuestion.innerHTML = "";
  answers.innerHTML = "";
  Questions(0);
  ButtonReponse(0);

  const compteurElement = suiviQuestion.querySelector("p");
  if (compteurElement) {
    compteurElement.textContent = " 0 / " + tableauData.length;
    NextQuestion.style.display = "inline-block";
    tableauQuestion.style.display = "block";
    answers.style.display = "block";

    scoresFinal.style.display = "none";
    scoresFinal.textContent = "";
  }
}

//Creer un bouton refaire le quizz
removeQuizz.addEventListener("click", renitialiseQuizz);

// Creer le score final à la fin du quizz

//Creer un evenement au clic //
//
document.addEventListener("DOMContentLoaded", () => {
  Questions(0);
  ButtonReponse(0);
});
