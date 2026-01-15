export default function appendNewProject() {
    const modal = document.querySelector("#projectDialog");

    const cancelButton = document.querySelector(".cancel");
    const addButton = document.querySelector(".add");

    modal.showModal();

    cancelButton.addEventListener("click", closeModal);
    addButton.addEventListener("click", addProject);
}

function closeModal() {
    const modal = document.querySelector("#projectDialog");
    const cancelButton = document.querySelector(".cancel");

    modal.close();
    cancelButton.removeEventListener("click", closeModal);

    console.log("cancel executed");
}

function addProject(event) {
    const input = document.querySelector(".form__input");

    if (input.value && isDuplicateName()) {
        event.preventDefault();
        addItem();
        clearForm();
    }

    console.log("add executed");
}

function isDuplicateName() {
    const previousProjects = document.querySelector(".side__projects");
    const input = document.querySelector(".form__input");

    for (let project of Array.from(previousProjects.children)) {
        if (project.textContent.toLowerCase() == input.value.toLowerCase()) {
            input.setCustomValidity("This project name already exists.");
            return false;
        }
    }

    return true;
}

function addItem() {
    const projectsList = document.querySelector(".side__projects");
    const input = document.querySelector(".form__input");

    const li = document.createElement("li");
    li.className = "projects__item";

    const button = document.createElement("button");
    button.className = "projects__button";
    button.textContent = input.value;

    li.append(button);
    projectsList.append(li);
}

function clearForm() {
    const modal = document.querySelector("#projectDialog");
    const form = document.querySelector(".side__form");

    form.reset();
    modal.close();
}
