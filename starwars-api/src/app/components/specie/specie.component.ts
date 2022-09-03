import { Component, OnInit } from '@angular/core';
import { SpecieService } from 'src/app/services/specie.service';
import { Specie } from 'src/models/specie';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {

  species?: Specie[];
  currentSpecie: Specie = {};
  currentIndex = -1;
  name = '';

  constructor(private specieService: SpecieService) { }

  ngOnInit(): void {
    this.retrieveSpecies();
  }

  retrieveSpecies(): void {
    this.specieService.getAllSpecie()
      .subscribe({
        next: (data) => {
          this.species = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveSpecies();
    this.currentSpecie = {};
    this.currentIndex = -1;
  }

  setActiveSpecie(specie: Specie, index: number): void {
    this.currentSpecie = specie;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentSpecie = {};
    this.currentIndex = -1;
    this.specieService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.species = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
