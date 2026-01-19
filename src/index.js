import "./css/style.css";
import createDOM from "./websiteStructure";
import appendNewProject from "./addProject";
import displayActiveProject from "./activeProject";
import { appendTodo } from "./addTodo";

createDOM();

const addProjectButton = document.querySelector(".side__add-button");
addProjectButton.addEventListener("click", appendNewProject);

const projectList = document.querySelector(".side__projects");
projectList.addEventListener("click", displayActiveProject);

const addTodo = document.querySelector(".project__button");
addTodo.addEventListener("click", appendTodo);
