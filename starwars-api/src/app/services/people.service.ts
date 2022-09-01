import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { People } from "src/models/people";

@Injectable({ providedIn: 'root' })

export class PeopleService {
    private readonly endpoint = 'https://swapi.dev/api/people/1/';

    constructor(private http: HttpClient) {}

    getAllPeople(): Observable<People> {
        return this.http.get<People>(this.endpoint);
    }
}