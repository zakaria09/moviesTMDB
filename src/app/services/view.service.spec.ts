/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewService } from './view.service';

describe('Service: View', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewService]
    });
  });

  it('should ...', inject([ViewService], (service: ViewService) => {
    expect(service).toBeTruthy();
  }));
});
