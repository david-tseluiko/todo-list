export default function createDOM() {
    const body = document.querySelector("body");

    (function createPrimaryGrid() {
        const wrapper = document.createElement("div");
        wrapper.className = "wrapper";

        const sideBar = document.createElement("aside");
        sideBar.className = "side";

        const mainPage = document.createElement("main");
        mainPage.className = "main";

        wrapper.append(sideBar, mainPage);
        body.appendChild(wrapper);
    })();

    (function updateSideBar() {
        const sideBar = document.querySelector(".side");

        const title = document.createElement("h1");
        title.className = "side__title";
        title.textContent = "Todo List";

        const projectPanel = createProjectPanel();

        sideBar.append(title, projectPanel[0], projectPanel[1]);
    })();

    function createProjectPanel() {
        const addProject = document.createElement("button");
        addProject.className = "side__add-button";
        addProject.textContent = "Add Project";

        const projects = document.createElement("ul");
        projects.className = "side__projects projects";

        return [addProject, projects];
    }

    (function firstProject() {
        const projectsList = document.querySelector(".side__projects");
        const input = document.querySelector(".form__input");

        const li = document.createElement("li");
        li.className = "projects__item";

        const button = document.createElement("button");
        button.className = "projects__button";
        button.textContent = "Inbox";

        li.append(button);
        projectsList.append(li);
    })();

    (function addProjectFormModal() {
        const side = document.querySelector(".side");

        const dialog = document.createElement("dialog");
        dialog.id = "projectDialog";

        const form = document.createElement("form");
        form.className = "side__form form";
        form.method = "dialog";

        const nameLabel = document.createElement("label");
        nameLabel.className = "form__name";
        nameLabel.textContent = "Name:";
        nameLabel.setAttribute("for", "name");

        const nameInput = document.createElement("input");
        nameInput.className = "form__input";
        nameInput.id = "name";
        nameInput.required = true;

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "form__button-container";

        const cancelButton = document.createElement("button");
        cancelButton.className = "form__button cancel";
        cancelButton.textContent = "Cancel";
        cancelButton.type = "button";

        const addButton = document.createElement("button");
        addButton.className = "form__button add";
        addButton.textContent = "Add";
        addButton.type = "submit";

        buttonContainer.append(cancelButton, addButton);
        form.append(nameLabel, nameInput, buttonContainer);
        dialog.append(form);
        side.append(dialog);
    })();

    (function projectPage() {
        const main = document.querySelector(".main");

        const project = document.createElement("div");
        project.className = "project";

        const title = document.createElement("h2");
        title.className = "project__title";
        title.textContent = "Inbox";

        const createTodoButton = document.createElement("button");
        createTodoButton.className = "project__button";
        createTodoButton.textContent = "Add Todo";

        project.append(title, createTodoButton);
        main.append(project);
    })();
}
