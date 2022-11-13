export function createCard(yourQuestion, yourAnswer, yourTag) {
  const section = document.createElement("section");
  section.classList.add("card");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("card__bookmark");
  bookmarkButton.setAttribute("data-js", "bookmark-button");
  section.append(bookmarkButton);

  const bookmarkImg = document.createElement("img");
  bookmarkImg.classList.add("card__bookmark");
  bookmarkImg.setAttribute("src", "Assets/bookmark-white.svg");
  bookmarkImg.setAttribute("alt", "a white bookmark");
  bookmarkButton.append(bookmarkImg);

  const question = document.createElement("p");
  question.textContent = yourQuestion;
  question.classList.add("card__text");
  section.append(question);

  const showAnswerButton = document.createElement("button");
  showAnswerButton.textContent = "Show Answer";
  showAnswerButton.classList.add("card__button");
  showAnswerButton.setAttribute("data-js", "spoiler-button");
  section.append(showAnswerButton);

  const answer = document.createElement("p");
  answer.textContent = yourAnswer;
  answer.classList.add("--hidden");
  answer.setAttribute("data-js", "answer");
  section.append(answer);

  const tagWrapper = document.createElement("article");
  tagWrapper.classList.add("tags");
  section.append(tagWrapper);

  const tag = document.createElement("p");
  tag.textContent = yourTag;
  tag.classList.add("tags__item");
  tagWrapper.append(tag);

  return section;
}
