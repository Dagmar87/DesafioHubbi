import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { People } from "src/models/people";

const endpoint = 'https://swapi.dev/api/people/';

@Injectable({ providedIn: 'root' })

export class PeopleService {
    
    constructor(private http: HttpClient) {}

    getAllPeople(): Observable<People[]> {
        return this.http.get<People[]>(endpoint);
    }

    
}