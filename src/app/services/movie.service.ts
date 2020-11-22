import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { Movie } from '../Interfaces/movie';

@Injectable({
  providedIn: 'root'
})
// Single Responsibility
export class MovieService {

  // read only to prevent re-assignment
  readonly moviesListURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=892ae99b0451fed76a0ece0a8d0c1414';

  // closed to outside modification
  private favouriteMovies = [];

  // getter to encapsulate and
  // retreive without outside modification
  get allFavouriteMovies() {
    return this.favouriteMovies;
  }

  constructor(private http: HttpClient) { }

  // rxjs: pluck to get all movies
  // and then map to shape the data
  getMovies() {
    return this.http.get(this.moviesListURL)
      .pipe(
        pluck('results'),
        map((movies: Array<any>) => this.getMoviesInfo(movies)),
      );
  }

  // method use:
  // used as a callback in rxjs map operator
  // kept private to signal internal use within class
  // method purpose:
  // copy the response properties and add isFavourite
  private getMoviesInfo(movies: Array<any>): Array<any> {
    const moviesAndPosters = movies.map((movie: Movie) => {
      return {
        ...movie,
        isFavourite: false
      }
    });
    return moviesAndPosters;
  }

  // used by components to add a movie to the
  // favourite movies array with the most recent fist
  // hence the unshift method

  // finall filter any movies from the array that have
  // been unfavourited
  addFavouriteMovie(movie: Movie) {
    if (movie.isFavourite) {
      this.favouriteMovies.unshift(movie);
    }
    this.favouriteMovies = this.favouriteMovies.filter(m => m.isFavourite === true);
  }
}
