import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/models/films';

const endpoint = 'https://swapi.dev/api/films/';

@Injectable({ providedIn: 'root' })
export class FilmService {  

  constructor(private http: HttpClient) {}

  getAllFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(endpoint);
  }

  findByTitle(title: any): Observable<Film[]> {
    return this.http.get<Film[]>(`${endpoint}?title=${title}`);
  }
}
