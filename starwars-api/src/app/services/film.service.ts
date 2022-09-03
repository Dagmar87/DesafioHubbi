import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/models/films';

const endpoint = 'https://swapi.dev/api/films';
@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getAllFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(endpoint);
  }

  getFilm(episode_id: any): Observable<Film> {
    return this.http.get<Film>(`${endpoint}/:id/?episode_id=${episode_id}`);
  }

  findByTitle(title: any): Observable<Film[]> {
    return this.http.get<Film[]>(`${endpoint}/:id/?title=${title}`);
  }
}
