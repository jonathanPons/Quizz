// @ts-nocheck
const tableauQuestion = document.getElementById("tableauQuestion");
const answers = document.querySelector(".option-reponse");
const NextQuestion = document.getElementById("btn-1");

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
];
// Faire apparaitre la premier question
// fonction d'envoi de la question //
const affichageQUestion = function () {
  const q = tableauData[0];
  tableauQuestion.textContent = q.Question + " ?";
};
document.addEventListener("DOMContentLoaded", () => {
  affichageQUestion();
  console.log(affichageQUestion());
});
console.log(affichageQUestion());

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
        scoreFinal = 1 + "/" + tableauData.Question.length;
        console.log(numberQuestion);
        console.log(scoreFinal);
        console.log("bonne reponse");
      } else {
        scoreFinal = 0 + "/" + tableauData.length;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  afficherReponse();
});
