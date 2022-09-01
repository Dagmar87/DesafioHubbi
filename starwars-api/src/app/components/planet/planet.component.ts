import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/models/planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  public planets!: Planet;

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.getAllPlanets()
      .subscribe((data: Planet) => {
        this.planets = data;
        console.log(this.planets);
      });
  }

}
