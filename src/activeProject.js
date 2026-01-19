import { addLi } from "./addTodo";

const pages = [];

export default function displayActiveProject(event) {
    if (event.originalTarget.tagName === "BUTTON") {
        const projectTitle = document.querySelector(".project__title");
        projectTitle.textContent = event.target.textContent;
        displayTodos(event.target.textContent);
    }
}

export function displayTodos(name) {
    const projectList = document.querySelector(".project__list");
    projectList.innerHTML = "";

    for (let page of pages) {
        if (page.projectTitle === name) {
            addLi(page.name, page.description, page.dueDate);
        }
    }
}

class AddTodo {
    constructor(projectTitle, name, description, dueDate) {
        this.projectTitle = projectTitle;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }
}

export function addPageTodo(projectTitle, name, description, dueDate) {
    pages.push(new AddTodo(projectTitle, name, description, dueDate));

    console.log(pages);
}
