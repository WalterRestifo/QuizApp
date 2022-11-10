const bodyElement = document.querySelector('[data-js = "body"]');
const darkModeSwitch = document.querySelector('[data-js="darkModeSwitch"]');

// console.log(bodyElement)
// console.log(darkModeSwitch)
darkModeSwitch.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
});
