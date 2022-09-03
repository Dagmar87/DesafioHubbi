import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starship } from 'src/models/starship';

const endpoint = 'https://swapi.dev/api/starships/';

@Injectable({
  providedIn: 'root',
})

export class StarshipService {
  constructor(private http: HttpClient) {}

  getAllStarship(): Observable<Starship[]> {
    return this.http.get<Starship[]>(endpoint);
  }
}
