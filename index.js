// @ts-nocheck
const tableauQuestion = document.getElementById("tableauQuestion");
const answers = document.querySelector(".option-reponse");
const NextQuestion = document.getElementById("btn-1");
const suiviQuestion = document.querySelector(".numberQuestion");

// Mettre le nombre de Q repondu et score final à 0//
let numberQuestion = 0;
let scoreFinal = 0;

// Creer le tableau de questions
const tableauData = [
  {
    Question: "Capital de la France",
    Answer: ["Madrid", "Paris", "Bruzelle"],
    correct: "Paris",
  },
  {
    Question: "Capital de l'Espagne",
    Answer: ["Madrid", "Paris", "Bruzelle"],
    correct: "Paris",
  },
];
// Faire apparaitre la premier question
// fonction d'envoi de la question //
const affichageQUestion = function () {
  const q = tableauData[0];
  tableauQuestion.textContent = q.Question + " ?";
  console.log(" Question affiché " + q.Question);
};
document.addEventListener("DOMContentLoaded", () => {
  affichageQUestion();
});

// fonction d'envoie des reponses
const afficherReponse = (Function = () => {
  const trouverReponses = tableauData[0];
  trouverReponses.Answer.forEach((reponse) => {
    const creerBouton = document.createElement("button");
    console.log(creerBouton);

    creerBouton.textContent = reponse;
    answers.appendChild(creerBouton);

    creerBouton.addEventListener("click", () => {
      if (reponse === tableauData[0].correct) {
        numberQuestion++;
        const correctAnswer = document.createElement("p");
        correctAnswer.textContent = " Bonne réponse ";
        answers.appendChild(correctAnswer);
      } else {
        const correctAnswer = document.createElement("p");
        correctAnswer.textContent = " Mauvaise Réponse";
        answers.appendChild(correctAnswer);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  afficherReponse();
});

document.addEventListener("DOMContentLoaded", () => {
  const ElementSuivi = document.createElement("p");
  ElementSuivi.textContent = numberQuestion + "/" + tableauData.length;
  suiviQuestion.appendChild(ElementSuivi);
  console.log(ElementSuivi);
});
