import "./css/style.css";
import createDOM from "./websiteStructure";
import appendNewProject from "./addProject";
import displayActiveProject from "./activeProject";

createDOM();

const addProjectButton = document.querySelector(".side__add-button");
addProjectButton.addEventListener("click", appendNewProject);

const projectList = document.querySelector(".side__projects");
projectList.addEventListener("click", displayActiveProject);
