document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const button = document.getElementById("theme-toggle");
  
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      body.setAttribute("data-theme", "dark");
    }

    button.addEventListener("click", () => {
        console.log("Here");
        const currentTheme = body.getAttribute("data-theme");
        if (currentTheme === "dark") {
            body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
  });