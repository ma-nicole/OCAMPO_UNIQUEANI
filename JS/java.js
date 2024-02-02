const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const sun = document.querySelector(".sun");

toggle.addEventListener("click", () => {
    body.classList.toggle("light");

    toggle.classList.toggle("active");
});

