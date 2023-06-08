import { Injectable } from '@angular/core';

@Injectable({ providedIn: null })
export class TimerService {
  count: number;
  setTimer(num: number) {
    this.count = num;
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
  constructor() {
    this.count = 0;
  }
}
