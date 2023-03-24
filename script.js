document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  const htmlElement = document.documentElement;

  themeToggle.addEventListener("change", () => {
    if (htmlElement.getAttribute("data-theme") === "light") {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }
  });
});
