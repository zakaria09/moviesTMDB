import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'list-favourites',
  templateUrl: './list-favourites.component.html',
  styleUrls: ['./list-favourites.component.scss']
})
export class ListFavouritesComponent implements OnInit {

  get movies() {
    return this.movieService.allFavouriteMovies;
  }

  constructor(
    private movieService: MovieService,
    private viewService: ViewService
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.viewService.toggleView(true);
  }
}
