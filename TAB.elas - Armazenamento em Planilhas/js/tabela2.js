const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", function () {
    toggleDarkMode();
    localStorage.removeItem("escuro");
    modeText.innerText = "Tema Claro";

    if (body.classList.contains("escuro")) {
        localStorage.setItem("escuro", 1);
        modeText.innerText = "Tema Escuro";
    }
});

function toggleDarkMode() {
    document.body.classList.toggle("escuro");
}

function loadTheme() {
    const darkMode = localStorage.getItem("escuro");

    if (darkMode == 1) {
        toggleDarkMode();
        modeText.innerText = "Tema Escuro";
    } else {
        modeText.innerText = "Tema Claro";
    }
}

loadTheme();