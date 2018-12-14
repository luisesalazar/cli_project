import { Component, OnInit } from '@angular/core';
import { PEOPLE, Person } from '../person/person';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  personName: string;
  people = PEOPLE;

  constructor() { }

  ngOnInit() {
  }

  addPerson(personName) {
    const person: Person = {name: personName};
    this.people.push(person);
  }
}
