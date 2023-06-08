import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: null,
})
export class GetDataService {
  myData = new Subject<string>();
  createData(data: string) {
    this.myData.next(data);
  }
  constructor() {}
}
