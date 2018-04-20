import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private GitSearchService: GitSearchService) {

  }
  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  title = 'GitHub Browser';
}
