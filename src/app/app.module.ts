import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FavouriteMovieComponent } from './movies/favourite-movie/favourite-movie.component';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { ListFavouritesComponent } from './movies/list-favourites/list-favourites.component';
import { MoviesComponent } from './movies/movies.component';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    FavouriteMovieComponent,
    MovieDetailsComponent,
    ListFavouritesComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    RatingModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
