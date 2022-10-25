let bodyElement = document.querySelector('[data-js = "body"]');

const darkModeSwitch = document.querySelector('[data-js = "darkModeSwitch"]');

darkModeSwitch.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
});
