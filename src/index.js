import "./css/style.css";
import { createNewProject } from "./createProject.js";

const createProjectBtn = document.querySelector(".sidebar__button");

createProjectBtn.addEventListener("click", () => {
    createNewProject();
});
