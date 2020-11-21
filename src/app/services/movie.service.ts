import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { Movie } from '../Interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly moviesListURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=892ae99b0451fed76a0ece0a8d0c1414';

  // closed to outside modification
  private favouriteMovies = [];

  get allFavouriteMovies() {
    return this.favouriteMovies;
  }

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.moviesListURL)
      .pipe(
        pluck('results'),
        map((movies: Array<any>) => this.getMoviesNameAndPoster(movies))
      );
  }

  private getMoviesNameAndPoster(movies: Array<any>) {
    const moviesAndPosters = movies.map((movie: { id: number, title: string, poster_path: string }) => {
      const { id, title, poster_path } = movie;
      return {
        id,
        title,
        poster_path: `https://image.tmdb.org/t/p/w342${poster_path}`,
        isFavourite: false
      }
    })
    return moviesAndPosters;
  }

  addFavouriteMovie(movie: Movie) {
    if (movie.isFavourite) {
      this.favouriteMovies.unshift(movie);
    }
    this.favouriteMovies = this.favouriteMovies.filter(m => m.isFavourite === true);
  }
}
