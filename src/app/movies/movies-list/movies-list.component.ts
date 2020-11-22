import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  // input and output properties
  // input for movies array
  // output for emitting selected movie
  @Input() movies: Array<any>;
  @Output() selectedMovie: EventEmitter<any> = new EventEmitter();

  onlyShowFavourites = false;

  constructor() { }

  ngOnInit() {}

  // toggle only show favourites
  showFavourites() {
    this.onlyShowFavourites = !this.onlyShowFavourites;
  }

  // emit selected movie properties to be
  // used in the movie-details component
  goToMoreDetail(movie) {
    this.selectedMovie.emit(movie);
  }
}
