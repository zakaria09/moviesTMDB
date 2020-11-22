import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'list-favourites',
  templateUrl: './list-favourites.component.html',
  styleUrls: ['./list-favourites.component.scss']
})
export class ListFavouritesComponent implements OnInit {

  // get the favourite movies array from service
  // to display if user only wants to see their favs
  get movies() {
    return this.movieService.allFavouriteMovies;
  }

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }
}
