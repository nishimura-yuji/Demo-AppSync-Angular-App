import { Component, OnInit } from '@angular/core';
import { AppsyncService } from './../../service/appsync.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter;
  constructor(private appsyncService: AppsyncService) {}

  ngOnInit() {
    this.getVote();
    this.subscriptionVote();
  }
  getVote(): void {
    this.appsyncService.getAppsyncVote().subscribe(result => {
      this.counter = result;
    });
  }
  subscriptionVote(): void {
    this.appsyncService.onUpdateAppsyncVote().subscribe(result => {
      this.counter = result['value']['data']['onUpdateAppsyncVote']['vote'];
    });
  }
}
