import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Interfaces/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'favourite-movie',
  templateUrl: './favourite-movie.component.html',
  styleUrls: ['./favourite-movie.component.scss']
})

export class FavouriteMovieComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  favourited(movie: Movie) {
    movie.isFavourite = !movie.isFavourite;
    this.movieService.addFavouriteMovie(movie);
  }
}
