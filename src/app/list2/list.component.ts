import  { Component } from '@angular/core';
import  { Person } from './person';

const PERSON: Person[] = [
  {id: 1, name:"ABC"},
  {id: 2, name:"ABCD"},
  {id: 3, name:"ABCDE"},
  {id: 4, name:"ABCDEF"},
  {id: 5, name:"ABCDEG"},
  {id: 6, name:"ABCDEH"},
  {id: 7, name:"ABCDEK"}
];

@Component ({
    selector: 'my-app',
    templateUrl: './list2.html',
})

export class ListComponent {
  title = "hoc angular";
  arrayperson = PERSON;
  person: Person =
  {
    id: 1,
    name: "Le Hoai Nam"
  }
}
