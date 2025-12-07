const wrapper = document.querySelector(".wrapper");

export function createNewProject() {
    openForm();
    closeForm();
}

function openForm() {
    const body = document.querySelector("body");

    const form = document.createElement("form");
    form.className = "form";
    form.action = "";

    const nameLabel = document.createElement("label");
    nameLabel.className = "form__label";
    nameLabel.setAttribute("for", "nameInput");
    nameLabel.textContent = "Project Name";

    const nameInput = document.createElement("input");
    nameInput.className = "form__input";
    nameInput.id = "nameInput";
    nameInput.type = "text";
    nameInput.required = true;

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "form__button-wrapper";

    const cancelButton = document.createElement("button");
    cancelButton.className = "form__cancel form-button";
    cancelButton.type = "reset";
    cancelButton.textContent = "Cancel";

    const submitButton = document.createElement("button");
    submitButton.className = "form__submit form-button";
    submitButton.type = "submit";
    submitButton.textContent = "Create Project";

    wrapper.style.opacity = 0.7;

    buttonWrapper.append(cancelButton, submitButton);
    form.append(nameLabel, nameInput, buttonWrapper);

    body.appendChild(form);
}

function closeForm() {
    const form = document.querySelector(".form");
    const formButtons = document.querySelectorAll(".form-button");

    formButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const projectName = document.querySelector("#nameInput").value;

            if (
                event.target.classList[0] === "form__submit" &&
                projectName.length > 0
            ) {
                if (isUniqueName(projectName)) {
                    wrapper.style.opacity = 1;
                    form.remove();
                    addProject(projectName);
                } else {
                    const projectNameInput =
                        document.querySelector("#nameInput");
                    projectNameInput.setCustomValidity(
                        "This project name already exist!"
                    );
                }
            } else if (event.target.classList[0] === "form__cancel") {
                event.preventDefault();
                wrapper.style.opacity = 1;
                form.remove();
            }
        });
    });
}

function isUniqueName(name) {
    const navButtons = Array.from(document.querySelectorAll(".nav__button"));

    for (let button of navButtons) {
        if (button.textContent.toLowerCase() === name.toLowerCase()) {
            return false;
        }
    }

    return true;
}

function addProject(name) {
    const ul = document.querySelector(".nav__list");

    const li = document.createElement("li");
    li.className = "nav__item";

    const button = document.createElement("button");
    button.className = "nav__button button";
    button.textContent = name;

    li.append(button);
    ul.append(li);
}
