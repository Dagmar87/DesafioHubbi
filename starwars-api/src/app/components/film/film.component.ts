import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/models/films';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films?: Film[];
  currentFilm: Film = {};
  currentIndex = -1;
  title = '';

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.retrieveFilms();
  }

  retrieveFilms(): void {
    this.filmService.getAllFilm()
      .subscribe({
        next: (data) => {
          this.films = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveFilms();
    this.currentFilm = {};
    this.currentIndex = -1;
  }

  setActiveFilm(film: Film, index: number): void {
    this.currentFilm = film;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentFilm = {};
    this.currentIndex = -1;
    this.filmService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.films = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
