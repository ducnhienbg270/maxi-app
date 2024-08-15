import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  onChangeUser() {
  }
}
