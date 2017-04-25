import  { Component, Input,  OnChanges,  SimpleChanges } from '@angular/core';
import  { TrainersService } from './service.component';
@Component({
  selector: 'detail',
  templateUrl: "./detail.html",
})

export class DetailComponent implements OnChanges {
  @Input() value: string = null;
  trainer: any;

  constructor(private _trainersService: TrainersService) {
    this.trainer = null;
    // this._trainersService.getTrainer(this.value)
    // .subscribe((data: any) => {
    //   this.trainer = data;
    //   console.log(data);
    // })
  }
  ngOnChanges(changes: SimpleChanges) {
    this._trainersService.getTrainer(this.value)
    .subscribe((data: any) => {
      this.trainer = data;
      console.log(data);
    })
    console.log(this.value);
  }

}
