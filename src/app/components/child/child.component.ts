import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TimerService } from '../services/timer.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [TimerService],
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy {
  @Input() hi: string;
  @Input() bye: string;
  @Output() greeting = new EventEmitter<string>();
  date: Date = new Date();
  jsonData = {
    name: '하영',
    age: 26,
  };
  counter = new Subject<string>();
  getCount: string = '';
  parentCount: number = 2;
  handleEvent(e: Event) {
    this.counter.next((e.target as HTMLInputElement).value);
  }
  countUp() {
    this.parentCount++;
  }
  countDown() {
    this.parentCount--;
  }
  constructor(private timer: TimerService) {
    this.hi = '';
    this.bye = '';
    this.counter.subscribe({
      next: (v: string) => {
        this.getCount = v;
      },
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    // this.timer.setTimer(1);
    // setInterval(() => console.log(this.getCount), 1000);
  }
  ngOnDestroy(): void {
    this.timer.setTimer(0);
  }
}
