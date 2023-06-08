import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { ChildComponent } from '../child/child.component';
import { GetDataService } from '../services/getData/get-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [GetDataService],
})
export class ParentComponent implements OnInit, AfterViewInit {
  hello: string = 'Hi guys';
  bye: string = 'Bye guys';
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  getEmit($event: string) {
    console.log($event);
  }
  parentCount() {
    return 0;
  }

  // setData(data: string) {
  //   this.getDataService.createData(data);
  // }
  setNewHello(e: Event) {
    this.hello = (e.target as HTMLInputElement).value;
  }
  constructor(private getDataService: GetDataService) {}
  ngOnInit(): void {
    // this.timer.setTimer(1);
    this.getDataService.myData.subscribe({
      next: (value) => console.log(value),
    });
    this.getDataService.createData('parent set first data');
  }
  ngAfterViewInit(): void {
    setTimeout(
      () => (this.parentCount = () => this.childComponent.parentCount),
      0
    );
    setTimeout(() => {
      this.getDataService.createData('parent set second data');
    }, 3000);
    // setTimeout(
    //   () => (this.parentCount = () => this.childComponent.parentCount)
    // );
  }
  countUp() {
    this.childComponent.countUp();
  }
  countDown() {
    this.childComponent.countDown();
  }
}
