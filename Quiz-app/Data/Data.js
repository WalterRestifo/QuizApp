export const questionObj = {
  element: document.querySelector('[data-js="questionElement"]'),
  characterAmountLeft: document.querySelector('[data-js="questionAmountLeft"]'),
  maxLenght: document
    .querySelector('[data-js="questionElement"]')
    .getAttribute("maxlength"),
};

export const answerObj = {
  element: document.querySelector('[data-js="answerElement"]'),
  characterAmountLeft: document.querySelector('[data-js="answerAmountLeft"]'),
  maxLenght: document
    .querySelector('[data-js="answerElement"]')
    .getAttribute("maxlength"),
};

export const tagObj = {
  element: document.querySelector('[data-js="tagElement"]'),
  characterAmountLeft: document.querySelector('[data-js="tagAmountLeft"]'),
  maxLenght: document
    .querySelector('[data-js="tagElement"]')
    .getAttribute("maxlength"),
};

export const formDatas = [questionObj, answerObj, tagObj];
