import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Specie } from "src/models/specie";

const endpoint = 'https://swapi.dev/api/species/';

@Injectable({ providedIn: 'root' })

export class SpecieService {    

    constructor(private http: HttpClient) {}

    getAllSpecie(): Observable<Specie[]> {
        return this.http.get<Specie[]>(endpoint);
    }
}