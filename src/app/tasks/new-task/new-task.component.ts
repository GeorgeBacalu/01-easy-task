import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();

  title = "";
  summary = "";
  dueDate = "";

  cancelAddTask = () => this.cancel.emit();

  submit = () => this.addTask.emit({ title: this.title, summary: this.summary, dueDate: this.dueDate });
}
