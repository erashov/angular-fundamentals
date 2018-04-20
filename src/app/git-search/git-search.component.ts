import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults: GitSearch;
  searchQuery: string;
  title: string;
  constructor(private gitSearchService: GitSearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.gitSearchService.gitSearch('angular').then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert('Error: ' + error.statusText);
    });
    this.route.data.subscribe( (result) => {
      this.title = result.title;
    });
  }
  gitSearch = () => {
    this.gitSearchService.gitSearch(this.searchQuery).then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert('Error: ' + error.statusText);
    });
  }

}
