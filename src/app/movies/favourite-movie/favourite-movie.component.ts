import { Component, Input, OnInit } from '@angular/core';

interface Movie {
  id: number,
  title: string,
  poster_path: string,
  isFavourite: boolean,
  // add more optional
}

@Component({
  selector: 'favourite-movie',
  templateUrl: './favourite-movie.component.html',
  styleUrls: ['./favourite-movie.component.scss']
})

export class FavouriteMovieComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  favourited(movie: Movie) {
    movie.isFavourite = !movie.isFavourite;
    console.log(movie);
  }
}
