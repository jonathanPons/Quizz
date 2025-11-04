// @ts-nocheck
//
const questionContainer = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.getElementById("btn-3");
const answer = document.querySelector("p");
//console.log(answer);

//console.log(btn1, btn2, btn3);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  answer.classList.add("showResponse");
});
//////////        Mouse Event ///////////

const mousemoove = document.querySelector(".mousemoove");
console.log(mousemoove);
window.addEventListener("mousemove", (e) => {
  mousemoove.style.left = e.pageX + "px";
  mousemoove.style.top = e.pageY + "px";
});
// KeyPress event //

const keypressContainer = document.querySelector(".keypress");
//console.log(keypressContainer);
const key = document.getElementById("key");
//console.log(key);
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  // console.log(e.key);
  //console.log(key.textContent);
  if (e.key === "j") {
    keypressContainer.style.color = "yellow"; // Fixed typo in color name
  } else {
    keypressContainer.style.color = "pink";
  }
});
