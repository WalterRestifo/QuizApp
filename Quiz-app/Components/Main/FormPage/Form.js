const form = document.querySelector('[data-js="form"]');

import { updateAmountLeft } from "../../../Lib/UpdateAmountLeft.js";
import { addCard } from "../../../Lib/AddCard.js";
import { textAreaDatas } from "../../../Data/Data.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const yourQuestion = e.target.yourQuestion.value;
  const yourAnswer = e.target.yourAnswer.value;
  const yourTag = e.target.yourTag.value;

  addCard(yourQuestion, yourAnswer, yourTag);
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
