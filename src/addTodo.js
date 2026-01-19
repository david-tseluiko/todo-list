import { addPageTodo, displayTodos } from "./activeProject";

export function appendTodo() {
    const modal = document.querySelector("#todoDialog");

    modal.showModal();

    const cancelButton = document.querySelector("#todoDialog .cancel");
    const addButton = document.querySelector("#todoDialog .add");

    cancelButton.addEventListener("click", closeModal);
    addButton.addEventListener("click", addTodo);
}

function closeModal() {
    const modal = document.querySelector("#todoDialog");
    const cancelButton = document.querySelector("#todoDialog .cancel");

    modal.close();
    cancelButton.removeEventListener("click", closeModal);
    clearForm();

    console.log("cancel executed");
}

function addTodo(event) {
    const form = document.querySelector(".main__form");
    const projectTitle = document.querySelector(".project__title");
    const todoList = document.querySelector(".list");
    const name = document.querySelector("#todoName");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#due-date");

    if (form.checkValidity()) {
        event.preventDefault();
        addPageTodo(
            projectTitle.textContent,
            name.value,
            description.value,
            dueDate.value,
        );
        addLi(name.value, description.value, dueDate.value);
        clearForm();
    }
}

export function addLi(name, description, dueDate) {
    const todoList = document.querySelector(".list");

    const li = document.createElement("li");
    li.className = "list__item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const title = document.createElement("span");
    title.className = "list__title";
    title.textContent = name;

    const descriptionLi = document.createElement("span");
    descriptionLi.className = "list__description";
    descriptionLi.textContent = description;

    const dueDateLi = document.createElement("span");
    dueDateLi.className = "list__due-date";
    dueDateLi.textContent = dueDate;

    li.append(checkbox, title, descriptionLi, dueDateLi);
    todoList.append(li);
}

function clearForm() {
    const modal = document.querySelector("#todoDialog");
    const form = document.querySelector(".main__form");

    form.reset();
    modal.close();
}
