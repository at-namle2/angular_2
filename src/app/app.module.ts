import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { ListComponent }  from './list/list.component';
import  { AppComponent } from './app.component';
import  { DetailComponent } from './detail.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent, DetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
