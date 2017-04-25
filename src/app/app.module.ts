import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

// import { ListComponent }  from './list/list.component';
import  { AppComponent } from './app.component';
// import  { DetailComponent } from './detail.component';
import  { TrainersComponent } from './service/trainer.component';
import  { DetailComponent } from './service/detail.component';
import  { Mypipe } from './service/mypipe.pipe';
import  { Mypipesearch } from './service/mypipesearch.pepe';


@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      JsonpModule,
      FormsModule,
      ReactiveFormsModule
      ],
  declarations: [ TrainersComponent, DetailComponent, Mypipe, Mypipesearch],
  bootstrap:    [ TrainersComponent ]
})
export class AppModule { }
