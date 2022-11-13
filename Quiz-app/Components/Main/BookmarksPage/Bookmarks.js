const cardNoBookmarks = document.querySelector(
  '[data-js = "card--no-bookmarks"]'
);

import { bookmarkCards } from "../../Cards/Cards.js";

bookmarkCards.forEach((bookmarkCard) => {
  if (!bookmarkCard.classList.contains("--hidden")) {
    cardNoBookmarks.classList.add("--hidden");
  }
});
