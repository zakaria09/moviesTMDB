import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input() movies: any;
  @Output() selectedMovie: EventEmitter<any> = new EventEmitter();

  onlyShowFavourites = false;

  constructor() { }

  ngOnInit() {}

  showFavourites() {
    this.onlyShowFavourites = !this.onlyShowFavourites;
    console.log(this.onlyShowFavourites);
  }

  goToMoreDetail(movie) {
    this.selectedMovie.emit(movie);
  }
}
