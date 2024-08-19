import { Component, EventEmitter, Output } from '@angular/core';
import { newTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  @Output() cancle = new EventEmitter();
  @Output() newTask = new EventEmitter<newTask>();

  
  enterTitle = '';
  enterSummary = '';
  enterDate = '';

  handleCancleAddTask() {
    this.cancle.emit(false);
  }

  onSubmit() {
    this.newTask.emit({
      title: this.enterTitle,
      summary: this.enterSummary,
      dueDate: this.enterDate
    });
  }
}
