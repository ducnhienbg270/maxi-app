import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maxi-app';
  users = DUMMY_USERS;
  selectId = '';

  onSelect(id: string) {
    this.selectId = id;
  }
 
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectId)!;
  }
}
