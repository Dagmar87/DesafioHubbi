import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { People } from 'src/models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peoples?: People[];
  currentPeople: People = {};
  currentIndex = -1;
  name = '';

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.retrievePeoples();
  }

  retrievePeoples(): void {
    this.peopleService.getAllPeople()
      .subscribe({
        next: (data) => {
          this.peoples = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePeoples();
    this.currentPeople = {};
    this.currentIndex = -1;
  }

  setActivePeople(people: People, index: number): void {
    this.currentPeople = people;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentPeople = {};
    this.currentIndex = -1;
    this.peopleService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.peoples = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
