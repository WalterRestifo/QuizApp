import { toggleBookmarkIcon } from "../../Lib/toggleBookmarkIcon.js";
import { toggleAnswer } from "../../Lib/toggleAnswer.js";
const spoilerButtons = document.querySelectorAll(
  '[data-js = "spoiler-button"]'
);
const answers = document.querySelectorAll('[data-js = "answer"]');
const bookmarkButtons = document.querySelectorAll(
  '[data-js = "bookmark-button"]'
);

export const bookmarkCards = document.querySelectorAll(
  '[data-js="bookmarkPageCard"]'
);

bookmarkButtons.forEach((bookmarkButton, index) => {
  bookmarkButton.addEventListener("click", (e) => {
    toggleBookmarkIcon(e.target);
    bookmarkCards[index].classList.toggle("--hidden");
  });
});

spoilerButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    toggleAnswer(e.target, answers[index]);
  });
});
