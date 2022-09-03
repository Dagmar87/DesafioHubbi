import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from 'src/models/planet';

const endpoint = 'https://swapi.dev/api/planets/';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getAllPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(endpoint);
  }

  findByName(name: any): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${endpoint}?name=${name}`);
  }
}
