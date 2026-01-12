import "./css/style.css";
import createDOM from "./websiteStructure";
import appendNewProject from "./addProject";

createDOM();

const addProjectButton = document.querySelector(".side__add-button");
addProjectButton.addEventListener("click", appendNewProject);
