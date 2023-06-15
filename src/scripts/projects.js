import { DomProjects } from "./dom";

let popupProject = document.querySelector(".add-project");
let AllProjects = [];

class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  addToDo(todo) {
    this.todoList.push(todo);
    console.log(`Added ${todo.title} to ${this.name}`);
  }

  showToDos() {
    console.log(this.todoList.length + " TO DOs");
  }
}

let formProjectSubmit = document.querySelector("#add-project__form");
formProjectSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#form__project-name").value;
  let project = new Project(name);
  AllProjects.push(project);
  DomProjects(project);
  popupProject.close();
});

document
  .querySelector(".options__add-project")
  .addEventListener("click", () => {
    popupProject.showModal();
    console.log("Show Project");
  });

document
  .querySelector("#form__cancel-button-project")
  .addEventListener("click", () => {
    console.log("Cancel Project");
    popupProject.close();
  });
