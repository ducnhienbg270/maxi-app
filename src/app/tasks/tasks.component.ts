import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { newTask, task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() userId!: string;
  @Input({required: true}) name!: string;
  listTasks = DUMMY_TASKS;
  isNewTask = false;

  get selectUserTask() {
    return this.listTasks.filter((task) => task.userId == this.userId)
  }

  onCompleteTask(taskId: string) {
    this.listTasks = this.listTasks.filter((task) => task.id != taskId);
  }

  handleNewTask() {
    this.isNewTask = true;
  }

  onCancleAddTask(isCancle: boolean) {
    this.isNewTask = isCancle;
  }

  onAddNewTask(req: newTask) {
    const dto: task = {
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: req.title,
      summary: req.summary,
      dueDate: req.dueDate
    }
    this.listTasks.unshift(dto);
    this.isNewTask = false;
  }
}
