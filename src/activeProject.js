export default function displayActiveProject(event) {
    if (event.originalTarget.tagName === "BUTTON") {
        const projectTitle = document.querySelector(".project__title");
        projectTitle.textContent = event.target.textContent;
    }
}
