const bodyElement = document.querySelector('[data-js = "body"]');
const darkModeSwitch = document.querySelector('[data-js="darkModeSwitch"]');
const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');
const homepageIcon = document.querySelector('[data-js="homepageIcon"]');
const formIcon = document.querySelector('[data-js="formIcon"]');
const profileIcon = document.querySelector('[data-js="profileIcon"]');
const profilImage = document.querySelector('[data-js="profileImage"]');
const questionSign = document.querySelector('[data-js="questionSign"]');
const bookmarksCounter = document.querySelector('[data-js="bookmarksCounter"]');
const navUl = document.querySelector('[data-js="navUl"]');

darkModeSwitch.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");

  if (bookmarkIcon.getAttribute("src") === "Assets/bookmark-white.svg") {
    homepageIcon.setAttribute("src", "Assets/homepage-unfilled-darkmode.svg");
    bookmarkIcon.setAttribute("src", "Assets/bookmark-unfilled-darkmode.svg");
    formIcon.setAttribute("src", "Assets/plus-unfilled-darkmode.svg");
    profileIcon.setAttribute("src", "Assets/profile-filled-darkmode.svg");
    profilImage.setAttribute("src", "Assets/profile-filled-darkmode.svg");
    questionSign.setAttribute("src", "Assets/question-sign-darkmode.svg");
    bookmarksCounter.setAttribute("src", "Assets/bookmark-filled-darkmode.svg");
    navUl.setAttribute("style", "border: 1px solid  rgb(227, 221, 221);");
  } else {
    homepageIcon.setAttribute("src", "Assets/homepage-white.svg");
    bookmarkIcon.setAttribute("src", "Assets/bookmark-white.svg");
    formIcon.setAttribute("src", "Assets/plus-white.svg");
    profileIcon.setAttribute("src", "Assets/profile-black.svg");
    profilImage.setAttribute("src", "Assets/profile-white.svg");
    questionSign.setAttribute("src", "Assets/question-sign.svg");
    bookmarksCounter.setAttribute("src", "Assets/bookmark-black.svg");
    navUl.removeAttribute("style");
  }
});
