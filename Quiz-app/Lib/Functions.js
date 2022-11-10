export function switchTextContent(target, text1, text2) {
  if (target.textContent === text1) {
    target.textContent = text2;
  } else {
    target.textContent = text1;
  }
}

export function switchAttributeValue(target, attributeName, value1, value2) {
  if (target.getAttribute(attributeName) === value1) {
    target.setAttribute(attributeName, value2);
  } else {
    target.setAttribute(attributeName, value1);
  }
}

export function updateAmountLeft(target, value) {
  target.textContent = value;
}

export function addCard(yourQuestion, yourAnswer, yourTag) {
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
