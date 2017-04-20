import { Component } from '@angular/core';
import {TrainerService} from './trainer.service';

@Component({
  selector: 'my-app',
  providers: [TrainerService],
  template: `
  <h1>Hello {{title}}</h1>
   <table>
     <tr>
       <th>My Name: </th>
       <th>Team: </th>
     </tr>
     <tr *ngFor="let trainer of trainer;let i = index">
       <td>{{trainer.name}}</td>
       <td>{{trainer.fullname}}</td>
       <button type="button" (click)="viewDetail(i)">Detail click here</button>
     </tr>
   </table>
   <detail [selected]="selectedItem"></detail>
  `,
})
export class AppComponent  {
  title = 'Wellocome to list trainer';
  trainer: any;
  selectedItem: any;
  constructor(private _trainer: TrainerService) {
    this.trainer = this._trainer.getAllTrainers();
    this.selectedItem = 0;
  }
  viewDetail(i: number) {
    this.selectedItem = i;
  }

}
