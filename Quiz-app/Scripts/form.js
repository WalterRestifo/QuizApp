const addButton = document.querySelector('[data-js="add-card-button"]');
const form = document.querySelector('[data-js="form"]');
const questionElement = document.querySelector('[data-js="questionElement"]');
const answerElement = document.querySelector('[data-js="answerElement"]');
const tagElement = document.querySelector('[data-js="tagElement"]');
const questionCharacterAmountLeft = document.querySelector(
  '[data-js="questionAmountLeft"]'
);
const answerCharacterAmountLeft = document.querySelector(
  '[data-js="answerAmountLeft"]'
);
const tagCharacterAmountLeft = document.querySelector(
  '[data-js="tagAmountLeft"]'
);
const maxLengthQuestion = questionElement.getAttribute("maxlength");
const maxLengthAnswer = answerElement.getAttribute("maxlength");
const maxLengthTag = tagElement.getAttribute("maxlength");

function addCard(yourQuestion, yourAnswer, yourTag) {
  const section = document.createElement("section");
  section.classList.add("card");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("card__bookmark");
  section.append(bookmarkButton);

  const bookmarkImg = document.createElement("img");
  bookmarkImg.classList.add("card__bookmark");
  bookmarkImg.setAttribute("src", "Assets/bookmark-white.svg");
  bookmarkImg.setAttribute("alt", "a white bookmark");
  bookmarkButton.append(bookmarkImg);

  const question = document.createElement("p");
  question.textContent = yourQuestion;
  section.append(question);

  const showAnswerButton = document.createElement("button");
  showAnswerButton.textContent = "Show Answer";
  showAnswerButton.classList.add("card__button");
  section.append(showAnswerButton);

  const answer = document.createElement("p");
  answer.textContent = yourAnswer;
  section.append(answer);

  const tagWrapper = document.createElement("article");
  tagWrapper.classList.add("tags");
  section.append(tagWrapper);

  const tag = document.createElement("p");
  tag.textContent = yourTag;
  tag.classList.add("tags__item");
  tagWrapper.append(tag);

  document.body.append(section);
}

function updateAmountLeft(target, value) {
  target.textContent = value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const yourQuestion = e.target.yourQuestion.value;
  const yourAnswer = e.target.yourAnswer.value;
  const yourTag = e.target.yourTag.value;

  addCard(yourQuestion, yourAnswer, yourTag);
});

updateAmountLeft(questionCharacterAmountLeft, maxLengthQuestion);
updateAmountLeft(answerCharacterAmountLeft, maxLengthAnswer);
updateAmountLeft(tagCharacterAmountLeft, maxLengthTag);

questionElement.addEventListener("input", () => {
  updateAmountLeft(
    questionCharacterAmountLeft,
    maxLengthQuestion - questionElement.value.length
  );
});

answerElement.addEventListener("input", () => {
  updateAmountLeft(
    answerCharacterAmountLeft,
    maxLengthAnswer - answerElement.value.length
  );
});

tagElement.addEventListener("input", () => {
  updateAmountLeft(
    tagCharacterAmountLeft,
    maxLengthTag - tagElement.value.length
  );
});
