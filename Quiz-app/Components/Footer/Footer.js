const allPages = document.querySelectorAll('[data-js*="page"]');
const allLinks = document.querySelectorAll('[data-js*="link"]');

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    allPages.forEach((page) => {
      page.classList.remove("current");
    });
    const linkHrefAttribute = event.currentTarget.getAttribute("href");
    console.log(linkHrefAttribute);
    const currentPage = document.querySelector(linkHrefAttribute);
    currentPage.classList.add("current");
  });
});
