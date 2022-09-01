import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Film } from "src/models/films";

@Injectable({ providedIn: 'root' })

export class FilmService {
    private readonly endpoint = 'https://swapi.dev/api/films/1/';

    constructor(private http: HttpClient) {}

    getAllFilm(): Observable<Film> {
        return this.http.get<Film>(this.endpoint);
    }
}