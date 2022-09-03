import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { FilmComponent } from './components/film/film.component';
import { PeopleComponent } from './components/people/people.component';
import { SpecieComponent } from './components/specie/specie.component';
import { FormsModule } from '@angular/forms';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    FilmComponent,
    PeopleComponent,
    SpecieComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
