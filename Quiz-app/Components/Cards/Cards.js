const spoilerButtons = document.querySelectorAll(
  '[data-js = "spoiler-button"]'
);
const answers = document.querySelectorAll('[data-js = "answer"]');
const bookmarkButtons = document.querySelectorAll(
  '[data-js = "bookmark-button"]'
);

import {
  switchAttributeValue,
  switchTextContent,
} from "../../Lib/Functions.js";

bookmarkButtons.forEach((bookmarkButton) => {
  bookmarkButton.addEventListener("click", (e) => {
    switchAttributeValue(
      e.target,
      "src",
      "Assets/bookmark-white.svg",
      "Assets/bookmark-black.svg"
    );
  });
});

spoilerButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    switchTextContent(e.target, "Show Answer", "Hide Answer");
    answers[index].classList.toggle("--hidden");
  });
});
