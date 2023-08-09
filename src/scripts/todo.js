import { DomTodo, removeTodoFromDom } from "./dom";
import { addTodoToProject, AllProjects, currentProject } from "./projects";
import { save } from "./storage";

export class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

let popupTodo = document.querySelector(".add-todo");

let formAddTodoSubmit = document.querySelector("#add-todo__form");
formAddTodoSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.querySelector("#form__title").value;
  let description = document.querySelector("#form__description").value;
  if (description.length == 0) description = " ";
  let date = document.querySelector("#form__date").value;
  let found = false;

  for (let i = 0; i < AllProjects.length; i++) {
    if (AllProjects[i].name === currentProject) {
      const projectTodos = AllProjects[i].todoList;
      for (let j = 0; j < projectTodos.length; j++) {
        if (projectTodos[j].title == title && projectTodos[j].dueDate == date) {
          alert("A todo with the same name and date was already created");
          found = true;
          break;
        }
      }
      if (found) {
        break;
      } else {
        let todo = new Todo(title, description, date);
        addTodoToProject(todo);
        DomTodo(todo);
        save(AllProjects);
        popupTodo.close();
        break;
      }
    }
  }
});

document.querySelector(".options__add-todo").addEventListener("click", () => {
  popupTodo.showModal();
});

document
  .querySelector("#form__cancel-button-todo")
  .addEventListener("click", () => {
    popupTodo.close();
  });

export function deleteTodo(todo) {
  let project = AllProjects.find((item) => item.name == currentProject);
  removeTodoFromDom(project.todoList.indexOf(todo));
  project.todoList.splice(project.todoList.indexOf(todo), 1);
  AllProjects[AllProjects.indexOf(project)] = project;
  save(AllProjects);
}
