const submitBtnEl = document.querySelector("button");
const changeBGEl = document.querySelector("#changeBG");
const greetingResultEl = document.querySelector("#nameGreetingResult");
const greetCyberDudeEl = document.querySelector("span#greetCyberDudeTxt");
const inputTxtEl = document.querySelector("input#inputTxt");
function capitalizeWords(words) {
  // split the words
  const wordsWithSpaces = words.split(" "); // anbu selvan

  const captilizeWords = wordsWithSpaces.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  return captilizeWords.join(" ");
}

submitBtnEl.addEventListener("click", () => {
  showWelcomeCard();
});

changeBGEl.addEventListener("click", () => {
  const bodyEl = document.body;

  //    style="background-color: darkcyan"

  bodyEl.style.backgroundColor = `#${((Math.random() * 0xffffff) << 0)
    .toString(16)
    .padStart(6, "0")}`; // "#00FF00";

  // CRUD operations
});

function showWelcomeCard() {
  if (inputTxtEl) {
    const inputName = inputTxtEl.value.trim();

    // Form validation: (min: 3, max: 20)
    if (!(inputName.length > 3 && inputName.length < 20)) {
      alert("it's not your name! Don't fool around!");
      return;
    }

    greetingResultEl.style.display = "block";

    greetingResultEl.innerText = `👋 Hello ${capitalizeWords(
      inputName
    )}, welcome to our app!`;
  } else {
    alert("Can't get name!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  greetingResultEl.style.display = "none";

  document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      showWelcomeCard();
    }
  });
});
