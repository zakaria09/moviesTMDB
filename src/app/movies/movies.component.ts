import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { ViewService } from '../services/view.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  movies: Array<any>;
  selectedMovie: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  isListView: boolean;

  constructor(
    private movieServies: MovieService,
    private viewService: ViewService
    ) { }

  // lifecycle methods
  ngOnInit() {
    this.getMovies();
    this.listenForViewChange();
  }

  ngOnDestroy() {
    this.getMovies().unsubscribe();
    this.listenForViewChange().unsubscribe();
  }

  // get movies with is favourite property initialised
  private getMovies() {
    return this.movieServies.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  // listen for change to details view and change
  // it with ngIf directive
  private listenForViewChange() {
    return this.viewService.$isDetailView
      .subscribe(isListView => this.isListView = isListView)
  }

  // if an event is emitted from movies-list component
  // call next on BehavorSubject with the movies properies
  // and change view
  handleSelectedMovie(movieSelectEvent) {
    this.selectedMovie.next([movieSelectEvent]);
    this.viewService.toggleView(false);
  }
}
