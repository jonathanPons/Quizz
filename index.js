// @ts-nocheck
const tableauQuestion = document.getElementById("tableauQuestion");

const MessageReponse = document.querySelector(".OptionReponse");
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
    Answer: ["Madrid", "Paris", "Bruxelle"],
    correct: "Paris",
  },
  {
    Question: "Capital de l'Espagne",
    Answer: ["Madrid", "Paris", "Bruxelle"],
    correct: "Madrid",
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

//Creer une fonction qui verifie si la reponse est correte
function VerifReponse(AnswerUser) {
  const goodAnswer = tableauData[numberQuestion].correct;
  if (goodAnswer === AnswerUser) {
    console.log("hola");
  } else {
    console.log("NON");
  }
}

//Au clic sur la bonne reponse, un message en vert" Bonne Reponse"
answers.innerHTML = "";
answers.addEventListener("click", (event) => {
  if (ancienMessage) {
    ancienMessage.remove();
  }
  if (event.target.tagName === "BUTTON") {
    const repUser = event.target.textContent;
    console.log("la reponse user est " + repUser);
    const bonneReponse = tableauData[numberQuestion].correct;
    if (repUser === bonneReponse) {
      messageBonneReponse.textContent = "Bonne Reponse";
      messageBonneReponse.style.color = "green";
      answers.appendChild(messageBonneReponse);
    } else if (repUser !== bonneReponse) {
      const messageMauvaiseReponse = document.createElement("p");
      messageMauvaiseReponse.textContent = "Mauvaise Reponse";
      answers.appendChild(messageMauvaiseReponse);
      // AU clic sur une mauvaise rep, mess en rouge " mauvaise reponse"
      messageMauvaiseReponse.style.color = "red";
    }
  }
});

// Je veux un compteur qui  à chaque fois qu'une questione est validée avec le bouton Questions
// suivante incrmente le compteur +1/ sur la taille du tableau
//Creer un bouton refaire le quizz

//Creer un evenement au clic //
//
document.addEventListener("DOMContentLoaded", () => {
  Questions(0);
  ButtonReponse(0);
});
