const bodyElement = document.querySelector('[data-js = "body"]');
const darkModeSwitch = document.querySelector('[data-js = "darkModeSwitch"]');

const spoilerButton1 = document.querySelector('[data-js = "spoiler-button-1"]');
const spoilerButton2 = document.querySelector('[data-js = "spoiler-button-2"]');
const answer1 = document.querySelector('[data-js = "answer-1"]');
const answer2 = document.querySelector('[data-js = "answer-2"]');

darkModeSwitch.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
});

spoilerButton1.addEventListener("click", () => {
  if (answer1.classList.contains("hidden")) {
    answer1.classList.remove("--hidden");
    answer1.classList.add("--not-hidden");
  } else {
    answer1.classList.remove("--hidden");
    answer1.classList.add("--hidden");
  }
});

spoilerButton2.addEventListener("click", () => {
  answer2.classList.toggle("hidden");
});
