import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmComponent } from './components/film/film.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SpecieComponent } from './components/specie/specie.component';

const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', component: FilmComponent },
  { path: 'films/:episode_id', component: FilmDetailsComponent },
  { path: 'peoples', component: PeopleComponent },
  { path: 'planets', component: PlanetComponent },
  { path: 'species', component: SpecieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
