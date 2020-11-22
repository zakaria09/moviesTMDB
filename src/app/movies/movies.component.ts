import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { ViewService } from '../services/view.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Array<any>;
  selectedMovie: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  isListView: boolean;

  constructor(
    private movieServies: MovieService,
    private viewService: ViewService
    ) { }

  ngOnInit() {
    this.movieServies.getMovies()
      .subscribe(movies => this.movies = movies);

    this.viewService.$toggleDetailView
      .subscribe(isListView => this.isListView = isListView)
  }

  handleSelectedMovie(movieSelectEvent) {
    this.selectedMovie.next([movieSelectEvent]);
    this.viewService.toggleView(false);
  }
}
