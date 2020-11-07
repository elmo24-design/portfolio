let btn = document.querySelector(".darkmode-btn");
let darkMode = localStorage.getItem("darkMode");

btn.addEventListener("click", lightDark);

const enableDarkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("darkMode", null);
};

if (darkMode == "enabled") {
  enableDarkMode();
}

function lightDark() {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}
