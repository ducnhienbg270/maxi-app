import { Component, EventEmitter, Input, Output } from '@angular/core';
import { task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() itemTask?:task;
  @Output() taskIdCompleted = new EventEmitter<string>();

  onCompleteTask() {
    this.taskIdCompleted.emit(this.itemTask?.id);
  }

}
