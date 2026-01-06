import "./css/style.css";

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

    const projectPanel = createProjectPanel()

    sideBar.append(title, projectPanel[0], projectPanel[1]);
})();

function createProjectPanel() {
    const addProject = document.createElement("button");
    addProject.className = "side__add-button";
    addProject.textContent = "Add Project";

    const projects = document.createElement("div");
    projects.className = "side__projects";

    return [addProject, projects];
}
