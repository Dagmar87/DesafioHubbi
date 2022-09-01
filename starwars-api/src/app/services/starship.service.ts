import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Starship } from "src/models/starship";

@Injectable({ providedIn: 'root' })

export class StarshipService {
    private readonly endpoint = 'https://swapi.dev/api/starships/9/';

    constructor(private http: HttpClient) {}

    getAllStarship(): Observable<Starship> {
        return this.http.get<Starship>(this.endpoint);
    }
}