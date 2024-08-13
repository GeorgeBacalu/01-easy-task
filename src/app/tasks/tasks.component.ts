import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TASKS } from '../data/tasks';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  
  tasks = TASKS;
  isAddingTask = false;

  startAddTask = () => this.isAddingTask = true;

  cancelAddTask = () => this.isAddingTask = false;

  addTask = (task: NewTaskData) => {
    this.tasks.unshift({ id: Math.random().toString(), userId: this.userId, ...task });
    this.isAddingTask = false;
  }

  completeTask = (taskId: string) => this.tasks = this.tasks.filter(task => task.id !== taskId);

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
}
