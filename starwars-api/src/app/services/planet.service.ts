import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Planet } from "src/models/planet";

@Injectable({ providedIn: 'root' })

export class PlanetService {
    private readonly endpoint = 'https://swapi.dev/api/planets/1/';

    constructor(private http: HttpClient) {}

    getAllPlanets(): Observable<Planet> {
        return this.http.get<Planet>(this.endpoint);
    }
}