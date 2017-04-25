import  { Injectable } from '@angular/core';
import  { Observable } from 'rxjs/Observable';
import  { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TrainersService {
  constructor(private _http: Http){}
  getAllTrainer() : Observable<any>{
    return this._http.get('./data/datas.json')
     .map((res: any)=> {
      return res.json();
    })
  }
  getTrainer(name: string) : Observable<any> {
    console.log(name);
    return this._http.get('./data/datas.json')
     .map((res: any)=> {
      // return res.json().trainers;
       return res.json().trainers.filter((item: any) =>
         item.name === name
         )[0]
    })
  }

}
