import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  $movies: Observable<any>;

  constructor(
    private movieServies: MovieService
  ) { }

  ngOnInit() {
    this.$movies = this.movieServies.getMovies();
  }
}
