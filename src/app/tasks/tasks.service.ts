import { Injectable } from "@angular/core";
import { TASKS } from "../data/tasks";
import { type NewTaskData } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = TASKS;

  constructor() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) 
      this.tasks = JSON.parse(tasks);
  }

  getUserTasks = (userId: string) => this.tasks.filter(task => task.userId === userId);

  addTask = (task: NewTaskData, userId: string) => {
    this.tasks.unshift({ id: Math.random().toString(), userId, ...task });
    this.saveTasks();
  }

  removeTask = (taskId: string) => {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks = () => localStorage.setItem("tasks", JSON.stringify(this.tasks));
}
