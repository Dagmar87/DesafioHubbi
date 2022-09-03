import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/models/planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
})
export class PlanetComponent implements OnInit {

  planets?: Planet[];
  currentPlanet: Planet = {};
  currentIndex = -1;
  name = '';

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.retrievePlanets();
  }

  retrievePlanets(): void {
    this.planetService.getAllPlanets()
      .subscribe({
        next: (data) => {
          this.planets = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePlanets();
    this.currentPlanet = {};
    this.currentIndex = -1;
  }

  setActivePlanet(planet: Planet, index: number): void {
    this.currentPlanet = planet;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentPlanet = {};
    this.currentIndex = -1;
    this.planetService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.planets = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
