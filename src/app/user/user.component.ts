import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onChangeUser() {
    this.select.emit(this.user.id);
  }
}
