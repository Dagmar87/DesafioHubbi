import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Specie } from "src/models/specie";

@Injectable({ providedIn: 'root' })

export class SpecieService {
    private readonly endpoint = 'https://swapi.dev/api/species/3/';

    constructor(private http: HttpClient) {}

    getAllSpecie(): Observable<Specie> {
        return this.http.get<Specie>(this.endpoint);
    }
}