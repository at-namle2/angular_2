import {Component} from '@angular/core'
import { Roro } from './roro';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>hien thi ten List: {{ myro.name }}</h2>
    <ul class="list-group">
      <li  class="list-group-item" *ngFor="let item of list">
        {{item.name}}
      </li>
    </ul>
    `
})

export class ListComponent {
  title = "Danh sach";
  list = [
    new Roro(1, "cake"),
    new Roro(3, "Candy"),
    new Roro(5, "Baoy"),
    new Roro(10, "heheehe")
  ];
  myro = this.list[0];
}
