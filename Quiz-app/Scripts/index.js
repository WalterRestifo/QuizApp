const spoilerButton1 = document.querySelector('[data-js = "spoiler-button-1"]');
const spoilerButton2 = document.querySelector('[data-js = "spoiler-button-2"]');
const answer1 = document.querySelector('[data-js = "answer-1"]');
const answer2 = document.querySelector('[data-js = "answer-2"]');

const bookmarkColorToChange1 = document.getElementById(
  "bookmark--color-to-change-1"
);
const bookmarkColorToChange2 = document.getElementById(
  "bookmark--color-to-change-2"
);

const bookmarkButton1 = document.querySelector(
  '[data-js = "bookmark-button-1"]'
);
const bookmarkButton2 = document.querySelector(
  '[data-js = "bookmark-button-2"]'
);

spoilerButton1.addEventListener("click", () => {
  if (answer1.classList.contains("--hidden")) {
    answer1.classList.remove("--hidden");
    spoilerButton1.textContent = "Hide Answer";
  } else {
    answer1.classList.add("--hidden");
    spoilerButton1.textContent = "Show Answer";
  }
});

spoilerButton2.addEventListener("click", (e) => {
  if (answer2.classList.contains("--hidden")) {
    answer2.classList.remove("--hidden");
    e.target.textContent = "Hide Answer";
  } else {
    answer2.classList.add("--hidden");
    e.target.textContent = "Show Answer";
  }
});

bookmarkButton1.addEventListener("click", (e) => {
  if (e.target.getAttribute("src") === "Assets/bookmark-white.svg") {
    e.target.setAttribute("src", "Assets/bookmark-black.svg");
  } else {
    e.target.setAttribute("src", "Assets/bookmark-white.svg");
  }
});

bookmarkButton2.addEventListener("click", (e) => {
  if (e.target.getAttribute("src") === "Assets/bookmark-white.svg") {
    e.target.setAttribute("src", "Assets/bookmark-black.svg");
  } else {
    e.target.setAttribute("src", "Assets/bookmark-white.svg");
  }
});
