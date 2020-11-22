import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Interfaces/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'favourite-movie',
  templateUrl: './favourite-movie.component.html',
  styleUrls: ['./favourite-movie.component.scss']
})
// dumb stateless view component for displaying
// all users favourite movies
export class FavouriteMovieComponent implements OnInit {

  // movie is passed as prop
  // incase the user wants to
  // add said movies to favs
  @Input() movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  // handles the favourited movie
  // by toggling the isFavourite property
  // and then passing to service to add
  // to favourites array
  favourited(movie: Movie) {
    movie.isFavourite = !movie.isFavourite;
    this.movieService.addFavouriteMovie(movie);
  }
}
