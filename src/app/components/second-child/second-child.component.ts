import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/getData/get-data.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss'],
})
export class SecondChildComponent implements OnInit {
  constructor(private getDataService: GetDataService) {}
  ngOnInit(): void {
    this.getDataService.myData.subscribe({
      next: (value) => console.log('SecondChildComponent : ' + value),
    });
  }
}
