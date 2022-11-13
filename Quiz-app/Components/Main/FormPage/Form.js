const form = document.querySelector('[data-js="page-form"]');
const homepage = document.querySelector('[data-js="page-home"]');
const bookmarkPage = document.querySelector('[data-js="page-bookmarks"]');

import { updateAmountLeft } from "../../../Lib/UpdateAmountLeft.js";
import { createCard } from "../../../Lib/createCard.js";
import { textAreaDatas } from "../../../Data/Data.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const yourQuestion = e.target.yourQuestion.value;
  const yourAnswer = e.target.yourAnswer.value;
  const yourTag = e.target.yourTag.value;

  const newCard = createCard(yourQuestion, yourAnswer, yourTag);
  homepage.prepend(newCard);

  const newCardBookmarkPage = createCard(yourQuestion, yourAnswer, yourTag);
  newCardBookmarkPage.classList.add("--hidden");
  bookmarkPage.prepend(newCardBookmarkPage);

  e.target.yourQuestion.value = "";
  e.target.yourAnswer.value = "";
  e.target.yourTag.value = "";
});

textAreaDatas.forEach((textAreaData) => {
  updateAmountLeft(textAreaData.characterAmountLeft, textAreaData.maxLenght);
});

textAreaDatas.forEach((textAreaData) => {
  textAreaData.element.addEventListener("input", () => {
    updateAmountLeft(
      textAreaData.characterAmountLeft,
      textAreaData.maxLenght - textAreaData.element.value.length
    );
  });
});
