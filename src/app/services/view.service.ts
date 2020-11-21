import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  $toggleDetailView: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor() { }

  changeToDetailsView() {
    this.$toggleDetailView.next(true);
  }

  backToListView() {
    this.$toggleDetailView.next(false);
  }

}
