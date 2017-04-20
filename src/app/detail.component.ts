import {Component, Input} from '@angular/core'
import {TrainerService} from './trainer.service';
@Component({
  selector: 'detail',
  template: `
  <table>
      <tr>
        <td>Name: </td>
        <td>{{trainer[selected].name}}</td>
      </tr>
      <tr >
        <td>Full Name: </td>
        <td>{{trainer[selected].fullname}}</td>
      </tr>
      <tr >
        <td>Team: </td>
        <td>{{trainer[selected].team}}</td>
      </tr>
    </table>
    `
})
export class DetailComponent {
  @Input() selected: number = null;
  trainer: any[];
  constructor(private _trainer: TrainerService) {
    this.trainer = this._trainer.getAllTrainers();
  }
}
