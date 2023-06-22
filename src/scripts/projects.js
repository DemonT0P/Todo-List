import { DomProjects, DomTodo } from "./dom";
import { cleanTodos } from "./dom";

let popupProject = document.querySelector(".add-project");
let AllProjects = [];
let currentProject = "Default";

class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  addToDo(todo) {
    this.todoList.push(todo);
    console.log(`Added ${todo.title} to ${this.name}`);
  }
}

export function setCurrentProject(projectName) {
  currentProject = projectName;
  cleanTodos();
  displayTodos(projectName);
  console.log("mudou");
}

function displayTodos(projectName) {
  for (let i = 0; i < AllProjects.length; i++) {
    if (AllProjects[i].name == projectName) {
      for (let j = 0; j < AllProjects[i].todoList.length; j++) {
        DomTodo(AllProjects[i].todoList[j]);
      }
      break;
    }
  }
}

export function addTodoToProject(todo) {
  for (let i = 0; i < AllProjects.length; i++) {
    if (AllProjects[i].name == currentProject) {
      AllProjects[i].addToDo(todo);
      break;
    }
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

let defaultProj = new Project("Default");
AllProjects.push(defaultProj);
DomProjects(defaultProj);
