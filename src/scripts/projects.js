import { DomProjects, DomTodo, removeProjectFromDom } from "./dom";
import { cleanTodos } from "./dom";

let popupProject = document.querySelector(".add-project");
export let AllProjects = [];
export let currentProject = "Default";

class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  addToDo(todo) {
    this.todoList.push(todo);
  }
}

export function setCurrentProject(projectName) {
  currentProject = projectName;
  cleanTodos();
  displayTodos(projectName);
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
  });

document
  .querySelector("#form__cancel-button-project")
  .addEventListener("click", () => {
    popupProject.close();
  });

let defaultProj = new Project("Default");
AllProjects.push(defaultProj);
DomProjects(defaultProj);

export function deleteProject(project) {
  removeProjectFromDom(AllProjects.indexOf(project));
  AllProjects.splice(AllProjects.indexOf(project));
}
