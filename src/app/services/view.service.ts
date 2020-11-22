import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Single Responsibility
export class ViewService {

  // if not detail view show list view instead
  $isDetailView: BehaviorSubject<any> = new BehaviorSubject<any>(true);

  constructor() { }

  // change the views with the method
  toggleView(isListView: boolean) {
    this.$isDetailView.next(isListView);
  }

}
