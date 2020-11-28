/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieService } from './movie.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Movie', () => {

  let movieService: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MovieService,
        HttpClientModule
      ]
    });
    movieService = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to retrieve all movies', () => {
    // arrange
    const result = {
      "video": false,
      "id": 682377,
      "popularity": 1263.807,
      "vote_count": 17,
      "release_date": "2020-11-13",
      "adult": false,
      "backdrop_path": "/fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg",
      "title": "Chick Fight",
      "genre_ids": [
          28,
          35
      ],
      "vote_average": 6.6,
      "original_language": "en",
      "original_title": "Chick Fight",
      "poster_path": "/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg",
      "overview": "When Anna Wyncomb is introduced to an an underground"
    }
    // act
    movieService.getMovies()
      .subscribe((response: any) => {
        // assert
        expect(response).not.toBe(null);
        expect(response).toContain(result);
      })
      const req = httpMock.expectOne(movieService.moviesListURL)
      expect(req.request.method).toEqual('GET')
      req.flush(result)
      httpMock.verify()
  });

});
