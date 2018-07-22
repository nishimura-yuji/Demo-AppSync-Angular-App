import { Observable } from 'rxjs';
import { AppsyncService } from './../../service/appsync.service';
import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  counter;
  constructor(private appsyncService: AppsyncService) {}
  ngOnInit() {

  }

  updateVote(): void {
    this.appsyncService.updateAppsyncVote().subscribe();
  }
}
