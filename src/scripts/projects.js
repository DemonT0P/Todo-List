import { DomProjects, DomTodo, addAllToDom, removeProjectFromDom } from "./dom";
import { cleanTodos } from "./dom";
import { save } from "./storage";
import { Todo } from "./todo";

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
  console.log(AllProjects.find((item) => item.name == name));
  if (AllProjects.find((item) => item.name == name) == undefined) {
    let project = new Project(name);
    AllProjects.push(project);
    DomProjects(project);
    save(AllProjects);
    popupProject.close();
  } else {
    alert("Project with the same name already exists");
  }
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

//localStorage.removeItem("AllStorage");
if (localStorage.getItem("AllStorage") == null) {
  let defaultProj = new Project("Default");
  AllProjects.push(defaultProj);
  DomProjects(defaultProj);
  save(AllProjects);
} else {
  addPreviousProjects();
}

export function deleteProject(project) {
  removeProjectFromDom(AllProjects.indexOf(project));
  AllProjects.splice(AllProjects.indexOf(project), 1);
  save(AllProjects);
}

function addPreviousProjects() {
  let projectsFromLocal = [...JSON.parse(localStorage.getItem("AllStorage"))];
  for (let i = 0; i < projectsFromLocal.length; i++) {
    let project = new Project(projectsFromLocal[i].name);

    for (let j = 0; j < projectsFromLocal[i].todoList.length; j++) {
      let title = projectsFromLocal[i].todoList[j].title;
      let description = projectsFromLocal[i].todoList[j].description;
      let date = projectsFromLocal[i].todoList[j].dueDate;
      let todo = new Todo(title, description, date);

      project.addToDo(todo);
    }
    AllProjects.push(project);
    DomProjects(project);

    if (AllProjects[i].name == "Default") {
      for (let j = 0; j < AllProjects[i].todoList.length; j++) {
        DomTodo(AllProjects[i].todoList[j]);
      }
    }
  }
}
