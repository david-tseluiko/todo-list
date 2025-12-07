import "./css/style.css";
import { createNewProject } from "./createProject.js";

const createProjectBtn = document.querySelector(".sidebar__button");
const navList = document.querySelector(".nav__list");

createProjectBtn.addEventListener("click", () => {
    createNewProject();
});

navList.addEventListener("click", (event) => {
    const elementLastClass =
        event.target.classList[event.target.classList.length - 1];

    if (elementLastClass !== "nav__button--active") {
        removeOldActiveClass();
        event.target.classList.add("nav__button--active");
    }
});

function removeOldActiveClass() {
    const allNavBtns = Array.from(document.querySelectorAll(".nav__button"));

    for (let button of allNavBtns) {
        if (
            button.classList[button.classList.length - 1] ===
            "nav__button--active"
        ) {
            button.classList.remove("nav__button--active");
        }
    }
}
