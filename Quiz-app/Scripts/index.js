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

const bookmarkButton1 = document.querySelectorAll(
  '[data-js = "bookmark-button-1"]'
);
const bookmarkButton2 = document.querySelectorAll(
  '[data-js = "bookmark-button-2"]'
);
const cardNoBookmarks = document.querySelector(
  '[data-js = "card--no-bookmarks"]'
);
const cardBookmarkPage1 = document.querySelector(
  '[data-js = "card-bookmark-page-1"]'
);
const cardBookmarkPage2 = document.querySelector(
  '[data-js = "card-bookmark-page-2"]'
);

spoilerButton1.addEventListener("click", () => {
  if (answer1.classList.contains("hidden")) {
    answer1.classList.remove("--hidden");
    answer1.classList.add("--not-hidden");
  } else {
    answer1.classList.remove("--hidden");
    answer1.classList.add("--hidden");
  }
});

spoilerButton2.addEventListener("click", () => {
  answer2.classList.toggle("--hidden");
  console.log("spoiler");
});

//bookmarsks buttons don´t work. Probably for the same reason
// why the dark mode switch works only for the profile page.
// I have to save this changes in the style somewhere, or the page will
// load new every time I use the navbar and reload the normal classes.
bookmarkButton1.addEventListener("click", () => {
  cardNoBookmarks.classList.add("--hidden");
  cardBookmarkPage1.classList.toggle("--hidden");
});
// I need to find a way to know if the the bookmark on index is white or
// black. I could then use the innerHTML method to change the
// img in the bookmark button in a if-else conditional.
// If not possible, I could declare a variable with beginning value = 0
// then if (x % 2 == 0) do this and x++. So I know if the
// button clicking is odd or even.

bookmarkButton2.addEventListener("click", () => {
  cardNoBookmarks.classList.add("--hidden");
  cardBookmarkPage2.classList.toggle("--hidden");
});
