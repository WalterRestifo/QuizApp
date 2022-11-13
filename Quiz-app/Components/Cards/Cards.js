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

import { switchAttributeValue } from "../../Lib/SwitchAttributeValue.js";
import { switchTextContent } from "../../Lib/SwitchTextContent.js";

bookmarkButtons.forEach((bookmarkButton, index) => {
  bookmarkButton.addEventListener("click", (e) => {
    switchAttributeValue(
      e.target,
      "src",
      "Assets/bookmark-white.svg",
      "Assets/bookmark-black.svg"
    );
    switchAttributeValue(
      e.target,
      "alt",
      "a white bookmark",
      "a black bookmark"
    );
    bookmarkCards[index].classList.toggle("--hidden");
  });
});

spoilerButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    switchTextContent(e.target, "Show Answer", "Hide Answer");
    answers[index].classList.toggle("--hidden");
  });
});
