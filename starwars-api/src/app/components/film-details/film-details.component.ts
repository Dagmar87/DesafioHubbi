import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/models/films';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentFilm: Film = {
    //characters: ,
    created: '',
    director: '',
    edited: '',
    episode_id: 0,
    opening_crawl: '',
    //planets: ,
    producer: '',
    release_date: '',
    //speacies: ,
    //starships: ,
    title: '',
    url: '',
    //vehicles: 
  }

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {      
      this.getFilm(this.route.snapshot.params["episode_id"]);
    }
  }

  getFilm(episode_id: number): void {
    this.filmService.getFilm(episode_id)
      .subscribe({
        next: (data) => {
          this.currentFilm = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
