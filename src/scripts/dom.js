import { setCurrentProject, deleteProject } from "./projects";
import { deleteTodo } from "./todo";
import { getFromStorage } from "./storage";

export function DomTodo(todo) {
  let content = document.querySelector(".content");

  let todoBlueprint = document.createElement("div");
  todoBlueprint.setAttribute("class", "content__todo");

  let title = document.createElement("div");
  title.setAttribute("class", "todo__title ");
  title.innerText = todo.title;

  let description = document.createElement("div");
  description.setAttribute("class", "todo__description");
  description.innerText = todo.description;

  let dueDate = document.createElement("div");
  dueDate.setAttribute("class", "todo__due-date");
  dueDate.innerText = todo.dueDate;

  let done = document.createElement("input");
  done.setAttribute("class", "todo__done-button");
  done.setAttribute("name", "todo__done-button");
  done.setAttribute("type", "checkbox");
  done.onclick = function (e) {
    if (e.target.checked) todoBlueprint.classList.add("todo__is-done");
    else todoBlueprint.classList.remove("todo__is-done");
  };

  let buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Delete";
  buttonDelete.setAttribute("class", "todo__button-delete");

  buttonDelete.addEventListener("click", () => {
    deleteTodo(todo);
  });

  todoBlueprint.append(title);
  todoBlueprint.append(description);
  todoBlueprint.append(dueDate);
  todoBlueprint.append(done);
  todoBlueprint.append(buttonDelete);

  content.appendChild(todoBlueprint);
}

export function DomProjects(project) {
  let sidebar = document.querySelector(".sidebar");
  let projectBlueprint = document.createElement("div");
  projectBlueprint.setAttribute("class", "sidebar__project");
  projectBlueprint.innerText = project.name;

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.setAttribute("class", "project__delete-button");

  if (project.name != "Default") {
    deleteButton.innerText = "Del";
    deleteButton.setAttribute("class", "project__delete-button");
    projectBlueprint.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      deleteProject(project);
    });
  }
  projectBlueprint.addEventListener("click", () => {
    setCurrentProject(project.name);
  });
  sidebar.appendChild(projectBlueprint);
}

export function cleanTodos() {
  document.querySelector(".content").innerHTML = "";
}

export function removeProjectFromDom(index) {
  document.querySelectorAll(".sidebar__project")[index].remove();
}

export function removeTodoFromDom(index) {
  document.querySelectorAll(".content__todo")[index].remove();
}
