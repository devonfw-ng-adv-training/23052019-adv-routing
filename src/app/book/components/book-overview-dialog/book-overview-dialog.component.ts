import { Component, OnInit } from '@angular/core';
import { BookSearchCriteria } from '../../model/book-search-criteria';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-overview-dialog',
  templateUrl: './book-overview-dialog.component.html',
  styleUrls: ['./book-overview-dialog.component.scss']
})
export class BookOverviewDialogComponent implements OnInit {
  currentSearchCriteria: BookSearchCriteria = {
    author: '',
    title: ''
  };

  constructor(route: ActivatedRoute) {
    route.params.subscribe(
      searchCriteria => this.currentSearchCriteria = searchCriteria as BookSearchCriteria);
  }

  ngOnInit() {
  }

  doSearch(searchCriteria: BookSearchCriteria) {
    console.log(searchCriteria);
  }
}
