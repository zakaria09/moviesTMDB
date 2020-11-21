import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  @Input() $movie: Observable<any>;

  constructor(
    private viewService: ViewService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  goBack() {
    this.viewService.backToListView();
  }
}
