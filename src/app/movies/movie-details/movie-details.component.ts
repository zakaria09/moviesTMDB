import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
// dumb stateless display component
export class MovieDetailsComponent implements OnInit, OnDestroy {

  get Math() {
    return Math;
  }

  // movies observable from parent movies component
  @Input() $movie: Observable<any>;

  constructor(
    private viewService: ViewService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  // takes you back to movies component for list view
  goBack() {
    this.viewService.toggleView(true);
  }
}
