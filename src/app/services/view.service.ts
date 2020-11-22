import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  $toggleDetailView: BehaviorSubject<any> = new BehaviorSubject<any>(true);

  constructor() { }

  toggleView(isListView: boolean) {
    this.$toggleDetailView.next(isListView);
  }

}
